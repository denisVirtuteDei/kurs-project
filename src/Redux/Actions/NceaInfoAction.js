import api from './Api'
import { FETCH_ALL_NCEA_REQUEST, SET_NCEA } from '../Constants/Types'

const baseUrl = 'https://localhost:44383/api/EconomicActivityTypes'

export const fetchNceaRequest = () => ({
  type: FETCH_ALL_NCEA_REQUEST,
})

export const setNceaInfo = data => ({
  type: SET_NCEA,
  payload: data,
})

export const fetchAllNceaInfo = () => api.crudApi(baseUrl).fetchAll()
