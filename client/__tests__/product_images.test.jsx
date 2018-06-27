import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from 'react-modal';

import ProductImages from '../components/product/show/product_images';
import ProductImageSlide from '../components/product/show/product_image_slide';

configure({ adapter: new Adapter() });

let images = [
  'image.jpg',
  'image_2.jpg',
  'image_3.jpg'
];

describe('ProductImages', () => {
  let productImages = shallow(
    <ProductImages 
    primaryImageIdx={2}
    images={images}
    />
  );

  it('renders correctly', () => {
    expect(productImages).toMatchSnapshot()
  });
  
  it('renders the primary image first', () => {
    let primaryImage = productImages.find('#primary-image');
    expect(primaryImage.props().src).toBe('image_3.jpg');
  });
  
  it('begins with modal closed', () => {
    let modal = productImages.find(Modal);

    expect(modal.props().isOpen).toBe(false);
  });
  
  it('opens modal on selected image click', () => {
    let primaryImage = productImages.find('#primary-image');
    primaryImage.simulate('click');
    let modal = productImages.find(Modal);
    
    expect(modal.props().isOpen).toBe(true);
    modal.find('#in-modal').simulate('click'); // close modal
  });
  
  it('opens modal on "view larger" button', () => {
    let button = productImages.find('#zoom-image');
    
    button.simulate('click');
    let modal = productImages.find(Modal);

    expect(modal.props().isOpen).toBe(true);
    modal.find('#in-modal').simulate('click');
  });

  it('renders ProductImageSlide component', () => {
    expect(productImages.find(ProductImageSlide).exists()).toBe(true);
  });
});