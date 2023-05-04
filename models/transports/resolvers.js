import {
    createTransport,
    deleteTransport,
    getOneTransport,
    getTransports,
    updateTransport
} from './model.js'

export default {
    Query: {
        getTransport: async (_, args, { id }) => getTransports(id)
    },
    Mutation: {
        getOneTransport: async (_, args, { id }) => getOneTransport(args, id),
        createTransport: async (_, args, { id }) => createTransport(args, id),
        updateTransport: async (_, args, { id }) => updateTransport(args, id),
        deleteTransport: async (_, args, { id }) => deleteTransport(args, id)
    }
}