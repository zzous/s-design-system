<template>
  <v-btn :color='btnColor'>{{title}}</v-btn>
</template>

<script setup>
import { DEFAULT_BUTTON_COLOR } from '@/assets/consts/consts'
import { ref } from 'vue'
const btnColor = ref(DEFAULT_BUTTON_COLOR)
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>