import api, { ACTION_TYPES } from './Api';

export const fetchAll = () => dispatch => {
    api
        .entityComp()
        .fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}