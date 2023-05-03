import Transport_modul from './transport.js'
import Staffs from '../staffs/staffs.js';

Transport_modul.sync({ force: true })

const getPermisson = async () => {
    return await Transport_modul.findAll()
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
