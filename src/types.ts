export interface Ingredient {
  family?: string;
  name: string;
  quantity: string;
}

export interface Instruction {
  step: number;
  instruction: string;
  ingredients?: string[];
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tools: string[];
}
