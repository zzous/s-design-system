<template>
  <div :class="['s-form__item', className]">
    <div v-if="showLabel" class="s-form__item-label">
      <span>
        {{ label }}
      </span>
      <span v-if="required" class="required">*</span>
    </div>
    <div class="s-form__item-content" :class="[contentClass]">
      <div ref="contentItemRef" class="s-form__item-content-item">
        <slot name="default" :tooltip="createTooltip" />
      </div>
      <div v-if="$slots['outer-append']" class="s-form__item-append">
        <slot name="outer-append" />
      </div>
    </div>
  </div>
</template>
<script setup>
/**
 * ❗️ 툴팁 slot 오류 있음
 */
import { ref, computed, onMounted, onBeforeUnmount, nextTick, h, watch } from 'vue'
import { SSimpleTooltip } from '@/components';

const props = defineProps({
  className: {
    type: String,
    default: '',
    description: '페이지타이틀',
  },
  contentClass: {
    type: String,
    default: '',
    description: '콘텐트 영역 클랙스',
  },
  label: { type: String, required: false, default: '', description: '폼라벨' },
  showLabel: { type: Boolean, required: false, default: true, description: '폼라벨 노출 여부' },
  name: { type: String, default: '', description: 'validation 체크 시 필수 값' },
  required: { type: Boolean, default: false, description: '필수값' },
})

const contentItemRef = ref(null)
const contentItemWidth = ref(0)
const resizeObserver = ref(null)

// s-form__item-content-item의 너비에서 30px을 뺀 값을 툴팁 title-width로 설정
const tooltipTitleWidth = computed(() => {
  // console.log('tooltipTitleWidth 계산:', {
  //   contentItemWidth: contentItemWidth.value,
  //   calculated: Math.max(100, contentItemWidth.value - 30)
  // })
  return Math.max(100, contentItemWidth.value - 30)
})

// 컨테이너 너비 측정 함수
const measureContainerWidth = async () => {
  await nextTick()

  // DOM이 완전히 렌더링될 때까지 대기
  await new Promise(resolve => setTimeout(resolve, 50))

  if (contentItemRef.value) {
    const width = contentItemRef.value.offsetWidth
    // console.log('컨테이너 너비 측정:', {
    //   offsetWidth: width,
    //   clientWidth: contentItemRef.value.clientWidth,
    //   scrollWidth: contentItemRef.value.scrollWidth
    // })
    contentItemWidth.value = width
  } else {
    console.log('contentItemRef가 없음')
  }
}

// 부모 컴포넌트에서 사용할 툴팁 생성 함수
const createTooltip = (text) => {
  // console.log('createTooltip 호출:', {
  //   text: text?.substring(0, 30) + '...',
  //   titleWidth: tooltipTitleWidth.value
  // })

  return h(SSimpleTooltip, {
    title: text,
    text: text,
    titleWidth: tooltipTitleWidth.value
  })
}

// 윈도우 리사이즈 핸들러
const handleResize = () => {
  // console.log('윈도우 리사이즈 감지')
  measureContainerWidth()
}

onMounted(() => {
  // console.log('SFormItem 마운트됨')

  // 여러 번 시도하여 너비 측정
  measureContainerWidth()

  // 추가로 100ms 후에도 측정 (DOM 완전 렌더링 대기)
  setTimeout(() => {
    measureContainerWidth()
  }, 100)

  // 300ms 후에도 측정 (레이아웃 완료 대기)
  setTimeout(() => {
    measureContainerWidth()
  }, 300)

  // ResizeObserver 설정
  if (contentItemRef.value && window.ResizeObserver) {
    resizeObserver.value = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width
        // console.log('ResizeObserver 감지:', width)
        if (width > 0) {
          contentItemWidth.value = width
        }
      }
    })
    resizeObserver.value.observe(contentItemRef.value)
  }

  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)

  // ResizeObserver 정리
  if (resizeObserver.value) {
    resizeObserver.value.disconnect()
    resizeObserver.value = null
  }
})
</script>

<style lang="scss" scoped>
@import url('./SFormItem.scss');
</style>
