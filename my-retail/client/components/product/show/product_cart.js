import React from 'react';

export default class ProductCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { offers: { price } }  = this.props;
    
    return (
      <div>
        <div id='price-container'>{ price }</div>
        <div id='promotions-container'></div>
        <div id='quantity-field'></div>
        <div id='cart-buttons'></div>
        <div id='cart-options-container'></div>

        
      </div>
    );
  }
}