import { CreateIngredientController } from "@modules/ingredients/useCases/createIngredient/CreateIngredientController";
import { Router } from "express";

const ingredientRoutes = Router();

const createIngredientController = new CreateIngredientController();

ingredientRoutes.post("/", createIngredientController.handle);

export { ingredientRoutes };
