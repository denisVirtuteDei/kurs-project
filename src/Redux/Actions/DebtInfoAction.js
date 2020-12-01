import api from './Api';
import { FETCH_ALL_DEBT_INFO } from '../Constants/Types';

const baseUrl = 'https://localhost:44383/api/DebtInfo/503612177';

export const fetchAllDebtInfo = () => dispatch => {
    api
        .crudApi(baseUrl)
        .fetchAll()
        .then(response => {
            dispatch({
                type: FETCH_ALL_DEBT_INFO,
                debtList: response.data
            })
        })
        .catch(err => console.log(err))
}