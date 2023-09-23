import { AppError } from '@utils/AppError';
import axios from 'axios'
const api = axios.create({
  baseURL: 'http://192.168.30.71:3333/api'
})

api.interceptors.response.use(response => response, error => {
  if (error.response && error.response.data) {
    return Promise.reject(new AppError(error.response.data.message));
  } else {
    return Promise.reject(new AppError(error));
  }
})

export { api }