import { 
    CREATE_DECLARATION,
    UPDATE_DECLARATION, 
    DELETE_DECLARATION,
    FETCH_PERSONS_DECLARATIONS, 
} from '../Constants/Types';

const initialState = {
    data: []
}

export const declarationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PERSONS_DECLARATIONS:
            return {
                ...state,
                data: action.payload
            };
        case CREATE_DECLARATION:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case UPDATE_DECLARATION:
            return {
                ...state,
                data: state.data.map(x => x.id === action.payload.id ? action.payload : x)
            };
        case DELETE_DECLARATION:
            return {
                ...state,
                data: state.data.filter(x => x.id !== action.payload.id )
            };
        default:
            return state;
    }
}