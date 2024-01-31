<template>
  <div>
    <h3>配置</h3>
    <label for="urlText">URL：</label>
    <input id="urlText" v-model="urlText" type="text">
    <br>
    <label for="usernameText">用户名：</label>
    <input id="usernameText" v-model="usernameText" type="text">
    <button @click="connectBtn" :disabled="connectBtnDisabled">{{ connectBtnText }}</button>
    <h4>连接错误信息：</h4>
    <textarea v-model="errorMsg" readonly cols="50" rows="5"></textarea>
  </div>
  <div>
    <h3>广播模式</h3>
    <label for="broadcastSendText">发送地址：</label>
    <input id="broadcastSendText" v-model="broadcastSendText" type="text">
    <br>
    <label for="broadcastText">发送内容：</label>
    <input id="broadcastText" v-model="broadcastText" type="text">
    <button @click="broadcastBtn" :disabled="broadcastBtnDisabled">发送</button>
    <h4>广播消息：</h4>
    <label for="broadcastSubscribeText">订阅地址：</label>
    <input id="broadcastSubscribeText" v-model="broadcastSubscribeText" type="text">
    <br>
    <textarea v-model="broadcastMsg" readonly cols="50" rows="5"></textarea>
    <h4>广播消息2：</h4>
    <label for="broadcast2SubscribeText">订阅地址：</label>
    <input id="broadcast2SubscribeText" v-model="broadcast2SubscribeText" type="text">
    <br>
    <textarea v-model="broadcast2Msg" readonly cols="50" rows="5"></textarea>
  </div>
  <div>
    <h3>订阅模式</h3>
    <h4>订阅消息：</h4>
    <label for="subscribeText">订阅地址：</label>
    <input id="subscribeText" v-model="subscribeText" type="text">
    <br>
    <textarea v-model="subscribeMsg" readonly cols="50" rows="5"></textarea>
  </div>
  <div>
    <h3>用户模式</h3>
    <label for="userSendText">发送地址：</label>
    <input id="userSendText" v-model="userSendText" type="text">
    <br>
    <label for="userSendUsernameText">发送用户：</label>
    <input id="userSendUsernameText" v-model="userSendUsernameText" type="text">
    <br>
    <label for="userText">发送内容：</label>
    <input id="userText" v-model="userText" type="text">
    <button @click="userBtn" :disabled="userBtnDisabled">发送</button>
    <h4>用户消息：</h4>
    <label for="userSubscribeText">订阅地址：</label>
    <input id="userSubscribeText" v-model="userSubscribeText" type="text">
    <br>
    <textarea v-model="userMsg" readonly cols="50" rows="5"></textarea>
  </div>
</template>

<script setup>
import {Client} from "@stomp/stompjs";
import {ref} from 'vue'

const urlText = ref("ws://127.0.0.1:8080/ws");
const usernameText = ref("ali");
const connectBtnDisabled = ref(false);
const connectBtnText = ref("连接");
const errorMsg = ref("");
const broadcastSendText = ref("/app/broadcast");
const broadcastText = ref("发送广播");
const broadcastBtnDisabled = ref(true);
const broadcastSubscribeText = ref("/topic/broadcast");
const broadcastMsg = ref("");
const broadcast2SubscribeText = ref("/topic/broadcast2");
const broadcast2Msg = ref("");
const subscribeText = ref("/app/subscribe/订阅消息");
const subscribeMsg = ref("");
const userSendText = ref("/app/sendToUser/");
const userSendUsernameText = ref("ali");
const userText = ref("发送到用户");
const userBtnDisabled = ref(true);
const userSubscribeText = ref("/user/queue/sendToUser");
const userMsg = ref("");

let isConnect = false
const stomp = new Client({
  reconnectDelay: 5000,
  onConnect: connectCallback,
  onWebSocketClose: closeCallback,
  onWebSocketError: errorCallback
})

/**
 * 连接/断开按钮
 */
function connectBtn() {
  if (!isConnect) {
    connectBtnText.value = '连接中...';
    connectBtnDisabled.value = true;
    connect();
  } else {
    disconnect();
  }
}

/**
 * 连接
 */
function connect() {
  stomp.brokerURL = urlText.value
  stomp.connectHeaders = {
    username: usernameText.value
  }
  stomp.activate()
}

/**
 * 连接成功回调
 */
function connectCallback() {
  isConnect = true
  connectStatus(true)
  // 广播消息
  stomp.subscribe(broadcastSubscribeText.value, function (res) {
    broadcastMsg.value = res.body + '\n' + broadcastMsg.value
  })
  // 广播消息2
  stomp.subscribe(broadcast2SubscribeText.value, function (res) {
    broadcast2Msg.value = res.body + '\n' + broadcast2Msg.value
  })
  // 订阅消息
  stomp.subscribe(subscribeText.value, function (res) {
    subscribeMsg.value = res.body + '\n' + subscribeMsg.value
  })
  // 用户消息
  stomp.subscribe(userSubscribeText.value, function (res) {
    userMsg.value = res.body + '\n' + userMsg.value
  })
}

/**
 * 连接关闭回调
 */
function closeCallback(e) {
  isConnect = false
  connectStatus(false)
  errorMsg.value = '连接关闭回调' + '\n' + errorMsg.value
}

/**
 * 连接错误回调
 */
function errorCallback(e) {
  isConnect = false
  connectStatus(false)
  errorMsg.value = '连接错误回调' + '\n' + errorMsg.value
}

/**
 * 断开
 */
function disconnect() {
  if (isConnect) {
    stomp.deactivate()
    connectStatus(false)
  }
}

/**
 * 改变连接状态显示
 */
function connectStatus(status) {
  connectBtnDisabled.value = false;
  broadcastBtnDisabled.value = false;
  if (status) {
    connectBtnText.value = '断开'
    userBtnDisabled.value = false;
  } else {
    connectBtnText.value = '连接'
    broadcastBtnDisabled.value = true;
    userBtnDisabled.value = true;
  }
}

/**
 * 发送广播消息
 */
function broadcastBtn() {
  stomp.publish({destination: broadcastSendText.value, body: broadcastText.value})
}

/**
 * 发送用户消息
 */
function userBtn() {
  stomp.publish({destination: userSendText.value + userSendUsernameText.value, body: userText.value})
}

</script>
