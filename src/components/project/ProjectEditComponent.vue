<template>
  <div class="view-wrapper">
    <vee-form ref="formRef" v-slot="{ values }" :validation-schema="schema">
      <div class="form-wrapper">
        <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
        <s-form-table>
          <s-form-item :label="$t('프로젝트명')" name="projectName">
            {{ dataInfo.projectName }}
          </s-form-item>
          <s-form-item :label="$t('생성 일시')" name="regDate">
            {{ dataInfo.regDate || '-' }}
          </s-form-item>
          <s-form-item :label="$t('수정 일시')" name="modDate">
            {{ dataInfo.modDate || '-' }}
          </s-form-item>
          <s-form-item :label="$t('프로젝트 템플릿')" name="projectCd">
            {{ dataInfo.projectCd || '-' }}
          </s-form-item>
          <s-form-item :label="$t('패키지 정보')" name="packageCd">
            {{ dataInfo.packageCd || '-' }}
          </s-form-item>
          <s-form-item :label="$t('JDK 버전')" name="jdkVersion">
            {{ dataInfo.sourceInfo?.jdkVersion || '-' }}
          </s-form-item>
          <s-form-item :label="$t('패키지명')" name="packageName">
            {{ dataInfo.sourceInfo?.packageName || '-' }}
          </s-form-item>
          <s-form-item v-slot="{ handleChange }" :label="$t('프로젝트 별칭')" name="projectAlias">
            <v-text-field
              :model-value="values.projectAlias"
              variant="outlined"
              density="compact"
              hide-details="auto"
              :placeholder="$t('프로젝트 별칭을 입력해주세요')"
              @update:model-value="handleChange"
            />
          </s-form-item>
          <s-form-item
            v-slot="{ handleChange }"
            :label="$t('설명({{length}}자 이내)', { length: 250 })"
            name="projectDesc"
          >
            <v-textarea
              :model-value="values.projectDesc"
              density="compact"
              variant="outlined"
              hide-details="auto"
              :placeholder="$t('설명을 입력하세요')"
              @update:model-value="handleChange"
            />
          </s-form-item>
        </s-form-table>
      </div>
    </vee-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
// VeeForm 사용 시 s-form-item 컴포넌트에 name 값 필수
import { Form as VeeForm } from 'vee-validate'
import * as yup from 'yup'

import { useI18n } from '@/_setting/i18n'
import { useAlertStore } from '@/stores/components/alert'
import { useDevOpsServiceGroupStore } from '@/stores/devops/service-group'
import { useProjectStore } from '@/stores/devops/project'

const emits = defineEmits(['validate', 'errors', 'submit'])
const props = defineProps({
  projectId: {
    type: [String, Number],
    required: true,
  },
})

const sgStore = useDevOpsServiceGroupStore()
const { serviceGroupId } = storeToRefs(sgStore)
const projectStore = useProjectStore()
const alertStore = useAlertStore()

const { tt } = useI18n()

const schema = yup.object({
  projectAlias: yup.string().trim().label(tt('프로젝트 별칭')).max(50),
  projectDesc: yup.string().label(tt('설명')).max(250),
})

const formRef = ref()
const { project: dataInfo } = storeToRefs(projectStore)
const validate = async () => {
  if (formRef.value) {
    const { valid, errors } = await formRef.value.validate()
    if (valid) {
      emits('validate', valid)
    } else {
      emits('errors', errors)
    }
    return valid
  }
}

const fetchEditProject = async values => {
  const params = {
    serviceGroupId: serviceGroupId.value,
    projectAlias: values.projectAlias,
    projectDesc: values.projectDesc,
  }
  try {
    await projectStore.fetchEditProject(props.projectId, params)
    alertStore.openAlert({
      titleName: tt('수정되었습니다'),
      type: 'success',
    })
    return true
  } catch (e) {
    alertStore.openAlert({
      titleName: tt('수정하지 못했습니다'),
      type: 'error',
    })
    return false
  }
}

const submit = async () => {
  const result = await validate()
  // console.log('result', result)
  if (result) {
    const { values } = formRef.value

    const result = await fetchEditProject(values)
    return result
  }
  return result
}

const initProject = async () => {
  await projectStore.getProject(props.projectId)
  const { projectAlias, projectDesc } = dataInfo.value
  formRef.value.setValues({
    projectAlias,
    projectDesc,
  })
  console.log(formRef.value)
}

defineExpose({ validate, submit })

onMounted(() => {
  initProject()
})
</script>

<style lang="scss" scoped></style>
