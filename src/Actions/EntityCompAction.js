import api from './Api';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    UPDATE: 'UPDATE',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchall = () => dispatch => {
    api.entityComp().fetchAll()
        .then(response => {
            console.log(response);
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}