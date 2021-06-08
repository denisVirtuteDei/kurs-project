import { SET_AUTH_TOKEN, SIGN_OUT_REQUEST } from '../Constants/Types'

const initialState = {
  access_token: null,
  username: '',
  priority: 'anon',
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      window.sessionStorage.setItem('access_token', action.payload.access_token)
      return {
        ...state,
        ...action.payload,
      }
    case SIGN_OUT_REQUEST:
      window.sessionStorage.removeItem('access_token')
      return {
        ...state,
        ...initialState,
      }
    default:
      return state
  }
}
