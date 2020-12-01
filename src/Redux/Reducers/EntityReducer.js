import { FETCH_ALL_ENTITIES } from '../Constants/Types';

const initialState = {
    data: []
}

export const entityReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_ENTITIES:
            return {
                ...state,
                data: [...action.payload]
            };
        default:
            return state;
    }
}