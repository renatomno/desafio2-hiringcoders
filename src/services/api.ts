import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/renatomno/desafio2-hiringcoders/produtos'
})

export default api;
