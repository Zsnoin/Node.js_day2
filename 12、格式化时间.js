let time = require('./传统的格式化时间')
let dt = new Date()
dt = time.dateFormat(dt)
console.log(dt);

/*
装包的命令
终端打开
npm install 包的完整名称
简写：npm i 包的完整名称
指定安装版本：npm i 包的完整名称@版本号
*/

//使用moment包对时间进行格式化
//导入包
let moment = require('moment')
let time1=moment().format('YYYY-MM-DD HH:mm:ss')
console.log(time1);