import { all } from 'redux-saga/effects'

import { getUserTokenWatcher } from './auth'
import {
  getBankCheckInfoWatcher,
  getPersonsChecksWatcher,
  postPersonChecksWatcher,
  updateChecksCorrectnessWatcher,
} from './personChecks'
import { getNceaWatcher } from './ncea'
import {fetchDebtInfoWatcher} from './debtInfo'

export default function* rootSaga() {
  yield all([
    getUserTokenWatcher(),
    getNceaWatcher(),
    getPersonsChecksWatcher(),
    getBankCheckInfoWatcher(),
    postPersonChecksWatcher(),
    updateChecksCorrectnessWatcher(),
    fetchDebtInfoWatcher(),
  ])
}
