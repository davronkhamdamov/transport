import Transport_modul from './transport.js'
import Staffs from '../staffs/staffs.js';

Transport_modul.sync({ force: false })

const getPermisson = async (params) => {
    const data = await Transport_modul.findAll()
    console.log(params);
    return await Transport_modul.findOne({ where: {} })
}

const updatePermission = async (
    { staff_id, read, updatePer, delete: delete1, create }) => {
    const tranport = await Staffs.findOne(
        { where: { id: staff_id } })
    if (!tranport) return { message: "Staff not found" }
    await Transport_modul.update({ read, updatePer, delete: delete1, create }, { where: { staff_id: tranport.id } })
    return { message: 'Successfully updated' }
}

export { getPermisson, updatePermission }
