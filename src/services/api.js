import axios from 'axios';

const api = axios.create({
    baseURL: 'https://quizdown-server.herokuapp.com' 
});

export default api;