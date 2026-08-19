<template>
  <button @click="download">点击下载</button>
</template>

<script setup>
import {BlobReader, BlobWriter, TextReader, TextWriter, ZipReader, ZipWriter} from '@zip.js/zip.js'

async function download() {
  // 抓取文件
  const logoBlob = await fetch('favicon.ico').then(res => res.blob())
  // 装载文件
  const time = Date.now()
  const zipFile = new BlobWriter()
  const zipWriter = new ZipWriter(zipFile)
  await zipWriter.add(time + '/logo.ico', new BlobReader(logoBlob))
  for (let i = 0; i < 10; i++) {
    await zipWriter.add(time + '/hello/Hello' + i + '.txt', new TextReader('Hello World ' + i))
  }
  await zipWriter.close()
  // 压缩文件
  const zipFileBlob = await zipFile.getData()
  // 下载
  saveAs(zipFileBlob, time + '.zip')
  // 解压文件
  const unzipFile = new BlobReader(zipFileBlob)
  const zipReader = new ZipReader(unzipFile)
  console.log(zipReader)
  const entries = await zipReader.getEntries()
  console.log(entries)
  let s = await entries.find(e => e.filename === time + '/hello/Hello0.txt').getData(new TextWriter())
  console.log(s)
  await zipReader.close()
}

function saveAs(blob, filename) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.append(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}
</script>
