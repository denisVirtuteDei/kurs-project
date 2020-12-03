import { FETCH_BY_ID_BANK_CHECK, CREATE_BANK_CHECK, ACTION_TYPES } from '../Constants/Types';

const initialState = {
    data: []
}

export const bankCheckInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                data: [...action.payload]
            };
        case FETCH_BY_ID_BANK_CHECK:
            return {
                ...state,
                data: [...action.payload]
            };
        case CREATE_BANK_CHECK:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                data: state.data.map(x => x.id === action.payload.id ? action.payload : x)
            };
        // case CREATE_BANK_CHECK:
        //     return {
        //         ...state,
        //         data: state.data.filter(x => x.id !== action.payload.id )
        //     };
        default:
            return state;
    }
}