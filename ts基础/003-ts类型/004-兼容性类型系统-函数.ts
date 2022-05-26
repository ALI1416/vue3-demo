/* 函数兼容性需要考虑 1、参数个数，2、参数类型，3、返回值类型 */
// 1、参数个数：参数少的可以赋值给参数多的
type F1 = (a: number) => void
type F2 = (a: number, b: number) => void
let f1: F1 = (a) => {
  console.log(a)
}
let f2: F2 = (a, b) => {
  console.log(a, b)
}
f1(12)
f2(34, 56)
// 参数少的可以赋值给参数多的
f2 = f1
f2(78, 90)
// 参数多的不可以赋值给参数少的
// f1 = f2

// 2、参数类型：如果为基本类型，必须相同；如果为对象，参数少的可以赋值给参数多的
interface IPoint2D {
  x: number
  y: number
}

interface IPoint3D {
  x: number
  y: number
  z: number
}

type F3 = (point: IPoint2D) => void
type F4 = (point: IPoint3D) => void
let f3: F3 = (point) => {
  console.log(point.x, point.y)
}
let f4: F4 = (point) => {
  console.log(point.x, point.y, point.z)
}
f3({x: 1, y: 2})
f4({x: 3, y: 4, z: 5})
// 参数少的可以赋值给参数多的
// 接口作为参数，和接口兼容性正好相反，需要把接口拆开，当做参数来看
f4 = f3
f4({x: 6, y: 7, z: 8})
// 参数多的不可以赋值给参数少的
// f3 = f4

// 3、返回值类型：参数多的可以赋值给参数少的
type F5 = () => { x: number, y: number }
type F6 = () => { x: number, y: number, z: number }
let f5: F5 = () => {
  return {x: 1, y: 2}
}
let f6: F6 = () => {
  return {x: 3, y: 4, z: 5}
}
console.log(f5())
console.log(f6())
f5 = f6
console.log(f5())
// 参数少的不可以赋值给参数多的
// f6 = f5
