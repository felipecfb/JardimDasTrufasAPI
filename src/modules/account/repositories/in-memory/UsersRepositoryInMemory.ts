import { User } from "../../../../database/entities/account/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password
    });

    this.users.push(user);
  }
}

export { UsersRepositoryInMemory };