import {
  ICreateIngredientDTO,
  IEditIngredientDTO,
} from "@modules/ingredients/dtos";

import { Ingredient } from "@shared/infra/typeorm/database/entities/ingredient/Ingredient";

import { IIngredientsRepository } from "../IIngredientsRepository";

class IngredientsRepositoryInMemory implements IIngredientsRepository {
  ingredients: Ingredient[] = [];

  async create({
    name,
    description,
    approximatedPrice,
  }: ICreateIngredientDTO): Promise<Ingredient> {
    const ingredient = new Ingredient();

    Object.assign(ingredient, {
      name,
      description,
      approximatedPrice,
    });

    this.ingredients.push(ingredient);

    return ingredient;
  }

  async list(): Promise<Ingredient[]> {
    throw new Error("Method not implemented.");
  }

  async findByName(name: string): Promise<Ingredient> {
    return this.ingredients.find((ingredient) => ingredient.name === name);
  }

  async findById(id: string): Promise<Ingredient> {
    return this.ingredients.find((ingredient) => ingredient.id === id);
  }

  async update({
    id,
    name,
    description,
    approximatedPrice,
  }: IEditIngredientDTO): Promise<Ingredient> {
    throw new Error("Method not implemented.");
  }
}

export { IngredientsRepositoryInMemory };
