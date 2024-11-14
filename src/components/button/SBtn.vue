<template>
  <v-btn class="s-btn" elevation="0" :s-color="color" :size="size" :to="to" :height="height" :icon="icon">
    <template #icon v-if="hasIcon && !$slots.default">
      <v-icon>{{ icon }}</v-icon>
    </template>
    <template #default v-else>
      {{ title }}
      <slot />
    </template>
  </v-btn>
</template>

<script setup>
import { VIcon } from 'vuetify/components';
import { useSlots, computed } from 'vue';
// import { DEFAULT_BUTTON_COLOR } from '@/assets/consts/consts'
// import { ref } from 'vue'
// const btnColor = ref(DEFAULT_BUTTON_COLOR)
const props = defineProps({
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

const slots = useSlots()

const hasIcon = computed(() => {
  if (!!slots.icon || props.icon) return true
  return false
})
</script>

<style lang="scss" scoped>
@import url('./SBtn.scss');
</style>
