<template>
  <div :class="['s-form__item', className]">
    <div v-if="showLabel" class="s-form__item-label">
      <span>
        {{ label }}
      </span>
      <span v-if="required" class="required">*</span>
    </div>
    <div class="s-form__item-content" :class="[contentClass]">
      <div class="s-form__item-content-item">
        <slot name="default" />
      </div>
      <div v-if="$slots['outer-append']" class="s-form__item-append">
        <slot name="outer-append" />
      </div>
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  className: {
    type: String,
    default: '',
    description: '페이지타이틀',
  },
  contentClass: {
    type: String,
    default: '',
    description: '콘텐트 영역 클랙스',
  },
  label: { type: String, required: true, default: '', description: '폼라벨' },
  showLabel: { type: Boolean, required: false, default: true, description: '폼라벨 노출 여부' },
  name: { type: String, default: '', description: 'validation 체크 시 필수 값' },
  required: { type: Boolean, default: false, description: '필수값' },
})
</script>

<style lang="scss" scoped>
@import url('./SFormItem.scss');
</style>
