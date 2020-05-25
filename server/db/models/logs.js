const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const { Schema, model } = mongoose

const logSchema = new Schema({
  __v: { type: Number, select: false }, // 隐藏
  apiname: { type: String }, // 查询的api接口
  methods: { type: String }, // 请求方式：post,get
  status: { type: String }, // 状态码，代表成功或失败
  tablename: { type: String }, // 操作的表名
  option: { type: String }, // 操作：增删查改
  mname: { type: String }, // 操作人员名称
  remark: { type: String } // 备注
}, { timestamps: true })

// 参数一：文档集合名称；参数二：Schema
module.exports = model('Log', logSchema)
