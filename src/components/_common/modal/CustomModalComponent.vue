<template>
  <v-dialog
    :model-value="modelValue"
    :width="modalWidth"
    scroll-strategy="none"
    class="s-modal"
    persistent
    @update:model-value="onUpdateModalValue"
  >
    <template #activator="{ props }">
      <slot name="buttons" v-on="props" />
    </template>
    <v-card
      class="card-box"
      :class="popupCardClass"
      :height="modalHeight"
      :min-height="modalHeight"
      no-line
    >
      <template v-if="!hideHeader" #prepend>
        <div class="title-wrapper" :class="{ 's-modal__title--light': isWhite, 's-modal__title--dark': !isWhite }">
          <div class="title-wrapper__title">
            {{ title }}
          </div>
          <div class="button-wrapper">
            <slot name="header-btn-append" />
            <s-btn
              class="modal--cancel"
              elevation="0"
              dense
              width="24px"
              height="24px"
              @click="onClickCloseModal"
            >
              <v-icon :color="isWhite ? '#1A3350' : '#fff'" size="x-large">
                mdi-close
              </v-icon>
            </s-btn>
          </div>
        </div>
      </template>

      <template #item>
        <div class="content-wrapper">
          <slot name="default" />
        </div>
      </template>
      <template #append>
        <slot name="footer" />
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
// const tag = '[modal]'

defineProps({
    title: {
        type: String,
        default: '',
        description: '모달 헤더 이름',
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
        default: () => { },
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
    }
})

const emits = defineEmits(['click:close', 'update:model-value'])

/*
@brief 모달 close 함수
@date 2021/11/02
@return
@param
*/
const onClickCloseModal = () => {
    // console.log(tag, 'onClickCloseModal')
    emits('click:close')
}
const onUpdateModalValue = (value) => {
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
        width: 1200px;
    }

    &.md {
        width: 960px;
    }

    &.sm {
        width: 600px;
    }

    &.xs {
        width: 460px;
    }

    .title-wrapper {
        height: 48px;
        width: 100%;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;

        &.s-modal__title--light {
            background-color: white;
            .title-wrapper__title {
                color: $s-primary;
            }
        }
        &.s-modal__title--dark {
            background-color: $s-primary;
            .title-wrapper__title {
                color: white;
            }
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

        .modal--template {
            margin-right: 10px;
        }
    }

    .content-wrapper {
        padding: 30px;
        max-height: 700px;
        @include scroll();
        overflow-y: auto;
    }
}
</style>
<style lang="scss">
.s-modal .v-overlay__content {
    width: inherit;
    max-width: inherit;
}

.v-dialog.s-modal .v-card .v-card-item {
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
</style>
