//  误区三

//为exports 指定新对象
exports = {
    usename: '小黑子',
    sayHello: function () {
        console.log('rap');
    }
}
//module.exports 指向 exports
module.exports = exports

//为module.exports挂载一个age
module.exports.age = 1008611