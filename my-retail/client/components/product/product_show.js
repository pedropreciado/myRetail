import React from 'react';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  } 
  
  render() {
    let { product: { title } } = this.props;
    
    return (
      <h1>{ title }</h1>
    );
  }
}