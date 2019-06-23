// 导入express  web开发框架
const express = require("express")
// 导入 cors 跨域
const cors = require('cors')
// 导入 morgan 日志
const morgan = require('morgan')

// 实例化服务器对象
const app = express()

// 使用 日志中间件
app.use(morgan('tiny'))
// 使用 跨域中间件
app.use(cors())

// 注册路由

// 开启服务器
app.listen(8000,()=>{
  console.log('success');
})

