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
          :label="$t('템플릿')"
          name="templateId"
          required
        >
          <v-select
            v-model="schema.templateId"
            variant="outlined"
            density="compact"
            hide-details="auto"
            item-value="templateId"
            item-title="templateName"
            :placeholder="$t('템플릿을 선택해주세요')"
            :items="projectTemplates"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </s-form-item>
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
          />
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
                @click:close="removeSelected('buildApproveFlow', index)"
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
                @click:close="removeSelected('deployApproveFlow', index)"
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
                @click:close="removeSelected('projectManagerList', index)"
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

      <s-sub-header :title="$t('템플릿 속성')" :show-cnt="false" class-name="sub-title" />
      <s-form-table class="s-table__form">
        <s-form-item
          v-slot="{ errors, handleChange }"
          :label="$t('패키지 명')"
          name="packageName"
          required
        >
          <v-text-field
            v-model="schema.packageName"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('패키지 명을 입력해주세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </s-form-item>
        <s-form-item
          v-slot="{ errors, handleChange }"
          :label="$t('JDK 버전')"
          name="jdkVersion"
          required
        >
          <v-select
            v-model="schema.jdkVersion"
            variant="outlined"
            density="compact"
            hide-details="auto"
            item-title="commonCd"
            item-value="commonCd"
            :items="groupJdkVersions"
            :placeholder="$t('JDK 버전을 선택해주세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </s-form-item>
      </s-form-table>
    </vee-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, markRaw } from 'vue'
// VeeForm 사용 시 s-form-item 컴포넌트에 name 값 필수
import { Form as VeeForm } from 'vee-validate'
import * as yup from 'yup'
import { storeToRefs } from 'pinia'

import { useI18n } from '@/_setting/i18n'
import { useDevOpsCommonStore } from '@/stores/devops/common'

import BuildProcessListModal from '@/components/list-modal/BuildProcessListModalComponent.vue'
import DeployProcessListModal from '@/components/list-modal/DeployProcessListModalComponent.vue'
import ProjectManagerListModal from '@/components/list-modal/ProjectManagerListModalComponent.vue'

const emits = defineEmits(['validate', 'errors', 'click:cancel', 'submit'])

const { tt } = useI18n()
const commonStore = useDevOpsCommonStore()
const { projectTemplates, groupJdkVersions } = storeToRefs(commonStore)

const schema = yup.object({
  templateId: yup.string().label(tt('템플릿')).required(),
  projectName: yup.string().trim().onlyEngNumHyphen().label(tt('프로젝트 명')).max(50).required(),
  projectAlias: yup.string().trim().label(tt('프로젝트 별칭')).max(50).required(),
  buildApproveFlow: yup.array().min(1).label(tt('빌드 승인 프로세스')).required(),
  deployApproveFlow: yup.array().min(1).label(tt('배포 승인 프로세스')).required(),
  projectManagerList: yup.array().min(1).label(tt('프로젝트 관리자')).required(),
  projectDesc: yup.string().label(tt('설명')).max(250),
  packageName: yup.string().trim().lowercase().onlyEng().label(tt('패키지 명')).max(50).required(),
  jdkVersion: yup.string().label(tt('JDK 버전')).required(),
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

const submit = async () => {
  const result = await validate()
  if (result) {
    const { values } = formRef.value

    const { projectCd, buildCd } = projectTemplates.value.find(item => item.templateId === values.templateId)

    emits('submit', { ...values, projectCd, buildCd })
    return formRef.value.values
  }
  return null
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

const removeSelected = (targetKey, index) => {
  const targetList = [...formRef.value.values[targetKey]]
  targetList.splice(index, 1)
  updateSelected(targetKey, targetList)
}

defineExpose({ validate, submit })

onMounted(async () => {
  await commonStore.getProjectTemplates()
  commonStore.getGroupJdkVersions()
})

</script>

<style lang="scss" scoped>

</style>