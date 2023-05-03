import { getPermisson, updatePermission } from './model.js'
export default {
    Query: {
        getBranch_per: async (_, args, { id }) => await getPermisson(id)
    },
    Mutation: {
        updateBranch_per: async (_, args, { id }) => await updatePermission(args, id)
    }
}