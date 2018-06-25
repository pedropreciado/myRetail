import React from 'react';
import StarRatings from 'react-star-ratings';

import dateParser from '../../../utils/date_parser';

const ReviewBody = (props) => {
  let { 
    datePosted, 
    overallRating, 
    review, 
    screenName,
    title
  } = props.review;
  let { day, month, year } = dateParser(datePosted);
  
  return (
    <div>
      <div className='pro-con-body other-review'>
        <div className='pro-con-body-header'>
          <StarRatings
            rating={Number(overallRating)} starRatedColor='red'
            numberOfStars={5} name='rating'
            starDimension='10px' starSpacing='2.5px'
          />
          <a>{title}</a>
        </div>
        <p className='pro-con-review'>{review}</p>
        <a className='pro-con-review author'>
          {`${screenName} ${month} ${day}, ${year}`}
        </a>
      </div>
    </div>
  );
};

export default ReviewBody;