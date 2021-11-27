import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cm42-medical-dashboard.herokuapp.com/'
})

export default api;