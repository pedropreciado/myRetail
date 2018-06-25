import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ProductShowContainer from './product/show/product_show_demo_container';
// import ProductIndexContainer from './product/product_index_container';

const App = ({ store }) => (
  <Provider store={store}>
    <ProductShowContainer />
  </Provider>
);

export default App;
