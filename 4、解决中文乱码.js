const http = require('http')
const server = http.createServer()
//req 是请求对象，包含了于客户端相关的数据和属性
server.on('request', (req, res) => {
    const str =`你请求的地址是 ${req.url},你请求的类型为${req.method}`
    //设置res.setHeader() 方法，设置Content-Type 响应头，解决中文乱码
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end(str)
})

server.listen(80, () => {
    console.log('server running is http://127.0.0.1');
})