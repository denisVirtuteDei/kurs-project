import { REGISTRATE, SET_EMPLOYEE_ID, SET_PERSON_ID } from '../Constants/Types';

const regInitState = {
    fkEmployee: 0,
    fkPerson: 0,
    fkInitNcea: 0,
    regDate: null
}

export const registrateReducer = (state = regInitState, action) => {
    switch (action.type) {
        case REGISTRATE:
            return {
                ...state,
                ...regInitState
            };
        default:
            return state;
    }
}