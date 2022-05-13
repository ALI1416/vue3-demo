<template>
  <h1>{{ datetime }}</h1>
  <h1>{{ datetime2 }}</h1>
</template>

<script setup>
import moment from 'moment';
import * as dayjs from 'dayjs'
import {ref} from 'vue'

const datetimeFormat = 'YYYY-MM-DD HH:mm:ss';

const datetime = ref(moment().format(datetimeFormat));
const datetime2 = ref(dayjs().format(datetimeFormat));

setInterval(() => {
  datetime.value = moment().format(datetimeFormat);
  datetime2.value = dayjs().format(datetimeFormat);
}, 1000)
</script>
