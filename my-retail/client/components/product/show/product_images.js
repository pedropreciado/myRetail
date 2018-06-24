import React from 'react';
import ProductImageSlide from './product_image_slide';

export default class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    let { primaryImageIdx } = props;
    
    this.state = {
      currentImageIdx: primaryImageIdx,
    };
  }

  render() {
    let { images } = this.props;
    let { currentImageIdx } = this.state;
    console.log(images)
    return (
      <div>
        <img src={images[currentImageIdx]}/>
        <ProductImageSlide 
        images={images}
        currentImageIdx={currentImageIdx}
        />          
      </div>
    );
  }
}