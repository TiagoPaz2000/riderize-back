import { TokenPayload } from "@/domain/entities/token-entity"
import TokenHandler from "@/domain/usecases/token-handler"

export const makeTokenHandlerStub = (): TokenHandler => {
  class TokenHandlerStub implements TokenHandler {
    validate(_token: string): TokenPayload {
      return { id: 'valid_id', username: 'valid_username' }
    }
    generate(_payload: TokenPayload): string {
      return 'valid_token'
    }

  }

  return new TokenHandlerStub()
}