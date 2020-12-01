import api from './Api';
import { FETCH_ALL_ENTITIES } from '../Constants/Types';

const baseUrl = 'https://localhost:44383/api/Entities';

export const fetchAllEntityPersons = () => dispatch => {
    api
        .crudApi(baseUrl)
        .fetchAll()
        .then(response => {
            dispatch({
                type: FETCH_ALL_ENTITIES,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}