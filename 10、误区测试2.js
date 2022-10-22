//  误区二

//使用module.exports 挂载一个uname
module.exports.uname = '张三'

//为exports指定对象
exports = {
    usename:'小黑子',
    age:'两年半',
    sayHello: function(){
        console.log('rap');
    }
}