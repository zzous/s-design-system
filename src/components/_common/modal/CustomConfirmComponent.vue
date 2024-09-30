<template>
  <v-dialog
    class="s-confirm-modal"
    is-white
    title-name=""
    modal-width="446"
    modal-height="190"
    hide-header
    :dialog="showDialog"
    @close-modal="onCancel"
  >
    <template #content>
      <div class="confirm-modal__title">
        {{ contents }}
      </div>
    </template>
    <template #footer>
      <div class="button-wrapper">
        <sp-button
          class="button__apply"
          variant="outlined"
          height="36"
          @click.stop="onConfirm"
        >
          {{ $t('확인') }}
        </sp-button>
        <sp-button
          class="button__line mr-2"
          variant="outlined"
          height="36"
          @click="onCancel"
        >
          {{ $t('취소') }}
        </sp-button>
      </div>
    </template>
  </v-dialog>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  contents: {
    type: String,
    default: '',
    description: '컨펌창 내용',
  },
  dialog: {
    type: Boolean,
    default: false,
    description: '컨펌창 오픈 여부',
  },
})

const emits = defineEmits(['confirm', 'cancel'])

const showDialog = computed({
  get: () => props.dialog,
  set: (value) => {
    if (!value) {
      onCancel()
    }
  },
})

const onConfirm = () => emits('confirm')
const onCancel = () => emits('cancel')
</script>

<style lang="scss">
.s-confirm-modal {
  .confirm-modal__title {
    text-align: center;
    white-space-collapse: preserve;
    margin-bottom: 20px;
    min-height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 130px;
  }

  .v-row {
    margin: 0;
  }
}
</style>

