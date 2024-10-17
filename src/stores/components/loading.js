import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const loading = ref(false)
  function openLoading() {
    loading.value = true
  }
  function closeLoading() {
    loading.value = false
  }
  return { loading, openLoading, closeLoading }
})
