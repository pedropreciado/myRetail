import React from 'react';
import StarRatings from 'react-star-ratings';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { rating, reviews } = this.props;
    
    return (
      <div id='ratings-container'>
        <div id='rating-header'>
        <div>
        <StarRatings 
        rating={Number(rating)} starRatedColor='red' 
        numberOfStars={5} name='rating' 
        starDimension='20px' starSpacing='5px'
        /> overall
        </div>
        <a id='all-reviews-button'>
        { `view all ${reviews.length} reviews` }
        </a>
        </div>
      </div>
    );
  }
}