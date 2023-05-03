import permisson_modul from './permission_per.js'
import Staffs from '../staffs/staffs.js';

permisson_modul.sync({ force: false })

const getPermisson = async () => {
    return await permisson_modul.findAll()
}

const updatePermission = async (
    { staff_id, read, updatePer, delete: delete1, create }) => {
    const permission = await Staffs.findOne(
        { where: { id: staff_id } })
    if (!permission) return { message: "Staff not found" }
    await permission.update({ read, updatePer, delete1, create })
    return { message: 'Successfully updated' }
}

export { getPermisson, updatePermission }
