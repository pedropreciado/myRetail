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
    this.renderCartButtons = this.renderCartButtons.bind(this);
    this.renderReturnsInfo = this.renderReturnsInfo.bind(this);
    this.renderCartOptions = this.renderCartOptions.bind(this);
  }

  handleQuantityChange(num) {
    let quantity = this.state.quantity + num;
    
    this.setState({ quantity: (!quantity ? 1 : quantity )});
  }

  renderReturnsInfo() {
    return (
      <div id='returns-container'>
        <div id='returns-left'>returns</div>
        <div id='returns-right'>
        This item must be returned within 30 days osd the ship date. See return policy for
        details. Prices, promotions, styles an availability may vary by store and online.
        </div>
      </div>
    );
  }
  
  renderCartOptions() {
    return (
      <p>buttttt</p>
    );
  }

  renderCartButtons() {
    let { code } =  this.props;
    let buttons = [
    (<div 
      className='cart-button' 
      id='add-to-cart'
      onClick={() => alert('Added to cart!')}
    >ADD TO CART
    </div>),
    (<div 
      className='cart-button' 
      onClick={() => alert('Searching for nearest store ...')}
      id='pick-up'>PICK UP IN STORE</div>), 
  ];

    if (code === 1) {
      buttons = buttons.slice(0, 1);
    } else if (code === 2) {
      buttons = buttons.slice(1, 2);
    }
    
    return (
      <div id='cart-buttons-container'>
        { buttons }
      </div>
    );
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
        { this.renderCartButtons() }
        { this.renderReturnsInfo() }
        { this.renderCartOptions() }
      </div>
    );
  }
}