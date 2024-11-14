<template>
  <div class="s-alert">
    <v-snackbar
      :style="alertStyle"
      :model-value="isActive"
      :multi-line="multiLine"
      :timeout="timeout"
      :color="color"
      :height="height"
      elevation="0"
      min-width="600"
      location="top"
      @update:model-value="updateModelValue"
    >
      <slot name="alert-icon" />
      <pre>{{ titleName }}</pre>
      <template #actions>
        <s-btn v-if="isClose" :color="'#fff'" variant="text" @click="onClickCloseAlert">Close</s-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import SBtn from '../button/SBtn.vue';

const emits = defineEmits(['update:model-value'])

const props = defineProps({
  titleName: {
    type: String,
    default: '',
    description: '알림 내용',
  },
  modelValue: {
    type: Boolean,
    default: false,
    description: '알림 오픈 여부',
  },
  multiLine: {
    type: Boolean,
    default: false,
    description: '최소 높이를 더 높게 설정합니다.',
  },
  color: {
    type: String,
    default: '#036EB8',
    description: '알림 색상',
  },
  height: {
    type: [String, Number],
    default: '48px',
    description: '알림 높이',
  },
  width: {
    type: [String, Number],
    default: '450px',
    description: '알림 넓이',
  },
  timeout: {
    type: Number,
    default: 5000,
    description: '알림 오픈 시간',
  },
  isClose: {
    type: Boolean,
    default: true,
    description: 'Close 버튼 노출 유무',
  },
  alertStyle: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const isActive = ref(props.modelValue)

const updateModelValue = value => {
  isActive.value = value
  emits('update:model-value', value)
}

const onClickCloseAlert = () => {
  isActive.value = false
  emits('update:model-value', false)
}

watchEffect(() => {
  isActive.value = props.modelValue
})

</script>

<style lang="scss">
@import url('./SAlert.scss');
</style>
