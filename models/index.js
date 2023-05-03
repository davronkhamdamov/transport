import { makeExecutableSchema } from '@graphql-tools/schema'

import TypeStaffs from './staffs/index.js'
import TypeTransportModule from './transports/index.js'
import TypeBranchModule from './branches/index.js'
import TypePermisson_module from './permission_per/index.js'
import TypeBranchPerModule from './brench_per/index.js'
import TypeTransportPerModule from './transport_per/index.js'

export default makeExecutableSchema({
    typeDefs: [
        TypeStaffs.typeDefs,
        TypePermisson_module.typeDefs,
        TypeTransportModule.typeDefs,
        TypeBranchModule.typeDefs,
        TypeBranchPerModule.typeDefs,
        TypeTransportModule.typeDefs,
    ],
    resolvers: [
        TypeStaffs.resolvers,
        TypePermisson_module.resolvers,
        TypeTransportModule.resolvers,
        TypeBranchModule.resolvers,
        TypeBranchPerModule.resolvers,
        TypeTransportPerModule.resolvers,
    ]
})