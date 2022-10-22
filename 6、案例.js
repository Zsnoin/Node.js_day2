//导入模块
const fs = require('fs')
const path = require('path')
const http = require('http')
//创建本地服务器
const server = http.createServer()
//监听用户请求
server.on('request', (req, res) => {
    //获取请求地址
    const url = req.url
    let fpath = ''
    //对请求地址进行判断
    if (url == '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, './clock', url)
    }
    // const fpath = path.join(__dirname,url)
    //通过映射过来的路径读取文件的内容
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) {
            return res.end('404 Not found!')
        }
        res.end(dataStr)
    })
})
server.listen(80, () => {
    console.log("server running at http://127.0.0.1");
})