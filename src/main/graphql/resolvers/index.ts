import login from './login'
import register from './register'

const ping = {
  Query: {
    ping: () => 'pong',
  }
}

export default [
  ping,
  login,
  register
]