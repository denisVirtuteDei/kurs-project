import axios from 'axios';

const config = ({
    headers: {
        Authorization: `${window.sessionStorage.getItem('access_token') ?
            window.sessionStorage.getItem('access_token') : ''}`
    }
})

const obj = {
    crudApi(url = ('')) {
        debugger
        return url === '' ? {} : {
            fetchAll: () => axios.get(url, config.headers.Authorization),
            fetchById: id => axios.get(url + id, config),
            create: newRecord => axios.post(url, newRecord, config),
            update: (id, updateRecord) => axios.put(url + id, updateRecord, config),
            delete: id => axios.delete(url + id, config)
        }
    }
};

export default obj;