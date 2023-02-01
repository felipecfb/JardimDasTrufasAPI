import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  usersRepository: IUsersRepository;

  constructor(
    usersRepository = new UsersRepositoryInMemory()
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      password
    });
  }
}

export { CreateUserUseCase };