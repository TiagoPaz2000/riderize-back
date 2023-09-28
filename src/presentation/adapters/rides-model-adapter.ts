import RidesEntity from '@/domain/entities/ride-entity';
import RidesModel from '@/domain/entities/rides-model';

export default class RidesModelAdapter implements RidesModel {
  add(Ride: Omit<RidesEntity, 'id'>): Promise<RidesEntity> {
    
  }
}