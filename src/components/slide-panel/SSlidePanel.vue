<template>
  <Teleport :to="teleportId">
      <div class="s-slide-panel">

        <Transition name="fade">
          <div v-show="isOpen && isBackdrop" class="s-slide-panel__backdrop" :style="backdropStyles"/>
        </Transition>

        <Transition name="slide">
          <div v-if="isOpen" ref="slidePanelContainerRef" :class="containerClass" :style="panelStyles">
            <div :class="resizerClass" @mousedown="onMouseDownPanel" />
            <div class="panel__container__header" v-if="title">
              <h2 class="panel__container__header__title">{{ title }}</h2>

              <button @click="onClose" class="panel__container__header__close-button">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="currentColor"></path> </g></svg>
              </button>
            </div>
            <div ref="panelContentRef" class="panel__container__content">
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <p>여기에 패널 콘텐츠가 들어갑니다.</p>
              <slot />
            </div>
          </div>
        </Transition>
      </div>
  </Teleport>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
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
    default: 'right',
    validator: (value) => {
      return [undefined, 'right', 'bottom'].includes(value);
    },
  },
  isBackdrop: {
    type: Boolean,
    default: false,
    validator: value => (['boolean'].includes(typeof value)),
  },
  closeOnOutsideClick: {
    type: Boolean,
    default: false,
    validator: value => (['boolean'].includes(typeof value)),
    description: '패널 외부 클릭 시 자동 닫힘 여부',
  },
  opacity: {
    type: Number,
    default: 1,
    validator: value => (['number'].includes(typeof value)),
  },
  backgroundBlur: {
    type: Number,
    default: 0,
    validator: value => (['number'].includes(typeof value)),
  },
  size: {
    type: [String, Number],
    default: 480,
    validator: value => (['string', 'number'].includes(typeof value)),
  },
  teleportId: {
    type: String,
    default: 'body',
    description: 'Teleport ID',
  },
})


const MAX_SIZE = window.innerWidth

// region [Hooks]
const isResizeMode = ref(false)
const panelWidth = ref(typeof props.size === 'number' ? props.size : parseInt(props.size))
const slidePanelContainerRef = ref(null)
const panelContentRef = ref(null)
useOutsideClick(slidePanelContainerRef, props.onClose, () => props.isOpen && props.closeOnOutsideClick)
// endregion

// region [Styles]
const backdropStyles = computed(() => ({
  opacity: props?.isBackdrop ? props.opacity : 0,
  backdropFilter: props.backgroundBlur ? `blur(${props.backgroundBlur}px)` : 'none',
}))
const panelStyles = computed(() => ({ width: `${panelWidth.value}px` }))

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
const cleanupListeners = () => {
  isResizeMode.value = false
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUpPanel)
  window.removeEventListener('touchmove', onMouseMove)
  window.removeEventListener('touchend', onMouseUpPanel)
}
const onToggleScroll = (isScroll) => {
  document.body.style.overflow = isScroll ? 'auto' : 'hidden'
}
const initializePanelWidth = (isOpen) => {
  if (isOpen) {
    panelWidth.value = typeof props.size === 'number' ? props.size : parseInt(String(props.size) || '480', 10)
  }
}
// endregion


// region [Events]
const onMouseDownPanel = () => {
  isResizeMode.value = true
  document.body.style.cursor = 'col-resize'
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUpEvent)
}
const onMouseUpEvent = () => {
  isResizeMode.value = false
  document.body.style.cursor = 'default'
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mousemove', onMouseUpEvent)
}
const onMouseUpPanel = () => {
  isResizeMode.value = false
  window.removeEventListener('mousemove', onMouseMove)
}
const onMouseMove = (e) => {
  if (!isResizeMode.value) return

  const el = panelContentRef.value
  const styles = window.getComputedStyle(el)
  const paddingLeft = parseInt(styles?.padding, 10) || 0

  const newWidth = window.innerWidth - e.clientX - paddingLeft

  if (newWidth >= props.size && newWidth <= MAX_SIZE) {
    panelWidth.value = newWidth
  }
}
// endregion

// region [Life Cycles]
watch(() => props.isOpen, onToggleScroll)
watch(() => props.isOpen, initializePanelWidth)
watch(() => props.isOpen, cleanupListeners)
onMounted(() => { panelWidth.value = typeof props.size === 'number' ? props.size : parseInt(props.size) })
// endregion
</script>

<style scoped lang="scss">
.s-slide-panel {
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: auto;

  .s-slide-panel__backdrop {
    position: fixed;
    top: var(--global-nav-header-height);
    left: 0;
    width: 100%;
    height: calc(100dvh - #{var(--global-nav-header-height)});
    background-color: rgba(0, 0, 0, 0.48);
    z-index: 9998;
  }

  .s-slide-panel__container {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: var(--global-nav-header-height);
    right: 0;
    height: calc(100dvh - #{var(--global-nav-header-height)});
    background: $s-default--gray-0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    z-index: 9999;

    &.s-slide-panel__container--resize-on {
      user-select: none;
    }

    .s-slide-panel__container__resizer {

      $resizer-width-size: 2px;

      position: absolute;
      top: 0;
      left: calc(#{$resizer-width-size} / 2 * -1);
      width: $resizer-width-size;
      height: 100%;
      cursor: col-resize;
      background: $s-default--gray-5;

      &:hover, &.s-slide-panel__container__resizer--on {
        width: 3px;
        background: $main-color;
      }
    }

    .panel__container__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px;
      border-bottom: 1px solid #eee;

      .panel__container__header__title {
        font-size: 18px;
      }

      .panel__container__header__close-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }
    }
    .panel__container__content {
      padding: 18px;
      overflow-y: auto;
    }
  }
}

/* 백드롭을 위한 페이드 트랜지션 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.24s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 컨테이너를 위한 슬라이드 트랜지션 */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.24s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
