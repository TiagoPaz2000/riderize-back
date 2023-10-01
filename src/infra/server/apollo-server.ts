import 'reflect-metadata'

import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'
import { buildSchema } from 'type-graphql'

import UserResolver from '@/main/graphql/resolvers/test-resolver'
import TestResolver from '@/main/graphql/resolvers/user-resolver'
import RideResolver from '@/main/graphql/resolvers/ride-resolver'

const apolloServer = async (app: Express): Promise<void> => {
  const schema = await buildSchema({
    resolvers: [UserResolver, TestResolver, RideResolver],
    validate: false,
  })

  const server = new ApolloServer({
    schema,
  })
  await server.start();
  server.applyMiddleware({ app })
}

export default apolloServer