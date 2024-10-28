<template>
  <s-modal :model-value="showModal" :title="$t('빌드 상세')" class-name="lg" @update:model-value="updateModal">
    <project-build-detail-component v-if="!isEditMode" :build-id="buildId" />
    <project-build-edit-component v-else v-model="editFormRef" :build-id="buildId" />
    <template #footer>
      <div class="form__btn-wrapper">
        <template v-if="isEditMode">
          <s-btn @click="onClickUpdate">
            <!-- 생성, 수정 화면에서 사용 -->
            {{ $t('저장') }}
          </s-btn>
          <s-btn variant="outlined" @click="onClickChangeEditMode(false)">
            {{ $t('취소') }}
          </s-btn>
        </template>
        <template v-else>
          <div class="detail-btn-wrapper w-100">
            <s-btn variant="outlined" class="float-left" color="red" @click="onClickDelete">
              <!-- 생성, 수정 화면에서 사용 -->
              {{ $t('삭제') }}
            </s-btn>
            <div class="float-right">
              <s-btn variant="outlined" @click="onClickCancel">
                {{ $t('취소') }}
              </s-btn>
              <s-btn variant="outlined" @click="onClickChangeEditMode(true)">
                <!-- 생성, 수정 화면에서 사용 -->
                {{ $t('수정') }}
              </s-btn>
              <s-btn @click="onClickRequestBuild">
                <!-- 생성, 수정 화면에서 사용 -->
                {{ $t('빌드 요청') }}
              </s-btn>
            </div>
          </div>
        </template>
      </div>
    </template>
  </s-modal>
</template>

<script setup>
import ProjectBuildDetailComponent from '@/components/build/detail/ProjectBuildDetailComponent.vue'
import ProjectBuildEditComponent from '@/components/build/detail/ProjectBuildEditComponent.vue'
import { useConfirmStore } from '@/stores/components/confirm'
import { useI18n } from '@/_setting/i18n'
import { ref } from 'vue'
import { useProjectStore } from '@/stores/devops/project'
import { useBuildStore } from '@/stores/devops/build'
import { useAlertStore } from '@/stores/components/alert'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/portal/user'
const { tt } = useI18n()

const confirmStore = useConfirmStore()
const projectStore = useProjectStore()
const buildStore = useBuildStore()
const alertStore = useAlertStore()
const userStore = useUserStore()

const { selectedProject } = storeToRefs(projectStore)
const { userInfo } = storeToRefs(userStore)

const showModal = defineModel({
  type: Boolean,
  required: true,
})

const { buildId } = defineProps({
  buildId: {
    type: Number,
    default: 0,
  },
})

const isEditMode = ref(false)
const editFormRef = ref()

const emits = defineEmits(['update:model-value'])

const onClickChangeEditMode = value => {
  isEditMode.value = value
}
const onClickRequestBuild = async () => {
  //alert('onClickRequestBuild')
  const isConfirm = await confirmStore.showConfirm(tt('빌드를 요청하시겠습니까'))
  if (isConfirm) {
    alert('빌드 실행')
  }
}
const onClickCancel = () => {
  emits('update:model-value', false)
}

const onClickDelete = async () => {
  const isConfirm = await confirmStore.showConfirm(tt('삭제하시겠습니까'))
  if (isConfirm) {
    alert('삭제 실행')
  }
}

const onClickUpdate = async () => {
  const isConfirm = await confirmStore.showConfirm(tt('저장하시겠습니까'))
  if (isConfirm) {
    doUpdate()
  }
}

const doUpdate = async () => {
  const { valid, errors } = await editFormRef.value.validate()
  if (valid) {
    const formValue = editFormRef.value.getValues()
    const putBuildBody = {
      ...formValue,
      branch: formValue.branch.toLowerCase(),
      regId: userInfo.value.userId,
      serviceGroupId: selectedProject.value.serviceGroupId,
      projectId: selectedProject.value.projectId,
      pipelineScript: formValue.pipelines.map(({ pipelineScript }) => pipelineScript).join('\n'),
      buildId: buildId,
    }
    const result = await buildStore.putBuildDetail(putBuildBody)

    if (result.code === 200) {
      alertStore.openSuccessAlert(result?.message)
      onClickChangeEditMode(false)
    } else {
      alertStore.openErrorAlert(result?.message)
    }
  } else if (errors) {
    const keys = Object.keys(errors)
    alertStore.openErrorAlert(errors[keys[0]])
  }
}

const updateModal = () => {
  emits('update:model-value', false)
}
</script>
<style lang="scss" scoped></style>
