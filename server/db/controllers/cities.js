
const City = require('../models/cities')

class CitysCtl {
  async copyCreate (keyword, datas) { // 复制新增
    const repeatedCity = await City.findOne({ keyword })
    if (repeatedCity) { // 如果存在，就更新
      await City.findByIdAndUpdate(repeatedCity.id, { datas })
      return false
    }

    await new City({ // 如果不存在，就新增
      datas,
      nation: 'china',
      keyword
    }).save()
  }

  async find (req, res) { // 列表查询
    const { size = 10, page, q } = req.query
    const pages = Math.max(page * 1, 1) - 1 // 页码：字符串转数字
    const perPage = Math.max(size * 1, 1) // 每页数目：Math.max(避免出现第0页)
    const resp = await City
      // .find({ name: 'QQ' })精确查询；new RegExp(ctx.query.q)模糊查询，将关键字转为正则表达式
      .find({ name: new RegExp(q) })
      .limit(perPage) // 代表返回的数据数量。
      .skip(pages * perPage) // 代表跳过10条数据，即从第11条数据开始返回
    res.status(200).json(resp)
  }

  async findByKeyword (req, res) { // 根据关键字查询
    const { keyword } = req.query
    const city = await City.findOne({ keyword })
    if (!city) {
      res.status(200).json('数据不存在')
    }
    res.status(200).json(city)
  }
}

module.exports = new CitysCtl()
