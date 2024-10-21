<template>
  <teleport to="#destination">
    <v-dialog class="s-confirm-modal" width="446" persistent :model-value="showConfirmValue">
      <v-card modal-height="210">
        <v-card-text class="s-confirm-modal__text">
          {{ contents }}
        </v-card-text>
        <v-card-actions class="button-wrapper">
          <s-btn variant="elevated" color="blue" @click.stop="onConfirm">
            {{ $t('확인') }}
          </s-btn>
          <s-btn variant="outlined" color="blue" @click="onCancel">
            {{ $t('취소') }}
          </s-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </teleport>
</template>

<script setup>
import { useConfirmStore } from '@/stores/components/confirm'
import { storeToRefs } from 'pinia'

const confirmStore = useConfirmStore()
const onConfirm = () => confirmStore.closeConfirm(true)
const onCancel = () => confirmStore.closeConfirm(false)
const contents = storeToRefs(confirmStore).confirmContents
const showConfirmValue = storeToRefs(confirmStore).isShowConfirm
// const updateModelValue = () => {
//   alert('updateModelValue')
// }
</script>

<style lang="scss" scoped>
.s-confirm-modal {
  margin: 0 auto;
  .s-confirm-modal__text {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 130px;
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center !important;
    align-items: center;
    padding: 0 0 27px;

    > button {
      min-width: 110px;
      height: 36px;
    }
  }
}
</style>
