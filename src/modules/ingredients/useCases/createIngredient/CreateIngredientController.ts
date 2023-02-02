import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateIngredientUseCase } from "./CreateIngredientUseCase";

class CreateIngredientController {
  async handle(req: Request, res: Response) {
    const { name, description, approximatedPrice } = req.body;

    const createIngredientUseCase = container.resolve(CreateIngredientUseCase);

    const ingredient = await createIngredientUseCase.execute({
      name,
      description,
      approximatedPrice,
    });

    return res.status(201).json(ingredient);
  }
}

export { CreateIngredientController };
