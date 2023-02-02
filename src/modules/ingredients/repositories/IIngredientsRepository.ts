import { Ingredient } from "@database/entities/ingredient/Ingredient";

import { ICreateIngredientDTO } from "../dtos";

interface IIngredientsRepository {
  create(data: ICreateIngredientDTO): Promise<Ingredient>;
  findByName(name: string): Promise<Ingredient>;
}

export { IIngredientsRepository };
