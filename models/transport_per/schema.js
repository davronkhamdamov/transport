export default `#graphql
    type Transport_per_module{
        id: String
        staff_id: String,
        read: Boolean,
        updatePer: Boolean,
        delete: Boolean,
        create: Boolean,
        updatePerModule:Boolean,
        readPerModule:Boolean,
        createdAt:String,
        updatedAt:String,
    }

    type Message {
        message: String!,
    }

    type Query {
       getTransport_per: [ Transport_per_module ]
    }
    
    type Mutation{
        updateTransport_per(
            staff_id:String!,
            read: Boolean!,
            updatePer: Boolean!,
            delete: Boolean!,
            create: Boolean!
            updatePerModule:Boolean!,
            readPerModule:Boolean!
            ): Message
    }
`