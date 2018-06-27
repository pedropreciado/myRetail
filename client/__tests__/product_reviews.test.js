import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StarRating from 'react-star-ratings';

import ProductReview from '../components/product/show/product_reviews';

const reviews = [
  {
    datePosted: 'Mon Mar 11 13: 13: 55 UTC 2013',
    overallRating: '4',
    review: 'plop',
    screenName: 'me',
    title: 'a good review' 
  }
];
const pro = {
    review: 'a pro',
    datePosted: 'Mon Mar 11 13: 13: 55 UTC 2013',
    overallRating: '5',
    screenName: 'nemo',
    title: 'a review'
  };
const con = {
    review: 'a pro',
    datePosted: 'Mon Mar 11 13: 13: 55 UTC 2013',
    overallRating: '5',
    screenName: 'nemo',
    title: 'a review'
  };

configure({ adapter: new Adapter() });

describe('ProductReview', () => {
  const productReview = shallow(
    <ProductReview reviews={reviews} 
    pro={pro} con={con} rating={5}
    />
  );

  // const productRev = renderer.render(
  //   <ProductReview reviews={reviews}
  //     pro={pro} con={con} rating={4}
  //   />     
  // );

  it('renders correctly', () => {
    expect(productReview).toMatchSnapshot();
  });
  
  it('shows ratings as stars', () => {
    let starRatings = productReview.find(StarRating);

    expect(starRatings.exists()).toBe(true);
  });
  
  it('renders pro header', () => {
    let proHeader = productReview.find('.pro-con-header').at(0);

    expect(proHeader.props().children[0]).toBe('PRO');
  });  
  
  it('renders con header', () => {
    let conHeader = productReview.find('.pro-con-header').at(1);

    expect(conHeader.props().children[0]).toBe('CON');
  });
  
  it('renders all reviews when "all reviews button" is clicked', () => {
    let allReviewsButton = productReview.find('#all-reviews-button');
    allReviewsButton.simulate('click');

    expect(productReview.find('#reviews-container').exists()).toBe(true);
  });
});