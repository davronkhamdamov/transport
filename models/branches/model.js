import branch from './branch.js'

branch.sync({ force: false })


const getBranches = async () => {
    const branches = await branch.findAll()
    return branches
}
const createBranch = async (body) => {
    try {
        await branch.create(body)
        return { message: "Branch Successfully created" }
    } catch (error) {
        return { message: error.message }
    }
}
const updateBranch = async (params) => {
    try {
        const foundBranch = await branch.findOne({ where: { id: params.id } })
        if (!foundBranch) return { message: "Branch not found" }
        await foundBranch.update({ title: params.title, adress: params.adress })
        return { message: "Branch successfully updated" }
    }
    catch (error) {
        return { message: error.message }
    }
}
const deleteBranch = async ({ id }) => {
    const foundBranch = await branch.findOne({ where: { id } })
    if (!foundBranch) return { message: "Branch not found" }
    await foundBranch.destroy()
    return { message: "Branch successfully deleted" }
}
export { getBranches, createBranch, updateBranch, deleteBranch }