export default `#graphql
    type Staff{
        id:String,
        username:String,
        password:String,
        birth_date:String,
        gender:String,
        branch_id:String,
        createdAt:String,
        updatedAt:String,
    }
    
    type Message {
        message: String!,
        token:String
    }
    type Query{
        getStaffs:[ Staff! ]
    }

   type Mutation{
        signup(
            username:String!,
            password:String!,
            birth_date:String!,
            gender:String!,
            branch_id:String!
                    ):Message,

        Login(username: String!, password: String!): Message,

        deleteStaff(token:String): Message!

        updateStaff(
            username:String!,
            password:String!,
            gender:String!,
            branch_id:String!,
                ):Message
    }
    
`