import { Ingredient } from "@database/entities/ingredient/Ingredient";

import { ICreateIngredientDTO } from "../dtos";

interface IRequest {
  id: string;
  name: string;
  description: string;
  approximatedPrice: number;
}

interface IIngredientsRepository {
  create(data: ICreateIngredientDTO): Promise<Ingredient>;
  findByName(name: string): Promise<Ingredient>;
  findById(id: string): Promise<Ingredient>;
  update({
    id,
    name,
    description,
    approximatedPrice,
  }: IRequest): Promise<Ingredient>;
}

export { IIngredientsRepository };
