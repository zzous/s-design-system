<template>
  <div class="view-wrapper">
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
          v-slot="{ errors }"
          :label="$t('빌드 승인 프로세스')"
          name="buildApproveFlow"
          required
        >
          <span>{{ errors }}</span>
          <!-- TODO Process -->
        </s-form-item>
        <s-form-item
          v-slot="{ errors }"
          :label="$t('배포 승인 프로세스')"
          name="deployApproveFlow"
          required
        >
          <span>{{ errors }}</span>
          <!-- TODO Process -->
        </s-form-item>
        <s-form-item
          v-slot="{ errors }"
          :label="$t('프로젝트 관리자')"
          name="projectManagers"
          required
        >
          <span>{{ errors }}</span>
          <!-- TODO ProjectManagers -->
        </s-form-item>
        <s-form-item v-slot="{ handleChange }" :label="$t('설명(250자 이내)')" name="projectDesc">
          <v-textarea
            v-model="schema.projectDesc"
            density="compact"
            variant="outlined"
            hide-details="auto"
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
import { ref, onMounted } from 'vue'
// VeeForm 사용 시 s-form-item 컴포넌트에 name 값 필수
import { Form as VeeForm } from 'vee-validate'
import * as yup from 'yup'
import { storeToRefs } from 'pinia'

import { useI18n } from '@/_setting/i18n'
import { useDevOpsCommonStore } from '@/stores/devops/common'

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

defineExpose({ validate })

onMounted(() => {
  commonStore.getProjectTemplates()
})

</script>

<style lang="scss" scoped>

</style>