<template>
  <default-button-component title="select" @click="onClickTriggerButton" />
  <v-file-input ref="fileInputRef" hide-input class="file-input display-none">
    <template #append />
  </v-file-input>
</template>

<script setup>
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
import { ref } from 'vue'
const onClickTriggerButton = () => {
  if (fileInputRef.value) {
    fileInputRef.value.click()
  }
}
const fileInputRef = ref(null)
</script>
<style lang="scss" scoped>
.file-input {
  background: red;
}
</style>
