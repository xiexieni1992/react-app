import axios from 'axios'
import Qs from 'qs'

// const YHS_SERVICE_API = process.env.API_HOST
const YHS_SERVICE_API = ''

// hsNewService
export const hsNewService = axios.create({
  baseURL: YHS_SERVICE_API, // api的base_url
  timeout: 10000, // 请求超时时间
  withCredentials: true, // 发送认证cookie
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  paramsSerializer: function(params) {
    return Qs.stringify(params, { arrayFormat: 'repeat' })
  },
  transformRequest: [data => Qs.stringify(data, {
    indices: false
  })] // indices 表示在转换数组时不加序号
})

// 添加请求拦截器
hsNewService.interceptors.request.use(
  // 在发送请求之前做些什么
  config => {
    // if (getToken()) {
    //     config.headers.ssoToken = getToken();
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 添加响应拦截器
hsNewService.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  const data = response.data
  return data
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error)
})
