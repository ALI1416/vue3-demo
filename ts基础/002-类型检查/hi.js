let str = 'Hi, World !'
console.log(str);
// 执行时报错
// TypeError: str.split is not a function
str = 123;
let split = str.split(',');
console.log(split);
