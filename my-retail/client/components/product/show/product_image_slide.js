import React from 'react';
import realMod from '../../../utils/mod';
import { FaChevronLeft, FaChevronRight } from 'react-icons/lib/fa';

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

    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick(midIdx) {
    let leftIdx = realMod((midIdx - 1), this.props.images.length),
        rightIdx = realMod((midIdx + 1), this.props.images.length);
    
    this.props.changeImage(midIdx);

    this.setState({ leftIdx, midIdx, rightIdx });
  }
  
  render() {
    let { images } = this.props;
    let { leftIdx, midIdx, rightIdx } = this.state;

    return (
      <div className='product-image-slide-container'>
        <div className='slide-image image-slide-arrow'><FaChevronLeft /></div>

        <img className='slide-image' 
        onClick={() => this.handleImageClick(leftIdx)} 
        src={images[leftIdx]} 
        />
        <img className='slide-image current' src={images[midIdx]} />
        <img className='slide-image' 
        onClick={() => this.handleImageClick(rightIdx)} 
        src={images[rightIdx]} 
        />

        <div className='slide-image image-slide-arrow'><FaChevronRight /></div>
      </div>
    );
  }
}

