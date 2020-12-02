import { FETCH_BY_ID_BANK_CHECK } from '../Constants/Types';

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
        default:
            return state;
    }
}