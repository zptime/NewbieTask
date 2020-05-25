// 日志中间件
const logger = (req, res, next) => {
  console.log('Request IP: ' + req.url)
  console.log('Request date: ' + new Date())
  next()
}
module.exports = logger
