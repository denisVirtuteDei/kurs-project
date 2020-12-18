import {
    CREATE_BANK_CHECK,
    UPDATE_BANK_CHECK,
    FETCH_PERSONS_CHECKS,
    FETCH_BY_ID_BANK_CHECK, 
 } from '../Constants/Types';

const initialState = {
    backChecks: []
}

export const bankCheckInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PERSONS_CHECKS:
            return {
                ...state,
                backChecks: [...action.payload]
            };
        case FETCH_BY_ID_BANK_CHECK:
            return {
                ...state,
                backChecks: [...action.payload]
            };
        case CREATE_BANK_CHECK:
            return {
                ...state,
                backChecks: [...state.backChecks, action.payload]
            };
        case UPDATE_BANK_CHECK:
            return {
                ...state,
                backChecks: state.backChecks.map(x => x.id === action.payload.id ? action.payload : x)
            };
        default:
            return state;
    }
}