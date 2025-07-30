<template>
  <teleport :to="`#${teleportId}`">
    <v-dialog
      :model-value="isActive"
      :width="modalWidth"
      scroll-strategy="block"
      class="s-modal"
      :class="className"
      :size="size"
      persistent
      scrim
      @update:model-value="onUpdateModalValue"
    >
      <template #activator="{ props }">
        <slot name="buttons" v-on="props" />
      </template>
      <v-card class="card-box" :class="popupCardClass" :height="modalHeight" :min-height="modalHeight" no-line>
        <template v-if="!hideHeader" #prepend>
          <div class="s-modal__title" :class="{ 's-modal__title--light': isWhite, 's-modal__title--dark': !isWhite }">
            <span>
              {{ title }}
            </span>
            <div class="button-wrapper">
              <slot name="header-btn-append" />
              <SBtn
                class="modal--cancel"
                elevation="0"
                dense
                variant="text"
                max-width="24px"
                height="24px"
                @click="onClickCloseModal"
              >
                <v-icon :color="isWhite ? '#1A3350' : '#fff'" size="x-large">mdi-close</v-icon>
              </SBtn>
            </div>
          </div>
        </template>

        <template v-if="modelValue" #item>
          <div class="s-modal__content-wrapper">
            <div class="s-modal__content">
              <slot name="default" />
            </div>
          </div>
        </template>
        <template #append>
          <div class="s-modal__footer">
            <slot name="footer" />
          </div>
        </template>
      </v-card>
    </v-dialog>
  </teleport>
</template>

<script setup>
import {onBeforeUnmount, ref, watch} from 'vue'
import {SBtn} from '@/components.js'

const props = defineProps({
  title: {
    type: String,
    default: '',
    description: '모달 헤더 이름',
  },
  className: {
    type: [Object, String],
    default: '',
    description: '클래스 명',
  },
  modalWidth: {
    type: String,
    default: '',
    description: '모달 넓이',
  },
  modalHeight: {
    type: String,
    default: '',
    description: '모달 높이',
  },
  modelValue: {
    type: Boolean,
    default: false,
    description: '모달 오픈 여부',
  },
  isWhite: {
    type: Boolean,
    default: false,
    description: '모달 헤드 색깔 여부',
  },
  bodyStyle: {
    type: Object,
    default: () => {},
    description: 'card-body Div의 스타일 설정',
  },
  popupCardClass: {
    type: String,
    default: '',
    description: 'card의 개별 클래스네임',
  },
  hideHeader: {
    type: Boolean,
    default: false,
    description: '헤더 유무',
  },
  teleportId: {
    type: String,
    default: 'destination',
    description: 'Teleport ID',
  },
  size: {
    type: String,
    default: 'medium',
    description: 'modal size x-small, small, medium, large, x-large',
  }
})

const emits = defineEmits(['update:model-value', 'on-fetch'])

const isActive = ref(props.modelValue)

const controlBodyScroll = (shouldLock) => {
  if (shouldLock) {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = 'var(--v-scrollbar-offset)'
  } else {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }
}

watch(() => props.modelValue, value => {
  if (value) { emits('on-fetch') }
  isActive.value = value
  controlBodyScroll(value)
})

onBeforeUnmount(() => {
  controlBodyScroll(false)
})

const onClickCloseModal = () => {
  isActive.value = false
  emits('update:model-value', false)
}

const onUpdateModalValue = value => {
  isActive.value = value
  emits('update:model-value', value)
}
</script>

<style lang="scss" scoped>
@import url('./SModal.scss');
</style>
