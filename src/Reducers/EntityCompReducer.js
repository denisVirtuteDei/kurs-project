import { ACTION_TYPES } from '../Actions/EntityCompAction'

const uploadedState = {
    data: []
}

export const reducer = (state = uploadedState, incomingAction) => {
    switch (incomingAction.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                data: [...incomingAction.payload]
            };
        default:
            return state;
    }
}