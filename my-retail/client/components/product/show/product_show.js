import React from 'react';
import ProductImages from './product_images';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: 0,
      screenHeight: 0
    };

    this.renderImages = this.renderImages.bind(this);
  }

  renderImages() { 
    let { PrimaryImage, AlternateImages } = this.props.product.Images[0];
    let images = AlternateImages
                  .map((imgObj) => imgObj.image)
    images.push(PrimaryImage[0].image);

    return (
      <ProductImages 
      primaryImageIdx={images.length - 1}
        images={images}
      />
    );
  }
  
  render() {
    let { product: { title } } = this.props;
    
    return (
      <div className='product-show'>
        <div className='show-component product-name'>{ title }</div>
        <div className='show-component product-images'>
          { this.renderImages() }
        </div>
        <div className='show-component product-reviews-container'>
        </div>
        <div className='show-component product-cart-container'>
        </div>
        <div className='show-component product-details-container'>
        </div>
      </div>
    );
  }
}