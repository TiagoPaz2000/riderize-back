import RidesRepositoryAdapter from '@/presentation/adapters/rides-repository-adapter';
import { prismaMock } from '../../stubs/mocks/prisma-mock';
import { ridesMock } from '../../stubs/mocks/rides-mock';

describe('RidesRepositoryAdapter', () => {
  const makeSut = () => {
    const sut = new RidesRepositoryAdapter()
    
    return { sut }
  }

  it('should create a new ride', async () => {
    const { sut } = makeSut()
    prismaMock.rides.create.mockResolvedValue(ridesMock[0])

    const ride = await sut.add(ridesMock[0])

    expect(ride).toEqual(ridesMock[0])
  })
})