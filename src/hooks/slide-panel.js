import { ref, computed } from 'vue'


export default function useSlidePanel(props) {

  const isOpen = ref(false)
  const isMinimized = ref(false)
  const data = ref(null)

  const openSlidePanel = (item, list) => {
    isOpen.value = true
    isMinimized.value = false
    data.value = item

    onHighlightRow(item, list)
  }

  const closeSlidePanel = () => {
    // 💡 [수정] data.value가 객체일 경우 highlight 속성을 null로 초기화
    if (data.value && typeof data.value === 'object') {
      data.value.highlight = null
    }

    isOpen.value = false
    isMinimized.value = false
    data.value = null
  }

  const onUpdateIsMinimized = (value) => {
    isMinimized.value = value
  }

  const onHighlightRow = (item, list) => {
    if (list?.value?.length > 0) {
      // 기존 하이라이트 초기화: highlight = ''
      list.value.forEach(item => { item.highlight = '' })
    }
    setTimeout(() => {
      // 새 항목 하이라이트 설정: highlight = 's-highlight-info'
      if (typeof item === 'object') { item.highlight = 's-highlight-info' }
    }, 0)
  }


  return {
    slidePanelProps: computed(() => ({
      ...props,
      isOpen: isOpen.value,
      isMinimized: isMinimized.value,
      onClose: closeSlidePanel,
      'onUpdate:isMinimized': onUpdateIsMinimized,
      data: data.value,
    })),
    openSlidePanel,
    closeSlidePanel,
  }
}
