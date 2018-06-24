import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ProductIndexContainer from './product/product_index_container';

const App = ({ store }) => (
  <Provider store={store}>
    <ProductIndexContainer />
  </Provider>
);

export default App;
