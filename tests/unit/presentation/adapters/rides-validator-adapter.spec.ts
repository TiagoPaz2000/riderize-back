import RidesValidatorAdapter from "@/presentation/adapters/rides-validator-adapter"

describe('RidesValidatorAdapter', () => {
  const makeSut = () => {
    const sut = new RidesValidatorAdapter()
    
    return { sut }
  }

  it('should return true', () => {
    const { sut } = makeSut()

    const isValid = sut.validate({})

    expect(isValid).toBe(true)
  })
})