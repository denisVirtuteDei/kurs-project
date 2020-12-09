import api from './Api';
import { 
    CREATE_DECLARATION, 
    UPDATE_DECLARATION, 
    FETCH_PERSONS_DECLARATIONS,
} from '../Constants/Types';

const baseUrl = 'https://localhost:44383/api/PayedTaxes/';

export const fetchTaxes = (deadline) => dispatch => {
    let dateTemplate = require('date-template');
    let date = dateTemplate('%Y-%M-%D', deadline);

    api
        .crudApi(baseUrl+`${date}/`)
        .fetchAll()
        .then(response => {
            dispatch({
                type: FETCH_PERSONS_DECLARATIONS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

// export const fetchAllDeclaration = () => dispatch => {
//     api
//         .crudApi(baseUrl)
//         .fetchAll()
//         .then(response => {
//             dispatch({
//                 type: ACTION_TYPES.FETCH_ALL,
//                 payload: response.data
//             })
//         })
//         .catch(err => console.log(err))
// }

export const createDeclaration = (data, onSuccess) => dispatch => {
    api
        .crudApi(baseUrl)
        .create(data)
        .then(response => {
            dispatch({
                type: CREATE_DECLARATION,
                payload: response.data
            })
            onSuccess();
        })
        .catch(err => console.log(err))
};

export const updateDeclarationCorrectness = (id, data, onSuccess) => dispatch => {
    api
        .crudApi(baseUrl)
        .update(id, data)
        .then(response => {
            dispatch({
                type: UPDATE_DECLARATION,
                payload: {id, ...data}
            })
            onSuccess();
        })
        .catch(err => console.log(err))
};

// export const deleteDeclaration = (id, onSuccess) => dispatch => {
//     api
//         .crudApi(baseUrl)
//         .delete(id)
//         .then(response => {
//             dispatch({
//                 type: DELETE_DECLARATION,
//                 payload: id
//             })
//             onSuccess();
//         })
//         .catch(err => console.log(err))
// };