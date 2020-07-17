import React, { SFC, useEffect, useState, FunctionComponent } from 'react';
import { Wrapper, StyledList } from '../../common/styles';
import { BackButton } from '../../common';
import { RouteComponentProps } from 'react-router-dom';
import { Ingredient } from '../../types';

interface IngredientsProps {
  ingredients: Ingredient[];
}

const Ingredients: SFC<IngredientsProps> = ({ ingredients }) => {
  // const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  // const getIngredients = async () => {
  //   // let r = await fetch('/api/recipe/:recipe/ingredients');
  //   // let ingredients = r.json();
  //   const ingredients = mockRecipe.recipes[0].ingredients;
  //   setIngredients(ingredients);
  // };

  // useEffect(() => {
  //   getIngredients();
  // }, []);

  return (
    <Wrapper>
      <StyledList>
        {ingredients.map(item => (
          <div key={item.name}>{item.name}</div>
        ))}
      </StyledList>
      <BackButton />
    </Wrapper>
  );
};

export default Ingredients;
