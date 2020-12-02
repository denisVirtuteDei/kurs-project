import api from './Api';
import { FETCH_BY_ID_BANK_CHECK } from '../Constants/Types';

const baseUrl = 'https://localhost:44383/api/BankCheckInfo/';

export const fetchByIdCheckInfo = () => dispatch => {
    api
        .crudApi(baseUrl)
        .fetchById(503612177)
        .then(response => {
            dispatch({
                type: FETCH_BY_ID_BANK_CHECK,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}