import RidesEntity from "../entities/ride-entity";

export default interface RidesRepository {
  add(Ride: Omit<RidesEntity, 'id'>): Promise<RidesEntity>
  listAll(): Promise<RidesEntity[]>
  listByUserId(userId: string): Promise<RidesEntity[]>
}