import { createBranch, deleteBranch, getBranches, updateBranch } from './model.js'
export default {
    Query: {
        getBranches: async () => await getBranches(),
    },
    Mutation: {
        createBranch: async (_, args, header) => createBranch(args, header),
        updateBranch: async (_, args, header) => updateBranch(args, header),
        deleteBranch: async (_, args, header) => deleteBranch(args, header),
    }
}