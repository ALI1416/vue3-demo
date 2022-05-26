/* 原始类型(js和ts相同) */
// 数值
let num: number = 12234
// 字符串
let str: string = '字符串'
// 布尔
let bool: boolean = false
// null
let nul: null = null
// undefined
let udf: undefined = undefined
// 符号(es6新增类型)
// let sym: symbol = Symbol()
console.log(num)
console.log(str)
console.log(bool)
console.log(nul)
console.log(udf)
// console.log(sym)

/* 数组类型 */
// 使用`类型[]`声明数组
let nums: number[] = [1, 3, 5, 7]
// 使用`Array<类型>`声明数组(不推荐)
let strs: Array<string> = ['字', '符', '串']
console.log(nums)
console.log(strs)
/* 联合类型 */
// 表示该数组里可以包含number或string类型
let arr: (number | string)[] = [1, 3, 5, 7, '字', '符', '串']
// 表示是number或string[]类型
let arr2: number | string[] = 3
let arr3: number | string[] = ['字', '符', '串']
console.log(arr)
console.log(arr2)
console.log(arr3)
/* 类型别名 */
// 使用type创建别名
type CustomArray = (number | string)[]
let arr4: CustomArray = [1, 3, 5, 7, '字', '符', '串']
console.log(arr4)

/* 函数类型 */

// 单独指定参数和返回值
// 函数形式
function add1(num1: number, num2: number): number {
  return num1 + num2
}

// 函数表达式形式
const add2 = (num1: number, num2: number): number => {
  return num1 + num2
}
console.log(add1(1, 2))
console.log(add2(1, 2))
// 同时指定参数和返回值(仅限函数表达式形式)
// 函数表达式形式(太复杂，不建议)
const add3: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}
console.log(add3(1, 2))

// void类型
function welcome(name: string): void {
  console.log('Hello, ' + name + ' !')
}

welcome('Ali')

// 可选参数
// 在参数名后加问号
function mySlice(start?: number, end?: number): void {
  console.log('start:' + start + ',end:' + end)
}

mySlice()
mySlice(1)
mySlice(1, 2)

/* 对象类型 */
// 参数名后加类型，参数用逗号、分号或换行来隔开
// 函数也要加类型，可以用函数表达式
// 实现不用加类型
let obj: { name: string, age: number, add(num1: number, num2: number): number, welcome: (name: string) => void } = {
  name: 'ck',
  age: 24,
  add(num1, num2) {
    return num1 + num2;
  },
  welcome(name) {
    console.log('Hello, ' + name + ' !')
  }
}
console.log(obj.name)
console.log(obj.age)
console.log(obj.add(1, 2))
obj.welcome('Ali')

// 对象可选属性
function myAxios(config: { url: string, method?: string }): void {
  console.log(config)
}

myAxios({url: 'baidu'})
myAxios({url: 'baidu', method: 'post'})

/* 接口 */

// 使用interface声明
interface MyInterface {
  name: string
  age: number

  add(num1: number, num2: number): number

  welcome: (name: string) => void
}

// 声明类型是自定义接口
// 实现属性或方法
let obj2: MyInterface = {
  name: 'kk',
  age: 22,
  add(num1, num2) {
    return num1 + num2;
  },
  welcome(name) {
    console.log('Hello, ' + name + ' !')
  }
}
console.log(obj2.name)
console.log(obj2.age)
console.log(obj2.add(1, 2))
obj2.welcome('CK')

// 也可使用type替换interface
// interface只能声明对象，而type可以为任意类型提供别名
type MyType = {
  name: string
  age: number

  add(num1: number, num2: number): number

  welcome: (name: string) => void
}

// 声明类型是自定义类型
// 重写属性或方法
let obj3: MyType = {
  name: 'cc',
  age: 26,
  add(num1, num2) {
    return num1 + num2;
  },
  welcome(name) {
    console.log('Hello, ' + name + ' !')
  }
}
console.log(obj3.name)
console.log(obj3.age)
console.log(obj3.add(2, 2))
obj3.welcome('KK')

// 接口继承
interface Point2D {
  x: number,
  y: number
}

// 使用extends关键字继承方法
interface Point3D extends Point2D {
  z: number
}

let p3: Point3D = {
  x: 1,
  y: 2,
  z: 3
}

console.log(p3)


/* 元组 */
// 元素的个数是确定的
let position: [number, number] = [123, 456]
let position2: [number, string] = [123, '456']
console.log(position)
console.log(position2)

/* 类型推论 */
// 声明变量并初始化
// 类型为number
let a = 18;
// 函数返回值
// 类型为string
function fun() {
  return '123';
}

console.log(a)
console.log(fun())

/* 类型断言 */
// // 通过document.getElementById()获取的返回类型是HTMLElement
// let aLink = document.getElementById('link')
// // 公共属性和方法
// console.log(aLink.id);
// // 可以通过as指定具体类型
// let aLink2 = document.getElementById('link') as HTMLAnchorElement
// // 专有属性和方法
// console.log(aLink2.href);
// // 或者通过<>强转类型(不推荐)
// let aLink3 = <HTMLAnchorElement>document.getElementById('link')

/* 字面量类型 */
// let letStr: string
// letStr的类型是string
let letStr = 'Hello, TS !'
// const constStr: "Hello, TS !"
// constStr的类型是"Hello, TS !"
const constStr = 'Hello, TS !'
// 可以指定类型为'Hello, TS !'
// let letStr2: "Hello, TS !"
let letStr2: 'Hello, TS !' = 'Hello, TS !'
// const constStr2: "Hello, TS !"
const constStr2: 'Hello, TS !' = 'Hello, TS !'

// 对参数参数非常有用，可以指定传入参数的值，一般配合联合类型使用
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
  console.log(direction);
}

// 参数只能是以下4种：'up' | 'down' | 'left' | 'right'
changeDirection('up')

/* 枚举 */

// 声明枚举
enum Direction {Up, Down, Left, Right}

console.log(Direction);

// 指定参数为枚举类型
function changeDirection2(direction: Direction) {
  console.log(direction);
}

// 使用`枚举名.成员名`来访问枚举成员
changeDirection2(Direction.Down)

// 枚举中的成员，都是有值的(数字枚举)，默认第一个是0，后面的递增，可以单独指定
enum Direction2 {Up = 5, Down, Left, Right}

enum Direction3 {Up = 2, Down = 4, Left = 8, Right = 16}

console.log(Direction2.Up)
console.log(Direction3.Up)

// 字符串枚举，全部都要指定值
enum Direction4 {Up = 'up', Down = "DOWN", Left = "Left", Right = "right"}

console.log(Direction4.Up)

// 枚举会被编译成js代码
// 例如对`enum Direction {Up, Down, Left, Right}`的编译如下
// var Direction5;
// (function (Direction5) {
//   Direction5[Direction5["Up"] = 0] = "Up";
//   Direction5[Direction5["Down"] = 1] = "Down";
//   Direction5[Direction5["Left"] = 2] = "Left";
//   Direction5[Direction5["Right"] = 3] = "Right";
// })(Direction5 || (Direction5 = {}));
// 推荐使用`字面量+联合类型`组合的方式来替代枚举，更直观、简洁和高效

/* any类型(强烈不推荐使用) */
// 显式声明
// let abc: any = {x: 10}
// // 调用不存在的属性
// console.log(abc.b)
// // 赋值不存在的属性
// console.log(abc.b = 3)
// // 把对象当方法调用
// abc()
// // 把对象赋值给number类型的值
// let aa: number = abc

// 隐式声明
// 未指定类型并且没有初始值
// let aaa;
// // 方法内参数未指定类型
// function f(num1, num2) {
// }

/* typeof */
// 查询类型
console.log(typeof 'Hello')
// 类型上下文，查询变量或属性的类型
let p={x:1,y:2}
function pp(point:typeof p){
  console.log(point)
}
pp({x:100,y:200})
// 查询属性的类型
console.log(typeof p.x)
