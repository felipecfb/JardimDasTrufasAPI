import { Ingredient } from "@database/entities/ingredient/Ingredient";
import { ICreateIngredientDTO } from "@modules/ingredients/dtos";

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

  async findByName(name: string): Promise<Ingredient> {
    return this.ingredients.find((ingredient) => ingredient.name === name);
  }

  async findById(id: string): Promise<Ingredient> {
    return this.ingredients.find((ingredient) => ingredient.id === id);
  }
}

export { IngredientsRepositoryInMemory };
