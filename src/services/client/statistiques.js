import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
   statistiquesAchatsByCategory(){
       return axios.get('statistiques/achats-by-category');
   }
}