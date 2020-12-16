import api from './Api';
import {
    CREATE_BANK_CHECK,
    UPDATE_BANK_CHECK,
    FETCH_PERSONS_CHECKS,
    FETCH_BY_ID_BANK_CHECK,
} from '../Constants/Types';

const fetchByIdUrl = 'https://localhost:44383/api/BankCheckInfo/';
const fetchChecksUrl = 'https://localhost:44383/api/PersonsChecksInfo/';
const bankCheckUrl = 'https://localhost:44383/api/BankCheck/';


//fetch all b/c with persons info
export const fetchChecks = (deadline) => dispatch => {
    let dateTemplate = require('date-template');
    let date = dateTemplate('%Y-%M-%D', deadline);

    api
        .crudApi(fetchChecksUrl + `${date}/`)
        .fetchAll()
        .then(response => {
            dispatch({
                type: FETCH_PERSONS_CHECKS,
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
                type: UPDATE_BANK_CHECK,
                payload: { id, ...data }
            })
            onSuccess();
        })
        .catch(err => console.log(err))
};