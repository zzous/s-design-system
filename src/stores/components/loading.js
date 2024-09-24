import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const showLoading = ref(false)
  function openLoading() {
    showLoading.value = true
  }
  function closeLoading() {
    showLoading.value = false
  }
  return { showLoading, openLoading, closeLoading }
})
