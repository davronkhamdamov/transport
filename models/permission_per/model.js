import permisson_modul from './permission_per.js'
import Staffs from '../staffs/staffs.js';

permisson_modul.sync({ force: false })

const getPermisson = async () => {
    const data = await permisson_modul.findAll();
    return data
}

const updatePermission = async (
    { staff_id, read, updatePer, delete: delete1, create }) => {
    const permission = await Staffs.findOne(
        { where: { id: staff_id } })
    if (!permission) return { message: "Staff not found" }
    await permisson_modul.update({ read, updatePer, delete: delete1, create }, { where: { staff_id: permission.id } })
    return { message: 'Successfully updated' }
}

export { getPermisson, updatePermission }
