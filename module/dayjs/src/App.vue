<template>
  <h1>{{ datetime }}</h1>
</template>

<script setup>
import dayjs from 'dayjs'
import {ref} from 'vue'

const datetimeFormat = 'YYYY-MM-DD HH:mm:ss';

const datetime = ref(dayjs().format(datetimeFormat));

setInterval(() => {
  datetime.value = dayjs().format(datetimeFormat);
}, 1000)
</script>
