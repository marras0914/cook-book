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

  // it('Renders link to Google with classname', () => {
  //   const link = shallow(
  //     <Link href="http://google.com" className="my-link-class">
  //       {' '}
  //       Link to Google
  //     </Link>,
  //   );
  //   expect(link).toMatchSnapshot();
  // });
});
