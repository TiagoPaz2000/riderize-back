import RidesEntity from "@/domain/entities/ride-entity";

export const ridesMock: Omit<RidesEntity, 'id'>[] = [
  {
    name: 'any name',
    startDate: new Date(),
    startDateRegistration: new Date(),
    endDateRegistration: new Date(),
    startPlace: 'any place',
  }
]