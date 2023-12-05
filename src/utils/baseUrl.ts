import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8001/api';

export const apiInstance = axios.create({
  baseURL: baseUrl,
});
