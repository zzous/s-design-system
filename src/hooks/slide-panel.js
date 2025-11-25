import { ref, computed } from 'vue'


export default function useSlidePanel(props) {

    const isOpen = ref(false)
    const isMinimized = ref(false)
    const data = ref(null)

    const openSlidePanel = (_data) => {
      isOpen.value = true
      data.value = _data
    }

    const closeSlidePanel = () => {
      isOpen.value = false
      isMinimized.value = false
      data.value = null
    }

    const onUpdateIsMinimized = (value) => {
      isMinimized.value = value
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
