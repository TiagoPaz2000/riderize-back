import RidesEntity from "../entities/ride-entity";

export default interface RidesRepository {
  add(Ride: Omit<RidesEntity, 'id'>): Promise<RidesEntity>
  listAll(): Promise<RidesEntity[]>
  listByUserId(userId: string): Promise<RidesEntity[]>
  listByOwnerId(ownerId: string): Promise<RidesEntity[]>
  subcribeOnRide(userId: string, rideId: string, subscriptionDate: Date): Promise<void>
  listById(rideId: string): Promise<RidesEntity>
}