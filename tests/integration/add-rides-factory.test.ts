import { addRidesFactory } from "@/presentation/factories/add-rides-factory"
import { prismaMock } from "../mocks/prisma-mock"
import { ridesMock } from "../mocks/rides-mock"

describe('Add Rides Factory', () => {
  const makeSut = () => {
    const sut = addRidesFactory()

    return { sut }
  }

  it.todo('Should add a new ride on success')
  it.todo('should test if tokenHandler is called with correct values')
  it.todo('should return 401 if no token is provided')
  it.todo('should return 401 if token is invalid')
  it.todo('should test if validator is called with correct values')
  it.todo('should return 400 if validator throws')
  it.todo('should test if ridesRepository is called with correct values')
  it.todo('should return 500 if repository throws')
})