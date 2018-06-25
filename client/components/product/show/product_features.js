import React from 'react';

const ProductFeatures = ({ features }) => {    
    return (
      <div id='product-feature-container'>
        <div>product highlights</div>
        <ul>
            {features.map((feature, idx) => (
            <li className='feature-item' key={idx} >{ feature }</li>
            ))}
        </ul>
      </div>
    );
};

export default ProductFeatures;