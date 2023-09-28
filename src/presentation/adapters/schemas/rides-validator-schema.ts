import RidesEntity from '@/domain/entities/ride-entity';
import { object, string, number, date } from 'yup';

export const ridesSchema = object<Omit<RidesEntity, 'id'>>({
  name: string().required(),
  startDate: date().required(),
  startDateRegistration: date().required(),
  endDateRegistration: date().required(),
  aditionalInformation: string().nullable(),
  startPlace: string().required(),
  participantsLimit: number().min(0).nullable(),
})