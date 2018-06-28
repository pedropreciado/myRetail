import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductFeatures from '../components/product/show/product_features';

configure({ adapter: new Adapter() });

let features = ['it works', 'it turns purple'];

describe('ProductFeatures', () => {
  let productFeatures = shallow(<ProductFeatures features={features}/>);

  it('renders correctly', () => {
    expect(productFeatures).toMatchSnapshot();
  });

  it('displays its title', () => {
    let title = productFeatures.find('#product-feature-container');

    expect(title.props().children[0].props.children).toBe('product highlights');
  });

  it('renders features', () => {
    let features = productFeatures.find('.feature-item');

    expect(features.length).toBe(2);
  });
});