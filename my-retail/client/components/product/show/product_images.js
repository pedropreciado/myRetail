import React from 'react';
import { FaSearchPlus } from 'react-icons/lib/fa';
import Modal from 'react-modal';

import ProductImageSlide from './product_image_slide';

export default class ProductImages extends React.Component {
  constructor(props) {
    super(props);
    let { primaryImageIdx } = props;
    
    this.state = {
      currentImageIdx: primaryImageIdx,
      modalIsOpen: false,
    };

    this.changeImage = this.changeImage.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    let modalIsOpen = !this.state.modalIsOpen;
    this.setState({ modalIsOpen });
  }
  
  changeImage(currentImageIdx) {
    this.setState({ currentImageIdx });
  }
  
  render() {
    let { images, itemTitle } = this.props;
    let { currentImageIdx, modalIsOpen } = this.state;
    
    return (
      <div className='product-image-container'>
        <img id='primary-image' src={images[currentImageIdx]}/>
        
        <a onClick={this.toggleModal} id='zoom-image'><FaSearchPlus />view larger</a>
        
        <ProductImageSlide 
        images={images}
        currentImageIdx={currentImageIdx}
        changeImage={this.changeImage}
        />          
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={this.toggleModal}
        contentLabel={itemTitle}
        ariaHideApp={false}
        > 
          <img 
          onClick={this.toggleModal} 
          id='in-modal' 
          src={images[currentImageIdx]} 
          />
        </Modal>
      </div>
    );
  }
}