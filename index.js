import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import module from './models/index.js'
import dotenv from 'dotenv'
dotenv.config()
import context from './utils/middleware.js'

const server = new ApolloServer({
  schema: module,
  csrfPrevention: false,
  introspection: true,
});

const { url } = await startStandaloneServer(server, {
  context,
  listen: { port: 4000 }
});

console.log(`🚀 Server listening at: ${url}`);