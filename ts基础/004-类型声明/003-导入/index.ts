// 使用es6导入
import {num, Point, changeDirection} from '../002-类型声明文件'

console.log(num)

let point: Point = {
  x: 111,
  y: 222
}
console.log(point)

changeDirection('DOWN')
