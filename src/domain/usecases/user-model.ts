import UserEntity from "../entities/user-entity";

export default interface UserRepository {
  signup(user: Omit<UserEntity, 'id'>): Promise<UserEntity>
}