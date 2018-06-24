import React from 'react';
import StarRatings from 'react-star-ratings';

import dateParser from '../../../utils/date_parser';

export default class extends React.Component {
  constructor(props) {
    super(props);
    
    this.renderProCon = this.renderProCon.bind(this);
  }

  renderProCon(reviewType) {
    let { 
      review, 
      datePosted,
      overallRating,
      screenName,
      title,
    } = this.props[reviewType];
    let { month, day, year } = dateParser(datePosted);

    return (
      <div className='pro-con-inner-container'>
        <div className='pro-con-header'>
          { reviewType.toUpperCase() }
          <a>{
            `most helpful 
          ${
            reviewType === 'pro' 
            ? '4-5' 
            : '1-2'
          } star review`
          }</a>
        </div>

        <div className='pro-con-body'>
          <div className='pro-con-body-header'>
          <StarRatings
          rating={Number(overallRating)} starRatedColor='red'
          numberOfStars={5} name='rating'
          starDimension='10px' starSpacing='2.5px'
          />
          <a>{ title }</a>
          </div>
          <p className='pro-con-review'>{ review }</p>
          <a className='pro-con-review author'>
          { `${screenName} ${month} ${day}, ${year}`}
          </a>
        </div>
      </ div>
    );
  }

  render() {
    let { rating, reviews } = this.props;
    
    return (
      <div id='ratings-container'>
        <div id='ratings-header'>
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
        <div id='pro-con-outer-container'>
        { this.renderProCon('pro') }
        { this.renderProCon('con') }
        </div>
      </div>
    );
  }
}