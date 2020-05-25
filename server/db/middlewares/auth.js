class AuthCtl {
  // 检查请求是否符合API规则，参数校验
  checkCityParams (req, res, next) {
    console.log('当前请求的参数校验：' + req.originalUrl)
    const q = req.query.q
    const reg = /^[0-9]*$/
    if (!q || reg.test(q)) {
      return res.status(401).json({
        msg: '请输入正确的参数，不能为数字'
      })
    }
    return next()
  }

  // 给每个API添加返回时间戳
  addTimestamp (req, res, next) {
    const timestamp = Date.now() // 获取当前时间戳
    console.log('当前请求为' + req.originalUrl + '，时间戳为' + timestamp)
    res.timestamp = timestamp
    next()
  }
}

module.exports = new AuthCtl()
