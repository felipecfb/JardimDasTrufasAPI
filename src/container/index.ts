import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { UsersRepository } from "@modules/account/repositories/UsersRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
