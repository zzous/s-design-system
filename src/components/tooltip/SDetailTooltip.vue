<template>
  <section class="s-detail-tooltip">
    <div class="label">
      <a class="label--text" variant="plain">
        <v-icon v-if="props.label === 'Label'" icon="mdi-dots-vertical" />
        <span v-else>{{ props.label }}</span>
        <v-overlay
          absolute
          v-model="isOpen"
          activator="parent"
          scrim
          location-strategy="connected"
          scroll-strategy="reposition"
        >
          <v-card class="s-detail-tooltip__content" v-if="isOpen">
            <v-icon class="close-Btn" icon="mdi-close" @click="toggle" />
            <v-chip
              v-for="(item, index) in props.list"
              :key="props.keyId || index"
              variant="text"
              size="small"
              ><span class="detail-item mr-2">
                <SSimpleTooltip
                  :uuid="uuid"
                  :title="displayText(item)"
                  :text="displayText(item)"
                  titleWidth="360"
                />
              </span>
              <!-- append-icon 슬롯이 제공되면 슬롯 사용, 없으면 기본 v-icon 사용 -->
              <slot name="append-icon" :item="item">
                <v-icon
                  v-if="props.icon !== ''"
                  :icon="props.icon"
                  @click="
                    props.icon === 'mdi-content-copy'
                      ? copyText(item)
                      : props.itemClick(item)
                  "
                />
              </slot>
            </v-chip>
          </v-card>
        </v-overlay>
      </a>
    </div>
  </section>
</template>
<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import SSimpleTooltip from './SSimpleTooltip.vue'

const uuid = new Date().getTime().toString()

const props = defineProps({
  label: { type: String, default: 'Label' }, // 기존에 보이는 텍스트
  itemId: { type: String, default: '' }, // v-for key 및 Item 텍스트에 표시
  itemName: { type: String, default: '' }, // Item 텍스트에 표시
  list: { type: Array, default: () => [] }, // 상세에 보일 리스트
  icon: { type: String, default: '' }, // 상세 아이템 옆에 보일 아이콘
  itemClick: { type: Function, default: () => {} }, // 상세 아이템 클릭 이벤트
  copyText: { type: Function, default: (item) => { new Function(item) } }, // 상세 아이템 복사 버튼 클릭 이벤트
})

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    // 다음 tick에서 DOM이 업데이트된 후 위치 조정
    nextTick(() => {
      adjustTooltipPosition()
    })
  }
}

const adjustTooltipPosition = () => {
  const tooltipContent = document.querySelector('.s-detail-tooltip__content')
  if (!tooltipContent) return

  const rect = tooltipContent.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  let transformX = 0
  let transformY = 0

  // 오른쪽으로 넘어가는 경우
  if (rect.right > viewportWidth - 20) {
    transformX = viewportWidth - rect.right - 20
  }

  // 왼쪽으로 넘어가는 경우
  if (rect.left < 20) {
    transformX = 20 - rect.left
  }

  // 아래쪽으로 넘어가는 경우
  if (rect.bottom > viewportHeight - 20) {
    transformY = viewportHeight - rect.bottom - 20
  }

  tooltipContent.style.transform = `translate(${transformX}px, ${transformY}px)`
}

watch(isOpen, (nv, ov) => {
  if (nv && !props.list?.length) isOpen.value = ov
})

// 윈도우 리사이즈 시 툴팁 위치 재조정
const handleResize = () => {
  if (isOpen.value) {
    adjustTooltipPosition()
  }
}

// 컴포넌트 마운트 시 리사이즈 이벤트 리스너 추가
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

// 컴포넌트 언마운트 시 이벤트 리스너 제거
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const displayText = computed(() => {
  return item => {
    return typeof item === typeof {}
      ? `${item[props.itemName] || '-'} / ${item[props.itemId]}`
      : item
  }
})
</script>
<style lang="scss">
.s-detail-tooltip {
  position: relative;

  & > .label {
    height: 100%;
    color: #1a3350;
    text-decoration: underline;
    cursor: pointer;
  }
}

.s-detail-tooltip__content {
  position: absolute;
  top: calc(100% + 8px);
  left: -80px;
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: calc(100vw - 20px);
  border: 1px solid #7c7c7c;
  background: #fff;
  padding: 10px 22px 10px 10px;
  z-index: 99999;
  transform-origin: left top;

  .detail-item {
    max-width: 360px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .close-Btn {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 24px;
    height: 24px;
  }
}
</style>
