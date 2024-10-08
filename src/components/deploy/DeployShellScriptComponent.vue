<template>
  <div>
    <div class="label-wrapper">
      <label>스크립트</label>
      <default-button-component title="스크립트 생성" class="float-right" />
    </div>
    <shell-script-input-component v-model="shellScript" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
import ShellScriptInputComponent from '@/components/_common/input/ShellScriptInputComponent.vue'

const shellScript = ref('') // 쉘 스크립트 내용
</script>

<style scoped>
.label-wrapper {
  height: 35px;
  line-height: 35px;
  padding-right: 50px;
}
</style>
