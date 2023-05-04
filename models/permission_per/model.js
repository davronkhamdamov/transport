import permisson_modul from './permission_per.js'
import Staffs from '../staffs/staffs.js';

permisson_modul.sync({ force: false })

async function getPermissionFnc(id) {
    return await permisson_modul.findOne({ where: { staff_id: id } })
}

const getPermisson = async (header) => {
    const per = await getPermissionFnc(header.id)
    if (per.read) return await permisson_modul.findAll();
    else return [per]
}

const updatePermission = async (
    { staff_id, read, updatePer, delete: delete1, create }, id) => {
    try {
        const per = await getPermissionFnc(id)
        if (!per.updatePer) throw "You can't update branch permission"
        const permission = await Staffs.findOne(
            { where: { id: staff_id } })
        if (!permission) return { message: "Staff not found" }
        await permisson_modul.update({ read, updatePer, delete: delete1, create }, { where: { staff_id: permission.id } })
        return { message: 'Successfully updated' }
    } catch (error) {
        if (error.message) {
            return { message: error.message }
        }
        throw new Error(error)
    }
}

export { getPermisson, updatePermission }
