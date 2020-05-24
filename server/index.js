const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
// const session = require('express-session')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

const routes = require('./routes/index')

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // 配置session中间件
  // app.use(session({
  //   secret: 'secret', // 对session id 相关的cookie 进行签名
  //   name: 'newbie', // cookie的name，默认cookie的name是：connect.sid
  //   resave: false,
  //   saveUninitialized: true, // 是否保存未初始化的会话
  //   cookie: ('name', 'value', { maxAge: 5 * 60 * 1000, secure: false })
  // }))

  // 解析 application/json。请求体数据大小限制为10M
  app.use(bodyParser.json({ limit: '10000kb' }))
  // 解析 application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // app.all('/*', function (req, res, next) {
  //   if (req.url.includes('login')) {
  //     // 设置session
  //     req.session.userinfo = '张三'
  //     res.send('登陆成功！')
  //     next()
  //   } else if (req.url.includes('logout')) {
  //     // 注销session
  //     req.session.destroy((err) => {
  //       res.send('退出登录！' + err)
  //     })
  //   } else {
  //     // 获取session
  //     if (req.session.userinfo) {
  //       res.send('hello ' + req.session.userinfo + '，welcome to index');
  //     } else {
  //       res.send('未登陆')
  //     }
  //     next()
  //   }
  // })

  // Import API Routes
  app.use('', routes)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
