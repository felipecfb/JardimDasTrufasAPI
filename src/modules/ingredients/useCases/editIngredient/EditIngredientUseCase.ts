import { IIngredientsRepository } from "@modules/ingredients/repositories/IIngredientsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { Ingredient } from "@shared/infra/typeorm/database/entities/ingredient/Ingredient";

interface IRequest {
  id?: string;
  name?: string;
  description?: string;
  approximatedPrice?: number;
}

@injectable()
class EditIngredientUseCase {
  constructor(
    @inject("IngredientsRepository")
    private ingredientsRepository: IIngredientsRepository
  ) {}

  async execute({
    id,
    name,
    description,
    approximatedPrice,
  }: IRequest): Promise<Ingredient> {
    const ingredient = await this.ingredientsRepository.findById(id);

    if (!ingredient) {
      throw new AppError("This ingredient not exists");
    }

    const updatedIngredient = await this.ingredientsRepository.update({
      id,
      name,
      description,
      approximatedPrice,
    });

    return updatedIngredient;
  }
}

export { EditIngredientUseCase };
