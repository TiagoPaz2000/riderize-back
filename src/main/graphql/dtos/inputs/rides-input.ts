import { Field, InputType } from 'type-graphql';

@InputType()
export class ListAllRidesInput {
  @Field()
  declare authorization: String
}

@InputType()
export class SubscribeRideInput extends ListAllRidesInput{
  @Field()
  declare rideId: String
}

@InputType()
export class AddRideInput {
  @Field()
  declare authorization: String
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
}