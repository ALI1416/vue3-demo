<template>
  <div>
    <span>用户名:</span>
    <input v-model="user" type="text" size="10">
    <button @click="connect" :disabled="connectDisabled">连接</button>
    <button @click="disconnect" :disabled="!connectDisabled">断开</button>
  </div>
  <div>
    <h3>广播形式</h3>
    <input v-model="broadcastText" type="text">
    <button @click="broadcastButton">发送</button>
    <h4>广播消息：</h4>
    <textarea v-model="broadcastMsg" readonly cols="30" rows="3"></textarea>
  </div>
  <div>
    <h3>广播形式2</h3>
    <input v-model="broadcastText2" type="text">
    <button @click="broadcastButton2">发送</button>
    <h4>广播消息2：</h4>
    <textarea v-model="broadcastMsg2" readonly cols="30" rows="3"></textarea>
  </div>
  <div>
    <h3>订阅形式</h3>
    <h4>订阅消息：</h4>
    <textarea v-model="subscribeMsg" readonly cols="30" rows="3"></textarea>
    <h4>订阅异常消息：</h4>
    <textarea v-model="subscribeErrorMsg" readonly cols="30" rows="3"></textarea>
  </div>
  <div>
    <h3>角色形式</h3>
    <span>发送到用户名:</span>
    <input v-model="sendUser" type="text" size="10">
    <br>
    <input v-model="userText" type="text">
    <button @click="userButton">发送</button>
    <h4>用户消息：</h4>
    <textarea v-model="userMsg" readonly cols="30" rows="3"></textarea>
  </div>
  <div>
    <h3>没有处理方法的广播</h3>
    <input v-model="appText" type="text">
    <button @click="appButton">发送</button>
    <h4>消息：</h4>
    <textarea v-model="appMsg" readonly cols="30" rows="3"></textarea>
  </div>
</template>

<script setup>
import Stomp from 'stompjs'
import {ref} from 'vue'

let stomp = null;
const url = "ws://127.0.0.1:8080/ws";

/* 连接 */
// 用户名
const user = ref("");
// 未连接
const connectDisabled = ref(false);

// 连接
function connect() {
  // 用户名
  const header = {
    user: user.value
  };
  stomp = Stomp.client(url);
  //连接
  stomp.connect(header, function () {
    //广播
    stomp.subscribe("/topic/broadcast", function (res) {
      broadcastMsg.value = res.body;
    });
    //广播2
    stomp.subscribe("/topic/broadcast2", function (res) {
      broadcastMsg2.value = res.body;
    });
    //订阅
    stomp.subscribe("/app/subscribe/" + user.value, function (res) {
      subscribeMsg.value = res.body;
    });
    //订阅异常消息
    stomp.subscribe("/user/queue/errors", function (res) {
      subscribeErrorMsg.value = res.body;
    });
    //用户
    stomp.subscribe("/user/queue/one", function (res) {
      userMsg.value = res.body;
    });
    //没有处理方法的广播
    stomp.subscribe("/topic/aaa", function (res) {
      appMsg.value = res.body;
    });
    connectDisabled.value = true;
  });
}

// 断开
function disconnect() {
  if (stomp != null) {
    stomp.disconnect();
    connectDisabled.value = false;
  }
}

/* 广播形式 */
// 要发送放消息
const broadcastText = ref("");

// 发送
function broadcastButton() {
  stomp.send("/app/broadcast", {}, JSON.stringify({"msg": broadcastText.value}))
}

// 接收的消息
const broadcastMsg = ref("");
/* 广播形式2 */
// 要发送放消息
const broadcastText2 = ref("");

// 发送
function broadcastButton2() {
  stomp.send("/app/broadcast2", {}, JSON.stringify({"msg": broadcastText2.value}))
}

// 接收的消息
const broadcastMsg2 = ref("");
/* 订阅形式 */
// 订阅消息
const subscribeMsg = ref("");
// 订阅异常消息
const subscribeErrorMsg = ref("");
/* 角色形式 */
// 要发送的用户名
const sendUser = ref("");
// 要发送放消息
const userText = ref("");

// 发送
function userButton() {
  stomp.send("/app/one", {}, JSON.stringify({"user": sendUser.value, "msg": userText.value}))
}

// 接收的消息
const userMsg = ref("");
/* 没有处理方法的广播 */
// 要发送放消息
const appText = ref("");

// 发送
function appButton() {
  stomp.send("/topic/aaa", {}, JSON.stringify({"msg": appText.value}))
}

// 接收的消息
const appMsg = ref("");

</script>
