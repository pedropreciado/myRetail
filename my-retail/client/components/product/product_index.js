import React from 'react';
import ProductShow from './product_show';

export default class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    let { products } = this.props;    
    
    return (
      <div>
      {
        products.map((product) => {
          console.log('pro:', product)
          return (<ProductShow product={product} />);
        })
      }  
      </div>
    );
  }
}