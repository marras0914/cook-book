import React, { useState, useEffect } from 'react';
import { Wrapper, StyledList } from '../../common/styles';
import { Ingredient } from '../ingredients/Ingredients';
import mockRecipe from '../../mockData/recipes.json';
import { Link } from 'react-router-dom';

interface RecipeProps {}

interface Instruction {
  step: number;
  instruction: string;
  ingredients?: string[];
}

interface Recipe {
  name: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  tools: string[];
}

const Recipes: React.SFC<RecipeProps> = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const getRecipes = async () => {
    // let r = await fetch('/api/recipe/:recipe/Recipes');
    // let Recipes = r.json();
    const recipes = mockRecipe.recipes;
    setRecipes(recipes);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Wrapper>
      <StyledList>
        {recipes.map(item => (
          <Link to={`/recipe/${item.name}/ingredients`}>{item.name}</Link>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default Recipes;
