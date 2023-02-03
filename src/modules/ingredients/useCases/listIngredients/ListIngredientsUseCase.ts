import { Ingredient } from "@database/entities/ingredient/Ingredient";
import { IIngredientsRepository } from "@modules/ingredients/repositories/IIngredientsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListIngredientsUseCase {
  constructor(
    @inject("IngredientsRepository")
    private ingredientsRepository: IIngredientsRepository
  ) {}

  async execute(): Promise<Ingredient[]> {
    const ingredients = await this.ingredientsRepository.list();

    return ingredients;
  }
}

export { ListIngredientsUseCase };
