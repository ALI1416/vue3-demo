// 以.d.ts结尾的文件 是 类型声明文件
// 包含类型信息
// 不能被编译成js代码
// 需要在前面加上declare来声明，type、interface可以不加

declare let num: number
declare const str: string

interface Point {
  x: number
  y: number
}

declare let point: Point

declare function add(n1: number, n2: number): number

declare const printPoint: (point: Point) => void

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

declare let changeDirection: (direction: Direction) => void

// 使用es6导出
export {num, str, point, add, printPoint, changeDirection, Point, Direction}
