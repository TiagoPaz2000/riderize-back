import UserEntity from "./user-entity";

export default interface UserRepository {
  signup(user: Omit<UserEntity, 'id'>): Promise<UserEntity>
}