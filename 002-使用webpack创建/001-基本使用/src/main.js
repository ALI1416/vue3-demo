/* 入口文件 */

// npm官网下载速度较慢，需要切换镜像源
// 设置淘宝源 npm config set registry https://registry.npmmirror.com/
// 查看源 npm config get registry

// 使用webpack必须安装webpack和webpack-cli包（全局）
// 使用以下命令 npm install webpack -g 和 npm install webpack-cli -g
// webpack打包支持AMD,CMD,CommonJS,ES6等打包规范
// 使用命令  webpack 入口文件   即可打包到dist目录
// 例如E:\vue\04-webpack\01-基本使用>webpack ./src/main.js会打包到./dist/main.js

// CommonJS的模块引入方式（使用webpack打包时，可以不加文件后缀）
const { fa, fb } = require('./a')
fa();
fb();

// ES6的模块引入方式（使用webpack打包时，可以不加文件后缀）
import { a, b } from './b'

console.log(a);
console.log(b);
