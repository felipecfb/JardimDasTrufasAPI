import { Ingredient } from "shared/infra/typeorm/database/entities/ingredient/Ingredient";

import { ICreateIngredientDTO, IEditIngredientDTO } from "../dtos";

interface IIngredientsRepository {
  create(data: ICreateIngredientDTO): Promise<Ingredient>;
  findByName(name: string): Promise<Ingredient>;
  findById(id: string): Promise<Ingredient>;
  update({
    id,
    name,
    description,
    approximatedPrice,
  }: IEditIngredientDTO): Promise<Ingredient>;
  list(): Promise<Ingredient[]>;
}

export { IIngredientsRepository };
