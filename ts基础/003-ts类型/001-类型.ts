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

// 对象类型
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

// 接口
// 使用interface声明
interface MyInterface {
    name: string
    age: number

    add(num1: number, num2: number): number

    welcome: (name: string) => void
}
// 声明类型是自定义接口
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

