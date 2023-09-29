import { Token, TokenPayload } from "../entities/token-entity";

export default interface TokenHandler {
  validate(token: Token): TokenPayload
  generate(payload: TokenPayload): Token
}