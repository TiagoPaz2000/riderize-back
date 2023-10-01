import { Resolver, Query, Arg } from 'type-graphql';
import { ListAllInput } from '../dtos/inputs/rides-input';
import { listAllRidesFactory } from '@/presentation/factories/list-all-rides-factory';
import { ListRideModel } from '../dtos/models/ride-model';


@Resolver()
export default class RideResolver {
  @Query(() => ListRideModel)
  async listAll(@Arg('data') data: ListAllInput) {
    const listAllFactory = listAllRidesFactory()

    const response = await listAllFactory.handle({ body: data })
    console.log(response);
    
    return response.body
  }
}