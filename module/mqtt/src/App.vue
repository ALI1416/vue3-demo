<template>
  <div>
    <button @click="connect" :disabled="connectDisabled">连接</button>
    <button @click="disconnect" :disabled="!connectDisabled">断开</button>
  </div>
  <div>
    话题<input v-model="topic" type="text">
    <br>
    内容<input v-model="msg" type="text">
    <br>
    <button @click="send" :disabled="!connectDisabled">发送</button>
  </div>
  <div>
    <textarea v-model="receiveMsg" readonly cols="30" rows="10"></textarea>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import mqtt from "mqtt";

let client = null;
const url = "ws://127.0.0.1:9001/mqtt";

// 未连接
const connectDisabled = ref(false);
// 发送的话题
const topic = ref("topic/js");
// 发送的内容
const msg = ref("msg");
// 收到的消息
const receiveMsg = ref("");

/* 连接 */
function connect() {
  // 建立连接
  client = mqtt.connect(url, {
    // 客户端id
    clientId: "mqtt_js_" + Math.random().toString(16).substring(2),
    // 账号
    username: "root",
    // 密码
    password: "root",
    // 接受离线消息
    clean: false,
    // 断开重连(毫秒)
    reconnectPeriod: 5000
  });
  // 连接成功
  client.on("connect", function (connack) {
    console.log("连接成功", connack);
    connectDisabled.value = true;
  });
  // 重连
  client.on("reconnect", function () {
    console.log("重连");
  });
  // 断开连接
  client.on("close", function () {
    console.log("断开连接");
  });
  // 客户端离线
  client.on("offline", function () {
    console.log("客户端离线");
  });
  // 连接失败
  client.on("error", function (error) {
    console.log("连接失败", error);
  });
  // 结束
  client.on("end", function () {
    console.log("结束");
  });
  // 订阅
  client.subscribe("topic/#", function (err) {
    if (!err) {
      console.log("订阅成功");
    } else {
      console.log("订阅失败", err);
    }
  });
  // 监听到的消息
  client.on("message", function (topic, message) {
    console.log(topic, message.toString())
    receiveMsg.value = topic + ":" + message.toString() + "\n" + receiveMsg.value;
  });
}

/* 断开连接 */
function disconnect() {
  if (client != null) {
    client.end();
    connectDisabled.value = false;
  }
}

/* 发送消息 */
function send() {
  client.publish(topic.value, msg.value)
}
</script>
