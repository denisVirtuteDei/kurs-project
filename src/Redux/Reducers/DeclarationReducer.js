import { 
    CREATE_DECLARATION,
    UPDATE_DECLARATION, 
    DELETE_DECLARATION,
    FETCH_PERSONS_DECLARATIONS,
} from '../Constants/Types';

const initialState = {
    payedTaxes: []
}

export const declarationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PERSONS_DECLARATIONS:
            return {
                ...state,
                payedTaxes: action.payload
            };
        case CREATE_DECLARATION:
            return {
                ...state,
                payedTaxes: [...state.payedTaxes, action.payload]
            };
        case UPDATE_DECLARATION:
            return {
                ...state,
                payedTaxes: state.payedTaxes.map(x => x.id === action.payload.id ? action.payload : x)
            };
        case DELETE_DECLARATION:
            return {
                ...state,
                payedTaxes: state.payedTaxes.filter(x => x.id !== action.payload.id )
            };
        default:
            return state;
    }
}