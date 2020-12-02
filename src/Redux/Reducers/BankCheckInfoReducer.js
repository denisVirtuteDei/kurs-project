import { FETCH_BY_ID_BANK_CHECK, CREATE_BANK_CHECK } from '../Constants/Types';

const initialState = {
    data: []
}

export const bankCheckInfoReducer = (state = initialState, action) => {
    switch (action.type) {
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
        // case CREATE_BANK_CHECK:
        //     return {
        //         ...state,
        //         data: state.data.map(x => x.id === action.payload.id ? action.payload : x)
        //     };
        // case CREATE_BANK_CHECK:
        //     return {
        //         ...state,
        //         data: state.data.filter(x => x.id !== action.payload.id )
        //     };
        default:
            return state;
    }
}