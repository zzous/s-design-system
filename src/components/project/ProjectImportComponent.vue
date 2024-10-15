<template>
  <div class="view-wrapper">
    <!-- list modal -->
    <component
      :is="modal.component"
      v-model="modal.show"
      v-bind="modal.props"
      @update:model-value="updateModal"
      @update:selected="value => updateSelected(modal.target, value)"
    />
    <vee-form ref="formRef" v-slot="{ values }" :validation-schema="schema">
      <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
      <s-form-table>
        <s-form-item
          v-slot="{ errors, handleChange }"
          :label="$t('프로젝트 명')"
          name="projectName"
          required
        >
          <v-text-field
            v-model="schema.projectName"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('프로젝트 명을 입력해주세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
            @input="isDuplicateProjectName = true"
          />
          <s-btn height="30" :disabled="!isDuplicateProjectName" @click="checkDuplicate">
            {{ $t('중복 체크') }}
          </s-btn>
        </s-form-item>
        <s-form-item
          v-slot="{ handleChange }"
          :label="$t('프로젝트 별칭')"
          name="projectAlias"
        >
          <v-text-field
            v-model="schema.projectAlias"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('프로젝트 별칭을 입력해주세요')"
            @update:model-value="handleChange"
          />
        </s-form-item>
        <s-form-item
          v-slot="{ errors, handleChange }"
          :label="$t('파일 가져오기')"
          name="projectFile"
          required
        >
          <v-file-input
            ref="projectFile"
            v-model="schema.projectFile"
            class="d-none"
            @update:model-value="handleChange"
          />
          <v-text-field
            :model-value="schema.projectFile?.name"
            variant="outlined"
            density="compact"
            hide-details="auto"
            readonly
            :error-messages="errors"
            :placeholder="$t('projectImportPlaceholder')"
          />
          <s-btn height="30" @click="$refs.projectFile.click()">
            {{ $t('파일 찾기') }}
          </s-btn>
        </s-form-item>
        <s-form-item
          :label="$t('빌드 승인 프로세스')"
          name="buildApproveFlow"
          required
        >
          <template #default>
            <s-btn variant="outlined" height="30" @click="openModal('buildApproveFlow')">
              {{ $t('프로세스 선택') }}
            </s-btn>
            <div class="selected__chip">
              <v-chip
                v-for="(flow, index) in values.buildApproveFlow"
                :key="flow.flowId"
                class="s-chip"
                :value="flow.flowId"
                closable
                @click:close="deleteSelected('buildApproveFlow', index)"
              >
                {{ flow.flowName }}
              </v-chip>
            </div>
          </template>
          <template #outer-append="{ errors }">
            <span v-if="errors.length" class="error-msg">{{ errors.at(0) }}</span>
          </template>
        </s-form-item>
        <s-form-item
          :label="$t('배포 승인 프로세스')"
          name="deployApproveFlow"
          required
        >
          <template #default>
            <s-btn variant="outlined" height="30" @click="openModal('deployApproveFlow')">
              {{ $t('프로세스 선택') }}
            </s-btn>
            <div class="selected__chip">
              <v-chip
                v-for="(flow, index) in values.deployApproveFlow"
                :key="flow.flowId"
                class="s-chip"
                :value="flow.flowId"
                closable
                @click:close="deleteSelected('deployApproveFlow', index)"
              >
                {{ flow.flowName }}
              </v-chip>
            </div>
          </template>
          <template #outer-append="{ errors }">
            <span v-if="errors.length" class="error-msg">
              {{ errors.at(0) }}
            </span>
          </template>
        </s-form-item>
        <s-form-item
          :label="$t('프로젝트 관리자')"
          name="projectManagerList"
          required
        >
          <template #default>
            <s-btn variant="outlined" height="30" @click="openModal('projectManagerList')">
              {{ $t('관리자 선택') }}
            </s-btn>
            <div class="selected__chip">
              <v-chip
                v-for="(user, index) in values.projectManagerList"
                :key="user.userId"
                class="s-chip"
                :value="user.userId"
                closable
                @click:close="deleteSelected('projectManagerList', index)"
              >
                {{ user.username }}
              </v-chip>
            </div>
          </template>
          <template #outer-append="{ errors }">
            <span v-if="errors.length" class="error-msg">{{ errors.at(0) }}</span>
          </template>
          <!-- TODO ProjectManagers -->
        </s-form-item>
        <s-form-item v-slot="{ handleChange }" :label="$t('설명(250자 이내)')" name="projectDesc">
          <v-textarea
            v-model="schema.projectDesc"
            density="compact"
            variant="outlined"
            hide-details="auto"
            :placeholder="$t('설명을 입력하세요')"
            @update:model-value="handleChange"
          />
        </s-form-item>
      </s-form-table>
    </vee-form>
  </div>
</template>

<script setup>
import { ref, reactive, markRaw } from 'vue'
// VeeForm 사용 시 s-form-item 컴포넌트에 name 값 필수
import { Form as VeeForm } from 'vee-validate'
import * as yup from 'yup'
import { storeToRefs } from 'pinia'

import { useI18n } from '@/_setting/i18n'
import { useAlertStore } from '@/stores/components/alert'
import { useDevOpsServiceGroupStore } from '@/stores/devops/service-group'
import { useProjectStore } from '@/stores/devops/project'

import BuildProcessListModal from '@/components/project/smc/BuildProcessListModalComponent.vue'
import DeployProcessListModal from '@/components/project/smc/DeployProcessListModalComponent.vue'
import ProjectManagerListModal from '@/components/project/smc/ProjectManagerListModalComponent.vue'

const emits = defineEmits(['validate', 'errors', 'click:cancel', 'submit'])

const isDuplicateProjectName = ref(false)

const { tt } = useI18n()
const sgStore = useDevOpsServiceGroupStore()
const { serviceGroupId } = storeToRefs(sgStore)
const projectStore = useProjectStore()
const alertStore = useAlertStore()

const schema = yup.object({
  projectName: yup.string().trim().onlyEngNumHyphen().label(tt('프로젝트 명')).max(50).required(),
  projectAlias: yup.string().trim().label(tt('프로젝트 별칭')).max(50),
  projectFile: yup.mixed().label(tt('프로젝트 파일')).required(),
  buildApproveFlow: yup.array().min(1).label(tt('빌드 승인 프로세스')).required(),
  deployApproveFlow: yup.array().min(1).label(tt('배포 승인 프로세스')).required(),
  projectManagerList: yup.array().min(1).label(tt('프로젝트 관리자')).required(),
  projectDesc: yup.string().label(tt('설명')).max(250),
})

const formRef = ref()
const modal = reactive({
  target: null,
  show: false,
  component: null,
  props: {}
})

const openModal = target => {
  switch (target) {
  case 'buildApproveFlow':
    modal.component = markRaw(BuildProcessListModal)
    modal.props = {
      selected: formRef.value.values[target]?.map(item => item.flowId)
    }
    break
  case 'deployApproveFlow':
    modal.component = markRaw(DeployProcessListModal)
    modal.props = {
      selected: formRef.value.values[target]?.map(item => item.flowId)
    }
    break
  case 'projectManagerList':
    modal.component = markRaw(ProjectManagerListModal)
    modal.props = {
      selected: formRef.value.values[target]?.map(item => item.userId)
    }
    break
  default:
    modal.component = null
    break
  }
  modal.target = target
  modal.show = true
}

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
const checkDuplicate = async () => {
  try {
    const result = await projectStore.fetchProjectNameDuplicate(formRef.value.values.projectName)
    // result 의 값이 true일 경우 중복된 프로젝트 명이 있다.
    if (!result) {
      alertStore.openAlert({
        titleName: tt('사용할 수 있는 프로젝트명입니다'),
        type: 'success',
      })
    } else {
      alertStore.openAlert({
        titleName: tt('중복된 프로젝트명입니다'),
        type: 'error',
      })
    }
    isDuplicateProjectName.value = result
    await schema.validateAt('projectName', formRef.value.values)
  } catch(e) {
    console.log(e)
  }
}

const makeParameters = (values) => {
  return {
    projectName: values.projectName,
    projectAlias: values.projectAlias,
    serviceGroupId: serviceGroupId.value,
    projectDesc: values.projectDesc,
    projectManagerList: values.projectManagerList,
    buildApproveFlow: values.buildApproveFlow.map(item => item.flowId),
    deployApproveFlow: values.deployApproveFlow.map(item => item.flowId),
  }

}

const fetchImportProject = async (values) => {
  const formData = new FormData()
  formData.append('project', new Blob([JSON.stringify(makeParameters(values))], { type: 'application/json' }))
  formData.append('sourceFile', values.projectFile)
  try {
    await projectStore.fetchImportProject(formData)
    alertStore.openAlert({
      titleName: tt('프로젝트를 가져왔습니다'),
      type: 'success',
    })
    return true
  } catch(e) {
    alertStore.openAlert({
      titleName: tt('프로젝트 가져오지 못했습니다'),
      type: 'error',
    })
    return false
  }
}

const submit = async () => {
  const result = await validate()
  if (result) {
    const { values } = formRef.value

    const result = await fetchImportProject(values)
    return result
  }
  return result
}


const updateModal = value => {
  modal.show = value
}

/**
 * 선택한 값을 schema객체에 세팅
 *  - schema에 직접 접근하여 사용할 수 없다.
 *
 * @param value Modal의 목록 컴포넌트에서 선택한 값
 */
const updateSelected = (targetKey, value) => {
  formRef.value.setFieldValue(targetKey, value)
}

const deleteSelected = (targetKey, index) => {
  const targetList = [...formRef.value.values[targetKey]]
  targetList.splice(index, 1)
  updateSelected(targetKey, targetList)
}

defineExpose({ validate, submit })

</script>

<style lang="scss" scoped>

</style>