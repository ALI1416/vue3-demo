/* keyof 查询对象所有键的联合类型 */
interface Props {
  id: number,
  name: string,
  value: number
}

// 联合类型 "id" | "name" | "value"
type KeyofProps = keyof Props

// keyof应用：查询指定key对应的value
function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let p = {
  id: 123,
  name: 'hhhh',
  value: true
}
console.log(getProp(p, 'name'))

/* 签名索引类型 */
interface AnyObject {
  // [K: string] 代表键的类型是string(js对象键就是string类型的)
  [K: string]: number
}

let anyObject: AnyObject = {
  id: 123,
  name: 456
}
console.log(anyObject)

// 数组Array就使用了签名索引类型
let nums = [2, 3, 4]
// 按住Ctrl键，鼠标左键单击`length`查看源码，拉到最后可见`[n: number]: T`
console.log(nums.length)

// 模拟数组Array
interface MyArray<T> {
  [K: number]: T
}

let myArray: MyArray<number> = [4, 5, 6]
console.log(myArray[1])

/* 映射类型 */
// 把 "id" | "name" | "value" 全部设置为number类型
type Type1 = { [K in KeyofProps]: number }
let type1: Type1 = {
  id: 333,
  name: 444,
  value: 555
}
console.log(type1)

// 使用keyof
type Type2 = { [K in keyof Props]: number }
let type2: Type2 = {
  id: 333,
  name: 444,
  value: 555
}
console.log(type2)

/* 索引查询类型 */
// 查询Props2对象中键为name的类型
type Type3 = Props['name']
let type3: Type3 = "type3"
console.log(type3)

// 查询多个
type Type4 = Props['id' | 'name']
let type4: Type4 = 666
console.log(type4)
type Type5 = Props['id' | 'value']
let type5: Type5 = 777
console.log(type5)
