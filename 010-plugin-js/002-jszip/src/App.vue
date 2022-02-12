<template>
  <button @click="download">点击下载</button>
</template>

<script setup>
import JSZip from 'jszip'
import FileSaver from 'file-saver'

const zip = new JSZip();

async function download() {
  const logoData = await fetch("logo.png").then(res => res.blob());
  const time = new Date().getTime();
  const folder = zip.folder(time.toString());
  folder.file("logo.png", logoData, {binary: true});
  const helloFolder = folder.folder("hello");
  for (let i = 0; i < 100; i++) {
    helloFolder.file("Hello" + i + ".txt", "Hello World " + i);
  }
  zip.generateAsync({type: "blob"}).then(function (content) {
    FileSaver.saveAs(content, time + ".zip");
  });
}
</script>
