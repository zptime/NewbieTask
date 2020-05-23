export default ({ $axios, redirect }) => {
  // 基本配置
  // $axios.defaults.timeout = 10000

  // 请求拦截器
  $axios.onRequest((config) => {
    // console.log('Making request to ' + config.url)
    return config
  })

  // 响应拦截器
  $axios.onResponse((resp) => {
    return Promise.resolve(resp.data)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404 || code === 500) {
      redirect('/error')
    }

    return Promise.reject(error)
  })
}
