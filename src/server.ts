import express, { Request, Response} from 'express'
import setupApolloServer from '@/infra/server/apollo-server'
import 'dotenv/config'

const app = express()

setupApolloServer(app)

app.get('/', (_req: Request, res: Response) => {
  res.redirect('/graphql')
})

const API_PORT = process.env.API_PORT || 3001

app.listen(API_PORT, () => console.log(`Server running on port: ${API_PORT}`))