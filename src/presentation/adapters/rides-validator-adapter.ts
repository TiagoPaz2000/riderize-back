import RidesValidator from "@/domain/usecases/rides-validator";
import { ridesSchema } from "../schemas/rides-validator-schema";


export default class RidesValidatorAdapter implements RidesValidator {
  async validate(data: any): Promise<boolean> {
    await ridesSchema.parseAsync(data)

    return true
  }
}