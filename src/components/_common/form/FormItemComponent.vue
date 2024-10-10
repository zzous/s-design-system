<template>
  <div :class="['s-form__item', className]">
    <vee-field v-slot="{ handleChange, errors }" :name="props.name">
      <div class="s-form__item-label">
        <span>
          {{ label }}
        </span>
        <span v-if="required" class="required">*</span>
      </div>
      <div class="s-form__item-content">
        <slot name="default" :handle-change="handleChange" :errors="errors" />
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
  label: { type: String, required: true, default: '', description: '폼라벨' },
  name: { type: String, default: '', description: 'validation 체크 시 필수 값' },
  required: { type: Boolean, default: false, description: '필수값' },
})
</script>
