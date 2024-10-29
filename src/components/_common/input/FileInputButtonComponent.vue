<template>
  <div class="s-file-input">
    <v-file-input ref="importFile" :model-value="modelValue" class="d-none" @update:model-value="handleChange" />
    <v-text-field
      :model-value="fileName"
      variant="outlined"
      density="compact"
      hide-details="auto"
      readonly
      :error-messages="errorMessages"
      :placeholder="placeholder"
    />
    <s-btn height="30" variant="outlined" :disabled="btnDisabled" @click="$refs.importFile.click()">
      {{ $t('파일 찾기') }}
    </s-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  placeholder: {
    type: String,
    default: '파일을 선택하세요',
  },
  modelValue: {
    type: Object,
    default: () => ({
      name: null,
    }),
  },
  errorMessages: {
    type: Array,
    default: () => [],
  },
  btnDisabled: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['update:model-value'])

const fileName = ref(null)

const handleChange = value => {
  fileName.value = value?.name
  emits('update:model-value', value)
}
</script>
<style lang="scss" scoped>
.s-file-input {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
