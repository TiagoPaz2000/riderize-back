import { SignInFactory } from "@/presentation/factories/signin-factory"

export default {
  Query: {
    async login(_parent: any, args: any) {
      const signInFactory = SignInFactory()
      const httpResponse = await signInFactory.handle({
        body: args
      })
      return httpResponse
    }
  }
}