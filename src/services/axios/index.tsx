import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://your-api-url.com',
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' },
});

// // Add a request interceptor
// instance.interceptors.request.use((config: AxiosRequestConfig) => {
//   // Do something before request is sent
//   // For examples, add your auth token here
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//   return config;
// }, (error) => {
//   // Do something with request error
//   return Promise.reject(error);
// });

// // Add a response interceptor
// instance.interceptors.response.use((response: AxiosResponse) => {
//   // Do something with response data
//   return response;
// }, (error) => {
//   // Do something with response error
//   return Promise.reject(error);
// });

export default instance;
