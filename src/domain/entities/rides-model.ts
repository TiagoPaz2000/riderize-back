import RidesEntity from "./ride-entity";

export default interface RidesRepositoty {
  add(Ride: Omit<RidesEntity, 'id'>): Promise<RidesEntity>
}