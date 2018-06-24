import React from 'react';

export default class ProductImages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { primaryImage, alternateImages } = this.props;
    
    return (
      <div>
      <img src={primaryImage}/>
        {
          alternateImages.map((img) => <img src={img} />)
        }
      </div>
    );
  }
}