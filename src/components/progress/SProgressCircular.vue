<template>
  <div class="s-progress-circular" :style="{ height: size + 'px', width: size + 'px', '--stroke-width': width + 'px' }">
    <svg style="width: 0; height: 0; position: absolute" aria-hidden="true" focusable="false">
      <linearGradient id="gradientColor">
        <stop offset="0%" stop-color="#1B75BB" />
        <stop offset="100%" stop-color="#7C0F80" />
      </linearGradient>
    </svg>
    <svg
      class="s-progress-circular__wrapper"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 ${diameter} ${diameter}`"
    >
      <circle
        class="s-progress-circular__underlay"
        cx="50%"
        cy="50%"
        fill="transparent"
        :r="MAGIC_RADIUS_CONSTANT"
        :style="{
          strokeWidth: strokeWidth,
          strokeDasharray: CIRCUMFERENCE,
          strokeDashoffset: 0,
        }"
      />
      <circle
        class="s-progress-circular__overlay"
        fill="transparent"
        cx="50%"
        cy="50%"
        :r="MAGIC_RADIUS_CONSTANT"
        :style="{
          strokeWidth: strokeWidth,
          strokeDasharray: CIRCUMFERENCE,
          strokeDashoffset: strokeDashOffset,
        }"
      />
    </svg>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const props = defineProps({
  size: {
    type: Number,
    default: 50,
  },
  width: {
    type: Number,
    default: 6,
  },
})

const normalizedValue = computed(() => Math.max(0, Math.min(100, parseFloat(0))))
const MAGIC_RADIUS_CONSTANT = 20
const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT

const convertToUnit = (str, unit = 'px') => {
  if (str === null || str === '') {
    return undefined
  } else if (isNaN(str)) {
    return String(str)
  } else if (!isFinite(str)) {
    return undefined
  } else {
    return `${Number(str)}${unit}`
  }
}

const diameter = computed(() => (MAGIC_RADIUS_CONSTANT / (1 - props.width / props.size)) * 2)
const strokeWidth = computed(() => (props.width / props.size) * diameter.value)
const strokeDashOffset = computed(() => convertToUnit(((100 - normalizedValue.value) / 100) * CIRCUMFERENCE))

onMounted(() => {})
</script>

<style lang="scss">
.s-progress-circular {
  $this: 's-progress-circular';
  --stroke-width: 6px;
  $progress-circular-intermediate-svg-transition: all 0.2s ease-in-out !default;
  $progress-circular-overlay-transition:
      all 0.2s ease-in-out,
      --stroke-width 0s !default;
  $progress-circular-overlay-transform: rotate(calc(-90deg)) !default;
  $progress-circular-rotate-animation: progress-circular-rotate 1.4s linear infinite !default;
  $progress-circular-rotate-dash: progress-circular-dash 1.4s ease-in-out infinite !default;
  $progress-circular-size: 32px !default;

  border-radius: 100%;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;
  vertical-align: middle;

  .#{$this}__underlay {
    stroke: $s-btn--blue-1;
    stroke-opacity: 0.1;
    z-index: 1;
  }

  .#{$this}__overlay {
    stroke: url(#gradientColor);
    transition: $progress-circular-overlay-transition;
    z-index: 2;
    stroke-linecap: round;

    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15px;
    animation: $progress-circular-rotate-dash, $progress-circular-rotate-animation;
    transform-origin: center center;
    transform: $progress-circular-overlay-transform;
  }
}

@keyframes progress-circular-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes progress-circular-rotate {
  100% {
    transform: rotate(270deg);
  }
}
</style>
