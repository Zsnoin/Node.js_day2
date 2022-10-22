/*
使用require()方法导入模块时，导入的结果，永远是module.exports指向的对象为准。
module.exports 和 exports 指向的是同一个对象
*/

//通过require导入测试文件
//得到的结果永远是 module.exports指向的对象
//使用require获取误区1测试文件
const obj1 = require('./10、误区测试1') 

//使用require获取误区2测试文件
const obj2 = require('./10、误区测试2')

//使用require获取误区3测试文件
const obj3 = require('./10、误区测试3')

//使用require获取误区4测试文件
const obj4 = require('./10、误区测试4')

// 结果永远是 module.exports指向的对象
console.log(obj1);
console.log(obj2);
//module.exports 没有指定新对象,值都存放在一起(即module.exports指向的对象)
console.log(obj3);
console.log(obj4);

//防止混乱，避免一起使用 module.exports 和 exports

/*
CommonJS模块化规范:
module 变量代表当前模块
module.exports 是对外接口
require() 方法用于加载模块
*/