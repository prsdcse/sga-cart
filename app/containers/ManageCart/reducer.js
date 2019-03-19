/*
 *
 * ManageCart reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  users: {},
  errors: false,
});

function manageCartReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERINFO_SUCCESS:
      return state
        .set('users', action.results)
        .set('errors', false)
    case types.GET_USERINFO_FAILURE:
      return state
        .set('errors', action.err);
    default:
      return state;
  }
}

export default manageCartReducer;
