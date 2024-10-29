<template>
  <div :class="['s-form__item', className]">
    <vee-field v-slot="{ handleChange, errors }" :name="props.name">
      <div v-if="showLabel" class="s-form__item-label">
        <span>
          {{ label }}
        </span>
        <span v-if="required" class="required">*</span>
      </div>
      <div class="s-form__item-content" :class="[contentClass]">
        <div class="s-form__item-content-item">
          <slot name="default" :handle-change="handleChange" :errors="errors" />
        </div>
        <div v-if="$slots['outer-append']" class="s-form__item-append">
          <slot name="outer-append" :errors="errors" />
        </div>
      </div>
    </vee-field>
  </div>
</template>
<script setup>
import { Field as VeeField } from 'vee-validate'

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
.s-form__item-content {
  display: grid;
  grid-template-columns: 1fr;
  .s-form__item-content-item {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    ::v-deep(.s-btn) {
      width: 110px;
    }
  }

  .s-form__item-outer-append {
    font-size: 12px;
  }
}
</style>
