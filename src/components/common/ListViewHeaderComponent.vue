<template>
  <div class='title-wrapper mr-2'>
    <div class='titleContainer d-flex justify-space-between align-center'>
      <span class='title-contents'>
        <img :src='titleSvgPath' alt='icon' class='title-icon'/>
        {{title}} ({{ listCnt }})
      </span>
        <div class='d-flex input-wrapper'>
          <slot/>
        </div>
    </div>

  </div>
</template>

<script setup>
import titleSvg from '@/assets/svg/title_bg.svg'
import { defineProps, ref } from 'vue'
const titleSvgPath = ref(titleSvg)
const props = defineProps({
  title: {
    type: String,
    required: true
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
</style>