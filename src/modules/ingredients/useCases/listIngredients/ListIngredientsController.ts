import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListIngredientsUseCase } from "./ListIngredientsUseCase";

class ListIngredientsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listIngredientsUseCase = container.resolve(ListIngredientsUseCase);

    const ingredients = await listIngredientsUseCase.execute();

    return res.status(200).json(ingredients);
  }
}

export { ListIngredientsController };
