const { Router } = require('express')
const router = Router()
const { axiosGet } = require('../apiConfig')
const { checkCityParams, addTimestamp } = require('../controllers/auth')

// 城市模糊查询
router.get('/basic/search_airport', checkCityParams, addTimestamp, (req, res) => {
  axiosGet('/basic/search_airport', req, res)
})

module.exports = router
