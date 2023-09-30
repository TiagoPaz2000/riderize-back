import bcrypt from 'bcrypt'
import EncryptPassword from "@/domain/usecases/hash-password";

export default class EncryptPasswordAdapter implements EncryptPassword {
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt()
    return bcrypt.hash(password, salt)
  }
  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}