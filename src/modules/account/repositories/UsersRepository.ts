import { Repository } from "typeorm";

import { AppDataSource } from "@shared/infra/typeorm/database/data-source";
import { User } from "@shared/infra/typeorm/database/entities/account/User";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
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
    const user = await this.repository.findOneBy({ id });

    return user;
  }
}

export { UsersRepository };
