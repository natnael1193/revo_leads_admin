import axios from 'axios';

// const baseUrl = 'http://127.0.0.1:8001/api';
// http://api.revosolutionplc.com/
const baseUrl = 'http://api.revosolutionplc.com/api';
export const apiInstance = axios.create({
  baseURL: baseUrl,
});
export const imagePath = 'http://api.revosolutionplc.com/public/storage/';
