import { createStore, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleWare(thunk)
  );
};

export default configureStore;