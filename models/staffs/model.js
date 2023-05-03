import staff from "./staffs.js"
import { signjwt, pkg1 } from '../../utils/jwt.js'
import pkg from 'bcryptjs';
const { hash, compare } = pkg;
import Permission_per from '../permission_per/permission_per.js';
import Branch_per from '../brench_per/branch_per.js';
import Transport_per from '../transport_per/transport.js';

staff.sync({ force: false })

const Login = async ({ username, password }, agent) => {
    const foundStaff = await staff.findOne({ where: { username } })
    if (!foundStaff) return { message: "Staff not found" }

    const checkPassword = await compare(password, foundStaff.password)
    if (!checkPassword) return { message: 'Password wrong!' }

    return {
        message: "Successfully login",
        token: signjwt({ id: foundStaff.id, agent })
    }
}

const sigup = async (
    {
        username,
        password,
        birth_date,
        gender,
        branchId
    }, agent) => {
    try {
        const Checkstaff = await staff.findOne({ where: { username } })
        if (Checkstaff) return { message: "User already registered" }

        if (!password.trim().match(/^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)[A-Za-z0-9!#+%]+$/g)) return { message: "Password not valid!" }

        const hashedPassword = await hash(password, 12)

        const newStaff = await staff.create({
            username: username.trim(),
            password: hashedPassword,
            birth_date,
            gender,
            branchId
        }, { returning: true })

        const token = signjwt({ id: newStaff.id, agent })

        await Permission_per.create({ staff_id: newStaff.id })
        await Branch_per.create({ staff_id: newStaff.id })
        await Transport_per.create({ staff_id: newStaff.id })

        return {
            message: "Successfully created",
            token: token
        }
    } catch (error) {
        return { message: error.message }
    }
}

const deleteStaff = async (header) => {
    try {
        const FoundStaff = await staff.findOne({ where: { id: header.id } })
        if (!FoundStaff) throw new Error("Invalid token")
        await Permission_per.destroy({ where: { staff_id: FoundStaff.id } })
        await Branch_per.destroy({ where: { staff_id: FoundStaff.id } })
        await Transport_per.destroy({ where: { staff_id: FoundStaff.id } })

        await FoundStaff.destroy()
        pkg1.decode(header.token)
        return { message: "Successfully deleted" }
    } catch (error) {
        return { message: error.message }
    }
}

const updateStaff = async ({ username, password, gender, branch_id }, header) => {
    try {
        const FoundStaff = await staff.findOne({ where: { id: header.id } })
        await FoundStaff.update({ username, password, gender, branch_id })
        return { message: "Successfully updated" }
    } catch (error) {
        return { message: error.message }
    }
}
const getStaffs = async () => {
    return await staff.findAll()
}
export { Login, sigup, deleteStaff, updateStaff, getStaffs }