import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductImageSlide from '../components/product/show/product_image_slide';

configure({ adapter: new Adapter() });

let images = [
  'image.jpg',
  'image_2.jpg',
  'image_3.jpg'
];

describe('ProductImageSlide', () => {
  let productImageSlide = shallow(
    <ProductImageSlide images={images}
    currentImageIdx={2} changeImage={() => { return; }}
    />
  );

  it('renders correctly', () => {
    expect(productImageSlide).toMatchSnapshot();
  });

  it('sets primary image first', () => {
    expect(productImageSlide.state('midIdx')).toBe(2);
  });
  
  it('carousels images on left click', () => {
    let leftArrow = productImageSlide.find('.image-slide-arrow').at(0);

    leftArrow.simulate('click');

    expect(productImageSlide.state('midIdx')).toBe(1);
  });

  it('carousels images on right click', () => {
    let rightArrow = productImageSlide.find('.image-slide-arrow').at(1);

    rightArrow.simulate('click');
    rightArrow.simulate('click');

    expect(productImageSlide.state('midIdx')).toBe(0);
  });

  it('should loop images', () => {
    let rightArrow = productImageSlide.find('.image-slide-arrow').at(1);

    rightArrow.simulate('click');
    rightArrow.simulate('click');
    rightArrow.simulate('click');

    expect(productImageSlide.state('midIdx')).toBe(0);
  });
});