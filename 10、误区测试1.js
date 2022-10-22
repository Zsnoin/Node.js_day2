//  误区一

//使用exports 挂载一个uname
exports.uname = '张三'

//为module.exports指定对象
module.exports = {
    usename:'小黑子',
    age:'两年半',
    sayHello: function(){
        console.log('rap');
    }
}
