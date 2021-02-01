import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cyber-shop-db.herokuapp.com/'
});

export default instance;