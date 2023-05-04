import Transport_modul from './transport.js'
import Staffs from '../staffs/staffs.js';

Transport_modul.sync({ force: false })

async function getPermissionFnc(id) {
    return await Transport_modul.findOne({ where: { staff_id: id } })
}

const getPermisson = async (id) => {
    try {
        const per = await getPermissionFnc(id)
        if (!per.readPerModule) {
            throw "You can't get transport permission"
        }
        return await Transport_modul.findAll()
    } catch (error) {
        throw new Error(error)
    }
}

const updatePermission = async (
    { staff_id, read, updatePer, delete: delete1, create }, id) => {
    try {
        const per = await getPermissionFnc(id)
        if (!per.updatePerModule) {
            throw "You can't update transport permission"
        }
        const tranport = await Staffs.findOne(
            { where: { id: staff_id } })
        if (!tranport) return { message: "Staff not found" }
        await Transport_modul.update({ read, updatePer, delete: delete1, create }, { where: { staff_id: tranport.id } })
        return { message: 'Successfully updated' }
    } catch (error) {
        throw new Error(error)
    }
}

export { getPermisson, updatePermission }
