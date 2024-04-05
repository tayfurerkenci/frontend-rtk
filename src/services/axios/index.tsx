import axios, { AxiosInstance, AxiosError,isAxiosError } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
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

export {AxiosError, isAxiosError}; 
export default instance;
