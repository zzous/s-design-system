<template>
  <component
    :is="iconVNode"
    :class="rootClass"
    :style="iconStyle"
    v-bind="$attrs"
  />
</template>

<script setup>
import { computed } from 'vue'
import icons from './icons.js'
import './SIcon.scss'

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: (value) => {
      return Object.keys(icons).includes(value)
    }
  },
  size: {
    type: [String, Number],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  className: {
    type: String,
    default: ''
  }
})

const iconVNode = computed(() => {
  const iconFn = icons[props.name] || icons['expand-more']
  return iconFn ? iconFn() : null
})

const iconStyle = computed(() => {
  return {
    width: typeof props.size === 'number' ? `${props.size}px` : props.size,
    height: typeof props.size === 'number' ? `${props.size}px` : props.size,
    color: props.color
  }
})

const rootClass = computed(() => {
  const classes = ['s-icon']
  if (props.className) classes.push(props.className)
  return classes.join(' ')
})
</script>
