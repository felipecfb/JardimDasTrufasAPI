import { CreateIngredientController } from "@modules/ingredients/useCases/createIngredient/CreateIngredientController";
import { EditIngredientController } from "@modules/ingredients/useCases/editIngredient/EditIngredientController";
import { ListIngredientsController } from "@modules/ingredients/useCases/listIngredients/ListIngredientsController";
import { Router } from "express";
import { ensureAuthenticated } from "middlewares/ensureAuthenticated";

const ingredientRoutes = Router();

const listIngredientsController = new ListIngredientsController();
const createIngredientController = new CreateIngredientController();
const editIngredientController = new EditIngredientController();

ingredientRoutes.get(
  "/",
  ensureAuthenticated,
  listIngredientsController.handle
);

ingredientRoutes.post(
  "/",
  ensureAuthenticated,
  createIngredientController.handle
);

ingredientRoutes.patch(
  "/:id",
  ensureAuthenticated,
  editIngredientController.handle
);

export { ingredientRoutes };
