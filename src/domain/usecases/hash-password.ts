export default interface EncryptPassword {
  hash(password: string): string
  compare(password: string, hash: string): boolean
}