const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('Welcome to our home page')
  }
  if (req.url == '/about') {
    res.end(' this is the about section')
  }
  res.end(`
  <h1>opps!</h1>
  <p> we can't seem to find the page</p>
  <a href="/">Home</a>`)
})

server.listen(5000)
