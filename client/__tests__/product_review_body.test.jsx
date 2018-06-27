import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StarRating from 'react-star-ratings';

import ProductReviewBody from '../components/product/show/product_review_body';

configure({ adapter: new Adapter() });

const review = {
  datePosted: 'Mon Mar 11 13: 13: 55 UTC 2013',
  overallRating: '4',
  review: 'plop',
  screenName: 'me',
  title: 'a good review'
};

describe('ProductReviewBody', () => {
  let productReviewBody = shallow(
    <ProductReviewBody review={review}/>
  );
  
  it('renders correctly', () => {
    expect(productReviewBody).toMatchSnapshot();
  });
  
  it('shows ratings as stars', () => {
    let header = productReviewBody.find('.pro-con-body-header');

    expect(header.props().children[0].type).toBe(StarRating);
  });
  
  it('shows title', () => {
    let header = productReviewBody.find('.pro-con-body-header');
    
    expect(header.props().children[1].props.children).toBe('a good review');
  });
  
  it('shows review', () => {
    let reviewContainer = productReviewBody.find('.pro-con-review').at(0);
    
    expect(reviewContainer.props().children).toBe('plop');
  });
});