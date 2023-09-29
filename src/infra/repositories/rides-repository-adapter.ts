import RidesEntity from "@/domain/entities/ride-entity";
import RidesRepository from "@/domain/entities/rides-model";
import { PrismaClient } from '@prisma/client'

export default class RidesRepositoryAdapter implements RidesRepository {
  constructor(private connection: PrismaClient) {
    this.connection = connection
  }

  async add(ride: Omit<RidesEntity, "id">): Promise<RidesEntity> {
    const newRide = await this.connection.rides.create({ data: ride })
    return newRide
  }
}