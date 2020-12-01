import axios from 'axios';

const obj = {
    crudApi(url = ('')) {
        return url==='' ? {} : {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
};

export default obj;