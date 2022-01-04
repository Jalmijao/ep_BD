import axios from 'axios';

const api = axios.create({
    baseURL: 'http://farma-usp.herokuapp.com/',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
});

export default api;
