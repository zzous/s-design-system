import { ref, computed } from 'vue'


export default function useSlidePanel(props) {

    const isOpen = ref(false)

    const openSlidePanel = () => {
      isOpen.value = true
    }

    const closeSlidePanel = () => {
      isOpen.value = false
    }

    return {
      slidePanelProps: computed(() => ({ ...props, isOpen: isOpen.value, onClose: closeSlidePanel })),
      openSlidePanel,
      closeSlidePanel,
    }
}
