import RidesEntity from '@/domain/entities/ride-entity'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class RideModel {
  @Field()
  declare id: String
  @Field()
  declare name: String
  @Field()
  declare startDate: Date
  @Field()
  declare startDateRegistration: Date
  @Field()
  declare endDateRegistration: Date
  @Field({ nullable: true })
  declare additionalInformation: String
  @Field()
  declare startPlace: String
  @Field({ nullable: true })
  declare participantsLimit: number
  @Field()
  declare ownerId: String
}

@ObjectType()
export class ListRideModel {
  @Field({ nullable: true })
  declare error: String

  @Field(type => [RideModel], { nullable: true })
  declare rides: RideModel[]
}

@ObjectType()
export class AddRideModel {
  @Field({ nullable: true })
  declare error: String

  @Field({ nullable: true })
  declare ride: RideModel
}