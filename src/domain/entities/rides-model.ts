import RidesEntity from "./ride-entity";

export default interface RidesModel {
  add(Ride: Omit<RidesEntity, 'id'>): Promise<RidesEntity>
}