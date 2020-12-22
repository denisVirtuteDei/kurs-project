import api from './Api';
import { REGISTRATE, SET_EMPLOYEE_ID, SET_PERSON_ID } from '../Constants/Types';

const entityUrl = 'https://localhost:44383/api/createperson/entity';
const selfUrl = 'https://localhost:44383/api/createperson/self';
const individUrl = 'https://localhost:44383/api/createperson/individ';
const regUrl = 'https://localhost:44383/api/personregistration';

export const createEntity = (data, regData) => {
    api
        .crudApi(entityUrl)
        .create(data)
        .then(response => {
            if (response.data.personId !== -1) {
                debugger
                getExecutorId(regData, response.data.personId);
            }
        })
        .catch(err => console.log(err))
}

export const createSelfPerson = (data, onSuccess) => dispatch => {
    api
        .crudApi(selfUrl)
        .create(data)
        .then(response => {
            if (response.data.personId !== -1) {
                dispatch({
                    type: SET_PERSON_ID,
                    payload: response.data
                })
                onSuccess();
            }
        })
        .catch(err => console.log(err))
}

export const createIndividPerson = (data, onSuccess) => dispatch => {
    api
        .crudApi(individUrl)
        .create(data)
        .then(response => {
            if (response.data.personId !== -1) {
                dispatch({
                    type: SET_PERSON_ID,
                    payload: response.data
                })
                onSuccess();
            }
        })
        .catch(err => console.log(err))
}

const getExecutorId = (regInfo, personId) => {
    debugger
    const finalUrl = `${regUrl}?username=${regInfo.username}`;
    api
        .crudApi(finalUrl)
        .fetchAll()
        .then(response => {
            debugger
            if (response.data.id)
                registration(regInfo, response.data.id, personId)
        })
        .catch(err => console.log(err))
}

const registration = (regInfo, execId, personId) => {
    let pr = {
        fkEmployee: execId,
        fkPerson: personId,
        fkInitNcea: regInfo.ncea,
        regDate: regInfo.regDate
    }
    api
        .crudApi(regUrl)
        .create(pr)
        .then(response => {
            debugger;
            alert(response.data);          
        })
        .catch(err => console.log(err))
}