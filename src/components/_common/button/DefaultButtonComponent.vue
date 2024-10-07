<template>
  <v-btn
    class="s-btn"
    :s-color="color"
    :size="size"
    :to="to"
    :height="height"
  >
    <template v-if="title">
      {{ title }}
    </template>
    <slot v-else />
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
    default: ''
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
  },
  color: {
    type: String,
    default: 'blue',
  }
})
</script>

<style lang="scss">
.s-btn{
  &.v-btn--variant-elevated {
    &[s-color="blue"] {
      background: $s-btn--blue-1;
      color: white;
    }
    &[s-color="red"] {
      background: $s-btn--red-1;
      color: white;
    }
  }

  &.v-btn--variant-outlined{
    opacity: 1;
    background-color: white;

    &[s-color="blue"] {
      border-color: $s-btn--blue-1;
      color: $s-btn--blue-1;
    }
    &[s-color="red"] {
      border-color: $s-btn--red-1;
      color: $s-btn--red-1;
    }
    &:disabled {
      border-color: $s-default--gray-5;
      color: $s-default--gray-5;
    }
  }
}
</style>
