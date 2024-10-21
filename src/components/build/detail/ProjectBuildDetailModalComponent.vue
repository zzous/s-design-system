<template>
  <s-modal :model-value="showModal" :title="$t('빌드 상세')" class-name="lg" @update:model-value="updateModal">
    <project-build-detail-component v-if="showModal" :build-id="buildId" />
  </s-modal>
</template>

<script setup>
import ProjectBuildDetailComponent from '@/components/build/detail/ProjectBuildDetailComponent.vue'

const showModal = defineModel({
  type: Boolean,
  required: true,
})
defineProps({
  buildId: {
    type: Number,
    default: 0,
  },
})
const emits = defineEmits(['update:model-value'])
const updateModal = () => {
  emits('update:model-value', false)
}
</script>
<style lang="scss" scoped></style>
