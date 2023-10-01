import 'reflect-metadata'

import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'
import { buildSchema } from 'type-graphql'

import UserResolver from '@/main/graphql/resolvers/'

const apolloServer = async (app: Express): Promise<void> => {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    validate: false,
  })

  const server = new ApolloServer({
    schema,
  })
  await server.start();
  server.applyMiddleware({ app })
}

export default apolloServer