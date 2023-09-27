import RidesEntity from "./ride-entity";

export default interface RidesModel {
  add(Ride: RidesEntity): Promise<Omit<RidesEntity, 'id'>>
}