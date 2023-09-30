import RidesEntity from "@/domain/entities/ride-entity";
import RidesRepository from "@/domain/usecases/rides-model";
import connection from "../../infra/database/connection";

export default class RidesRepositoryAdapter implements RidesRepository {
  async add(ride: Omit<RidesEntity, "id">): Promise<RidesEntity> {
    const newRide = await connection.rides.create({ data: ride })
    return newRide
  }

  async listAll(): Promise<RidesEntity[]> {
    const rides = await connection.rides.findMany()
    return rides
  }

  async listByUserId(userId: string): Promise<RidesEntity[]> {
    const rides = (await connection.usersOnRides.findMany({
      where: {
        userId: userId
      },
      include: { rides: true },
    })).map((ride) => ride.rides)

    return rides
  }
}