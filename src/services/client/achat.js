import axios from 'axios'

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
