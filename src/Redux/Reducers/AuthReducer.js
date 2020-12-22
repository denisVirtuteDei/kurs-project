import { GET_AUTH_TOKEN, SIGN_OUT } from '../Constants/Types'

const initialState = {
    access_token: null,
    username: '',
    priority: 'anon'
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH_TOKEN:
            return {
                ...state,
                ...action.payload,
            }
        case SIGN_OUT:
            window.sessionStorage.removeItem('access_token');
            window.sessionStorage.removeItem('username');
            window.sessionStorage.removeItem('priority');
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

