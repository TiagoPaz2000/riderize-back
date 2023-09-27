export default interface RideEntity {
  id: string
  name: string,
  startDate: Date,
  startDateRegistration: Date,
  endDateRegistration: Date,
  aditionalInformation?: string,
  startPlace: string,
  participantsLimit?: number,
}
