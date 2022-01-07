const js_b = (function () {
  const obj = {};
  const a = 'b';
  obj.a = a;
  console.log('b:js_a.a:' + js_a.a);
  return obj;
})()