import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCnterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCnt = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCnt, increment }
})
