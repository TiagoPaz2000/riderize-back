import { SignUpFactory } from "@/presentation/factories/signup-factory"

export default {
  Query: {
    async register(_parent: any, args: any) {
      const signUpFactory = SignUpFactory()
      const httpResponse = await signUpFactory.handle({
        body: args
      })
      return httpResponse
    }
  }
}