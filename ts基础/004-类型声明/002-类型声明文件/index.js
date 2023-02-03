let num = 123;
const str = 'sss';
let point = {
  x: 123,
  y: 456
};
console.log(num, str, point);

function add(n1, n2) {
  return n1 + n2;
}

console.log(add(2, 3));

const printPoint = function (point) {
  console.log('坐标为：x:' + point.x + ',y:' + point.y);
};
printPoint({x: 4, y: 5});

let changeDirection = function (direction) {
  console.log('改变方向：' + direction);
};
changeDirection('RIGHT');

// 使用es6导出
export {num, str, point, add, printPoint, changeDirection}
