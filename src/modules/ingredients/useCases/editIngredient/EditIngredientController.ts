import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditIngredientUseCase } from "./EditIngredientUseCase";

class EditIngredientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, description, approximatedPrice } = req.body;

    const editIngredientUseCase = container.resolve(EditIngredientUseCase);

    const ingredient = await editIngredientUseCase.execute({
      id,
      name,
      description,
      approximatedPrice
    })

    return res.status(200).json(ingredient);
  }
}

export { EditIngredientController };
