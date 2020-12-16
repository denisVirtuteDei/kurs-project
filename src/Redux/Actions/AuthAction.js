import { GET_AUTH_TOKEN, SIGN_OUT } from '../Constants/Types'
import axios from 'axios';

const authUrl = 'https://localhost:44383/token'

export const getAuthToken = (username, password) => dispatch => {
    axios.post(authUrl, { username, password })
        .then(response => {
            debugger;
            if (response.data.access_token) {
                window.sessionStorage.setItem('access_token', response)
                dispatch({
                    type: GET_AUTH_TOKEN,
                    payload: response.data
                })
            }
        })
        .catch(err => console.log(err))
}

export const singOut = () => dispatch => {
    dispatch({
        type: SIGN_OUT,
        payload: []
    })
}