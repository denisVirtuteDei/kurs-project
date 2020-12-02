import { FETCH_ALL_NCEA } from '../Constants/Types';

const initialState = {
    data: []
}

export const nceaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_NCEA:
            return {
                ...state,
                data: [...action.payload]
            };
        default:
            return state;
    }
}