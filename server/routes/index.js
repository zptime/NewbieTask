const { Router } = require('express')
const router = Router()
const { axiosGet } = require('../apiConfig')
const { checkCityParams, addTimestamp } = require('../controllers/auth')

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

// 城市模糊查询
router.get('/basic/search_airport', checkCityParams, addTimestamp, (req, res) => {
  axiosGet('/basic/search_airport', req, res)
})

module.exports = router
