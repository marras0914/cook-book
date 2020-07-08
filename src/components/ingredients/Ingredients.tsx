import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';
import { RouteComponentProps } from 'react-router-dom';
import mockRecipe from '../../mockData/recipe.json';

interface IngredientsProps {}
interface Ingredient {
  family?: string;
  name: string;
  quantity: string;
}

const Ingredients: React.SFC<IngredientsProps> = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const getIngredients = async () => {
    // let r = await fetch('/api/recipe/:recipe/ingredients');
    // let ingredients = r.json();
    const ingredients = mockRecipe.ingredients;
    setIngredients(ingredients);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <Wrapper>
      {ingredients.map(item => (
        <div>{item.name}</div>
      ))}
    </Wrapper>
  );
};

export default Ingredients;
