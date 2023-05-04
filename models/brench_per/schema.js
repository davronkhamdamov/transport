export default `#graphql
    type Branch_module{
        id: String
        staff_id: String,
        read: Boolean,
        updatePer: Boolean,
        delete: Boolean,
        create: Boolean,
        createdAt:String,
        updatedAt:String,
        updatePerModule:Boolean,
        readPerModule:Boolean
    }

    type Message {
        message: String!,
    }

    type Query {
        getBranch_per: [ Branch_module! ]
    }
    
    type Mutation{
        updateBranch_per(
            staff_id:String!,
            read: Boolean!,
            updatePer: Boolean!,
            delete: Boolean!,
            create: Boolean!
            updatePerModule:Boolean!,
            readPerModule:Boolean!): Message
    }
`