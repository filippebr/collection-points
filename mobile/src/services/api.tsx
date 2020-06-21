import axios from 'axios';

const api = axios.create({
  // Need to see the URL
  baseURL: 'http://192.168.15.18:3333'
});

export default api;