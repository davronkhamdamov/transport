import {
    createTransport,
    deleteTransport,
    getOneTransport,
    getTransports,
    updateTransport
} from './model.js'

export default {
    Query: {
        transport: async () => getTransports()
    },
    Mutation: {
        getOneTransport: async (_, args) => getOneTransport(args),
        createTransport: async (_, args) => createTransport(args),
        updateTransport: async (_, args) => updateTransport(args),
        deleteTransport: async (_, args) => deleteTransport(args)
    }
}