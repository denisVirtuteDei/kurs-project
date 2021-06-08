import api from './Api'
import {
  CREATE_DECLARATION,
  POST_DECLARATION,
  UPDATE_DECLARATION,
  UPDATE_DECLARATION_REQUEST,
  FETCH_PERSONS_TAXES,
  FETCH_PERSONS_TAXES_REQUEST,
} from '../Constants/Types'

const baseUrl = 'https://localhost:44383/api/PayedTaxes/'

//***************************************************************//

export const fetchTaxes = deadline => {
  let dateTemplate = require('date-template')
  let date = dateTemplate('%Y-%M-%D', deadline)

  return api.crudApi(baseUrl + `${date}/`).fetchAll()
}

export const fetchTaxesRequest = deadline => ({
  type: FETCH_PERSONS_TAXES_REQUEST,
  payload: deadline,
})

export const fetchPersonsTaxes = deadline => ({
  type: FETCH_PERSONS_TAXES,
  payload: deadline,
})

//***************************************************************//

export const postDeclaration = data => api.crudApi(baseUrl).create(data)

export const createDeclarationRequest = data => ({
  type: POST_DECLARATION,
  payload: data,
})

export const createDeclaration = data => ({
  type: CREATE_DECLARATION,
  payload: data,
})

//***************************************************************//

export const updateDeclarationCorrectness = (id, data) => api.crudApi(baseUrl).update(id, data)

export const updateDeclarationCorrectnessRequest = (id, data) => ({
  type: UPDATE_DECLARATION_REQUEST,
  payload: { id, data },
})

export const putDeclarationCorrectness = (id, data) => ({
  type: UPDATE_DECLARATION,
  payload: { id, ...data },
})

// export const deleteDeclaration = (id, onSuccess) => dispatch => {
//     api
//         .crudApi(baseUrl)
//         .delete(id)
//         .then(response => {
//             dispatch({
//                 type: DELETE_DECLARATION,
//                 payload: id
//             })
//             onSuccess();
//         })
//         .catch(err => console.log(err))
// };

// export const fetchAllDeclaration = () => dispatch => {
//     api
//         .crudApi(baseUrl)
//         .fetchAll()
//         .then(response => {
//             dispatch({
//                 type: ACTION_TYPES.FETCH_ALL,
//                 payload: response.data
//             })
//         })
//         .catch(err => console.log(err))
// }
