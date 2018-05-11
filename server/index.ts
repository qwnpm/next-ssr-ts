import { renderAndCache } from "./cache";

const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev }) // 是否使用开发模式(dev)来启动 Next.js -
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express()

   // Use the `renderAndCache` utility defined below to serve pages
  server.get('/', (req, res) =>  renderAndCache(app, req, res, '/',null))
  server.get('/developer', (req, res) => renderAndCache(app, req, res, '/developer',{id: req.params.id}))
  server.get('*', (req, res) =>  handle(req, res))

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

