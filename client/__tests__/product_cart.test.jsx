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
    offers={offers} code={0} 
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

  it('displays both buttons when code is 0', () => {
    let buttonsContainer = productCart.find('#cart-buttons-container');
    
    expect(buttonsContainer.props().children.length).toBe(2);
  });
  
  it('displays only "ADD TO CART" button when code is 1', () => {
    let withCodeOne = shallow(
      <ProductCart promotions={promotions}
        offers={offers} code={1}
      />);
    let addToCart = withCodeOne.find('#add-to-cart');
    let pickUp = withCodeOne.find('#pick-up');
      
    expect(addToCart.exists()).toBe(true);
    expect(pickUp.exists()).toBe(false);
  });

  it('displays only "PICK UP ..." buttons when code is 2', () => {
    let withCodeTwo = shallow(
      <ProductCart promotions={promotions}
        offers={offers} code={2}
      />);
    let addToCart = withCodeTwo.find('#add-to-cart');
    let pickUp = withCodeTwo.find('#pick-up');

    expect(addToCart.exists()).toBe(false);
    expect(pickUp.exists()).toBe(true);
  });

  it('displays return information', () => {
    let returnsContainer = productCart.find('#returns-container');
    let text = returnsContainer.props().children[1];
    
    expect(typeof text.props.children).toBe('string');
  });
  
  it('displays cart options', () => {
    let cartOptionsContainer = productCart.find('#cart-options-container');

    expect(cartOptionsContainer.props(0).children.length).toBe(3);
  });
});
