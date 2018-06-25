import React from 'react';

const ProductIndexItem = ({ product }) => {
  let { title } = product;  
  
  return (
    <div className='product-index-item'>
      <a>{title}</a>
    </div>
  );
};

export default ProductIndexItem;