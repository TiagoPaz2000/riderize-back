import express, { Request, Response} from 'express'
import setupApolloServer from '@/infra/server/apollo-server'
import 'dotenv/config'

const app = express()

setupApolloServer(app)

app.get('/', (_req: Request, res: Response) => {
  res.redirect('/graphql')
})

app.listen(3001, () => console.log('Server running on port: 3001'))