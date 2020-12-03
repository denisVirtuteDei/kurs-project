import api from './Api';
import { FETCH_BY_ID_BANK_CHECK, CREATE_BANK_CHECK } from '../Constants/Types';

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

const formateData = data => {
    let dateTemplate = require('date-template');
    return {
        ...data,
        finalSum: (parseFloat(data.finalSum)),
        payedDate: (data.payedDate ? data.payedDate : dateTemplate('%Y-%M-%D', new Date()))
    }
}

const createCheckUrl = 'https://localhost:44383/api/BankCheck/';

export const createBankCheck = (data, onSuccess) => dispatch => {
    debugger;
    let _data = formateData(data);
    api
        .crudApi(createCheckUrl)
        .create(_data)
        .then(response => {
            dispatch({
                type: CREATE_BANK_CHECK,
                payload: response.data
            })
            onSuccess();
        })
        .catch(err => console.log(err))
}