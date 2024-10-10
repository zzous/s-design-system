<template>
  <s-modal
    :model-value="modelValue"
    :class-name="modal.size"
    :title="modal.title"
    @click:close="onClickCloseModal"
  >
    <!-- 생성, 상세, 수정-->
    <component :is="modal.component" ref="modalCompRef" :props="modal.props" />
    <template #footer>
      <div class="form__btn-wrapper">
        <s-btn v-if="mode === 'detail'">
          {{ $t('수정') }}
        </s-btn>
        <s-btn v-else @click="onSubmit">
          <!-- 생성, 수정 화면에서 사용 -->
          {{ $t('저장') }}
        </s-btn>
        <s-btn variant="outlined" @click="emits('update:model-value', false)">
          {{ $t('취소') }}
        </s-btn>
      </div>
    </template>
  </s-modal>
</template>

<script setup>
import { ref, watch, reactive, markRaw } from 'vue'

import { useI18n } from '@/_setting/i18n'


import ProjectNew from './ProjectNewView.vue'
import ProjectDetail from './ProjectDetailView.vue'
import ProjectEdit from './ProjectDetailView.vue'

const { tt } = useI18n()

const props = defineProps({
  mode: {
    type: String,
    default: null,
    description: '[new|detail|edit]'
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update:model-value'])

const modal = reactive({
  show: false,
  size: 'lg',
  title: '',
  component: null
})

const modalCompRef = ref()
const onSubmit = () => {
  modalCompRef.value?.validate()
}

const onClickCloseModal = () => {
  modal.component = null
  modal.show = false
  modal.title = ''

  emits('update:model-value', false)
}

watch(
  () => props.modelValue,
  () => {
    switch (props.mode) {
    case 'new':
      modal.component = markRaw(ProjectNew)
      modal.title= tt('프로젝트 생성')
      break
    case 'detail':
      modal.component = markRaw(ProjectDetail)
      break
    case 'edit':
      modal.component = markRaw(ProjectEdit)
      break
    default:
      modal.component = null
      break
    }
  }
)


</script>

<style lang="scss" scoped>

</style>