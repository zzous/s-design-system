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
              <button @click="onClose" class="panel__container__header__close-button">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke-width="0"></g>
                  <g stroke-linecap="round" stroke-linejoin="round"></g>
                  <g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="currentColor"/>
                  </g>
                </svg>
              </button>
            </div>
            <div ref="panelContentRef" class="panel__container__content">
              <slot name="default"/>
            </div>
          </div>
        </Transition>
      </div>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useOutsideClick } from '@/hooks/index.js'

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
    default: 480,
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
})

// region [Hooks]
const isResizeMode = ref(false)
const panelSize = ref(typeof props.size === 'number' ? props.size : parseInt(props.size))
const slidePanelContainerRef = ref(null)
const panelContentRef = ref(null)
const headerHeight = ref(0)
const rightDirection = computed(() => props.direction === 'right')
useOutsideClick(slidePanelContainerRef, props.onClose, () => props.isOpen && props.closeOnOutsideClick)

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
  document.body.style.overflow = isScroll ? 'auto' : 'hidden'
}
const initializePanelWidth = (isOpen) => {
  if (isOpen) {
    panelSize.value = typeof props.size === 'number' ? props.size : parseInt(String(props.size) || '480', 10)
  }
}
// endregion

// region [Events]
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
onMounted(initializeHeaderHeight)
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
        width: calc(100% - #{$close-button-size});
        font-size: 18px;
        @include one-line-ellipsis();
      }

      .panel__container__header__close-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: $close-button-size;
        height: $close-button-size;
      }
    }
    .panel__container__content {
      padding: 18px;
      overflow-y: auto;
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
