import React from 'react';
import { FaTag } from 'react-icons/lib/fa';

export default class ProductCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1
    };
    
    this.renderPromotions = this.renderPromotions.bind(this);
    this.renderQuantityField = this.renderQuantityField.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleQuantityChange(num) {
    let quantity = this.state.quantity + num;
    
    this.setState({ quantity: (!quantity ? 1 : quantity )});
  }

  renderQuantityField() {
    let { quantity } = this.state;
    
    return (
      <div id='quantity-field'>
      <a>{'quantity: '}</a>

        <div id='quantity-button-container'>
        <div 
        onClick={(() => this.handleQuantityChange(-1))}
        className='quantity-button' 
        id='minus'> - </div>
          {quantity}
        <div 
        onClick={() => this.handleQuantityChange(1)}
        className='quantity-button' 
        id='plus'> + </div>
        </div>
      </div>
    );
  }
  
  renderPromotions() {
    let { promotions } = this.props;

    return promotions.map((promo, idx) => {
      return (
      <div key={idx} className='promo'>
      <FaTag color='red'/>
        <a>{ promo }</a>
        </div>
      )
    });
  }

  render() {
    let { offers: { price, qualifier } }  = this.props;
    
    return (
      <div id='cart-container'>
        <div id='price-container'>
          <a>{ price }</a>
          <a id='price-qualifier'>{ qualifier }</a>
        </div>
        <div id='promo-container'>
          { this.renderPromotions() }
        </div>
        { this.renderQuantityField() }
        <div id='cart-buttons'></div>
        <div id='cart-options-container'></div>

        
      </div>
    );
  }
}