import { CREATE_ENTITY } from '../Constants/Types';

const initialState = {
    person: {
        unp: '',
        title: '',
        fio: '',
        passportNumber: '',
        orgAddress: '',
        telephone: ''
    },
    data: []
}

export const entityReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ENTITY:
            return {
                ...state,
                person: {...state.person},
                data: {...action.payload}
            };
        default:
            return state;
    }
}