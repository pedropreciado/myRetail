import { RECEIVE_ALL_PRODUCTS } from '../actions/product_actions';

const ProductReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      let { products } = action;
      return Object.assign({}, oldState, { products });
    default: 
      return oldState;  
  }
};

export default ProductReducer;