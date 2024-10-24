<template>
  <div class="view-wrapper">
    <vee-form ref="formRef" v-slot="{ values }" :validation-schema="schema">
      <div class="form-wrapper">
        <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
        <s-form-table>
          <s-form-item v-slot="{ errors, handleChange }" :label="$t('배포명')" name="deployName">
            <v-text-field
              :model-value="values.deployName"
              variant="outlined"
              density="compact"
              hide-details="auto"
              :placeholder="$t('배포명을 입력해주세요')"
              :error-messages="errors"
              @update:model-value="handleChange"
              @input="isDuplicateDeployName = true"
            />
            <s-btn height="30" variant="outlined" :disabled="!isDuplicateDeployName" @click="checkDuplicate">
              {{ $t('중복 체크') }}
            </s-btn>
          </s-form-item>
          <s-form-item :label="$t('배포 승인 프로세스')" name="deployApproveFlow">
            <v-select
              :model-value="values.deployApproveFlow"
              variant="outlined"
              density="compact"
              hide-details="auto"
              item-value="flowId"
              item-title="flowName"
              :placeholder="$t('배포 승인 프로세스를 선택해주세요')"
              :items="deployApproveFlows"
              :error-messages="errors"
              @update:model-value="handleChange"
            />
          </s-form-item>
          <s-form-item :label="$t('빌드')" name="buildId">
            <v-select
              :model-value="values.buildId"
              variant="outlined"
              density="compact"
              hide-details="auto"
              item-value="templateId"
              item-title="templateName"
              :placeholder="$t('빌드를 선택해주세요')"
              :items="projectTemplates"
              :error-messages="errors"
              @update:model-value="handleChange"
            />
          </s-form-item>
          <s-form-item :label="$t('배포 유형')" name="projectCd">
            <v-select
              :model-value="values.templateId"
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
        </s-form-table>
      </div>
      <deploy-info-input-component />
    </vee-form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from '@/_setting/i18n'
// VeeForm 사용 시 s-form-item 컴포넌트에 name 값 필수
import { Form as VeeForm } from 'vee-validate'
import * as yup from 'yup'

// import { REG_ALLOW_ENG_NUM_HYPHEN } from '@/assets/consts/regex'
// import { DEFAULT_BUTTON_COLOR } from '@/assets/consts/consts'
import { useSmcStore } from '@/stores/devops/smc'
import { useProjectStore } from '@/stores/devops/project'

import DeployInfoInputComponent from './DeployInfoFormComponent.vue'

// import DeployShellScriptComponent from '@/components/deploy/DeployShellScriptComponent.vue'
// import AccordionMenuComponent from '@/components/_common/AccordionMenuComponent.vue'
// import DeployPortInputComponent from '@/components/deploy/DeployPortInputComponent.vue'
// import DomainInputComponent from '@/components/deploy/DomainInputComponent.vue'
// import FileInputButtonComponent from '@/components/deploy/FileInputButtonComponent.vue'
// import EnvInputComponent from '@/components/deploy/EnvInputComponent.vue'
// import TextCheckBoxInputComponent from '@/components/_common/input/TextCheckBoxInputComponent.vue'
// import HostAliasesInputComponent from '@/components/deploy/HostAliasesInputComponent.vue'
// import PersistentVolumeClaimInputComponent from '@/components/deploy/PersistentVolumeClaimInputComponent.vue'
// import HostPathInputComponent from '@/components/deploy/HostPathInputComponent.vue'
// import CpuMemoryInputComponent from '@/components/deploy/CpuMemoryInputComponent.vue'

const { tt } = useI18n()

const schema = yup.object({
  deployName: yup.string().required().label(tt('배포 이름')),
  deployApproveFlow: yup.string().required().label(tt('배포 승인 프로세스')),
  buildId: yup.string().required().label(tt('빌드')),
  projectCd: yup.string().required().label(tt('배포 유형')),
})

const smcStore = useSmcStore()
const projectStore = useProjectStore()
const { selectedProject } = storeToRefs(projectStore)

const isDuplicateDeployName = ref(true) //이름 중복체크 결과

const deployApproveFlows = ref([])

const getDeployApproveFlows = async () => {
  deployApproveFlows.value = []
  try {
    deployApproveFlows.value = await smcStore.getPostSmcFlows({
      key1: 'project',
      key2: selectedProject.value.projectId,
      key3: 'B',
    })
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getDeployApproveFlows()
})
</script>

<style lang="scss" scoped>
.deploy-type {
  border: 1px solid gray;
}

.script-component {
  margin-top: 30px;
}

.deploy-toggle-wrapper {
  margin-bottom: 40px;
}
</style>
