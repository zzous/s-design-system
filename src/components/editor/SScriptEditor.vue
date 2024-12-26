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
        :style="customStyle"
    />
  </div>
</template>

<script setup>
import CodeMirror from 'vue-codemirror6'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { defaultKeymap } from '@codemirror/commands'
import { keymap } from '@codemirror/view'
import { yaml } from '@codemirror/lang-yaml'
import { basicSetup } from 'codemirror'
import { ref, computed } from 'vue'
const contents = defineModel({
  type: String,
  default: '',
})

const props = defineProps({
  height: {
    type: [String, Number],
    default: 0,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  lang: {
    type: String,
    default: null,
  },
})
const extensions = computed(() => {
  const result = props.readonly ? [basicSetup, javascript(), keymap.of(defaultKeymap)] : [basicSetup, javascript(), oneDark, keymap.of(defaultKeymap)]
  if (props.lang === 'yaml') {
    result.push(yaml())
  }
  return result
})
const editor = ref(null)

const customStyle = computed(() => {
  const height = props.height ? { height: `${props.height}px` } : {}
  const backgroundColor = props.readonly ? { backgroundColor: 'transparent' } : { backgroundColor: '#282c34' }
  return { ...height, ...backgroundColor }
})

</script>

<style lang="scss">
.editor-wrapper {
  overflow: scroll;
}
</style>
