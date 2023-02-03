/* 泛型 */

/* 定义泛型函数 */

// 在函数名后加`<T>`代表泛型，其中`T`可以是任意字符串
function fun<T>(value: T): T {
  return value;
}

// 显式声明类型
// function fun<number>(value: number): number
console.log(fun<number>(123))

// 自动推断类型
// function fun<"abc">(value: "abc"): "abc"
console.log(fun('abc'))

/* 泛型约束 */

// 普通泛型类型无法调用任何方法
function fun2<T>(value: T[]): number {
  // 如果是泛型数组，可以调用数组的方法
  return value.length;
}

console.log(fun2([1, 2, 3]))

/* 泛型约束(使用extends) */

// 声明约束接口
interface ILength {
  length: number
}

function fun3<T extends ILength>(value: T): number {
  // 传入的值，必须可以调用`.length`方法
  return value.length;
}

console.log(fun3([1, 2, 3, 4]))
console.log(fun3("12345"))
// 没有.length方法，报错
// console.log(fun3(12))

/* 泛型接口 */

// 定义接口
interface Fun4<T> {
  get: (value: T) => T,
  getId: () => T[]
}

// 实现接口
let fun4: Fun4<number> = {
  get(value) {
    return value;
  },
  getId() {
    return [1, 2, 3]
  }
}

console.log(fun4.get(2333))
console.log(fun4.getId())

// 数组也是泛型接口
let nums = [2, 3, 4]
// 按住Ctrl键，鼠标左键单击`length`查看源码，可见定义数组接口`interface Array<T>`
console.log(nums.length)

/* 泛型类 */

// 定义泛型类
class Clazz<T> {
  // 如果构造函数没有赋值，属性必须有默认值
  defaultValue: T

  // 使用泛型重写构造函数
  constructor(value: T) {
    this.defaultValue = value
  }
}

// 自动推断泛型类型
let clazz = new Clazz('hhh');
console.log(clazz.defaultValue)

/* 泛型工具类型 */
interface Props {
  id: number,
  name: string,
  value: number
}

// 全部属性都要定义，可修改
let p1: Props = {
  id: 1,
  name: 'hhh',
  value: 666
}
console.log(p1)
p1.name = 'aaa'
console.log(p1)

/* Partial 可选 */
type PartialProps = Partial<Props>

// 可以只定义部分属性
let p2: PartialProps = {
  id: 2
}
console.log(p2)

/* Readonly 只读 */
type ReadonlyProps = Readonly<Props>
let p3: ReadonlyProps = {
  id: 3,
  name: 'rrr',
  value: 2333
}
console.log(p3)
// 不可修改
// p3.name = 'aaa'

/* Pick 部分 */
// 选取一部分属性作为新的接口
type PickProps = Pick<Props, 'id' | 'name'>
let p4: PickProps = {
  id: 4,
  name: 'ppp'
}
console.log(p4)

/* Record 记录 */
// 定义属性均为某种类型
type RecordNumber = Record<'a' | 'b' | 'c', number>
let r: RecordNumber = {
  a: 1,
  b: 2,
  c: 3
}
console.log(r)
