import { getPermisson, updatePermission } from './model.js'
export default {
    Query: {
        getBranch_per: async () => await getPermisson()
    },
    Mutation: {
        updateBranch_per: async (_, args) => await updatePermission(args)
    }
}