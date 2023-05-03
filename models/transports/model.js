import Transports from './transports.js';

Transports.sync({ force: true })


async function getPermissionFnc(id) {
    return await Branch_modul.findOne({ where: { staff_id: id } })
}

const getTransports = async () => await Transports.findAll()

const getOneTransport = async ({ id }) => {
    const transport = await Transports.findOne({ where: { id } })
    if (!transport) return { message: "Transport not found" }
    return { message: "ok", data: transport }
}

const createTransport = async (params) => {
    try {
        await Transports.create(params)
        return { message: "Transport successfully added" }
    } catch (error) {
        return { message: error.message }
    }
}
const deleteTransport = async ({ id }) => {
    const transport = await Transports.findOne({ where: { id } })
    if (!transport) return { message: "Transport not found" }
    await transport.destroy()
    return {
        message: "Transport Successfully deleted",
    }
}
const updateTransport = async (params) => {
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
}
export {
    getOneTransport,
    getTransports,
    createTransport,
    deleteTransport,
    updateTransport
}