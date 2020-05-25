
const Log = require('../models/logs')

class LogsCtl {
  async create (req, res, datas) { // 新增
    await new Log(datas).save()
  }

  async find (req, res) { // 列表查询
    const { size = 10, page, q } = req.query
    const pages = Math.max(page * 1, 1) - 1 // 页码：字符串转数字
    const perPage = Math.max(size * 1, 1) // 每页数目：Math.max(避免出现第0页)
    const resp = await Log
      // .find({ name: 'QQ' })精确查询；new RegExp(ctx.query.q)模糊查询，将关键字转为正则表达式
      .find({ name: new RegExp(q) })
      .limit(perPage) // 代表返回的数据数量。
      .skip(pages * perPage) // 代表跳过10条数据，即从第11条数据开始返回
    res.status(200).json(resp)
  }

  async logAnalysis (req, res) { // 日志分析，如请求了多少次，成功了多少次，失败了多少次，成功率是多少
    const sum = await Log
      // .find({ name: 'QQ' })精确查询；new RegExp(ctx.query.q)模糊查询，将关键字转为正则表达式
      .find({ url: new RegExp(req.body.keyword) })
      .countDocuments()
    const successNum = await Log.find({ url: new RegExp(req.body.keyword) }).where({ statusCode: 200 }).countDocuments()
    const failNum = sum - successNum
    const successRate = successNum / sum
    res.status(200).json({
      sum,
      successNum,
      failNum,
      successRate
    })
  }
}

module.exports = new LogsCtl()
