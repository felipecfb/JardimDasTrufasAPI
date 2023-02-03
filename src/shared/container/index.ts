import { IUsersRepository } from "@modules/account/repositories/IUsersRepository";
import { UsersRepository } from "@modules/account/repositories/UsersRepository";
import { IIngredientsRepository } from "@modules/ingredients/repositories/IIngredientsRepository";
import { IngredientsRepository } from "@modules/ingredients/repositories/IngredientsRepository";
import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IIngredientsRepository>(
  "IngredientsRepository",
  IngredientsRepository
);
