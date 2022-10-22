const fs = require('fs')
const path = require('path')
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    const url = req.url
    let fpath = ''
    if (url == '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, './clock', url)
    }
    // const fpath = path.join(__dirname,url)
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