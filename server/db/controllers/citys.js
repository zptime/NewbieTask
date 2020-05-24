
const City = require('../models/citys')

class CitysCtl {
  copyCreate (keyword, datas) { // 新增
    const city = new City({
      datas,
      nation: 'china',
      keyword
    })
    city.save()
    console.log(city)
  }

  async find (req, res, next) {
    const { size = 10 } = req.query
    const page = Math.max(req.query.page * 1, 1) - 1 // 页码：字符串转数字
    const perPage = Math.max(size * 1, 1) // 每页数目：Math.max(避免出现第0页)
    const resp = await City
      // .find({ name: 'QQ' })精确查询；new RegExp(ctx.query.q)模糊查询，将关键字转为正则表达式
      .find({ name: new RegExp(req.query.q) })
      .limit(perPage)
      .skip(page * perPage)
    res.status(200).json(resp)
    next()
  }
}

module.exports = new CitysCtl()
