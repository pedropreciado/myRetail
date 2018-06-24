import React from 'react';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: 0,
      screenHeight: 0
    };
  }

  render() {
    let { product: { title } } = this.props;
    
    return (
      <div className='product-show'>
        <div className='product-name'>
        { title }
        </div>
        <div className='product-images'>
        </div>
        <div className='product-reviews-container'>
        </div>
        <div className='product-cart-container'>
        </div>
        <div className='product-details-container'>
        </div>
      </div>
    );
  }
}