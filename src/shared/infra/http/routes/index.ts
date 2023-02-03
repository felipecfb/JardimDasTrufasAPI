import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { ingredientRoutes } from "./ingredient.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/sessions", authenticateRoutes);
router.use("/ingredients", ingredientRoutes);

export { router };
