import Branch_modul from './branch_per.js'
import Staffs from '../staffs/staffs.js';

Branch_modul.sync({ force: false })

async function getPermissionFnc(id) {
    return await Branch_modul.findOne({ where: { staff_id: id } })
}

const getPermisson = async (id) => {
    try {
        const per = await getPermissionFnc(id)
        if (!per.readPerModule) {
            throw "You can't get branch permission"
        }
        return await Branch_modul.findAll()
    } catch (error) {
        throw new Error(error)
    }
}

const updatePermission = async (
    {
        staff_id,
        read,
        updatePer,
        delete: delete1,
        create,
        updatePerModule,
        readPerModule
    }, id) => {

    try {
        const per = await getPermissionFnc(id)
        if (!per.updatePerModule) {
            throw "You can't update branch permission"
        }
        const branch = await Staffs.findOne(
            { where: { id: staff_id } })
        if (!branch) return { message: "Staff not found" }
        await Branch_modul.update({ read, updatePer, delete: delete1, create, readPerModule, updatePerModule }, { where: { staff_id } })
        return { message: 'Successfully updated' }
    } catch (error) {
        throw new Error(error)
    }
}

export { getPermisson, updatePermission }
