export default `#graphql
    type Branch{
        id:String,
        title:String,
        adress:String,
        createdAt:String,
        updatedAt:String,
    }
    type Message{
        message:String!
    }
    type Query{
        getBranches: [ Branch! ]
    }
    type Mutation{
        createBranch(
            title:String!,
            adress:String!
                    ):Message!

        updateBranch(
            id:String!,
            title:String!,
            adress:String!
                     ):Message!  

    deleteBranch(id:String!):Message!
    }
`