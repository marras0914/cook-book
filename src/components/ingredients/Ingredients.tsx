import React, { SFC } from 'react';
import { Wrapper, StyledList, StyledListItem } from '../../common/styles';
import { BackButton } from '../../common';
import { Ingredient } from '../../types';

interface IngredientsProps {
  ingredients: Ingredient[];
}

const Ingredients: SFC<IngredientsProps> = ({ ingredients }) => {
  return (
    <Wrapper>
      <StyledList>
        {ingredients.map(item => (
          <StyledListItem key={item.name}>
            <div>{item.quantity}</div>
            <div>{item.name}</div>
          </StyledListItem>
        ))}
      </StyledList>
      <BackButton />
    </Wrapper>
  );
};

export default Ingredients;
