import jwt, { SignOptions } from 'jsonwebtoken'

import { TokenPayload } from "@/domain/entities/token-entity";
import TokenHandler from "@/domain/usecases/token-handler";

export default class TokenHandlerAdapter implements TokenHandler {
  private readonly secret = process.env.JWT_SECRET as string
  private readonly options = {
    expiresIn: '1d',
    algorithm: 'HS256'
  } as SignOptions

  validate(bearer: string): TokenPayload {
    const token = bearer ? bearer.split(' ')[1] : bearer
    const tokenPayload = jwt.verify(token, this.secret) as TokenPayload
    return tokenPayload
  }
  generate(payload: TokenPayload): string {
    const token = jwt.sign(payload, this.secret, this.options)
    return token
  }
}