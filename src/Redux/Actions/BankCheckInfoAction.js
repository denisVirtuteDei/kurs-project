import api from './Api'
import {
  CREATE_BANK_CHECK,
  CREATE_BANK_CHECK_REQUEST,
  UPDATE_BANK_CHECK_REQUEST,
  UPDATE_BANK_CHECK,
  FETCH_PERSONS_CHECKS,
  SET_PERSONS_CHECKS,
  FETCH_BY_ID_BANK_CHECK,
  SET_BANK_CHECK,
} from '../Constants/Types'

const fetchByIdUrl = 'https://localhost:44383/api/BankCheckInfo/'
const fetchChecksUrl = 'https://localhost:44383/api/PersonsChecksInfo/'
const bankCheckUrl = 'https://localhost:44383/api/BankCheck/'

//fetch all b/c with persons info
export const fetchChecks = date => api.crudApi(fetchChecksUrl + `${date}/`).fetchAll()

export const fetchChecksRequest = deadline => {
  const dateTemplate = require('date-template')
  const date = dateTemplate('%Y-%M-%D', deadline)
  return {
    type: FETCH_PERSONS_CHECKS,
    payload: date,
  }
}

export const setChecks = data => ({
  type: SET_PERSONS_CHECKS,
  payload: data,
})

//**************************************************************************

//fetch by person unp
export const fetchByIdCheckInfo = id => api.crudApi(fetchByIdUrl).fetchById(id)

export const fetchByIdCheckInfoRequest = id => ({
  type: FETCH_BY_ID_BANK_CHECK,
  payload: id,
})

export const setBankCheckInfo = data => ({
  type: SET_BANK_CHECK,
  payload: data,
})

//**************************************************************************

const formateData = data => {
  let dateTemplate = require('date-template')
  return {
    ...data,
    finalSum: parseFloat(data.finalSum),
    payedDate: data.payedDate ? data.payedDate : dateTemplate('%Y-%M-%D', new Date()),
  }
}

//**************************************************************************

export const postBankCheck = data => {
  let _data = formateData(data)
  return api.crudApi(bankCheckUrl).create(_data)
}

export const createBankCheckRequest = data => ({
  type: CREATE_BANK_CHECK_REQUEST,
  payload: data,
})

export const createBankCheck = data => ({
  type: CREATE_BANK_CHECK,
  payload: data,
})

//**************************************************************************

export const putBankCheckCorrectness = (id, data) => api.crudApi(bankCheckUrl).update(id, data)

export const updateBankCheckCorrectnessRequest = (id, data) => ({
  type: UPDATE_BANK_CHECK_REQUEST,
  payload: { id, data },
})

export const updateBankCheckCorrectness = (id, data) => ({
  type: UPDATE_BANK_CHECK,
  payload: { id, ...data },
})
