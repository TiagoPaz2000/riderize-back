import UserRepository from "@/domain/usecases/user-model";
import connection from "../../infra/database/connection";
import UserEntity from "@/domain/entities/user-entity";
import ErrorEntity from "@/domain/entities/error-entity";

export default class UserRepositoryAdapter implements UserRepository {
  async signup(user: Omit<UserEntity, "id">): Promise<UserEntity> {
    const newUser = await connection.user.create({ data: user })

    return newUser
  }

  async signin(user: Omit<UserEntity, "id">): Promise<UserEntity> {
    const newUser = await connection.user
      .findUniqueOrThrow({ where: { username: user.username } })
      .catch((_err) => { throw new ErrorEntity('User not found', 400) })

    return newUser
  }
}