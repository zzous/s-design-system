<template>
  <Teleport :to="teleportId">
      <div :class="rootClass">

        <Transition name="fade">
          <div v-show="isOpen && isBackdrop" class="s-slide-panel__backdrop" :style="backdropStyles"/>
        </Transition>

        <Transition :name="rightDirection ? 'right-slide' : 'bottom-slide'">
          <div v-if="isOpen" ref="slidePanelContainerRef" :class="containerClass" :style="containerStyles">
            <div v-if="resizable" :class="resizerClass" @mousedown="onMouseDownPanel" />
            <div class="panel__container__header" v-if="title">
                <h2 class="panel__container__header__title">
                <slot name="title" />
                {{ title }}
              </h2>
              <div class="panel__container__header__buttons">
                <button
                  v-if="showMinimizeButton && !rightDirection"
                  @click="onMinimizeClick"
                  class="panel__container__header__minimize-button"
                  :title="internalIsMinimized ? '복원' : '최소화'"
                >
                  <svg v-if="!internalIsMinimized" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke-width="0"></g>
                    <g stroke-linecap="round" stroke-linejoin="round"></g>
                    <g>
                      <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                  <svg v-else width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke-width="0"></g>
                    <g stroke-linecap="round" stroke-linejoin="round"></g>
                    <g>
                      <path d="M6 15L12 9L18 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                </button>
                <button @click="onCloseSlidePanel" class="panel__container__header__close-button">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke-width="0"></g>
                    <g stroke-linecap="round" stroke-linejoin="round"></g>
                    <g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="currentColor"/>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div ref="panelContentRef" class="panel__container__content" :class="{ 'panel__container__content--minimized': internalIsMinimized }">
              <slot name="default"/>
            </div>
          </div>
        </Transition>
      </div>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useOutsideClick } from '@/hooks/index.js'

// TODO direction이 right인 경우 가로 스크롤 조절 필요

const emit = defineEmits(['update:is-minimized', 'update:model-value'])
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
    description: '클래스 명',
  },
  onClose: {
    type: Function,
    default: () => {},
  },
  title: {
    type: String,
    default: 0,
    validator: value => (['string'].includes(typeof value)),
  },
  direction: {
    type: String,
    default: 'bottom',
    validator: (value) => ([undefined, 'right', 'bottom'].includes(value))
  },
  closeOnOutsideClick: {
    type: Boolean,
    default: false,
    validator: value => (['boolean'].includes(typeof value)),
    description: '패널 외부 클릭 시 자동 닫힘 여부',
  },
  top: {
    type: [Number, String, null],
    default: null,
    description: 'Container Top 사이즈',
  },
  isBackdrop: {
    type: Boolean,
    default: false,
    validator: value => (['boolean'].includes(typeof value)),
    description: '불투명 배경 활성화 여부',
  },
  backdropOpacity: {
    type: Number,
    default: 1,
    validator: value => (['number'].includes(typeof value)),
    description: '불투명 배경 opacity 조절',
  },
  backdropBlur: {
    type: Number,
    default: 0,
    validator: value => (['number'].includes(typeof value)),
    description: '불투명 배경 블러 효과 조절',
  },
  size: {
    type: [String, Number],
    default: 380,
    validator: value => (['string', 'number'].includes(typeof value)),
  },
  resizable: {
    type: Boolean,
    default: true,
    description: '리사이징 가능 여부',
  },
  teleportId: {
    type: String,
    default: 'body',
    description: 'Teleport ID',
  },
  isMinimized: {
    type: Boolean,
    default: false,
    description: '최소화 상태 여부',
  },
  showMinimizeButton: {
    type: Boolean,
    default: true,
    description: '최소화 버튼 표시 여부',
  },
})

// region [Hooks]
const internalIsMinimized = ref(props.isMinimized)
const isResizeMode = ref(false)
const panelSize = ref(typeof props.size === 'number' ? props.size : parseInt(props.size))
const slidePanelContainerRef = ref(null)
const panelContentRef = ref(null)
const headerHeight = ref(0)
const rightDirection = computed(() => props.direction === 'right')

const onCloseSlidePanel = () => {
  emit('update:model-value', false)
  props.onClose()
}

useOutsideClick(slidePanelContainerRef, onCloseSlidePanel, () => props.isOpen && props.closeOnOutsideClick)

const defaultSize = computed(() => (typeof props.size === 'number' ? props.size : parseInt(props.size)))
// endregion

// region [Styles]
const backdropStyles = computed(() => ({
  opacity: props?.isBackdrop ? props.backdropOpacity : 0,
  backdropFilter: props.backdropBlur ? `blur(${props.backdropBlur}px)` : 'none',
}))
const containerStyles = computed(() => ({
  width: rightDirection.value ? `${panelSize.value}px` : undefined,
  height: !rightDirection.value ? `${panelSize.value}px` : undefined,
  top: props.top,
}))

const rootClass = computed(() => ({
  's-slide-panel': true,
  's-slide-panel--right': rightDirection.value,
  's-slide-panel--bottom': !rightDirection.value,
}))
const containerClass = computed(() => ({
  's-slide-panel__container': true,
  's-slide-panel__container--resize-on': isResizeMode.value,
  's-slide-panel__container__resize-off': !isResizeMode.value,
  's-slide-panel__container--minimized': internalIsMinimized.value,
}));
const resizerClass = computed(() => ({
  's-slide-panel__container__resizer': true,
  's-slide-panel__container__resizer--on': isResizeMode.value,
  's-slide-panel__container__resizer--off': !isResizeMode.value,
}));
// endregion

// region [Privates]
const initializeHeaderHeight = () => {
  const root = document.documentElement;
  const headerHeightString = getComputedStyle(root).getPropertyValue('--global-nav-header-height').replace('px', '');
  headerHeight.value = Number(headerHeightString)
}
const cleanupListeners = () => {
  isResizeMode.value = false
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mousemove', onMouseUpEvent)
}
const onToggleScroll = (isScroll) => {
  if (isScroll) {
    // 패널이 열릴 때: .show-navi에 패널 높이만큼 padding-bottom 추가
    const panelHeight = panelSize.value
    const showNaviElement = document.querySelector('.show-navi')
    if (showNaviElement) {
      showNaviElement.style.paddingBottom = `${panelHeight}px`
    }
  } else {
    // 패널이 닫힐 때: 원래 상태로 복원
    const showNaviElement = document.querySelector('.show-navi')
    if (showNaviElement) {
      showNaviElement.style.paddingBottom = '0'
    }
  }
}
const initializePanelWidth = (isOpen) => {
  if (isOpen) {
    panelSize.value = typeof props.size === 'number' ? props.size : parseInt(String(props.size) || '480', 10)
  }
}
// endregion

// region [Events]
const onMinimizeClick = () => {
  const showNaviElement = document.querySelector('.show-navi')

  if (internalIsMinimized.value) {
    // 복원 시: 전체 패널 높이만큼 padding-bottom 적용
    internalIsMinimized.value = false
    if (showNaviElement) {
      showNaviElement.style.paddingBottom = `${panelSize.value}px`
    }
    emit('update:is-minimized', false)
  } else {
    // 최소화 시: 최소화된 패널 높이(64px)만큼 padding-bottom 적용
    internalIsMinimized.value = true
    if (showNaviElement) {
      showNaviElement.style.paddingBottom = '64px'
    }
    emit('update:is-minimized', true)
  }
}

const onMouseDownPanel = () => {
  isResizeMode.value = true
  document.body.style.cursor = rightDirection.value ? 'col-resize' : 'row-resize'
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUpEvent)
}
const onMouseUpEvent = () => {
  isResizeMode.value = false
  document.body.style.cursor = 'default'
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mousemove', onMouseUpEvent)
}
const onMouseMove = (e) => {
  if (!isResizeMode.value) return

  const MAX_SIZE = rightDirection.value ? window.innerWidth : window.innerHeight
  const { padding } = window.getComputedStyle(panelContentRef.value)
  const paddingLeft = rightDirection.value ? (parseInt(padding, 10) || 0) : 0 // bottom 인 경우 padding 0으로 설정
  const newSize = MAX_SIZE - (rightDirection.value ? e.clientX : e.clientY) - paddingLeft

  if (rightDirection.value) {
    if (newSize >= defaultSize.value && newSize <= MAX_SIZE) {
      panelSize.value = newSize
    }
  } else {
    if (newSize >= defaultSize.value && newSize <= MAX_SIZE - headerHeight.value) {
      panelSize.value = newSize
    } else if (newSize >= defaultSize.value) {
      panelSize.value = MAX_SIZE - headerHeight.value
    }
  }
}
// endregion

// region [Life Cycles]
watch(() => props.isOpen, onToggleScroll)
watch(() => props.isOpen, initializePanelWidth)
watch(() => props.isOpen, cleanupListeners)
watch(() => props.isOpen, (isOpen) => {
  if (isOpen === false) {
    // 패널이 닫힐 때 최소화 상태도 초기화
    internalIsMinimized.value = false
    emit('update:is-minimized', false)
  }
})
// props.isMinimized가 외부에서 변경되면 내부 상태도 동기화하고 스크롤 조정
watch(() => props.isMinimized, (val) => {
  internalIsMinimized.value = val
  emit('update:is-minimized', val)

  // 스크롤 영역 조정
  const showNaviElement = document.querySelector('.show-navi')
  if (showNaviElement && props.isOpen) {
    if (val) {
      // 최소화 시: 64px
      showNaviElement.style.paddingBottom = '64px'
    } else {
      // 복원 시: 전체 패널 높이
      showNaviElement.style.paddingBottom = `${panelSize.value}px`
    }
  }
})
// panelSize가 변경되면 스크롤 높이 재계산 (resize 시)
watch(() => panelSize.value, (newSize) => {
  const showNaviElement = document.querySelector('.show-navi')
  if (showNaviElement && props.isOpen && !internalIsMinimized.value) {
    // 최소화 상태가 아닐 때만 패널 높이에 맞춰 스크롤 조정
    showNaviElement.style.paddingBottom = `${newSize}px`
  }
})

onMounted(initializeHeaderHeight)

// 컴포넌트가 unmount될 때 (라우터 이동 등) padding-bottom 초기화
onBeforeUnmount(() => {
  const showNaviElement = document.querySelector('.show-navi')
  if (showNaviElement) {
    showNaviElement.style.paddingBottom = '0'
  }

  // 리사이즈 이벤트 리스너 정리
  cleanupListeners()

  // 커서 스타일 초기화
  document.body.style.cursor = 'default'
})
// endregion
</script>

<style scoped lang="scss">
$resizer-width-size: 1px;
$resizer-active-width-size: 2px;

.s-slide-panel {
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: auto;
  z-index: 1005;

  &.s-slide-panel--right {

    .s-slide-panel__container {
      top: var(--global-nav-header-height);
      right: 0;
      height: calc(100dvh - #{var(--global-nav-header-height)});
    }
  }

  .s-slide-panel__backdrop {
    position: fixed;
    top: var(--global-nav-header-height);
    left: 0;
    width: 100%;
    height: calc(100dvh - #{var(--global-nav-header-height)});
    background-color: rgba(0, 0, 0, 0.48);
    z-index: 1006;
  }

  .s-slide-panel__container {
    position: fixed;
    display: flex;
    flex-direction: column;
    background: $s-default--gray-0;
    z-index: 1007;

    &.s-slide-panel__container--resize-on {
      user-select: none;
    }

    .s-slide-panel__container__resizer {
      position: absolute;
      top: 0;
      left: calc(#{$resizer-width-size} / 2 * -1);
      width: $resizer-width-size;
      height: 100%;
      cursor: col-resize;
      background: $s-default--gray-5;

      &:hover, &.s-slide-panel__container__resizer--on {
        width: $resizer-active-width-size;
        background: $main-color;
      }
    }

    .panel__container__header {
      $close-button-size: 24px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px;
      border-bottom: 1px solid #eee;

      .panel__container__header__title {
        width: calc(100% - #{$close-button-size * 2});
        font-size: 18px;
        @include one-line-ellipsis();
      }

      .panel__container__header__buttons {
        display: flex;
        gap: 8px;
        align-items: center;
      }

      .panel__container__header__minimize-button,
      .panel__container__header__close-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: $close-button-size;
        height: $close-button-size;
        border: none;
        background: none;
        cursor: pointer;
        color: #666;
        transition: color 0.2s ease;

        &:hover {
          color: #333;
        }
      }

      .panel__container__header__minimize-button {
        &:hover {
          color: #007bff;
        }
      }

      .panel__container__header__close-button {
        &:hover {
          color: #dc3545;
        }
      }
    }
    .panel__container__content {
      padding: 18px;
      overflow-y: auto;

      &.panel__container__content--minimized {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: auto;
        min-height: auto;
        max-height: 60px;
        padding: 0;
        background: $s-default--gray-0;
        border-top: 1px solid #eee;
        z-index: 1008;
      }
    }

    &.s-slide-panel__container--minimized {
      position: fixed;
      bottom: 0;
      top: auto;
      left: 0;
      right: 0;
      width: 100%;
      height: 64px;
      min-height: 64px;
      max-height: 64px;
      border-radius: 0;

      .panel__container__content {
        display: none;
      }

      .panel__container__header {
        border-bottom: none;
        border-top: 1px solid #eee;
        padding: 12px 18px;
        min-height: 40px;
        height: 64px;
        display: flex;
        align-items: center;

        .panel__container__header__title {
          font-size: 16px;
        }
      }
    }
  }


  &.s-slide-panel--bottom {

    $s-slide-panel-left: calc(#{$s-navi-width-size} + 1px);

    .s-slide-panel__container {
      top: auto;
      left: $s-slide-panel-left;
      bottom: 0;
      right: auto;
      width: calc(100% - #{$s-slide-panel-left});
      height: calc(100dvh - #{var(--global-nav-header-height)});
    }

    .s-slide-panel__container__resizer {
      top: calc(#{$resizer-width-size} / 2 * -1);;
      left: 0;
      width: 100%;
      height: $resizer-width-size;
      cursor: row-resize;

      &:hover, &.s-slide-panel__container__resizer--on {
        width: 100%;
        height: $resizer-active-width-size;
      }
    }
  }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.24s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.right-slide-enter-active,
.right-slide-leave-active {
  transition: transform 0.24s ease;
}

.right-slide-enter-from,
.right-slide-leave-to {
  transform: translateX(100%);
}

.bottom-slide-enter-active,
.bottom-slide-leave-active {
  transition: transform 0.24s ease;
}

.bottom-slide-enter-from,
.bottom-slide-leave-to {
  transform: translateY(100%);
}
</style>
