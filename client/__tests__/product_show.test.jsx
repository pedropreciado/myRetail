import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductShow from '../components/product/show/product_show';
import ProductImages from '../components/product/show/product_images';
import ProductReviews from '../components/product/show/product_reviews';
import ProductCart from '../components/product/show/product_cart';
import ProductFeatures from '../components/product/show/product_features';
import data from '../../data/item-data.json';

let products = data.CatalogEntryView;

configure({ adapter: new Adapter() });

describe('ProductShow', () => {
  const shallowWrapper = shallow(
    <ProductShow product={products[0]}
      fetchProducts={() => { console.log('fetched') }}
    />
  );
  const fullWrapper = mount(
    <ProductShow product={products[0]} 
    fetchProducts={() => { console.log('fetched') }}
    />
  );

  // const productShow = Renderer.create(
  // <ProductShow product={products[0]}
  //   fetchProducts={() => { console.log('fetched') }}
  // />)
  // console.log(productShow.toJSON());
  
  it('renders correctly', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
  it('renders the title container', () => {
    expect(shallowWrapper.find('.product-name').exists()).toBe(true);
  });
  it('renders the ProductImages component', () => {
    expect(fullWrapper.find(ProductImages).exists()).toBe(true);
  });
  it('renders the ProductFeatures component', () => {
    expect(fullWrapper.find(ProductFeatures).exists()).toBe(true);
  });
  it('renders the ProductReviews component', () => {
    expect(fullWrapper.find(ProductReviews).exists()).toBe(true);
  });
  it('renders the ProductCart component', () => {
    expect(fullWrapper.find(ProductCart).exists()).toBe(true);
  });
});
