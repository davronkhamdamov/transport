import { getPermisson, updatePermission } from './model.js'
export default {
    Query: {
        getTransport_per: async (_, args, { id }) => await getPermisson(id)
    },
    Mutation: {
        updateTransport_per: async (_, args, { id }) => await updatePermission(args, id)
    }
}