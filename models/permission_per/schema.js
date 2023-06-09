export default `#graphql
    type Permisson_module{
        id: String
        staff_id: String,
        read: Boolean,
        updatePer: Boolean
        createdAt:String,
        updatedAt:String
    }

    type Message {
        message: String!,
    }

    type Query {
        getPermissons: [ Permisson_module! ]
    }
    
    type Mutation{
        updatePermission(
            staff_id:String!,
            read: Boolean!,
            updatePer: Boolean!
            ): Message
    }
`