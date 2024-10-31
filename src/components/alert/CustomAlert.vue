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
        <v-btn v-if="isClose" :color="'#fff'" variant="text" @click="onClickCloseAlert">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
const emits = defineEmits(['update:model-value', 'open-alert', 'close-alert'])

defineProps({
  titleName: {
    type: String,
    default: '',
    description: '모달 헤더 이름',
  },
  dialog: {
    type: Boolean,
    default: false,
    description: '모달 오픈 여부',
  },
  multiLine: {
    type: Boolean,
    default: false,
    description: '라인 수',
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
.s-alert {
  .v-snack__wrapper {
    .v-snack__content {
      justify-content: center;

      .v-icon {
        margin-right: 9px;
      }

      display: flex;
      padding: 13px 19px;
      align-items: center;
      @include set-text(500, 15, #fff);
    }
  }
}
</style>
