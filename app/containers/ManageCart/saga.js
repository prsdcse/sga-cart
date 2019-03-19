import { takeLatest, call, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import * as types from './constants';
import { getUserInfoSuccessAction, getUserInfoFailureAction } from './actions';

function* getUserInfoSaga(action) {
  const { userId } = action;
  const apiUrl = `/api/user/${userId}`;

  try {
    const results = yield call(fetch, apiUrl);
    const resolvedResults = yield results.json();

    if (resolvedResults) {
      yield put(getUserInfoSuccessAction(resolvedResults));
    }
  } catch (err) {
    console.error('Error while fetch the user details', err);
    yield put(getUserInfoFailureAction(err));
  }
}

// Individual exports for testing
export default function* manageCartSaga() {
  yield takeLatest(types.GET_USERINFO, getUserInfoSaga);
}
