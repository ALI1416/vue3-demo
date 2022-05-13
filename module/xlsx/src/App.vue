<template>
  <table id="sheetjs">
    <tr>
      <th>S</th>
      <th>h</th>
      <th>e</th>
      <th>e</th>
      <th>t</th>
      <th>J</th>
      <th>S</th>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
    </tr>
    <tr>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
  </table>
  <button @click="arrayDownload">数组下载</button>
  <button @click="jsonDownload">JSON下载</button>
  <button @click="tableDownload">表格下载</button>
  <button @click="tableDownload2">表格下载2</button>
  <br>
  <input type="file" @change="uploadFile">
</template>

<script setup>
// 文档 https://docs.sheetjs.com/
import {read, utils, writeFile} from 'xlsx'

function arrayDownload() {
  let data = [
    ["第一列", "name", 888],
    ["第一行", 666, 1111],
    [2, "xlsx", 222222]
  ];
  // 创建一个表，并把数据从头(A1)写入
  const ws = utils.aoa_to_sheet(data);
  /* 指定位置写入数据 */
  // 从A4位置写入
  utils.sheet_add_aoa(ws, [[1, 2], [2, 3], [3, 4]], {origin: "A4"});
  // 从6行0列写入(A1位置为0行0列)
  utils.sheet_add_aoa(ws, [[5, 6, 7], [6, 7, 8], [7, 8, 9]], {origin: {r: 6, c: 0}});
  // 追加
  utils.sheet_add_aoa(ws, [[4, 5, 6, 7, 8, 9, 0]], {origin: -1});
  download(ws);
}

function jsonDownload() {
  let data = [
    {one: "第一行", two: 666, three: 1111},
    {one: 2, two: "xlsx", three: 222222},
  ];
  // 使用header指定key并作为头部，可以使用`skipHeader: true`不显示头部
  let header = {header: ["one", "two", "three"]/*, skipHeader: true*/};
  // 创建一个表，并把数据从头(A1)写入
  const ws = utils.json_to_sheet(data, header);
  // 从A4位置写入
  utils.sheet_add_json(ws, [
    {A: 1, B: 2}, {A: 2, B: 3}, {A: 3, B: 4}
  ], {skipHeader: true, origin: "A4"});
  // 从6行0列写入(A1位置为0行0列)
  utils.sheet_add_json(ws, [
    {A: 5, B: 6, C: 7}, {A: 6, B: 7, C: 8}, {A: 7, B: 8, C: 9}
  ], {skipHeader: true, origin: {r: 6, c: 0}, header: ["A", "B", "C"]});
  // 追加
  utils.sheet_add_json(ws, [
    {A: 4, B: 5, C: 6, D: 7, E: 8, F: 9, G: 0}
  ], {header: ["A", "B", "C", "D", "E", "F", "G"], skipHeader: true, origin: -1});
  download(ws);
}

function tableDownload() {
  let tb = document.getElementById('sheetjs');
  const ws = utils.table_to_sheet(tb);
  download(ws);
}

function tableDownload2() {
  let tb = document.getElementById('sheetjs');
  const wb = utils.table_to_book(tb);
  // 下载文件
  writeFile(wb, 'SheetJS.xlsx');
}

function download(ws) {
  // 创建一个工作簿
  const wb = utils.book_new();
  // 把表追加到工作簿中
  utils.book_append_sheet(wb, ws, 'Sheet1');
  // 下载文件
  writeFile(wb, 'SheetJS.xlsx');
}

async function uploadFile(event) {
  let data = await readFile(event.target.files[0]);
  let wb = read(data, {type: 'binary', cellDates: true});
  let ws = wb.Sheets[wb.SheetNames[0]];
  // 第一行作为key
  console.log(utils.sheet_to_json(ws));
  // 转为数组
  console.log(utils.sheet_to_json(ws, {header: 1}));
}

/* 读取文件 */
function readFile(file) {
  return new Promise(resolve => {
    let reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = e => {
      resolve(e.target.result)
    }
  });
}
</script>
