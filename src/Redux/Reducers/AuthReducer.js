//import { ACTION_TYPES } from '../Actions/Api'
const GET_USER_AUTH = "GET_USER_AUTH"
const SET_ACCESS_LEVEL = "SET_ACCESS_LEVEL"

const initialState = {
    currentUserName: "Denis",
    currentUserId: 0,
    currentUserAccessLevel: 'anon'
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_USER_AUTH:
            return {
                ...state
            }
        case SET_ACCESS_LEVEL:
            return {
                ...state,
                currentUserAccessLevel: action.accessLevel
            }
        default:
            return { ...state }
    }
}

export const setAccessLevel = (lvl) => dispatch => {
    dispatch({
        type: SET_ACCESS_LEVEL,
        accessLevel: lvl
    })
}

