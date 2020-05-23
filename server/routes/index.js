const { Router } = require('express')
const router = Router()
const { axiosPost, axiosGet } = require('../apiConfig')

router.get('/basic/search_airport', (req, res) => {
  axiosGet('/basic/search_airport', req, res)
})

module.exports = router
