import api from './Api';
import { CREATE_DECLARATION, UPDATE_DECLARATION, DELETE_DECLARATION } from '../Constants/Types';

const baseUrl = 'https://localhost:44383/api/PayedTaxes';

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

export const updateDeclaration = (id, data, onSuccess) => dispatch => {
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

export const deleteDeclaration = (id, onSuccess) => dispatch => {
    api
        .crudApi(baseUrl)
        .delete(id)
        .then(response => {
            dispatch({
                type: DELETE_DECLARATION,
                payload: id
            })
            onSuccess();
        })
        .catch(err => console.log(err))
};