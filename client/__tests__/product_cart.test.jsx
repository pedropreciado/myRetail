import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductCart from '../components/product/show/product_cart';
import product_reviews from '../components/product/show/product_reviews';

configure({ adapter: new Adapter() });

let offers = {
  price: '1.99',
  qualifier: 'online only'
};
let promotions = ['free', 'just kidding'];

describe('ProductCart', () => {
  let productCart = shallow(
    <ProductCart promotions={promotions}
    offers={offers} code={2} 
    />
  );
  let priceContainer = productCart.find('#price-container');
  let increment = productCart.find('#plus');
  let decrement = productCart.find('#minus');

  it('renders correctly', () => {
    expect(productCart).toMatchSnapshot();
  });

  it('displays price', () => {
    expect(priceContainer.props().children[0].props.children).toBe('1.99');
  });

  it('displays qualifier', () => {
    expect(priceContainer.props().children[1].props.children).toBe('online only');
  });

  it('displays promotions', () => {
    let promo = productCart.find('.promo');
    
    expect(promo.exists()).toBe(true);
  });

  it('displays correct quantity amount on increment/decrement', () => {
    let initialAmount = productCart.state('quantity');
    
    increment.simulate('click');
    expect(productCart.state('quantity') === initialAmount).toBe(false);
    decrement.simulate('click');
    expect(productCart.state('quantity') === initialAmount).toBe(true);
  });

  it('displays 1 when decrement button is clicked at 1', () => {
    decrement.simulate('click');
    expect(productCart.state('quantity')).toBe(1);
  });

  
});