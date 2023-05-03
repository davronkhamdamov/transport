import { getPermisson, updatePermission } from './model.js'
export default {
    Query: {
        getPermissons: async (_, args, header) => await getPermisson(header)
    },
    Mutation: {
        updatePermission: async (_, args, { id }) => await updatePermission(args, id)
    }
}