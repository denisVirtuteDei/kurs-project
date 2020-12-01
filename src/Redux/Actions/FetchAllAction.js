import api from './Api';
import { ACTION_TYPES } from '../Constants/Types';

const fetchAll = (baseUrl) => dispatch => {
    debugger;
    api
        .crudApi(baseUrl)
        .fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
};

export default fetchAll;