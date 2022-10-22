/*
模块作用域
和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在自己的模块内被访问，
这种模块级别的访问限制，叫做模块作用域。

在每一个.js自定义模块中都有一个module对象，他里面存储了和当前模块有关的信息。
可以使用module.exports对象向外分享成员

默认情况下，module.exports = {} 所以加载自定义模块是会打印一个 {}

使用require()方法导入模块时，导入的结果，永远是module.exports指向的对象为准。

module.exports 难记忆，可以改写为 exports
module.exports 和 exports 指向的是同一个对象
*/

const m7 = require('./7、模块化')
console.log(m7);
console.log(module.exports === exports);
// console.log(module)