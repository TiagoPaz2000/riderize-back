import { object, string } from 'zod'

export const signupSchema = object({
  username: string(),
  password: string()
})