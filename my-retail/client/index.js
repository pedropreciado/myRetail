import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  console.log(store);
  
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
});

