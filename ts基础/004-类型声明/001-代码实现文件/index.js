// 以.ts结尾的文件 是 代码实现文件
// 包含类型信息 和 可执行代码
// 可以被编译成js代码
// 使用`tsc 文件名.ts`生成同名js代码
// 使用`node 文件名.js`运行js代码
var num = 123;
var str = 'sss';
var point = {
    x: 222,
    y: 333
};
console.log(num, str, point);
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(2, 3));
var printPoint = function (point) {
    console.log('坐标为：x:' + point.x + ',y:' + point.y);
};
printPoint({ x: 4, y: 5 });
var changeDirection = function (direction) {
    console.log('改变方向：' + direction);
};
changeDirection('RIGHT');
