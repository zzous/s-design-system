import { ref, computed } from 'vue'



export default function useSlidePanel() {

    const isOpen = ref(false)

    const openSlidePanel = () => {
      isOpen.value = true
    }

    const closeSlidePanel = () => {
      isOpen.value = false
    }

    const slidePanelProps = computed(() => {
      return { isOpen: isOpen.value, onClose: closeSlidePanel }
    })


    return {
      slidePanelProps,
      openSlidePanel,
      closeSlidePanel,
    }
}
