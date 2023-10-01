import express from 'express'
import setupApolloServer from '@/infra/server/apollo-server'

const app = express()

setupApolloServer(app)

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.listen(3001, () => console.log('Server running on port: 3001'))