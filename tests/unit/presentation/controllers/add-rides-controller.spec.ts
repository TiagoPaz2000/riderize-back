import AddRidesController from '@/presentation/controllers/add-rides-controller'


describe('AddRidesController', () => {
  const makeSut = () => {
    const sut = new AddRidesController()
    return { sut }
  }

  it('should return 200 if everything is ok', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle({ body: {} })

    expect(httpResponse.statusCode).toBe(200)
  })
})