const { Router } = require('express')
const router = Router()
const { axiosGet } = require('../apiConfig')
const { checkCityParams, addTimestamp } = require('../db/middlewares/auth')
const { copyCreate, findByKeyword } = require('../db/controllers/cities')
const { logAnalysis } = require('../db/controllers/logs')
const logger = require('../db/middlewares/logger')

// 日志中间件
// router.use(logger) // 所有请求都存日志了
router.all('/api/*', logger) // 仅匹配所有HTTP方法
router.all('/basic/*', logger)

// 登录
router.post('/api/login', (req, res) => {
  // 设置session
  const { phone, password } = req.body
  if (phone && password && password === '123456') {
    req.session.userinfo = phone
    res.json('登录成功!')
  } else {
    res.json('用户名或密码不正确!')
  }
})

// 登出
router.post('/api/logout', (req, res) => {
  // 注销session
  req.session.destroy(() => {
    res.json('退出登录成功！')
  })
})

// 查询城市数据
router.get('/api/cities', findByKeyword)

// 查询接口成功失败（日志）
router.post('/api/logs/analysis', logAnalysis)

// 城市模糊查询
router.get('/basic/search_airport', checkCityParams, addTimestamp, (req, res, next) => {
  axiosGet('/basic/search_airport', req, res, (datas) => {
    copyCreate(req.query.q, datas)
  })
})

module.exports = router
