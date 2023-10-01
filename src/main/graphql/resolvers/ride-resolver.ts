import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { listAllRidesFactory } from '@/presentation/factories/list-all-rides-factory';
import { ListAllRidesInput, AddRideInput, SubscribeRideInput } from '../dtos/inputs/rides-input';
import { ListRideModel, AddRideModel, SubscribeRideModel } from '../dtos/models/ride-model';
import { addRidesFactory } from '@/presentation/factories/add-rides-factory';
import { listUserRidesFactory } from '@/presentation/factories/list-user-rides-factory';
import { listOwnerRidesFactory } from '@/presentation/factories/list-owner-rides-factory';
import { ridesSubscribeFactory } from '@/presentation/factories/rides-subscribe-factory';


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
    
    return response.body
  }

  @Query(() => ListRideModel)
  async listAllByUserId(@Arg('data') data: ListAllRidesInput) {
    const listAllFactory = listUserRidesFactory()

    const response = await listAllFactory.handle({ body: data })
    
    return response.body
  }

  @Query(() => ListRideModel)
  async listAllByOwnerrId(@Arg('data') data: ListAllRidesInput) {
    const listAllFactory = listOwnerRidesFactory()

    const response = await listAllFactory.handle({ body: data })
    
    return response.body
  }

  @Mutation(() => SubscribeRideModel)
  async subscribeRide(@Arg('data') data: SubscribeRideInput) {
    const subscribeFactory = ridesSubscribeFactory()

    const response = await subscribeFactory.handle({ body: data })
    
    return response.body
  }
}