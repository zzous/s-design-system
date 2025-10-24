import { ref, computed } from 'vue'


export default function useSlidePanel(props) {

    const isOpen = ref(false)
    const isMinimized = ref(false)

    const openSlidePanel = () => {
      isOpen.value = true
    }

    const closeSlidePanel = () => {
      isOpen.value = false
      isMinimized.value = false
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
        'onUpdate:isMinimized': onUpdateIsMinimized
      })),
      openSlidePanel,
      closeSlidePanel,
    }
}
