import { combineReducers } from 'redux';

import auth from './auth/reducer';
// import demais reducers

export default combineReducers({
  auth,
  // demais reducers
});
