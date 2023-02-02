import { AppDataSource } from "@database/data-source";
import { Ingredient } from "@database/entities/ingredient/Ingredient";
import { Repository } from "typeorm";

import { ICreateIngredientDTO } from "../dtos";
import { IIngredientsRepository } from "./IIngredientsRepository";

class IngredientsRepository implements IIngredientsRepository {
  private repository: Repository<Ingredient>;

  constructor() {
    this.repository = AppDataSource.getRepository(Ingredient);
  }

  async create({
    name,
    description,
    approximatedPrice,
  }: ICreateIngredientDTO): Promise<Ingredient> {
    const ingredient = this.repository.create({
      name,
      description,
      approximatedPrice,
    });

    await this.repository.save(ingredient);

    return ingredient;
  }

  findByName(name: string): Promise<Ingredient> {
    return this.repository.findOneBy({ name });
  }
}

export { IngredientsRepository };
