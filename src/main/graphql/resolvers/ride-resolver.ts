import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { listAllRidesFactory } from '@/presentation/factories/list-all-rides-factory';
import { ListAllRidesInput, AddRideInput } from '../dtos/inputs/rides-input';
import { ListRideModel, AddRideModel } from '../dtos/models/ride-model';
import { addRidesFactory } from '@/presentation/factories/add-rides-factory';


@Resolver()
export default class RideResolver {
  @Query(() => ListRideModel)
  async listAll(@Arg('data') data: ListAllRidesInput) {
    const listAllFactory = listAllRidesFactory()

    const response = await listAllFactory.handle({ body: data })
    
    return response.body
  }

  @Mutation(() => AddRideModel)
  async addRide(@Arg('data') data: AddRideInput) {
    const addFactory = addRidesFactory()

    const response = await addFactory.handle({ body: data })
    console.log(response);
    
    return response.body
  }
}