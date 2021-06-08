import api from './Api'
import { FETCH_ALL_DEBT_INFO, FETCH_ALL_DEBT_INFO_REQUEST } from '../Constants/Types'

const baseUrl = 'https://localhost:44383/api/DebtInfo/'

export const fetchAllDebtInfo = id => api.crudApi(baseUrl).fetchById(id)

export const fetchAllDebtInfoRequest = id => ({
  type: FETCH_ALL_DEBT_INFO_REQUEST,
  payload: id,
})

export const setDebtInfo = data => ({
  type: FETCH_ALL_DEBT_INFO,
  debtList: data,
})
