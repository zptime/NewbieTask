const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const { Schema, model } = mongoose

const citySchema = new Schema({
  __v: { type: Number, select: false }, // 隐藏
  keyword: { type: String }, // 搜索关键字
  nation: { type: String }, // 国家
  datas: { // 城市模糊查询数据
    type: [{
      name: { type: String }, // 名称
      pinying: { type: String }, // 拼音
      initial: { type: String }, // 缩写
      code: { type: String }, // 编码
      fullname: { type: String }, // 全称
      tag: { type: String }, // 标签，如热门
      order: { type: String }, // 排序
      meta: { type: String },
      country: { type: String },
      english: { type: String }
    }]
  }
}, { timestamps: true })

// 参数一：文档集合名称；参数二：Schema
module.exports = model('City', citySchema)
