import { ACTION_TYPES } from '../Actions/Api'

const initialState = {
    data: []
}

export const entityReducer = (_state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ..._state,
                data: [...action.payload]
            };
        default:
            return _state;
    }
}