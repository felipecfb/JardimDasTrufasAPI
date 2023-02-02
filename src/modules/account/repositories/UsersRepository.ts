import { AppDataSource } from "@database/data-source";
import { User } from "@database/entities/account/User";
import { AppError } from "errors/AppError";
import { Repository } from "typeorm";

import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({
      email,
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    throw new AppError("Method not implemented.");
  }
}

export { UsersRepository };
