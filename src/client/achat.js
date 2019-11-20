import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
    getAll() {
        return axios.get('achats');
    },
    create(achat) {
        return axios.post('achats', achat);
    },
    delete(achat) {
        return axios.delete('achats' + achat.id);
    }
}