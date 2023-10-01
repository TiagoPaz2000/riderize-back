import { gql } from "apollo-server-express"

export default gql`
  type Query {
    ping: String!
    login(username: String!, password: String!): HttpResponse!
    register(username: String!, password: String!): HttpResponse!
  }

  type HttpResponse {
    statusCode: Int!
    body: String!
  }
`