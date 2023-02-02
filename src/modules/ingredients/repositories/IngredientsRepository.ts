import { AppDataSource } from "@database/data-source";
import { Ingredient } from "@database/entities/ingredient/Ingredient";
import { Repository } from "typeorm";

import { ICreateIngredientDTO } from "../dtos";
import { IIngredientsRepository } from "./IIngredientsRepository";

interface IRequest {
  name?: string;
  description?: string;
  approximatedPrice?: number;
};

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

  async findById(id: string): Promise<Ingredient> {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, { name, description, approximatedPrice }: IRequest): Promise<Ingredient> {
    await this.repository.update(id, {
      name,
      description,
      approximatedPrice
    });

    const ingredient = await this.repository.findOneBy({ id });

    return ingredient;
  }
}

export { IngredientsRepository };
