export default interface RidesValidator {
  validate(ride: any): Promise<boolean>
}