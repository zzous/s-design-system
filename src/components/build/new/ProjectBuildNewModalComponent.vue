<template>
  <s-modal :model-value="showModal" :title="$t('빌드 생성')" class-name="lg" @update:model-value="updateModal">
    <template #default>
      <project-build-new-component v-model="formRef" />
    </template>
    <template #footer>
      <div class="form__btn-wrapper">
        <s-btn @click="onClickSave">
          <!-- 생성, 수정 화면에서 사용 -->
          {{ $t('저장') }}
        </s-btn>
        <s-btn variant="outlined" @click="onClickCancel">
          {{ $t('취소') }}
        </s-btn>
      </div>
    </template>
  </s-modal>
</template>

<script setup>
import ProjectBuildNewComponent from '@/components/build/new/ProjectBuildNewComponent.vue'
import { useAlertStore } from '@/stores/components/alert'
import { useBuildStore } from '@/stores/devops/build'
import { useProjectStore } from '@/stores/devops/project'
import { useUserStore } from '@/stores/portal/user'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const emits = defineEmits(['update:model-value', 'new-build-result'])
const alertStore = useAlertStore()
const buildStore = useBuildStore()
const userStore = useUserStore()
const projectStore = useProjectStore()

const { userInfo } = storeToRefs(userStore)
const { selectedProject } = storeToRefs(projectStore)

const showModal = defineModel({
  type: Boolean,
  required: true,
})

const formRef = ref({})

const updateModal = () => {
  emits('update:model-value', false)
}

const onClickSave = async () => {
  const { valid, errors } = await formRef.value.validate()
  if (valid) {
    const formValue = formRef.value.getValues()
    const postBuildBody = {
      ...formValue,
      branch: formValue.branch.toLowerCase(),
      regId: userInfo.value.userId,
      serviceGroupId: selectedProject.value.serviceGroupId,
      projectId: selectedProject.value.projectId,
      pipelineScript: formValue.pipelines.map(({ pipelineScript }) => pipelineScript).join('\n'),
    }
    const result = await buildStore.postBuild(postBuildBody)
    if (result.code === 200) {
      alertStore.openSuccessAlert(result?.message)
      emits('update:model-value', false)
      emits('new-build-result', true)
    } else {
      alertStore.openErrorAlert(result?.message)
    }
  } else if (errors) {
    const keys = Object.keys(errors)
    alertStore.openErrorAlert(errors[keys[0]])
  }
}

const onClickCancel = () => {
  emits('update:model-value', false)
}
</script>
<style lang="scss" scoped></style>
