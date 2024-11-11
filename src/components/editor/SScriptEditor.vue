<template>
  <div class="editor-wrapper">
    <CodeMirror
        ref="editor"
        v-model="contents"
        class="script-editor"
        :autofocus="true"
        :indent-with-tab="true"
        :tab-size="2"
        :extensions="extensions"
        :readonly="readonly"
        :style="height ? { height: `${height}px` } : {}"
    />
  </div>
</template>

<script setup>
import CodeMirror from 'vue-codemirror6'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { defaultKeymap } from '@codemirror/commands'
import { keymap } from '@codemirror/view'
import { basicSetup } from 'codemirror'
import { ref } from 'vue'
const contents = defineModel({
  type: String,
  default: '',
})

defineProps({
  height: {
    type: Number,
    default: 0,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
})
const extensions = [basicSetup, javascript(), oneDark, keymap.of(defaultKeymap)]
const editor = ref(null)
</script>

<style lang="scss">
.editor-wrapper {
  overflow: scroll;
  background: #282c34;
}
</style>
