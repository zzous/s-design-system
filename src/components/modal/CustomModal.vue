<template>
  <teleport :to="`#${teleportId}`">
    <v-dialog
      :model-value="modelValue"
      :width="modalWidth"
      scroll-strategy="none"
      class="s-modal"
      :class="className"
      persistent
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
              <Button
                class="modal--cancel"
                elevation="0"
                dense
                variant="text"
                max-width="24px"
                height="24px"
                @click="onClickCloseModal"
              >
                <v-icon :color="isWhite ? '#1A3350' : '#fff'" size="x-large">mdi-close</v-icon>
              </Button>
            </div>
          </div>
        </template>

        <template v-if="modelValue" #item>
          <div class="s-modal__content">
            <slot name="default" />
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
import { Button } from '@/index.js';

defineProps({
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
  }
})

const emits = defineEmits(['update:model-value'])

const onClickCloseModal = () => {
  // console.log(tag, 'onClickCloseModal')
  emits('update:model-value', false)
}
const onUpdateModalValue = value => {
  emits('update:model-value', value)
  if (!value) {
    onClickCloseModal()
  }
}
</script>

<style lang="scss" scoped>
.s-modal {
  &.xl {
    width: 1450px;
  }

  &.lg {
    width: 1300px;
  }

  &.md {
    width: 1000px;

    ::v-deep(.s-form__item-content-item) {
      .v-text-field {
        min-width: 618px;

        &.v-select {
          min-width: 618px;
        }
      }
    }
  }

  &.sm {
    width: 500px;
  }

  &.xs {
    width: 460px;
  }

  .s-modal__title {
    height: 48px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;

    &.s-modal__title--light {
      background-color: white;
      color: $s-primary;
    }
    &.s-modal__title--dark {
      background-color: $s-primary;
      color: white;
    }
  }

  .button-wrapper {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;

    .modal--cancel {
      background: transparent;
      padding: 0;
      min-width: 0;
      opacity: 0.6;
    }
  }

  .s-modal__content {
    scrollbar-gutter: stable both-edges;
    padding: 20px 10px;
    max-height: 700px;
    @include scroll();
    overflow-y: auto;
    background-color: $s-base-background;
  }
  .s-modal__footer {
    width: 100%;
    background-color: $s-base-background;
  }

  ::v-deep(.v-card) .v-card-item {
    display: flex;
    flex-direction: column;
    padding: 0;

    .v-card-item__prepend,
    .v-card-item__append,
    .v-card-item__content {
      padding-inline-end: 0;
      width: 100%;
    }
  }

  ::v-deep(.v-overlay__content) {
    width: inherit;
    max-width: inherit;
  }
}
</style>
