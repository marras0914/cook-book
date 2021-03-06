import React from 'react';
import { shallow } from 'enzyme';
import Recipes from '../Recipes';

describe('Recepes', () => {
  const mockRecipe = [
    {
      id: '1234',
      name: 'Creamy Chicken Poblano Soup',
      ingredients: [
        {
          name: 'poblano pepper',
          quantity: '3',
        },
        {
          name: 'chicken',
          quantity: '3 lbs',
        },
      ],
      instructions: [
        {
          step: 1,
          instruction:
            'Coat chicken breasts with the onion and garlic powders and herbs. Season generously with salt and pepper.',
          ingredients: ['chicken', 'onion', 'garlic powder', 'herbs', 'salt', 'pepper'],
        },
      ],
      tools: ['Chef Knife', 'Cutting Board'],
    },
    {
      id: '5678',
      name: 'Ham Sandwich',
      ingredients: [
        {
          name: 'Honey Ham',
          quantity: '1/4 lbs',
        },
        {
          name: 'Bread',
          quantity: '2 slices',
        },
      ],
      instructions: [
        {
          step: 1,
          instruction: 'Place ham inbetween bread slices',
          ingredients: ['Honey Ham', 'Bread'],
        },
      ],
      tools: ['Chef Knife', 'Cutting Board'],
    },
  ];

  it('Renders a list of recipes', () => {
    const component = shallow(<Recipes recipes={mockRecipe} />);
    expect(component).toMatchSnapshot();
  });
});
