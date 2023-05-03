import { sigup, deleteStaff, updateStaff, Login, getStaffs } from './model.js'

export default {
    Query: {
        getStaffs: async () => getStaffs()
    },
    Mutation: {
        signup: async (_, args, { agent }) => sigup(args, agent),
        deleteStaff: async (_, args, header) => deleteStaff(header),
        updateStaff: async (_, args, header) => updateStaff(args, header),
        Login: async (_, args, { agent }) => Login(args, agent)
    }
}