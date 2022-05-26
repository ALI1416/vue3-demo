/* 交叉类型：使用&连接接口 */
interface Point2D {
  x: number
  y: number
}

// 用extends可以实现交叉类型
interface Point3D extends Point2D {
  z: number
}

let p3: Point3D = {
  x: 1,
  y: 2,
  z: 3
}
console.log(p3)

interface Z {
  z: number
}

// 使用&连接多个接口，可以实现和extends一样的效果
type Point3D2 = Point2D & Z;
let p4: Point3D2 = {
  x: 4,
  y: 5,
  z: 6
}
console.log(p4)

/* 可以使用&进行重载(方法名相同，参数类型不同)，但是extends不可以 */
interface PrintNum {
  print: (p: number) => void
}

interface PrintStr {
  print: (p: string) => void
}

type Print = PrintNum & PrintStr
let pr: Print = {
  // 此时参数p的类型为number|string
  print(p) {
    console.log(p)
  }
}
pr.print(1)
pr.print('hhh')
