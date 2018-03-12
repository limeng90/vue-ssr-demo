const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的url是{{url}}</div>`
  })
  console.log(req);
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal server error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Hello</title>
        </head>
        <body>${html}</body>
      </html>`)
  })
})
server.listen(9090)
