<template>
  <VueDatePicker
    v-model="internalDate"
    class="s-date-picker"
    :format="format"
    :min-date="minDate"
    :max-date="maxDate"
    :clearable="clearable"
    :enable-time-picker="enableTimePicker"
    :prevent-min-max-navigation="preventMinMaxNavigation"
    :range="range"
    :multi-calendars="multiCalendars"
    :format-locale="computedFormatLocale"
    :select-text="computedSelectText"
    :cancel-text="computedCancelText"
    @update:model-value="updateModelValue"
    :style="{ width: width, height: height }"
  />
</template>

<script setup>
import { computed } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import { ko, enUS } from 'date-fns/locale'
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps({
  modelValue: {
    type: [String, Object, Array],
    default: null,
  },
  format: {
    type: String,
    default: 'yyyy-MM-dd',
  },
  minDate: {
    type: [String, Date],
    default: '1999-01-01',
  },
  maxDate: {
    type: [String, Date],
    default: '2100-01-01',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  enableTimePicker: {
    type: Boolean,
    default: false,
  },
  preventMinMaxNavigation: {
    type: Boolean,
    default: true,
  },
  range: {
    type: Boolean,
    default: false,
  },
  multiCalendars: {
    type: Boolean,
    default: false,
  },
  width: {
    type: [String, Number],
    default: null,
  },
  height: {
    type: [String, Number],
    default: '40px',
  },
  lang: {
    type: String,
    default: 'ko',
  },
  selectText: {
    type: String,
    default: '선택',
  },
  cancelText: {
    type: String,
    default: '취소',
  },
});

const emit = defineEmits(['update:modelValue', 'onChangeDate'])
const computedFormatLocale = computed(() => props.lang === 'ko' ? ko : enUS)

const languageTexts = {
  ko: {
    select: '선택',
    cancel: '취소',
  },
  en: {
    select: 'Select',
    cancel: 'Cancel',
  }
};

const computedSelectText = computed(() => (languageTexts[props.lang]?.select || languageTexts.ko.select));
const computedCancelText = computed(() => (languageTexts[props.lang]?.cancel || languageTexts.ko.cancel));

const internalDate = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  },
})

const updateModelValue = (value) => {
  emit('update:modelValue', value)
  emit('onChangeDate', value)
}
</script>
<style lang="scss">
.s-date-picker {

  & > div:first-child {
      height: 100%;
  }

  .dp__input_wrap, .dp__input {
    height: 100%;
  }
}
</style>
