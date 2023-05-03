import Branch_modul from './branch_per.js'
import Staffs from '../staffs/staffs.js';

Branch_modul.sync({ force: false })

const getPermisson = async () => {
    return await Branch_modul.findAll()
}

const updatePermission = async (
    { staff_id, read, updatePer, delete: delete1, create }) => {
    const branch = await Staffs.findOne(
        { where: { id: staff_id } })
    if (!branch) return { message: "Staff not found" }
    await Branch_modul.update({ read, updatePer, delete: delete1, create }, { where: { staff_id: branch.id } })
    return { message: 'Successfully updated' }
}

export { getPermisson, updatePermission }
