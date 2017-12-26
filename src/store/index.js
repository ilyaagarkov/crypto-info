import { createStore } from 'redux';
import rootReducer from '../rootReducer';

export function getStore(defaultState) {
  return createStore(rootReducer,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
