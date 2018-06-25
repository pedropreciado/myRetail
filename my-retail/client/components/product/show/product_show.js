import React from 'react';

import ProductImages from './product_images';
import ProductReviews from './product_reviews';
import ProductCart from './product_cart';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: 0,
      screenHeight: 0
    };

    this.renderImages = this.renderImages.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.renderCart = this.renderCart.bind(this);
  }

  renderCart() {
    let { 
      Offers, 
      Promotions, 
      purchasingChannelCode
    } = this.props.product;

    let promotions = Promotions.map(promo => 
        promo.Description[0].shortDescription
      ),
        offers = { 
          price: Offers[0].OfferPrice[0].formattedPriceValue,
          qualifier: Offers[0].OfferPrice[0].priceQualifier,
        };

    return (
      <ProductCart 
      promotions={promotions} 
      offers={offers} 
      code={purchasingChannelCode}
      />
    );
  }

  renderImages() { 
    let { PrimaryImage, AlternateImages } = this.props.product.Images[0];
    let images = AlternateImages.map((imgObj) => imgObj.image);
    images.push(PrimaryImage[0].image);

    return (
      <ProductImages 
      primaryImageIdx={images.length - 1}
      images={images}
      />
    );
  }
    
  renderReviews() {
    let { 
      consolidatedOverallRating,
      Reviews,
      Pro,
      Con
    } = this.props.product.CustomerReview[0];

    return (
      <ProductReviews 
      pro={Pro[0]} con={Con[0]} 
      rating={consolidatedOverallRating} 
      reviews={Reviews} 
      />
    );
  }

  render() {
    let { product: { title } } = this.props;
    
    return (
      <div className='product-show'>
        <div className='product-show-split'>
          <div className='show-component product-name'>{ title }</div>
          <div className='show-component product-images'>
            { this.renderImages() }
          </div>
          <div className='show-component product-reviews-container'>
            { this.renderReviews() }
          </div>
        </div>

        <div className='product-show-split'>
          <div className='show-component product-cart-container'>
            {this.renderCart()}
          </div>
          <div className='show-component product-details-container'>
          <a>details</a>
          </div>
        </div>
      </div>
    );
  }
}