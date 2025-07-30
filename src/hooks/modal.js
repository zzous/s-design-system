import { reactive, computed } from 'vue'

const MODAL_MODE = ['new', 'detail', 'update']

const useModal = getDatas => {
  const modal = reactive({
    open: false,
    mode: '',
    data: null,
  })

  const openModal = ({ mode, data }) => {
    if (!MODAL_MODE.includes(mode)) {
      throw Error('invalid modalType')
    }

    modal.open = true
    modal.mode = mode
    modal.data = data
  }

  const closeModal = () => {
    modal.open = false
    modal.mode = ''
    modal.data = null
  }

  const changeMode = mode => {
    if (!MODAL_MODE.includes(mode)) {
      throw Error('invalid modalType')
    }
    modal.mode = mode
  }

  const modalProps = computed(() => {
    return {
      ...modal,
      closeModal,
      changeMode,
      getDatas,
    }
  })

  return { modalProps, openModal, closeModal }
}

export default useModal
