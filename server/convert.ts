import { renderAndCache } from "./cache";

/**
  * outUrl：浏览器上展示的url
  * inUrl : 实际的url
 */
// const config = [
//     {
//         outUrl:'/',
//         inUrl:'/'
//     }
// ]
export function convert (app,server) {
    const handle = app.getRequestHandler()
    server.get('/', (req, res) =>  renderAndCache(app, req, res, '/',null))
    // server.get('/developer', (req, res) => renderAndCache(app, req, res, '/developer',{id: req.params.id}))
    server.get('*', (req, res) =>  handle(req, res))

}