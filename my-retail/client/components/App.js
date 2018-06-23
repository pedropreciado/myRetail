import React, { Component } from 'react';
import { Provider } from 'react-redux';
import '../css/App.css';
import ProductShow from './product/product_show';

const App = ({ store }) => (
  <Provider store={store}>
    <ProductShow />
  </Provider>
);

export default App;
