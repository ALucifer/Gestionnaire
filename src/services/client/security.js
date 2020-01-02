import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
    getToken(payload) {
        return axios.post('login_check', payload);
    },
    getUser() {
        return axios.get('user');
    }
}
