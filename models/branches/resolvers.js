import { createBranch, deleteBranch, getBranches, updateBranch } from './model.js'
export default {
    Query: {
        getBranches: async (_, args, { id }) => await getBranches(id),
    },
    Mutation: {
        createBranch: async (_, args, { id }) => createBranch(args, id),
        updateBranch: async (_, args, { id }) => updateBranch(args, id),
        deleteBranch: async (_, args, { id }) => deleteBranch(args, id),
    }
}