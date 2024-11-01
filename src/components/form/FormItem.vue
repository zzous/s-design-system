<template>
  <div :class="['s-form__item', className]">
    <VeeField v-slot="{ handleChange, errors }" :name="props.name">
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
    </VeeField>
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

<style lang="scss">
.s-form__item {
  border-bottom: solid 1px #eee;
  min-height: 66px;
  display: flex;

  .s-form__item-label{
    background:#F7F9FA;
    flex: 0 0 var(--s-form-item-label-width, 170px);
    display: flex;
    align-items: center;
    padding-left: 20px;

    > span{
      font-size:12px;
      color:#333;
      font-weight:700;
    }

    .required{
      color: red;
      margin-left: 3px;
      position: relative;
      top: -2px;
    }
  }

  .s-form__item-content {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 8px 10px 8px 20px;
    font-size: 12px;
    color: #333;

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

    ::v-deep(.v-text-field) {
      min-width: var(--s-text-field-min-width, 618px);

      .v-input__control .v-field {
        .v-field__input {
          padding: 5px 8px;

          &:has(input) {
            padding: 0 8px;
          }
          &.v-select {
            min-width: var(--s-text-select-min-width, 618px);
          }
        }

        .v-icon {
          opacity: 1;
          color:#000;
        }
      }
    }
  }
}
</style>
