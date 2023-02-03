import { describe, it, beforeEach, expect } from "vitest";

import { AppError } from "@shared/errors/AppError";

import { IngredientsRepositoryInMemory } from "../../repositories/in-memory/IngredientsRepositoryInMemory";
import { CreateIngredientUseCase } from "./CreateIngredientUseCase";

let createIngredientUseCase: CreateIngredientUseCase;
let ingredientsRepositoryInMemory: IngredientsRepositoryInMemory;

describe("Create Ingredient", () => {
  beforeEach(() => {
    ingredientsRepositoryInMemory = new IngredientsRepositoryInMemory();
    createIngredientUseCase = new CreateIngredientUseCase(
      ingredientsRepositoryInMemory
    );
  });

  it("should be able to create a new ingredient", async () => {
    const ingredient = await createIngredientUseCase.execute({
      name: "Test ingredient",
      description: "Test description",
      approximatedPrice: 5.5,
    });

    expect(ingredient).toHaveProperty("name");
  });

  it("should not be able to create a new ingredient with exists the same name", () => {
    expect(async () => {
      await createIngredientUseCase.execute({
        name: "Test ingredient",
        description: "Description one",
        approximatedPrice: 5.5,
      });

      await createIngredientUseCase.execute({
        name: "Test ingredient",
        description: "Description two",
        approximatedPrice: 5.5,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
