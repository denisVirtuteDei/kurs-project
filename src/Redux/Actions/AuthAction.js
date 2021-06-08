import { GET_AUTH_TOKEN_REQUEST, SET_AUTH_TOKEN, SIGN_OUT_REQUEST } from '../Constants/Types'
import axios from 'axios'

const authUrl = 'https://localhost:44383/token'

export const getAuthTokenRequest = (username, password) => ({
  type: GET_AUTH_TOKEN_REQUEST,
  payload: { username, password },
})

export const setAuthToken = authInfo => ({
  type: SET_AUTH_TOKEN,
  payload: authInfo,
})

export const singOut = () => ({
  type: SIGN_OUT_REQUEST,
})

export const getAuthToken = userInfo => axios.post(authUrl, userInfo)
