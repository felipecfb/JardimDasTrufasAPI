import { User } from "../../../database/entities/account/User";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  create(data: ICreateUserDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
}