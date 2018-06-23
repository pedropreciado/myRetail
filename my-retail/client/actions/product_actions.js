import * as ProductAPIUtil from '../utils/product_api_util';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';

export const fetchProducts = () => dispatch => {
  ProductAPIUtil
    .fetchProducts()
    .then(({ data }) => {
      dispatch(receiveAllProducts(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

const receiveAllProducts = (products) => {
  return {
    type: 'RECEIVE_ALL_PRODUCTS',
    products
  };
};