import RidesEntity from '@/domain/entities/ride-entity';
import RidesRepository from '@/domain/entities/rides-model';

export default class RidesRepositoryAdapter implements RidesRepository {
  add(ride: Omit<RidesEntity, 'id'>): Promise<RidesEntity> {
    
  }
}