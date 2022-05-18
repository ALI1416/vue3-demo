let str: string = 'Hello, World !'
console.log(str);
// 预编译时报错
// TS2322: Type 'number' is not assignable to type 'string'.
// str = 123;
let split = str.split(',');
console.log(split);
