// 使用和其他全局变量不重复的名称来接收返回的对象obj
let js_a = (function () {
  let a = 'a';
  // 初始化要导出的对象
  let obj = {};
  // 添加要导出的对象
  obj.a = a;
  // 返回对象
  return obj;
})()