import React, { useEffect, useState } from 'react';
import { Wrapper, StyledList } from '../../common/styles';
// import { RouteComponentProps } from 'react-router-dom';
import mockRecipe from '../../mockData/recipes.json';

interface IngredientsProps {}
export interface Ingredient {
  family?: string;
  name: string;
  quantity: string;
}

const Ingredients: React.SFC<IngredientsProps> = () => {
  console.log('yo');
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const getIngredients = async () => {
    // let r = await fetch('/api/recipe/:recipe/ingredients');
    // let ingredients = r.json();
    const ingredients = mockRecipe.recipes[0].ingredients;
    setIngredients(ingredients);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <Wrapper>
      <StyledList>
        {ingredients.map(item => (
          <div key={item.name}>{item.name}</div>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default Ingredients;
