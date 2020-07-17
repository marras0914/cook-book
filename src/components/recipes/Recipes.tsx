import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, StyledList } from '../../common/styles';
import { Recipe } from '../../types';

interface RecipeProps {
  recipes: Recipe[];
}

const Recipes: React.SFC<RecipeProps> = ({ recipes }) => {
  return (
    <Wrapper>
      <StyledList>
        {recipes.map(item => (
          <Link to={`/recipe/${item.id}/ingredients`}>{item.name}</Link>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default Recipes;
