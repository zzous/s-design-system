<template>
  <s-modal :model-value="showModal" :title="$t('빌드 이력')" class-name="lg" @update:model-value="updateModal">
    <template #default>history</template>
  </s-modal>
</template>

<script setup>
const showModal = defineModel({
  type: Boolean,
  required: true,
})
const emits = defineEmits(['update:model-value', 'new-build-result'])
const updateModal = () => {
  emits('update:model-value', false)
}
</script>
<style lang="scss" scoped></style>
