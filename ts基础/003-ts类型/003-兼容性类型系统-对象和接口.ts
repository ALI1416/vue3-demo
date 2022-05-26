/* 具有相同(或大于)参数的方法 他们属于同一类型 */
// 兼容性类型系统也叫结构化类型系统或鸭子系统
// 与之对应的是表明类型系统，只有方法名相同，才属于同一类型
/* 类 */
class Point {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class Point2D {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class Point3D {
  x: number
  y: number
  z: number

  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }
}

// 因为他们具有相同的参数，可以兼容
let p2: Point = new Point2D(1, 2);
console.log(p2)
p2.x = 3
p2.y = 4
console.log(p2)
// Point3D的参数比Point参数多，可以兼容
// 属性多的，可以赋值给属性少的
let p3: Point = new Point3D(3, 4, 5);
console.log(p3)
p3.x = 6
p3.y = 7
console.log(p3)

/* 接口 */
interface IPoint {
  x: number
  y: number
}

interface IPoint2D {
  x: number
  y: number
}

interface IPoint3D {
  x: number
  y: number
  z: number
}

let ip: IPoint = {
  x: 11,
  y: 12
}
let ip2: IPoint2D = {
  x: 13,
  y: 14
}
let ip3: IPoint3D = {
  x: 15,
  y: 16,
  z: 17
}
// 以下都没问题，属性多的可以赋值给属性少的
ip = ip2
ip2 = ip3
console.log(ip)
console.log(ip2)
// 以下会报错，属性少的不能赋值给属性多的
// ip3=ip
// ip3=ip2
// 类和接口之间也可以进行兼容
ip = new Point2D(1, 2);
ip2 = new Point3D(1, 2, 3);
console.log(ip)
console.log(ip2)
p2 = ip
p3 = ip2
console.log(p2)
console.log(p3)
