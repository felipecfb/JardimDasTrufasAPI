import { CreateIngredientController } from "@modules/ingredients/useCases/createIngredient/CreateIngredientController";
import { EditIngredientController } from "@modules/ingredients/useCases/editIngredient/EditIngredientController";
import { Router } from "express";

const ingredientRoutes = Router();

const createIngredientController = new CreateIngredientController();
const editIngredientController = new EditIngredientController();

ingredientRoutes.post("/", createIngredientController.handle);

ingredientRoutes.patch("/:id", editIngredientController.handle);

export { ingredientRoutes };
