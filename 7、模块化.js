/*
模块化
就是遵守固定的规则，把一个大文件拆分成独立互相依赖的多个小模块。

模块化的优点
1、提高了代码的复用性
2、提高了代码的可维护性
3、可以实现按需加载

Node.js 中的模块化
内置模块        Node.js官方提供的，例如fs、path、http等
自定义模块      用户创建的每一个.js文件，都是自定义模块
第三方模块      由第三方提供的，非自定义和官方提供的，需要自行下载

加载模块
使用强大的require()方法
内置模块
const fs = require('fs')
自定义模块
const custom = require('./custom.js')
加载第三方模块
const moment = require('moment)

使用require()方法加载需要的内置模块时，会执行被加载模块中的代码
*/
console.log('这是一个自定义模块,加载了7这个自定义模块');
const uname = '张三'

//向module.exports挂载一个uname属性
module.exports.uname = '张大'

//向module.exports挂载一个sayHello方法
module.exports.sayHello = function(){
    console.log('Hello');
}

// 使用require()方法导入模块时，导入的结果，永远是module.exports指向的对象为准。
//只会向外分享新对象
module.exports = {
    uname:'张三',
    age:'18',
    sayHello: function(){
        console.log('Hello');
    },
    arr:[{
        uname1:"李四",
        age:15
    },{
        uname2:'王麻子',
        age:28
    }]
}