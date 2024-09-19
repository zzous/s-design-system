<template>
  <v-btn :color="btnColor" :size="size" :to="to" :height="height">
    {{ title }}
  </v-btn>
</template>

<script setup>
import { DEFAULT_BUTTON_COLOR } from '@/assets/consts/consts'
import { ref } from 'vue'
const btnColor = ref(DEFAULT_BUTTON_COLOR)
defineProps({
  title: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: false,
    default: null
  },
  height: {
    type: Number,
    required: false,
    default: null
  },
  size: {
    type: String,
    default: undefined, //기본 medium
    validator: (value) => {
      return [undefined, 'x-small', 'small', 'large', 'x-large'].includes(value)
    }
  }
})
</script>

<style scoped></style>
