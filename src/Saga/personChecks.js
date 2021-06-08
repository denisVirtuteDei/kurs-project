import { takeEvery, put, call } from 'redux-saga/effects'

import {
  CREATE_BANK_CHECK_REQUEST,
  FETCH_BY_ID_BANK_CHECK,
  FETCH_PERSONS_CHECKS,
  UPDATE_BANK_CHECK_REQUEST,
} from '../Redux/Constants/Types'

import {
  createBankCheck,
  fetchByIdCheckInfo,
  fetchChecks,
  postBankCheck,
  putBankCheckCorrectness,
  setBankCheckInfo,
  setChecks,
  updateBankCheckCorrectness,
} from '../Redux/Actions/BankCheckInfoAction'

export function* getPersonsChecksWatcher() {
  yield takeEvery(FETCH_PERSONS_CHECKS, getPersonsChecksWorker)
}

function* getPersonsChecksWorker({ payload }) {
  try {
    const response = yield call(fetchChecks, payload)
    yield put(setChecks(response.data))
  } catch (error) {
    yield call(console.log, error.message)
  }
}

export function* getBankCheckInfoWatcher() {
  yield takeEvery(FETCH_BY_ID_BANK_CHECK, getBankCheckInfoWorker)
}

function* getBankCheckInfoWorker({ payload }) {
  try {
    const response = yield call(fetchByIdCheckInfo, payload)
    yield put(setBankCheckInfo(response.data))
  } catch (error) {
    yield call(console.log, error.message)
  }
}

export function* postPersonChecksWatcher() {
  yield takeEvery(CREATE_BANK_CHECK_REQUEST, postPersonChecksWorker)
}

function* postPersonChecksWorker({ payload }) {
  try {
    const response = yield call(postBankCheck, payload)
    yield put(createBankCheck(response.data))
  } catch (error) {
    yield call(console.log, error.message)
  }
}

export function* updateChecksCorrectnessWatcher() {
  yield takeEvery(UPDATE_BANK_CHECK_REQUEST, updateChecksCorrectnessWorker)
}

function* updateChecksCorrectnessWorker({ payload }) {
  try {
    const response = yield call(putBankCheckCorrectness, payload.id, payload.data)
    yield put(updateBankCheckCorrectness(response.data.id, response.data.data))
  } catch (error) {
    yield call(console.log, error.message)
  }
}
