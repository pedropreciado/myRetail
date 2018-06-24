import React from 'react';
// import ProductIndexItem from './product_index_item';
import ProductShow from './show/product_show';

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
      <div id='product-index'>
      
      {
        products.map((product) => {
          return (<ProductShow product={product} />);
        })
      }  
      </div>
    );
  }
}