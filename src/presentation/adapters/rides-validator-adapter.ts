import RidesValidator from "@/domain/usecases/rides-validator";

export default class RidesValidatorAdapter implements RidesValidator {
  validate(data: any): boolean {
    return true;
  }
}