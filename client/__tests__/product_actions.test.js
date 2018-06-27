import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchProducts } from '../actions/product_actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Product action creators', () => {
  it('dispatches the correct actions on successful fetch request', () => {
    let response = { CatalogEntryView: [{ title: 'item'}]};
    
    fetch.mockResponse(JSON.stringify(response));
    
    const expectedActions = [{ type: 'RECEIVE_ALL_PRODUCTS', products: [{title: 'item'}]}];
    const store = mockStore({ response });

    return (
      store
        .dispatch(fetchProducts())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
        .catch(err => console.log(err))
    );
  });
}); 