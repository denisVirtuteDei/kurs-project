import { takeEvery, put, call } from 'redux-saga/effects'

import { GET_AUTH_TOKEN_REQUEST } from '../Redux/Constants/Types'

import { getAuthToken, setAuthToken } from '../Redux/Actions/AuthAction'

export function* getUserTokenWatcher() {
  yield takeEvery(GET_AUTH_TOKEN_REQUEST, getUserTokenWorker)
}

function* getUserTokenWorker({payload}) {
  try {
    const response = yield call(getAuthToken, payload)
    yield put(setAuthToken(response.data))
  } catch (error) {
    yield call(console.log, error.message)
  }
}
