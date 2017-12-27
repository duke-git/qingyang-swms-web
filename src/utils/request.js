import axios from 'axios';
import Util from './util';

// 创建axios实例
const service = axios.create({
  baseURL: "http://127.0.0.1:8090",//process.env.BASE_API,
  timeout: 15000
})

// request拦截器
service.interceptors.request.use(config => {
    config.headers['X-Access-Token'] = Util.getToken();
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {return Promise.resolve(response)},
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  })

export default service
