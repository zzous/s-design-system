<template>
  <div :class="['s-form__item', className]">
    <div class="s-form__item-label">
      <span>
        {{ label }}
      </span>
      <span v-if="required" class="required">*</span>
    </div>
    <div class="s-form__item-content">
      <slot name="default" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    className: {
      type: String,
      default: '',
      description: '페이지타이틀',
    },
    label: { type: String, default: '', description: '폼라벨' },
    required: { type: Boolean, default: false, description: '필수값' },
  },
}
</script>
