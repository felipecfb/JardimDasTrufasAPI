interface ICreateIngredientDTO {
  name: string;
  description: string;
  approximatedPrice: number;
}

interface IEditIngredientDTO {
  id: string;
  name: string;
  description: string;
  approximatedPrice: number;
}

export { ICreateIngredientDTO, IEditIngredientDTO };
