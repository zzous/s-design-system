<template>
  <s-modal
    :model-value="modelValue"
    :class-name="modal.size"
    :title="modal.title"
    @update:model-value="updateModal"
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
        <s-btn variant="outlined" @click="updateModal">
          {{ $t('취소') }}
        </s-btn>
      </div>
    </template>
  </s-modal>
</template>

<script setup>
import { ref, watch, reactive, markRaw } from 'vue'
import { storeToRefs } from 'pinia'

import { useI18n } from '@/_setting/i18n'
import { useDevOpsServiceGroupStore } from '@/stores/devops/service-group'
import { useProjectStore } from '@/stores/devops/project'
import { useAlertStore } from '@/stores/components/alert'

import ProjectNew from './ProjectNewView.vue'
import ProjectDetail from './ProjectDetailView.vue'
import ProjectEdit from './ProjectDetailView.vue'


const { tt } = useI18n()
const sgStore = useDevOpsServiceGroupStore()
const { serviceGroupId } = storeToRefs(sgStore)

const alertStore = useAlertStore()
const projectStore = useProjectStore()

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

const emits = defineEmits(['update:model-value', 'refresh'])

const modal = reactive({
  show: false,
  size: 'lg',
  title: '',
  component: null,
  type: ''
})

const modalCompRef = ref()
const updateModal = () => {
  modal.component = null
  modal.show = false
  modal.title = ''

  emits('update:model-value', false)
}

const fetchNewProject = async (values) => {
  const params = {
    projectName: values.projectName,
    projectAlias: values.projectAlias,
    serviceGroupId: serviceGroupId.value,
    projectDesc: values.projectDesc,
    projectCd: values.projectCd,
    buildCd: values.buildCd,
    sourceInfo: {
      templateId: values.templateId,
      packageName: values.packageName,
      jdkVersion: values.jdkVersion,
    },
    projectManagerList: values.projectManagerList,
    buildApproveFlow: values.buildApproveFlow.map(item => item.flowId),
    deployApproveFlow: values.deployApproveFlow.map(item => item.flowId),
  }

  const formData = new FormData()
  formData.append('project', new Blob([JSON.stringify(params)], { type: 'application/json' }))

  try {
    await projectStore.fetchNewProject(formData)
    alertStore.openAlert({
      titleName: tt('생성되었습니다'),
      type: 'success',
    })
    updateModal()
    emits('refresh')
  } catch(e) {
    alertStore.openAlert({
      titleName: tt('생성하지 못했습니다'),
      type: 'error',
    })
  }
}

const fetchEditProject = async (values) => {
  const params = {
    serviceGroupId: serviceGroupId.value,
    projectAlias: values.projectAlias,
    projectDesc: values.projectDesc,
  }
  try {
    await projectStore.fetchEditProject(values.projectId, params)
    alertStore.openAlert({
      titleName: tt('수정되었습니다'),
      type: 'success',
    })
    updateModal()
    emits('refresh')
  } catch(e) {
    alertStore.openAlert({
      titleName: tt('수정하지 못했습니다'),
      type: 'error',
    })
  }
}

const onSubmit = async () => {
  const result = await modalCompRef.value?.submit()
  if (!result) return

  if (modal.type === 'edit') {
    fetchEditProject(result)
  } {
    fetchNewProject(result)
  }
}

watch(
  () => props.modelValue,
  () => {
    modal.type = props.mode
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