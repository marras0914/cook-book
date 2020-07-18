import React from 'react';
import { shallow } from 'enzyme';
import Ingredients from '../Ingredients';

describe('Ingredients', () => {
  const recipe = [
    {
      name: 'poblano pepper',
      quantity: '3',
    },
    {
      name: 'chicken',
      quantity: '3 lbs',
    },
  ];

  it('Renders a list of ingredients', () => {
    const ingredients = shallow(<Ingredients ingredients={recipe} />);
    expect(ingredients).toMatchSnapshot();
  });
});
