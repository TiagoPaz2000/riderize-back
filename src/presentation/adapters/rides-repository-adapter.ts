import RidesEntity from '@/domain/entities/ride-entity';
import RidesRepositoty from '@/domain/entities/rides-model';

export default class RidesRepositotyAdapter implements RidesRepositoty {
  add(ride: Omit<RidesEntity, 'id'>): Promise<RidesEntity> {
    
  }
}