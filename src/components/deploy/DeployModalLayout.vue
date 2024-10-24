<template>
  <s-modal :model-value="modelValue" :class-name="modal.size" :title="modal.title" @update:model-value="updateModal">
    <!-- 생성, 상세, 수정-->
    <component :is="modal.component" ref="modalCompRef" v-bind="modal.props" />
    <template #footer>
      <div class="form__btn-wrapper">
        <s-btn v-if="mode === 'detail'" @click="updateMode('edit')">
          {{ $t('수정') }}
        </s-btn>
        <s-btn v-else @click="onSubmit">
          <!-- 생성, 수정 화면에서 사용 -->
          {{ $t('저장') }}
        </s-btn>
        <s-btn variant="outlined" @click="updateModal">
          {{ $t('취소') }}
        </s-btn>
      </div>
    </template>
  </s-modal>
</template>

<script setup>
import { ref, watch, reactive, markRaw } from 'vue'

import { useI18n } from '@/_setting/i18n'

import DeployNew from './new/DeployNewComponent.vue'
import ProjectDetail from './detail/DeployDetailComponent.vue'
import ProjectEdit from './edit/DeployEditComponent.vue'

const { tt } = useI18n()

const props = defineProps({
  mode: {
    type: String,
    default: null,
    description: '[new|detail|edit]',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  projectId: {
    type: [String, Number],
    default: null,
  },
})

const emits = defineEmits(['update:model-value', 'update:mode', 'refresh'])

const modal = reactive({
  show: false,
  size: 'md',
  title: '',
  component: null,
  type: '',
})

const modalCompRef = ref()
const updateModal = () => {
  if (props.mode === 'edit') {
    emits('update:mode', 'detail')
  } else {
    modal.component = null
    modal.show = false
    modal.title = ''
    modal.mode = null

    emits('update:model-value', false)
  }
}

const updateMode = type => {
  emits('update:mode', type)
}

const onSubmit = async () => {
  const result = await modalCompRef.value?.submit()
  emits('refresh', result)
  if (props.modelValue === 'edit') {
    updateMode('detail')
  } else if (result) {
    updateModal()
  }
}

watch(
  () => props.mode,
  () => {
    // console.log('changeMode')
    modal.type = props.mode
    switch (props.mode) {
      case 'new':
        modal.component = markRaw(DeployNew)
        modal.title = tt('배포 생성')
        break
      case 'detail':
        modal.component = markRaw(ProjectDetail)
        modal.title = tt('배포 상세')
        modal.props = {
          projectId: props.projectId,
        }
        break
      case 'edit':
        modal.component = markRaw(ProjectEdit)
        modal.title = tt('배포 상세')
        modal.props = {
          projectId: props.projectId,
        }
        break
      default:
        modal.component = null
        break
    }
  },
)

watch(
  () => props.modelValue,
  () => {
    if (!props.modelValue) {
      emits('update:mode', null)
    }
  },
)
</script>

<style lang="scss" scoped></style>
