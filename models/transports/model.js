import Transports from './transports.js';
import Transport_module from '../transport_per/transport.js';
Transports.sync({ force: false })


async function getPermissionFnc(id) {
    return await Transport_module.findOne({ where: { staff_id: id } })
}

const getTransports = async () => await Transports.findAll()

const getOneTransport = async ({ id }, staff_id) => {
    const per = await getPermissionFnc(staff_id)
    if (!per.read) {
        throw "You can't get Transport"
    }
    const transport = await Transports.findOne({ where: { id } })
    if (!transport) return { message: "Transport not found" }
    return { message: "ok", data: transport }
}

const createTransport = async (params, id) => {
    try {
        const per = await getPermissionFnc(id)
        if (!per.create) {
            throw "You can't create transport"
        }
        await Transports.create(params)
        return { message: "Transport successfully added" }
    } catch (error) {
        if (error.message) {
            return { message: error.message }
        }
        throw new Error(error)
    }
}
const deleteTransport = async ({ id }, staff_id) => {
    try {
        const per = await getPermissionFnc(staff_id)
        if (!per.delete) {
            throw "You can't delete transport"
        }
        const transport = await Transports.findOne({ where: { id } })
        if (!transport) return { message: "Transport not found" }
        await transport.destroy()
        return {
            message: "Transport Successfully deleted",
        }
    } catch (error) {
        if (error.message) {
            return { message: error.message }
        }
        throw new Error(error)
    }
}
const updateTransport = async (params, id) => {
    try {
        const per = await getPermissionFnc(staff_id)
        if (!per.updatePer) {
            throw "You can't update transport"
        }
        const transport = await Transports.findOne({ where: { id: params.id } })
        if (!transport) return { message: "Transport not found" }
        console.log(params);
        await transport.update({
            title: params.title,
            branch_id: params.branch_id,
            model: params.model,
            color: params.model,
            img: params.img
        })
        return {
            message: "Transport Successfully updated",
        }
    } catch (error) {
        if (error.message) {
            return { message: error.message }
        }
        throw new Error(error)
    }
}
export {
    getOneTransport,
    getTransports,
    createTransport,
    deleteTransport,
    updateTransport
}