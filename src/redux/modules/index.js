import {combineReducers} from 'redux';
import accounts from './accounts';

const reducer = combineReducers({
  accounts,
  // can continue to add reducers here
});

export const rootReducer = (state, action) => {
  return reducer(state, action);
};
