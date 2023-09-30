import RidesEntity from "@/domain/entities/ride-entity";

export const ridesMock: RidesEntity[] = [
  {
    id: 'any id',
    name: 'any name',
    startDate: new Date(),
    startDateRegistration: new Date(),
    endDateRegistration: new Date(),
    startPlace: 'any place',
    participantsLimit: null,
    additionalInformation: 'any information',
    ownerId: 'any owner id',
  }
]