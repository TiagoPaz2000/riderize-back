export default interface RidesEntity {
  id: string
  name: string,
  startDate: Date,
  startDateRegistration: Date,
  endDateRegistration: Date,
  aditionalInformation?: string | null,
  startPlace: string,
  participantsLimit?: number | null,
}
