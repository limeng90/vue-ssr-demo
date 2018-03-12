const Vue = require('vue')
const app = new Vue({
  template: `<div>hello world</div>`
})
const renderer = require('vue-server-renderer').createRenderer()
renderer.renderToString(app, (err, html) => {
  if (err) throw error
  console.log(html)
})
