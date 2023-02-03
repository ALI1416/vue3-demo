/* 类 */

// 声明一个类
class Person {
  // 指明属性类型
  age: number
  // 默认值，自动推断类型
  gender = '男'
  // 声明构造函数，没有主动声明，会有一个空的构造函数
  // 构造函数没有返回类型
  // 如果没有声明构造函数，属性必须有默认值
  // 构造函数只能声明一个，如果需要重载，可以使用可变参数，但是赋值时需要判断
  constructor(age: number, gender?: string) {
    this.age = age
    if (typeof gender !== "undefined") {
      this.gender = gender
    }
  }

  // 类的实例方法
  addAge(num: number) {
    this.age += num;
  }
}

console.log(new Person(111))
let p = new Person(222, '女');
console.log(p)
// 调用方法
p.addAge(10)
console.log(p)

/* 继承 */
class Animal {
  // 修饰符默认为public，在任意位置可见
  move() {
    console.log('没事走两步')
  }

  // protected修饰符，仅在当前类和子类的方法中可调用，实例化后不可调用
  protected pro() {
    console.log('protected')
  }

  // private修饰符，仅在当前类方法中可调用，实例化后不可调用
  // 一般在名称的前后各加2个下划线来代表他是内部辅助函数
  private __pri__() {
    console.log('private')
  }

  pro2() {
    // 当前类可以调用protected修饰的方法
    this.pro();
  }

  pri2() {
    // 当前类可以调用private修饰的方法
    this.__pri__()
  }
}

let a = new Animal();
a.move()
a.pro2()
a.pri2()

// 通过extends关键字来继承父类
class Dog extends Animal {
  name = '二哈'

  bark() {
    console.log('汪汪汪')
  }

  pro3() {
    // 子类可以调用protected修饰的方法
    this.pro();
  }
}

let d = new Dog();
d.move()
d.bark()
console.log(d.name)
d.pro3()

/* 实现接口(ts特有) */
interface Singable {
  name: string,

  // 方法需要声明返回类型
  sing(): void
}

// 使用implements关键字来实现接口，必须重写所有属性和方法
class Cat implements Singable {
  name = '小猫咪'

  sing() {
    console.log('喵喵喵')
  }

}

let c = new Cat();
c.sing()
console.log(c.name)

/* readonly修饰符 */

// 类中使用
class Person2 {
  // 在类中修饰属性，仅可在构造函数中赋值
  // 如果还带有默认值，必须指定类型，否则会变成const，不可赋值
  readonly name: string = 'ck'

  constructor(name?: string) {
    if (typeof name !== "undefined") {
      this.name = name
    }
  }
}

let p2 = new Person2();
let p3 = new Person2('kk');
console.log(p2)
console.log(p3)

// 接口中使用
interface IPerson {
  readonly name: string
}

let ip: IPerson = {
  name: 'cc'
}
// 只能实现接口时赋值
// ip.name='kk'
console.log(ip)

// 对象中使用
let obj: { readonly name: string } = {
  name: 'ckk'
}
// 只能声明对象时赋值
// obj.name='kk'
console.log(obj)
