const http = require('http')
const server = http.createServer()
//req 是请求对象，包含了于客户端相关的数据和属性
server.on('request',(req,res)=>{
    //req.url 客户端请求的地址
    const url = req.url
    //req.method 客户端请求的类型
    const type = req.method
    const str = `Your request url is ${url},and request type is ${type}`
    console.log(str);
    //调用res.send() 方法，向客户端发送信息
    res.end('fffffffffff')
})
server.listen(90,()=>{
    console.log('server running at http://127.0.0.1:90');
})