import { convert } from "./convert";

const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev }) // 是否使用开发模式(dev)来启动 Next.js -

app.prepare().then(() => {
  const server = express()
  convert(app,server)

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

