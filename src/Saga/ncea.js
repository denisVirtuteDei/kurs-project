import { takeEvery, put, call } from 'redux-saga/effects'

import { FETCH_ALL_NCEA_REQUEST } from '../Redux/Constants/Types'

import { fetchAllNceaInfo, setNceaInfo } from '../Redux/Actions/NceaInfoAction'

export function* getNceaWatcher() {
  yield takeEvery(FETCH_ALL_NCEA_REQUEST, getNceaWorker)
}

function* getNceaWorker() {
  try {
    const response = yield call(fetchAllNceaInfo)
    yield put(setNceaInfo(response.data))
  } catch (error) {
    yield call(console.log, error.message)
  }
}
