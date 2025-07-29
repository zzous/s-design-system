<template>
  <span class="position-relative refresh-time-wrapper">
    <span class="refresh-time">{{ refreshDateTitle }} : {{ computedRefreshDate }}</span>
    <img class="cursor-pointer ml-1 refresh-icon" height="16" width="16" :src="refreshIcon" @click="onClickRefresh" />
  </span>
</template>
<script setup>
import { computed } from 'vue'
import { SImg} from '@/components';
import refreshIcon from '/public/assets/images/icon_refresh.svg'

const props = defineProps({
  onClickRefresh: {
    type: Function,
    required: true,
  },
  refreshDate: {
    type: Date,
    default: new Date(),
  },
  refreshDateTitle: {
    type: String,
    default: '기준일자'
  }
})

const computedRefreshDate = computed(() => {

  const year = props.refreshDate.getFullYear();
  const month = (props.refreshDate.getMonth() + 1).toString().padStart(2, '0');
  const day = props.refreshDate.getDate().toString().padStart(2, '0');
  const hour = props.refreshDate.getHours().toString().padStart(2, '0');
  const minute = props.refreshDate.getMinutes().toString().padStart(2, '0');
  const second = props.refreshDate.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
})
</script>

<style scoped lang="scss">
.refresh-time-wrapper {
  display: inline-flex;
  align-items: center;
}
.refresh-time {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
}
</style>
