<template>
  <teleport :to="`#${teleportId}`">
    <v-dialog :model-value="modelValue" :width="modalWidth" scroll-strategy="block" :class="ModalClass"
        :size="size" persistent scrim @update:model-value="val => { emits('update:model-value', val) }">

      <template #activator="{ props }">
        <slot name="buttons" v-on="props" />
      </template>

      <v-card :class="popupCardClass" :height="modalHeight" :min-height="modalHeight" no-line>
        <template v-if="!hideHeader" #prepend>
          <div class="s-modal__title" :class="{ 's-modal__title--light': isWhite, 's-modal__title--dark': !isWhite }">
            <span>{{ title }}</span>
            <div class="button-wrapper">
              <slot name="header-btn-append" />
              <v-icon icon="mdi-close" :color="isWhite ? '#1A3350' : '#fff'" @click="onClickCloseModal" />
            </div>
          </div>
        </template>

        <template #item>
          <div class="s-modal__content-wrapper">
            <div class="s-modal__content">
              <slot name="default" />
            </div>
          </div>
        </template>

        <template #append>
          <div class="s-modal__footer">
            <slot name="footer" />

            <div v-if="(isNewMode || (!hideEditButton && isDetailMode) || isUpdateMode) && !$slots.footer"
                 class="s-modal__footer__positive">
              <SBtn v-if="!hideSaveButton && isNewMode" @click="onSave">
                <s-icon name="save" v-bind="commonIconProps" />{{ buttonLabels.save }}
              </SBtn>
              <SBtn v-if="!hideEditButton && isDetailMode" @click="onClickEdit">
                <s-icon name="edit" v-bind="commonIconProps" />{{ buttonLabels.update }}
              </SBtn>
              <SBtn v-if="!hideSaveButton && isUpdateMode" @click="onClickUpdate">
                <s-icon name="edit" v-bind="commonIconProps" />{{ buttonLabels.save }}
              </SBtn>
            </div>

            <div v-if="((!hideCloseButton && isDetailMode) || (!hideCancelButton && (isNewMode || isUpdateMode))) && !$slots.footer">
              <SBtn v-if="!hideCloseButton && isDetailMode" variant="outlined" @click="onClickClose">
                <s-icon name="close" :size="16" class="mr-1"/>{{ buttonLabels.close }}
              </SBtn>
              <SBtn v-if="!hideCancelButton && (isNewMode || isUpdateMode)" variant="outlined" @click="onClickCancel">
                <s-icon name="close" :size="16" class="mr-1"/>{{ buttonLabels.cancel }}
              </SBtn>
            </div>

          </div>
        </template>
      </v-card>
    </v-dialog>
  </teleport>
</template>
<script setup>
import { computed, onBeforeUnmount, useAttrs, watch } from 'vue'
import SBtn from '@/components/button/SBtn.vue'

const commonIconProps = { size: "16", class: "mr-1" }
const buttonText = {
  'ko': { save: '저장', update: '수정', close: '닫기', cancel: '취소' },
  'en': { save: 'Save', update: 'Update', close: 'Close', cancel: 'Cancel' },
}

// region [Defines]
const emits = defineEmits(['update:model-value', 'on-fetch'])
const attrs = useAttrs()

const props = defineProps({
  title: { type: String, default: '', description: '모달 헤더 이름' },
  className: { type: [Object, String], default: '', description: '클래스 명' },
  modalWidth: { type: String, default: '', description: '모달 넓이' },
  modalHeight: { type: String, default: '', description: '모달 높이' },
  modelValue: { type: Boolean, default: false, description: '모달 오픈 여부' },
  isWhite: { type: Boolean, default: false, description: '모달 헤드 색깔 여부' },
  popupCardClass: { type: String, default: '', description: 'card의 개별 클래스네임' },
  hideHeader: { type: Boolean, default: false, description: '헤더 유무' },
  teleportId: { type: String, default: 'destination', description: 'Teleport ID' },
  size: { type: String, default: 'medium', description: 'modal size x-small, small, medium, large, x-large' },
  languageCode: { type: String, default: 'ko', description: 'ko, en' },
  mode: { type: String, default: null, description: "new | detail | update" },
  changeMode: { type: Function, default: () => {} },
  onClose: { type: Function, default: null, description: '닫기 버튼 눌렀을 때 함수' },
  onCancel: { type: Function, default: null, description: '취소 버튼 눌렀을 때 함수' },
  onSave: { type: Function, default: null, description: 'new 모드에서 저장 버튼 눌렀을 때 함수' },
  onEdit: { type: Function, default: null, description: 'detail 모드에서 수정 버튼 눌렀을 때 함수' },
  onUpdate: { type: Function, default: null, description: 'update 모드에서 저장 버튼 눌렀을 때 함수' },
  hideSaveButton: { type: Boolean, default: false, description: 'new 모드에서 저장 버튼 숨기기' },
  hideEditButton: { type: Boolean, default: false, description: 'detail 모드에서 수정 버튼 숨기기' },
  hideCloseButton: { type: Boolean, default: false, description: 'detail 모드에서 닫기 버튼 숨기기' },
  hideCancelButton: { type: Boolean, default: false, description: 'new, update 모드에서 취소 버튼 숨기기' },
})
// endregion

// region [Computed]
const ModalClass = computed(() => ['s-modal', props.className].join(' '))

const isNewMode = computed(() => props.mode === 'new')
const isDetailMode = computed(() => props.mode === 'detail')
const isUpdateMode = computed(() => props.mode === 'update')
const buttonLabels = computed(() => buttonText[props.languageCode])
// endregion


// region [Privates]
const initializeModal = (isOpen) => {
  if (isOpen) { emits('on-fetch') }
  controlBodyScroll(isOpen)
}

const controlBodyScroll = (shouldLock) => {
  if (shouldLock) {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = 'var(--v-scrollbar-offset)'
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
}

const closeModal = () => { emits('update:model-value', false) }
// endregion


// region [Events]
const onClickCloseModal = closeModal

const onClickCancel = () => {
  if (!props?.changeMode) {
    throw Error('Not found changeMode')
  }

  props?.onCancel?.()
  if (props.mode === 'update') {
    props.changeMode?.('detail') // update 모드인 경우 자동으로 detail 모드 전환
  } else {
    closeModal() // new 모드인 경우 모달 닫기
  }
}

const onClickClose = () => {
  props?.onClose?.()
  closeModal() // 자동으로 모달 닫기 함수 실행
}

const onClickUpdate = () => {
  props?.onUpdate?.()
}

const onClickEdit = () => {
  if (props.mode === 'detail') {
    props.changeMode?.('update') // detail 모드인 경우 자동으로 update 모드 전환
  }
}
// endregion


// region [Life Cycles]
watch(() => props.modelValue, initializeModal)
onBeforeUnmount(() => { controlBodyScroll(false) })
// endregion
</script>

<style lang="scss" scoped>
@import url('./SModal.scss');
</style>
