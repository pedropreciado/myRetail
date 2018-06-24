import React from 'react';
import ProductImageSlide from './product_image_slide';

export default class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    let { primaryImageIdx } = props;
    
    this.state = {
      currentImageIdx: primaryImageIdx,
    };

    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(currentImageIdx) {
    this.setState({ currentImageIdx });
  }
  
  render() {
    let { images } = this.props;
    let { currentImageIdx } = this.state;
    
    return (
      <div className='product-image-container'>
        <img id='primary-image' src={images[currentImageIdx]}/>
        <ProductImageSlide 
        images={images}
        currentImageIdx={currentImageIdx}
        changeImage={this.changeImage}
        />          
      </div>
    );
  }
}