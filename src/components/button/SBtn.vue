<template>
  <v-btn class="s-btn" elevation="0" :s-color="color" :size="size" :to="to" :height="height" :icon="icon">
    <template #default>
      {{ title }}
      <slot />
    </template>
  </v-btn>
</template>

<script setup>
// import { DEFAULT_BUTTON_COLOR } from '@/assets/consts/consts'
// import { ref } from 'vue'
// const btnColor = ref(DEFAULT_BUTTON_COLOR)
defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
  to: {
    type: String,
    required: false,
    default: null,
  },
  height: {
    type: [String, Number],
    required: false,
    default: null,
  },
  size: {
    type: String,
    default: 'default', //기본 medium
    validator: value => {
      return ['default', 'x-small', 'small', 'large', 'x-large'].includes(value)
    },
  },
  color: {
    type: String,
    default: 'blue',
  },
  icon: {
    type: String,
    default: undefined,
  }
})
</script>

<style lang="scss" scoped>
@import url('./SBtn.scss');
</style>
