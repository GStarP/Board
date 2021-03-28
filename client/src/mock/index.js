var http = require("http");

const MOCK_PORT = 8089;

const errMsg = {
  code: 404,
  msg: '请求失败'
}
const errStr = JSON.stringify(errMsg)

http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  const path = "./data" + req.url.replace("/api", "") + ".js"
  console.log(`${method} ${url}`)

  res.writeHead(200, { "Content-Type": "application/json" })

  try {
    const data = require(path)[method]
    res.end(JSON.stringify(data))
  } catch(e) {
    res.end(errStr)
  }
  
}).listen(MOCK_PORT);

console.log(`mock server start at http://localhost:${MOCK_PORT}`)
