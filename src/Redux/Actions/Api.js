import axios from 'axios';

const baseUrl = 'https://localhost:44383/api/';
const entityUrl = 'Entities/';

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    UPDATE: 'UPDATE',
    FETCH_ALL: 'FETCH_ALL'
}

const obj = {
    entityComp(url = (baseUrl + entityUrl)) {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
};

export default obj;