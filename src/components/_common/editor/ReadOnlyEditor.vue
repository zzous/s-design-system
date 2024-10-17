<template>
  <div class="editor-wrapper">
    <code-mirror
      v-model="contents"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      :readonly="true"
      :style="maxHeight ? {maxHeight: `${maxHeight}px`} : {}"
    />
  </div>
</template>

<script setup>
import CodeMirror from 'vue-codemirror6'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
const contents = defineModel({
  type: String,
  default: ''
})

defineProps({
  maxHeight: {
    type: Number,
    default: 0
  }
})
const extensions = [javascript(), oneDark]
</script>

<style>
.editor-wrapper {
  overflow: scroll;
}
</style>