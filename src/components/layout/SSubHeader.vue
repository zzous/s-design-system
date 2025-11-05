<template>
  <div :class="['s-title-area', className]">
    <div class="s-title-area__content">
      <div class="s-title-area__title">
        {{ title }}
        <slot name="title-append">
          <span v-if="showCnt" class="s-title-area__number">({{ listCntComma }})</span>
        </slot>
      </div>
      <div class="s-title-area__buttons button-wrapper">
        <slot name="default" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: '',
    description: '페이지타이틀의 custom class',
  },
  title: {
    type: String,
    required: true,
  },
  showCnt: {
    type: Boolean,
    required: false,
    default: true,
  },
  listCnt: {
    type: Number,
    default: 0,
  },
})

const listCntComma = computed(() => {
  return props.listCnt?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '0'
})
</script>
<style lang="scss" scoped>
@import url('./SSubHeader.scss');
</style>
