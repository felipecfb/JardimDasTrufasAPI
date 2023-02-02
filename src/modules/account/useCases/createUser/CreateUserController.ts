import { Request, Response } from "express";
import { UsersRepository } from "../../repositories/UsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCases";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const usersRepository = new UsersRepository()
    const createUserUseCase = new CreateUserUseCase(usersRepository);

    await createUserUseCase.execute({
      name,
      email,
      password
    });

    return res.status(201).json();
  }
}

export { CreateUserController };