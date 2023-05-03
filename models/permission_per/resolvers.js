import { getPermisson, updatePermission } from './model.js'
export default {
    Query: {
        getPermissons: async () => await getPermisson()
    },
    Mutation: {
        updatePermission: async (_, args) => await updatePermission(args)
    }
}