import { ICreateUserDTO } from "@modules/account/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
