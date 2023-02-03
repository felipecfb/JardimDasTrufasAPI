import { Repository } from "typeorm";

import { AppDataSource } from "@shared/infra/typeorm/database/data-source";
import { Ingredient } from "@shared/infra/typeorm/database/entities/ingredient/Ingredient";

import { ICreateIngredientDTO, IEditIngredientDTO } from "../dtos";
import { IIngredientsRepository } from "./IIngredientsRepository";

interface IRequest {
  name?: string;
  description?: string;
  approximatedPrice?: number;
}

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

  async update({
    id,
    name,
    description,
    approximatedPrice,
  }: IEditIngredientDTO): Promise<Ingredient> {
    await this.repository.update(id, {
      name,
      description,
      approximatedPrice,
    });

    const ingredient = await this.repository.findOneBy({ id });

    return ingredient;
  }

  async list(): Promise<Ingredient[]> {
    const ingredients = await this.repository.find();

    return ingredients;
  }
}

export { IngredientsRepository };
