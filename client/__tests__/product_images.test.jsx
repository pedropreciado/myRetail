import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from 'react-modal';
import Renderer from 'react-test-renderer';

import ProductImages from '../components/product/show/product_images';

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
  it('renders the primary image', () => {
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
});