<template>
  <div class="title-wrapper mr-2">
    <div class="d-flex justify-space-between align-center title-contents-wrapper">
      <span class="title-contents">
        <img src="/svg/title_bg.svg" alt="icon" class="title-icon" />
        {{ title }} {{ showCnt ? `(${listCnt})` : '' }}
      </span>
      <div class="d-flex input-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  showCnt: {
    type: Boolean,
    required: false,
    default: true
  },
  listCnt: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
.title-wrapper {
  border-bottom: 1px solid #eeeeee;
  height: 50px;
  align-items: center;
}

.title-icon {
  width: 24px; /* 아이콘 크기 */
  height: 24px;
  margin-right: 8px; /* 타이틀과의 간격 */
}
.title-contents {
  display: inline-flex;
}
.title-contents-wrapper {
  height: 36px;
}
</style>
