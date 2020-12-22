import api from './Api';
import { FETCH_ALL_DEBT_INFO } from '../Constants/Types';

const baseUrl = 'https://localhost:44383/api/DebtInfo/';

export const fetchAllDebtInfo = (id) => dispatch => {
    api
        .crudApi(baseUrl)
        .fetchById(id)
        .then(response => {
            dispatch({
                type: FETCH_ALL_DEBT_INFO,
                debtList: response.data
            })
        })
        .catch(err => console.log(err))
}