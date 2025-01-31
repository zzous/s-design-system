<template>
  <div class="s-file-input">
    <v-file-input ref="importFile" :model-value="file" class="d-none" @update:model-value="handleChange" :accept="accept"/>
    <v-text-field
      :model-value="fileName"
      variant="outlined"
      density="compact"
      :hide-details="hideDetails"
      readonly
      :error-messages="errorMessages"
      :placeholder="placeholder"
    />
    <SBtn height="30" variant="outlined" :disabled="btnDisabled" @click="$refs.importFile.click()">
      {{buttonText}}
    </SBtn>
  </div>
</template>

<script setup>
import { SBtn } from '@';
import { ref, onMounted } from 'vue'
const props = defineProps({
  placeholder: {
    type: String,
    default: '파일을 선택하세요',
  },
  modelValue: {
    type: [Object, String],
    default: null,
  },
  errorMessages: {
    type: Array,
    default: () => [],
  },
  btnDisabled: {
    type: Boolean,
    default: false,
  },
  hideDetails: {
    type: [String, Boolean],
    default: 'auto',
  },
  buttonText: {
    type: String,
    default: '파일 찾기',
  },
  accept: {
    type: String,
    default: '*',
  }
})

const emits = defineEmits(['update:model-value'])

const file = ref(null)
const fileName = ref(null)

const handleChange = value => {
  file.value = value
  fileName.value = value?.name
  emits('update:model-value', value)
}

onMounted(() => {
  file.value = props.modelValue
})
</script>
<style lang="scss">
.s-file-input {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
