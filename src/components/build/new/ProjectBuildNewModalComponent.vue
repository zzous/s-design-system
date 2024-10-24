<template>
  <s-modal :model-value="showModal" :title="$t('빌드 생성')" class-name="lg" @update:model-value="updateModal">
    <project-build-new-component />
  </s-modal>
</template>

<script setup>
import ProjectBuildNewComponent from '@/components/build/new/ProjectBuildNewComponent.vue'

const showModal = defineModel({
  type: Boolean,
  required: true,
})
const emits = defineEmits(['update:model-value'])
const updateModal = () => {
  emits('update:model-value', false)
}
</script>
<style lang="scss" scoped></style>
