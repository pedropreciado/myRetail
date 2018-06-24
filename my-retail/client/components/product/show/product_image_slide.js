import React from 'react';

export default class ProductImageSlide extends React.Component {
  constructor(props) {
    super(props);

    let { currentImageIdx, images } = props,
        leftIdx = (currentImageIdx - 1) % images.length,
        midIdx = currentImageIdx,
        rightIdx = (currentImageIdx + 1) % images.length;
    
    this.state = {
      leftIdx,
      midIdx,
      rightIdx,
    };
  }

  render() {
    let { images } = this.props;
    let { leftIdx, midIdx, rightIdx } = this.state;

    return (
      <div className='product-image-slide-container'>
        <p>POOP</p>
        <img src={images[leftIdx]} />
        <img src={images[midIdx]} />
        <img src={images[rightIdx]} />
      </div>
    );
  }
}

