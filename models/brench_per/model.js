import Branch_modul from './branch_per.js'
import Staffs from '../staffs/staffs.js';

Branch_modul.sync({ force: true })

const getPermisson = async () => {
    return await Branch_modul.findAll()
}

const updatePermission = async (
    { staff_id, read, updatePer, delete: delete1, create }) => {
    const branch = await Staffs.findOne(
        { where: { id: staff_id } })
    if (!branch) return { message: "Staff not found" }
    await branch.update({ read, updatePer, delete: delete1, create })
    return { message: 'Successfully updated' }
}

export { getPermisson, updatePermission }
