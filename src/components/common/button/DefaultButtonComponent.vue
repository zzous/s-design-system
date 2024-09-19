<template>
  <template v-if="to">
    <RouterLink :to="to">
      <v-btn :color="btnColor" :size="size">
        {{ title }}
      </v-btn>
    </RouterLink>
  </template>
  <template v-else>
    <v-btn :color="btnColor" :size="size">
      {{ title }}
    </v-btn>
  </template>
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
