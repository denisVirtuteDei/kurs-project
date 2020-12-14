import api from './Api';
import { CREATE_ENTITY } from '../Constants/Types';

//const baseUrl = 'https://localhost:44383/api/Entities';

export const createEntity = (data, onSuccess) => dispatch => {
    api
        .crudApi()
        .create(data)
        .then(response => {
            dispatch({
                type: CREATE_ENTITY,
                payload: response.data
            })
            onSuccess();
        })
        .catch(err => console.log(err))
}