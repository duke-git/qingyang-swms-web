import axios from 'axios';
import Util from './util';
import config from '../../config/index';

// 创建axios实例
const service = axios.create({
  baseURL: config[config.env]["baseURL"],
  timeout: 5000
});

// request拦截器
service.interceptors.request.use(config => {
    config.headers['X-Access-Token'] = Util.getToken();
    return config;
}, error => {
    console.log(error);
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
  response => {return Promise.resolve(response)},
  error => {
    console.log('err' + error);
    return Promise.reject(error);
});

export default service;
