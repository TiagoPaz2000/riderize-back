import UserRepository from "@/domain/usecases/user-model";
import connection from "../../infra/database/connection";
import UserEntity from "@/domain/entities/user-entity";

export default class UserRepositoryAdapter implements UserRepository {
  async signup(user: Omit<UserEntity, "id">): Promise<UserEntity> {
    const newUser = await connection.user.create({ data: user })

    return newUser
  }
}