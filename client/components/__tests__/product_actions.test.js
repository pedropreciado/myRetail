import jest from 'jest';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as ProductAPIUtil from '../../utils/product_api_util';
import { fetchProducts } from '../../actions/product_actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('thunks', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ products: {} });
  });

  describe('fetchProducts', () => {
    it('dispatches RECEIVE_ALL_PRODUCTS when products have been fetched', () => {
      const products = { CatalogEntryView: [{ title: 'a product' }] };
      const expectedActions = [{ type: 'RECEIVE_ALL_PRODUCTS', products }];

      ProductAPIUtil.fetchProducts = jest.fn(() => (
        Promise.resolve(products)
      ));

      return store.dispatch(fetchProducts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
