import api from './Api';
import { FETCH_ALL_NCEA } from '../Constants/Types';

const baseUrl = 'https://localhost:44383/api/EconomicActivityTypes';

export const fetchAllNceaInfo = () => dispatch => {
    api
        .crudApi(baseUrl)
        .fetchAll()
        .then(response => {
            debugger
            dispatch({
                type: FETCH_ALL_NCEA,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}