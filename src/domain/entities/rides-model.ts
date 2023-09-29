import RidesEntity from "./ride-entity";

export default interface RidesRepository {
  add(Ride: Omit<RidesEntity, 'id'>): Promise<RidesEntity>
}