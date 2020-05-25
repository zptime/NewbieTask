const { create } = require('../controllers/logs')

// 日志中间件
const logger = (req, res, next) => {
  req._startTime = new Date()
  const { method, url, ip, path, hostname, originalUrl, headers, sessionID } = req
  const client = {
    method,
    url,
    ip,
    path,
    host: hostname,
    originalUrl,
    referer: headers.referer, // 请求的源地址
    userAgent: headers['user-agent'], // 客户端信息 设备及浏览器信息
    cookie: headers.cookie || '',
    hostname: process.env.hostname,
    sessionID
  }

  res.once('finish', function () {
    const commonInfo = Object.assign({
      responseTime: new Date() - req._startTime,
      statusCode: res.statusCode,
      statusMessage: res.statusMessage
    }, client)
    create(req, res, commonInfo)
  })
  next()
}
module.exports = logger
