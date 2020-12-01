import { FETCH_ALL_DEBT_INFO } from '../Constants/Types'

let initialState = {
    debtList: []
}

export const debtInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_DEBT_INFO:
            return {
                ...state,
                debtList: [...action.debtList]
            };
        default:
            return state;
    }
}