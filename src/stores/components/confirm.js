import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfirmStore = defineStore('confirm', () => {
  const isShowConfirm = ref(false)
  const confirmContents = ref('default confirmContents')
  let confirmResolv = null

  const showConfirm = async contents => {
    confirmContents.value = contents
    isShowConfirm.value = true
    return new Promise(resolve => {
      confirmResolv = resolve
    })
  }

  const closeConfirm = value => {
    isShowConfirm.value = false
    if (confirmResolv) confirmResolv(value)
  }

  return { isShowConfirm, confirmContents, showConfirm, closeConfirm }
})
