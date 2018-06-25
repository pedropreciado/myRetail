import React from 'react';
import StarRatings from 'react-star-ratings';

import ReviewBody from './product_review_body';
import dateParser from '../../../utils/date_parser';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showReviews: false
    };
    
    this.renderProCon = this.renderProCon.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.handleAllReviewsClick = this.handleAllReviewsClick.bind(this);
  }

  handleAllReviewsClick() {
    let showReviews = !this.state.showReviews;

    this.setState({ showReviews });
  }

  renderReviews() {
    let { reviews } = this.props; 

    return reviews.map((review) => {
      return (<ReviewBody review={review} />);
    });
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
    let { showReviews } = this.state;
    
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

          <div id='all-reviews-button' onClick={this.handleAllReviewsClick}>
          <a>{ `${showReviews ? 'hide' : 'show'} all ${reviews.length} reviews` }</a>
          </div>
        </div>
        { 
          showReviews
          ? (
            <div id='reviews-container'>
            { this.renderReviews() }
            </div>
          )
          : (
          <div id='pro-con-outer-container'>
            {this.renderProCon('pro')}
            {this.renderProCon('con')}
          </div>
          )
        }
      </div>
    );
  }
}