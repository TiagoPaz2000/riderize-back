export default interface SignUpValidator {
  validate(user: any): Promise<boolean>
}