import { takeEvery, put, call } from 'redux-saga/effects'
import { fetchAllDebtInfo, setDebtInfo } from '../Redux/Actions/DebtInfoAction'

import { FETCH_ALL_DEBT_INFO_REQUEST } from '../Redux/Constants/Types'

export function* fetchDebtInfoWatcher() {
  yield takeEvery(FETCH_ALL_DEBT_INFO_REQUEST, fetchDebtInfoWorker)
}

function* fetchDebtInfoWorker({ payload }) {
  try {
    const response = yield call(fetchAllDebtInfo, payload)
    yield put(setDebtInfo(response.data))
  } catch (error) {
    yield call(console.log, error.message)
  }
}
