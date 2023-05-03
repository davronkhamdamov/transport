import { getPermisson, updatePermission } from './model.js'
export default {
    Query: {
        getTransport_per: async () => await getPermisson()
    },
    Mutation: {
        updateTransport_per: async (_, args) => await updatePermission(args)
    }
}