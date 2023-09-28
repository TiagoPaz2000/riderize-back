import RidesEntity from '@/domain/entities/ride-entity';
import { object, string, number, date } from 'zod'

export const ridesSchema = object({
  name: string(),
  startDate: date(),
  startDateRegistration: date(),
  endDateRegistration: date(),
  aditionalInformation: string().nullish(),
  startPlace: string(),
  participantsLimit: number().min(0).nullish(),
})