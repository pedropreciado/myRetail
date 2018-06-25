import React from 'react';

const ProductFeatures = (props) => {
    let { features } = props;
    
    return (
      <div id='product-feature-container'>
        <div>product highlights</div>
        <ul>
            {features.map((feature) => (
            <li className='feature-item'>{ feature }</li>
            ))}
        </ul>
      </div>
    );
};

export default ProductFeatures;