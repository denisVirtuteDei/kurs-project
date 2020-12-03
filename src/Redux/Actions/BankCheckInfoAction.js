import api from './Api';
import { FETCH_BY_ID_BANK_CHECK, CREATE_BANK_CHECK, ACTION_TYPES } from '../Constants/Types';

const fetchByIdUrl = 'https://localhost:44383/api/BankCheckInfo/';
const bankCheckUrl = 'https://localhost:44383/api/BankCheck/';

//fetch all b/c 
export const fetchAllBankChecks = () => dispatch => {
    api
        .crudApi(bankCheckUrl)
        .fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

//fetch by person unp
export const fetchByIdCheckInfo = () => dispatch => {
    api
        .crudApi(fetchByIdUrl)
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

export const createBankCheck = (data, onSuccess) => dispatch => {
    debugger;
    let _data = formateData(data);
    api
        .crudApi(bankCheckUrl)
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

export const updateBankCheckCorrectness = (id, data, onSuccess) => dispatch => {
    api
        .crudApi(bankCheckUrl)
        .update(id, data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                payload: {id, ...data}
            })
            onSuccess();
        })
        .catch(err => console.log(err))
};