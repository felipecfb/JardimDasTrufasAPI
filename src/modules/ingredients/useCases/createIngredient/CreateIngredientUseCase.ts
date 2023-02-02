import { Ingredient } from "@database/entities/ingredient/Ingredient";
import { ICreateIngredientDTO } from "@modules/ingredients/dtos";
import { IIngredientsRepository } from "@modules/ingredients/repositories/IIngredientsRepository";
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
      throw new Error("Ingredient already exists");
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
