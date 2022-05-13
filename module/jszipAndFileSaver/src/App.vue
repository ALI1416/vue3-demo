<template>
  <button @click="download">点击下载</button>
</template>

<script setup>
import JSZip from 'jszip'
import FileSaver from 'file-saver'

const zip = new JSZip();

async function download() {
  // 抓取文件
  const logoBlob = await fetch("logo.png").then(res => res.blob());
  // 装载文件
  const time = new Date().getTime();
  const folder = zip.folder(time.toString());
  folder.file("logo.png", logoBlob, {binary: true});
  const helloFolder = folder.folder("hello");
  for (let i = 0; i < 100; i++) {
    helloFolder.file("Hello" + i + ".txt", "Hello World " + i);
  }
  // 压缩文件
  const zipFile = await zip.generateAsync({type: "blob"});
  // 下载
  FileSaver.saveAs(zipFile, time + ".zip");
}
</script>
