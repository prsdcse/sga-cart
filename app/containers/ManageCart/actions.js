/*
 *
 * ManageCart actions
 *
 */

import * as types from './constants';

export function getUserInfoAction(userId) {
  return {
    type: types.GET_USERINFO,
    userId,
  };
}

export function getUserInfoSuccessAction(results) {
  return {
    type: types.GET_USERINFO_SUCCESS,
    results,
  };
}

export function getUserInfoFailureAction(err) {
  return {
    type: types.GET_USERINFO_FAILURE,
    err,
  };
}
