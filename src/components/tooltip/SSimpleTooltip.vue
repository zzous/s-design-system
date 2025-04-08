<template>
  <v-tooltip location="bottom" :max-width="prop.maxWidth">
    <template v-slot:activator="{ props }">
      <span
        v-bind="props"
        class="d-inline-block text-truncate"
        :style="{ width: titleWidthStr }"
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
  },
  text: {
    type: String,
    default: null,
  },
  titleWidth: {
    type: [Number, String],
    default: null,
  },
  maxWidth: {
    type: [Number, String],
    default: 500,
  },
})

// text가 빈 값이면 title 값 노출
const textStr = computed(() => prop.text || prop.title)
const titleWidthStr = computed(() =>
  prop.titleWidth ? `${prop.titleWidth}px` : '',
)
</script>

<style lang="scss" scoped></style>
