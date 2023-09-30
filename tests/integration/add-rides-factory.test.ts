import jwt from 'jsonwebtoken'

import { addRidesFactory } from "@/presentation/factories/add-rides-factory"
import { prismaMock } from "../mocks/prisma-mock"
import { ridesMock } from "../mocks/rides-mock"

describe('Add Rides Factory', () => {
  const makeSut = () => {
    const sut = addRidesFactory()

    return { sut }
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should add a new ride on success', async () => {
    const { sut } = makeSut()
    prismaMock.rides.create.mockResolvedValue(ridesMock[0])
    jest.spyOn(jwt, 'verify')
      .mockReturnValueOnce({ id: 'any_id', username: 'any_username' } as any)

    const response = await sut.handle({
      body: {
        authorization: 'valid_token',
        ...ridesMock[0]
      }
    })

    expect(response.body).toEqual(ridesMock[0])
    expect(response.statusCode).toBe(201)
  })

  it('should test if tokenHandler is called with correct values', async () => {
    const { sut } = makeSut()
    const jwtStub = jest.spyOn(jwt, 'verify')

    const response = await sut.handle({
      body: {
        authorization: 'valid_token',
        ...ridesMock[0]
      }
    })

    expect(jwtStub).toHaveBeenCalledWith('valid_token', process.env.JWT_SECRET)
  })

  it('should return 401 if no token is provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle({
      body: {
        ...ridesMock[0]
      }
    })

    expect(response.body).toEqual({ error: 'jwt must be provided' })
    expect(response.statusCode).toBe(401)
  })
  
  it.todo('should return 401 if token is invalid')
  it.todo('should test if validator is called with correct values')
  it.todo('should return 400 if validator throws')
  it.todo('should test if ridesRepository is called with correct values')
  it.todo('should return 500 if repository throws')
})