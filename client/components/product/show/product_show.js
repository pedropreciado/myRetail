import React from 'react';

import ProductImages from './product_images';
import ProductReviews from './product_reviews';
import ProductCart from './product_cart';
import ProductFeatures from './product_features';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: 0,
    };

    this.renderImages = this.renderImages.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.renderCart = this.renderCart.bind(this);
    this.renderFeatures = this.renderFeatures.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
    this.renderMobile = this.renderMobile.bind(this);
    this.renderNormal = this.renderNormal.bind(this);
  }

  
  componentWillMount() {
    this.updateWidth();
  }

  componentDidMount() {
    this.props.fetchProducts();
    window.addEventListener('resize', this.updateWidth);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  updateWidth() {
    let screenWidth = window.innerWidth;
    
    this.setState({ screenWidth });
  }

  renderMobile(title) {
    return (
      <div id='product-show-mobile'>
          <div className='show-component product-name'>
            {title}
          </div>
          <div className='show-component product-images'>
            {this.renderImages()}
          </div>
          <div className='show-component product-cart-container'>
            {this.renderCart()}
          </div>

          <div className='show-component'>
            {this.renderFeatures()}
          </div>

          <div className='show-component product-reviews-container'>
            {this.renderReviews()}
          </div>
      </div>
    );
  }

  renderNormal(title) {
    return (
      <div id='product-show-normal'>
        <div className='product-show-split'>
          <div className='show-component product-name'>
            {title}
          </div>
          <div className='show-component product-images'>
            {this.renderImages()}
          </div>

          <div className='show-component product-reviews-container'>
            {this.renderReviews()}
          </div>
        </div>

        <div className='product-show-split'>
          <div className='show-component product-cart-container'>
            {this.renderCart()}
          </div>
          <div className='show-component'>
            {this.renderFeatures()}
          </div>
        </div>
      </div>
    );
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

  renderFeatures() {
    let { features } = this.props.product.ItemDescription[0];
    features = features.map((feature) => { 
      return feature
              .split('<strong>')
              .join(' ')
              .split('</strong>')
              .join(' ');
    });
    
    return (<ProductFeatures features={features} />);
  }

  render() {
    if (!this.props.product) {
      return (<a>Loading ...</a>);
    }

    let { product: { title } } = this.props;
    let { screenWidth } = this.state;
    let mobile = screenWidth < 950 ? true : false;

        
    return (
      <div>
        {
          mobile
          ? this.renderMobile(title)
          : this.renderNormal(title)
        }
      </div>
    );
  }
}