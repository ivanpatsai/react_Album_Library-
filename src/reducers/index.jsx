import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import AlbumsReducer from './reducer_album';
import HomeReducer from './reducer_count';


export function configure(initialState = {}) {
  const reducer = combineReducers({
    albums: AlbumsReducer,
    count: HomeReducer,
    form: formReducer
  });
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk)
  ));

  return store
}
