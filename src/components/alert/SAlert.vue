<template>
  <div class="s-alert">
    <v-snackbar
      :style="alertStyle"
      :model-value="dialog"
      :multi-line="multiLine"
      :timeout="timeout"
      :color="color"
      :height="height"
      elevation="0"
      min-width="600"
      location="top"
      @input="onClickOpenAlert"
      @update:model-value="updateModelValue"
    >
      <slot name="alert-icon" />
      {{ titleName }}
      <template #actions>
        <s-btn v-if="isClose" :color="'#fff'" variant="text" @click="onClickCloseAlert">Close</s-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import SBtn from '../button/SBtn.vue';

const emits = defineEmits(['update:model-value', 'open-alert', 'close-alert'])

defineProps({
  titleName: {
    type: String,
    default: '',
    description: '알림 내용',
  },
  dialog: {
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
    default: '#DE0655',
    description: '토스트 색상',
  },
  height: {
    type: String,
    default: '48px',
    description: '토스트 높이',
  },
  width: {
    type: String,
    default: '450px',
    description: '토스트 넓이',
  },
  timeout: {
    type: Number,
    default: 5000,
    description: '토스트 오픈 시간',
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

const updateModelValue = value => {
  emits('update:model-value', value)
}

const onClickCloseAlert = () => {
  console.log('onClickCloseAlert')
  emits('close-alert')
}

const onClickOpenAlert = () => {
  console.log('onClickOpenAlert')
  emits('open-alert')
}
</script>

<style lang="scss">
@import url('./SAlert.scss');
</style>
