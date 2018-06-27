import ProductReducer from '../reducers/product_reducer';

const products = { products: [{ title: 'itemName'}]};

describe('ProductReducer', () => {
  it('should return the initial state', () => {
    expect(ProductReducer(undefined, {}))
      .toEqual({})
  });

  it('should handle action of type: RECEIVE_ALL_PRODUCTS', () => {
    let action = {type: 'RECEIVE_ALL_PRODUCTS', products};
    expect(ProductReducer(undefined, action))
      .toEqual(products);
  });
});