import React from 'react';
import { shallow } from 'enzyme';
import ProductShow from '../product/show/product_show';


describe('ProductShow', () => {
  const wrapper = shallow(<ProductShow />);

  expect(wrapper).toMatchSnapshot();
});
