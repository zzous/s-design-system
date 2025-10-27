<template>
  <v-tooltip location="bottom" :max-width="prop.maxWidth">
    <template v-slot:activator="{ props }">
      <span
        v-bind="props"
        class="d-inline-block text-truncate"
        :style="{ maxWidth: titleWidthStr }"
        >{{ prop.title }}</span
      >
    </template>
    <span class="text-break">{{ textStr }}</span>
  </v-tooltip>
</template>

<script setup>
import { computed } from 'vue'

const prop = defineProps({
  title: {
    type: String,
    default: null,
    description: '표시할 텍스트 (짧으면 내용만큼, 길면 말줄임)'
  },
  text: {
    type: String,
    default: null,
    description: '툴팁에 표시할 전체 텍스트 (미지정시 title 사용)'
  },
  titleWidth: {
    type: [Number, String],
    default: null,
    description: '텍스트의 최대 너비 (px) - 짧은 텍스트는 내용만큼만 차지'
  },
  maxWidth: {
    type: [Number, String],
    default: 500,
    description: '툴팁 팝업의 최대 너비 (px)'
  },
})

// text가 빈 값이면 title 값 노출
const textStr = computed(() => prop.text || prop.title)

// titleWidth를 max-width로 사용 (짧은 텍스트는 내용만큼, 긴 텍스트는 말줄임 적용)
const titleWidthStr = computed(() =>
  prop.titleWidth ? `${prop.titleWidth}px` : '',
)
</script>

<style lang="scss" scoped></style>
