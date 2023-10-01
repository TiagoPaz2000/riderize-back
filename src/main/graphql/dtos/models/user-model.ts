import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class UserModel {
  @Field({ nullable: true })
  declare error: String

  @Field({ nullable: true })
  declare token: String
}