export default `#graphql
    type Transport_module{
        id: String
        staff_id: String,
        read: Boolean,
        updatePer: Boolean,
        delete: Boolean,
        create: Boolean,
        createdAt:String,
        updatedAt:String,
    }

    type Message {
        message: String!,
    }

    type Query {
       getPermissons: [ Permisson_module ]
    }
    
    type Mutation{
        updateTransport(staff_id:String!): Message
    }
`