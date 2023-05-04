export default `#graphql
    type Transport{
        id:String,
        title:String,
        branch_id:String,
        model:String,
        color:String,
        img:String,
        createdAt:String,
        updatedAt:String,
    }
    type Query{
        getTransport:[ Transport! ]
    }
    type Message{
        message:String!,
        data: [ Transport! ]
    }
    type Mutation{
        getOneTransport(id:String):Message!,
        createTransport(title:String!,
                    branch_id:String!,
                    model:String!,
                    color:String!,
                    img:String!
                        ):Message!,

        deleteTransport(id:String!):Message!,

        updateTransport(
            id:String!,
            title:String!,
            branch_id:String!,
            model:String!,
            color:String!,
            img:String!
                        ):Message!
    }
`