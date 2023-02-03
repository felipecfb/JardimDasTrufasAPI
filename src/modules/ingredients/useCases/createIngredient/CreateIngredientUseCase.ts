import { ICreateIngredientDTO } from "@modules/ingredients/dtos";
import { IIngredientsRepository } from "@modules/ingredients/repositories/IIngredientsRepository";
import { AppError } from "shared/errors/AppError";
import { Ingredient } from "shared/infra/typeorm/database/entities/ingredient/Ingredient";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateIngredientUseCase {
  constructor(
    @inject("IngredientsRepository")
    private ingredientsRepository: IIngredientsRepository
  ) {}

  async execute({
    name,
    description,
    approximatedPrice,
  }: ICreateIngredientDTO): Promise<Ingredient> {
    const ingredientAlreadyExists = await this.ingredientsRepository.findByName(
      name
    );

    if (ingredientAlreadyExists) {
      throw new AppError("Ingredient already exists");
    }

    const ingredient = await this.ingredientsRepository.create({
      name,
      description,
      approximatedPrice,
    });

    return ingredient;
  }
}

export { CreateIngredientUseCase };
