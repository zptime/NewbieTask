const axios = require('axios')

const SERVER_URL = ' https://h5.133.cn/hangban' // api url

const Axios = axios.create({
  baseURL: SERVER_URL, // 设置默认api url
  withCredentials: true // 是否允许带cookie
})

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  (res) => {
    return Promise.resolve(res)
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 通用请求接口方法
const axiosPost = (url, req, res, callback) => {
  Axios.post(url, req.body).then((response) => {
    if (callback) {
      callback(response.data)
    }
    res.json(response.data)
  }).catch((err) => {
    res.json(err)
  })
}

const axiosGet = (url, req, res, callback) => {
  Axios.get(url, { params: req.query }).then((response) => {
    if (callback) {
      callback(response.data)
    }
    res.json(response.data)
  }).catch((err) => {
    res.json(err)
  })
}

module.exports = {
  axiosPost,
  axiosGet
}
