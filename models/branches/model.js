import branch from './branch.js'
import Branch_modul from '../brench_per/branch_per.js'
branch.sync({ force: false })

async function getPermissionFnc(id) {
    return await Branch_modul.findOne({ where: { staff_id: id } })
}

const getBranches = async (id) => {
    try {
        const per = await getPermissionFnc(id)
        if (!per.read) {
            throw "You can not get branches"
        }
        return await branch.findAll()
    } catch (error) {
        throw new Error(error)
    }
}
const createBranch = async (body, id) => {
    try {
        const per = await getPermissionFnc(id)
        if (!per.create) {
            throw "You can not create branches"
        }
        await branch.create(body)
        return { message: "Branch Successfully created" }
    } catch (error) {
        if (error.message) {
            return { message: error.message }
        }
        throw new Error(error)
    }
}
const updateBranch = async (params, id) => {
    try {
        const per = await getPermissionFnc(id)
        if (!per.updatePer) {
            throw "You can not update branches"
        }
        const foundBranch = await branch.findOne({ where: { id: params.id } })
        if (!foundBranch) return { message: "Branch not found" }
        await foundBranch.update({ title: params.title, adress: params.adress })
        return { message: "Branch successfully updated" }
    }
    catch (error) {
        if (error.message) {
            return { message: error.message }
        }
        throw new Error(error)
    }
}
const deleteBranch = async ({ id }, staff_id) => {
    try {
        const per = await getPermissionFnc(staff_id)
        if (!per.delete) {
            throw "You can not delete branch"
        }
        const foundBranch = await branch.findOne({ where: { id } })
        if (!foundBranch) return { message: "Branch not found" }
        await foundBranch.destroy()
        return { message: "Branch successfully deleted" }
    } catch (error) {
        throw new Error(error)
    }
}
export { getBranches, createBranch, updateBranch, deleteBranch }