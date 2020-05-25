const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const { Schema, model } = mongoose

const logSchema = new Schema({
  __v: { type: Number, select: false }, // 隐藏
  url: { type: String }, // 查询的api接口
  path: { type: String },
  method: { type: String }, // 请求方式：post,get
  host: { type: String }, // hostname
  ip: { type: String }, // ip地址
  referer: { type: String }, // 请求的源地址
  userAgent: { type: String }, // 客户端信息 设备及浏览器信息
  originalUrl: { type: String }, // 请求路径
  hostname: { type: String },
  statusCode: { type: Number }, // 响应状态码
  statusMessage: { type: String }, // 响应消息
  cookie: { type: String },
  sessionID: { type: String },
  responseTime: { type: Date }, // 响应时长
  tableName: { type: String }, // 操作的表名
  option: { type: String }, // 操作：增删查改
  mname: { type: String }, // 操作人员名称
  remark: { type: String } // 备注
}, { timestamps: true })

// 参数一：文档集合名称；参数二：Schema
module.exports = model('Log', logSchema)
