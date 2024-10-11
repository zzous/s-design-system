<template>
  <div class="view-wrapper">
    <!-- list modal -->
    {{ modal.show }}
    <component :is="modal.component" v-model="modal.show" @update:model-value="updateModal" />
    <vee-form ref="formRef" :validation-schema="schema">
      <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
      <s-form-table>
        <s-form-item
          v-slot="{ errors, handleChange }"
          :label="$t('템플릿')"
          name="template"
          required
        >
          <v-select
            v-model="schema.template"
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
            <s-btn variant="outlined" height="30" @click="openModal('build')">
              {{ $t('프로세스 선택') }}
            </s-btn>
          </template>
          <template #outer-append="{ errors }">
            <span v-if="errors.length" class="error-msg">{{ errors.at(0) }}</span>
          <!-- TODO Process -->
          </template>
        </s-form-item>
        <s-form-item
          :label="$t('배포 승인 프로세스')"
          name="deployApproveFlow"
          required
        >
          <template #default>
            <s-btn variant="outlined" height="30" @click="openModal('deploy')">
              {{ $t('프로세스 선택') }}
            </s-btn>
            <v-chip-group />
          </template>
          <template #outer-append="{ errors }">
            <span v-if="errors.length" class="error-msg">
              {{ errors.at(0) }}
            </span>
          </template>
        </s-form-item>

        <!-- TODO Process -->
        <s-form-item
          :label="$t('프로젝트 관리자')"
          name="projectManagers"
          required
        >
          <template #default>
            <s-btn variant="outlined" height="30" @click="openModal('project-manager')">
              {{ $t('관리자 선택') }}
            </s-btn>
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

const emits = defineEmits(['validate', 'errors', 'click:cancel'])

const { tt } = useI18n()
const commonStore = useDevOpsCommonStore()
const { projectTemplates } = storeToRefs(commonStore)

const schema = yup.object({
  template: yup.string().label(tt('템플릿')).required(),
  projectName: yup.string().label(tt('프로젝트 명')).required(),
  projectAlias: yup.string().label(tt('프로젝트 별칭')),
  buildApproveFlow: yup.array().label(tt('빌드 승인 프로세스')).required(),
  deployApproveFlow: yup.array().label(tt('배포 승인 프로세스')).required(),
  projectManagers: yup.array().label(tt('프로젝트 관리자')).required(),
  projectDesc: yup.string().label(tt('설명')),
  packageName: yup.string().label(tt('패키지 명')).required(),
  jdkVersion: yup.string().label(tt('JDK 버전')).required(),
})

const modal = reactive({
  show: false,
  component: null
})

const openModal = target => {
  switch (target) {
  case 'build':
    modal.component = markRaw(BuildProcessListModal)
    break
  case 'deploy':
    modal.component = markRaw(DeployProcessListModal)
    break
  case 'project-manager':
    modal.component = markRaw(ProjectManagerListModal)
    break
  default:
    modal.component = null
    break
  }
  modal.show = true
}

const formRef = ref()
const validate = async () => {
  if (formRef.value) {
    const { valid, results, errors } = await formRef.value.validate()

    if (valid) {
      emits('validate', results)
    } else {
      emits('errors', errors)
    }
  }
}


const updateModal = value => {
  modal.show = value
}


defineExpose({ validate })

onMounted(() => {
  commonStore.getProjectTemplates()
})

</script>

<style lang="scss" scoped>

</style>