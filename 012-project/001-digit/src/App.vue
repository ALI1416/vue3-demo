<template>
  <div>
    <h2>原图(512x512)</h2>
    <a :href="svgPath" target="_blank">
      <button>点击查看</button>
    </a>
    <a :href="svgPath" download>
      <button>点击下载</button>
    </a>
    <h3>缩略图(32x32)</h3>
    <img width="32" :src="svgPath"/>
  </div>
  <div>
    <h2>生成选项</h2>
    <ul>
      <li>
        <label for="width">画布宽度：</label>
        <input type="number" id="width" v-model="width" min="1">
        <label for="width">(>0)</label>
      </li>
      <li>
        <label for="height">画布高度：</label>
        <input type="number" id="height" v-model="height" min="1">
        <label for="height">(>0)</label>
      </li>
      <li>
        <label>字体颜色：</label>
        <label>黑色</label><input type="checkbox" v-model="colorBlack">
        <input type="color" v-model="color" v-show="!colorBlack">
      </li>
      <li>
        <label>背景颜色：</label>
        <label>透明</label><input type="checkbox" v-model="bgColorTransparent">
        <input type="color" v-model="bgColor" v-show="!bgColorTransparent">
      </li>
      <li>
        <label for="numMin">数字范围：从</label>
        <input type="number" id="numMin" v-model="numMin" min="0" max="99999">
        <label for="numMax">到</label>
        <input type="number" id="numMax" v-model="numMax" min="0" max="99999">
        <label for="numMax">(0~99999)</label>
      </li>
      <li>
        <label>固定长度：</label>
        <label>不足填充0</label><input type="checkbox" v-model="fillZero">
        <label for="fillZeroLength" v-show="fillZero">长度：</label>
        <input type="number" id="fillZeroLength" v-model="fillZeroLength" v-show="fillZero" min="1" max="5">
        <label for="fillZeroLength" v-show="fillZero">(1~5)</label>
      </li>
    </ul>
    <button @click="generate">点击生成</button>
    <p>{{ generateMsg }}</p>
  </div>
  <div>
    <h2>打包下载</h2>
    <button @click="download" :disabled="svgData.length===0">点击下载</button>
    <p>{{ downloadMsg }}</p>
  </div>
  <div>
    <h2>预览</h2>
    <button @click="preview" :disabled="svgData.length===0">点击生成</button>
    <p>{{ previewMsg }}</p>
    <div>
      <div v-for="(item,index) in previewData" :key="'item'+item" style="display:inline-block;margin:0 10px;">
        <img width="64" :src="'data:image/svg+xml;base64,'+item[1]"/>
        <br>
        <button @click="downloadSingle(index)">下载{{ item[0] }}.svg</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import JSZip from 'jszip'
import FileSaver from 'file-saver'

const zip = new JSZip();

const svgPath = 'img/88.svg';
const width = ref(512);
const height = ref(512);
const colorBlack = ref(true);
const color = ref('#000000');
const bgColorTransparent = ref(true);
const bgColor = ref('#ffffff');
const numMin = ref(0);
const numMax = ref(99);
const fillZero = ref(true);
const fillZeroLength = ref(2);
const generateMsg = ref('点击按钮生成SVG图片');
const downloadMsg = ref('点击按钮下载打包后的文件');
const previewMsg = ref('点击按钮预览SVG图片');

const svgData = ref([]);
const previewData = ref([]);

const header1 = '<svg width="';
// +width.value+
const header2 = '" height="';
// +height.value+
const header3 = '" viewBox="0 0 512 512"' +
    ' xmlns="http://www.w3.org/2000/svg"'
// +' style="background-color:#000000"'+
const header4 = '><defs>' +
    '<path d="M144 256l28-28h168l28 28-28 28H172z" id="x"'
// +' fill="#ffffff"'+
const header5 = '/><use id="y" href="#x" transform="rotate(90 256 256)"/>';
// +getHeader6(numList)+
// +getMain(numList)+
const footer = '</svg>';

let n = [];
n[0] = '<g id="a">' +
    '<use href="#x" y="-228"/>' +
    '<use href="#x" y="228"/>' +
    '<use href="#y" x="-114" y="-114"/>' +
    '<use href="#y" x="-114" y="114"/>' +
    '<use href="#y" x="114" y="-114"/>' +
    '<use href="#y" x="114" y="114"/>' +
    '</g>';
n[1] = '<g id="b">' +
    '<use href="#y" x="114" y="-114"/>' +
    '<use href="#y" x="114" y="114"/>' +
    '</g>';
n[2] = '<g id="c">' +
    '<use href="#x" y="-228"/>' +
    '<use href="#x"/>' +
    '<use href="#x" y="228"/>' +
    '<use href="#y" x="-114" y="114"/>' +
    '<use href="#y" x="114" y="-114"/>' +
    '</g>';
n[3] = '<g id="d">' +
    '<use href="#x" y="-228"/>' +
    '<use href="#x"/>' +
    '<use href="#x" y="228"/>' +
    '<use href="#y" x="114" y="-114"/>' +
    '<use href="#y" x="114" y="114"/>' +
    '</g>';
n[4] = '<g id="e">' +
    '<use href="#x"/>' +
    '<use href="#y" x="-114" y="-114"/>' +
    '<use href="#y" x="114" y="-114"/>' +
    '<use href="#y" x="114" y="114"/>' +
    '</g>';
n[5] = '<g id="f">' +
    '<use href="#x" y="-228"/>' +
    '<use href="#x"/>' +
    '<use href="#x" y="228"/>' +
    '<use href="#y" x="-114" y="-114"/>' +
    '<use href="#y" x="114" y="114"/>' +
    '</g>';
n[6] = '<g id="g">' +
    '<use href="#x" y="-228"/>' +
    '<use href="#x"/>' +
    '<use href="#x" y="228"/>' +
    '<use href="#y" x="-114" y="-114"/>' +
    '<use href="#y" x="-114" y="114"/>' +
    '<use href="#y" x="114" y="114"/>' +
    '</g>';
n[7] = '<g id="h">' +
    '<use href="#x" y="-228"/>' +
    '<use href="#y" x="114" y="-114"/>' +
    '<use href="#y" x="114" y="114"/>' +
    '</g>';
n[8] = '<g id="i">' +
    '<use href="#x" y="-228"/>' +
    '<use href="#x"/>' +
    '<use href="#x" y="228"/>' +
    '<use href="#y" x="-114" y="-114"/>' +
    '<use href="#y" x="-114" y="114"/>' +
    '<use href="#y" x="114" y="-114"/>' +
    '<use href="#y" x="114" y="114"/>' +
    '</g>';
n[9] = '<g id="j">' +
    '<use href="#x" y="-228"/>' +
    '<use href="#x"/>' +
    '<use href="#x" y="228"/>' +
    '<use href="#y" x="-114" y="-114"/>' +
    '<use href="#y" x="114" y="-114"/>' +
    '<use href="#y" x="114" y="114"/>' +
    '</g>';

function getHeader6(numList) {
  const num = Array.from(new Set(numList));
  let header6 = '';
  for (let i of num) {
    header6 += n[i];
  }
  return header6 + '</defs>';
}

function getHeader(numList) {
  return header1 //
      + height.value //
      + header2 //
      + width.value //
      + header3 //
      + (bgColorTransparent.value ? '' : ' style="background-color:' + bgColor.value + '"') //
      + header4 //
      + (colorBlack.value ? '' : (color.value === '#000000' ? '' : ' fill="' + color.value + '"')) //
      + header5 //
      + getHeader6(numList);
}

function num2Id(num) {
  return String.fromCharCode(Number(num) + 97)
}

function digit1Length(numList) {
  return '<use href="#'
      + num2Id(numList[0])
      + '" transform="matrix(.9 0 -.07874 .9 46.317 26.1)"/>';
}

function digit2Length(numList) {
  return '<g transform="matrix(.7 0 -.06124 .7 -26.337 77)">'
      + '<use href="#'
      + num2Id(numList[0])
      + '"/>'
      + '<use href="#'
      + num2Id(numList[1])
      + '" x="340"/>'
      + '</g>';
}

function digit3Length(numList) {
  return '<g transform="matrix(.46 0 -.04024 .46 -6.634 138.92)">'
      + '<use href="#'
      + num2Id(numList[0])
      + '"/>'
      + '<use href="#'
      + num2Id(numList[1])
      + '" x="340"/>'
      + '<use href="#'
      + num2Id(numList[2])
      + '" x="680"/>'
      + '</g>';
}

function digit4Length(numList) {
  return '<g transform="matrix(.342 0 -.02992 .342 1.635 168.948)">'
      + '<use href="#'
      + num2Id(numList[0])
      + '"/>'
      + '<use href="#'
      + num2Id(numList[1])
      + '" x="340"/>'
      + '<use href="#'
      + num2Id(numList[2])
      + '" x="680"/>'
      + '<use href="#'
      + num2Id(numList[3])
      + '" x="1020"/>'
      + '</g>';
}

function digit5Length(numList) {
  return '<g transform="matrix(.273 0 -.02388 .273 6.097 186.186)">'
      + '<use href="#'
      + num2Id(numList[0])
      + '"/>'
      + '<use href="#'
      + num2Id(numList[1])
      + '" x="340"/>'
      + '<use href="#'
      + num2Id(numList[2])
      + '" x="680"/>'
      + '<use href="#'
      + num2Id(numList[3])
      + '" x="1020"/>'
      + '<use href="#'
      + num2Id(numList[4])
      + '" x="1360"/>'
      + '</g>';
}

function getMain(numList) {
  switch (numList.length) {
    case 1:
      return digit1Length(numList);
    case 2:
      return digit2Length(numList);
    case 3:
      return digit3Length(numList);
    case 4:
      return digit4Length(numList);
    case 5:
      return digit5Length(numList);
  }
}

function getSvg(numList) {
  return getHeader(numList) + getMain(numList) + footer;
}

function padZero(num, n) {
  const numStr = num.toString();
  const numLen = numStr.length;
  return n > numLen ? (Array(n - numLen + 1).join('0')) + numStr : numStr;
}

function generate() {
  generateMsg.value = '正在生成，请稍后...'
  if (numMin.value < 0) {
    numMin.value = 0;
  }
  if (numMax.value > 99999) {
    numMax.value = 99999;
  }
  if (numMin.value > numMax.value) {
    const temp = numMin.value;
    numMin.value = numMax.value;
    numMax.value = temp;
  }
  svgData.value.length = 0;
  for (let i = numMin.value; i <= numMax.value; i++) {
    const name = fillZero.value ? padZero(i, fillZeroLength.value) : i.toString();
    svgData.value.push([name, getSvg(name.split(''))])
  }
  generateMsg.value = '已生成' + svgData.value.length + '个SVG图片'
}

function download() {
  downloadMsg.value = '正在打包，请稍后...'
  const time = new Date().getTime();
  const folder = zip.folder(time.toString());
  for (let i of svgData.value) {
    folder.file(i[0] + ".svg", i[1]);
  }
  zip.generateAsync({type: "blob"}).then(function (content) {
    FileSaver.saveAs(content, time + ".zip");
    downloadMsg.value = '下载已完成'
  });
}

function preview() {
  previewMsg.value = '正在生成预览，请稍后...'
  previewData.value.length = 0;
  for (let i of svgData.value) {
    previewData.value.push([i[0], btoa(i[1])]);
  }
  previewMsg.value = '预览已生成'
}

function downloadSingle(index) {
  const svg = svgData.value[index];
  FileSaver.saveAs(new Blob([svg[1]], {type: 'image/svg+xml'}), svg[0] + '.svg');
}
</script>
