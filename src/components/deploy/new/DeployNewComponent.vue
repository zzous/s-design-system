<template>
  <div class="view-wrapper">
    <div class="form-wrapper">
      <vee-form ref="formRef" v-slot="{ values }" :validation-schema="schema">
        <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
        <s-form-table>
          <s-form-item v-slot="{ errors, handleChange }" :label="$t('배포명')" name="deployName" required>
            <v-text-field
              :model-value="values.deployName"
              variant="outlined"
              density="compact"
              hide-details="auto"
              :placeholder="$t('배포명을 입력하세요')"
              :error-messages="errors"
              @update:model-value="handleChange"
              @input="isDuplicateDeployName = true"
            />
            <s-btn height="30" variant="outlined" :disabled="!isDuplicateDeployName" @click="checkDuplicate">
              {{ $t('중복 체크') }}
            </s-btn>
          </s-form-item>
          <s-form-item v-slot="{ errors, handleChange }" :label="$t('배포 승인 프로세스')" name="deployApproveFlow">
            <v-select
              :model-value="values.deployApproveFlow"
              variant="outlined"
              density="compact"
              hide-details="auto"
              item-value="flowId"
              item-title="flowName"
              :placeholder="$t('배포 승인 프로세스를 선택하세요')"
              :items="deployApproveFlows"
              :error-messages="errors"
              @update:model-value="handleChange"
            />
          </s-form-item>
          <s-form-item v-slot="{ errors, handleChange }" :label="$t('빌드')" name="buildId" required>
            <v-select
              :model-value="values.buildId"
              variant="outlined"
              density="compact"
              hide-details="auto"
              item-value="buildId"
              item-title="buildName"
              :placeholder="$t('빌드를 선택하세요')"
              :items="builds"
              :error-messages="errors"
              @update:model-value="handleChange"
            />
          </s-form-item>
          <s-form-item v-slot="{ errors, handleChange }" :label="$t('배포 유형')" name="deployCd" required>
            <v-select
              :model-value="values.deployCd"
              variant="outlined"
              density="compact"
              hide-details="auto"
              item-value="codeCd"
              item-title="codeName"
              :placeholder="$t('배포 유형을 선택하세요')"
              :items="deployCds"
              :error-messages="errors"
              @update:model-value="handleChange"
            />
          </s-form-item>
        </s-form-table>
      </vee-form>
    </div>

    <template v-if="deployCd === DEPLOY_TYPE.K8S">
      <!-- 프로바이더, 클러스터, 배포 복사, 네임스페이스, 컨트롤러 이름, 컨트롤러, 레플리카, 배포 전략, 서비스 타입, 포트, 도메인 -->
      <deploy-info-form-component ref="deployInfoFormRef" :deploy-info="deployInfo" />
    </template>
    <template v-else>
      <deploy-shell-form-component ref="deployShellFormRef" />
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
// VeeForm 사용 시 s-form-item 컴포넌트에 name 값 필수
import { Form as VeeForm } from 'vee-validate'
import * as yup from 'yup'

// import { REG_ALLOW_ENG_NUM_HYPHEN } from '@/assets/consts/regex'
import { useI18n } from '@/_setting/i18n'
import { useSmcStore } from '@/stores/devops/smc'
import { useProjectStore } from '@/stores/devops/project'
import { useBuildStore } from '@/stores/devops/build'
import { useDevOpsCommonStore } from '@/stores/devops/common'
import { useAlertStore } from '@/stores/components/alert'
import { useDeployStore } from '@/stores/devops/deploy'
import { DEPLOY_TYPE } from '@/assets/consts/consts'

import DeployInfoFormComponent from './DeployInfoFormComponent.vue'
import DeployShellFormComponent from './DeployShellFormComponent.vue'

const emits = defineEmits(['validate', 'errors', 'submit'])

const { tt } = useI18n()

const schema = yup.object({
  deployName: yup.string().onlyEngNumHyphen().label(tt('배포 이름')).max(50).required(),
  deployApproveFlow: yup.string().label(tt('배포 승인 프로세스')),
  buildId: yup.string().label(tt('빌드')).required(),
  deployCd: yup.string().label(tt('배포 유형')).required(),
})

const smcStore = useSmcStore()
const buildStore = useBuildStore()
const deployStore = useDeployStore()
const devOpsCommonStore = useDevOpsCommonStore()
const alertStore = useAlertStore()
const projectStore = useProjectStore()
const { selectedProject } = storeToRefs(projectStore)

const isDuplicateDeployName = ref(false) //이름 중복체크 결과

const formRef = ref(null)
const deployInfoFormRef = ref(null)
const deployShellFormRef = ref(null)

const deployApproveFlows = ref([])
const builds = ref([])
const deployCds = ref([])

const deployCd = computed(() => {
  return formRef.value?.values.deployCd
})

const validate = async () => {
  if (isDuplicateDeployName.value) {
    alertStore.openAlert({
      titleName: tt('중복 체크를 실행하세요'),
      type: 'warn',
    })
    return
  }
  if (formRef.value) {
    const { valid, errors } = await formRef.value.validate()

    let childRefValid = true
    let childRefErrors = {}
    if (deployInfoFormRef.value) {
      const { valid: refValid, errors: refErrors } = await deployInfoFormRef.value.validate()
      childRefValid = refValid
      childRefErrors = refErrors
    }
    if (deployShellFormRef.value) {
      const { valid: refValid, errors: refErrors } = await deployShellFormRef.value.validate()
      childRefValid = refValid
      childRefErrors = refErrors
    }

    if (valid && childRefValid) {
      emits('validate', valid && childRefValid)
    } else {
      emits('errors', { ...errors, ...childRefErrors })
    }
    return valid
  }
}

/**
 * yaml 미리보기 기능을 위해 자식 컴포넌트에 기본 정보 전달
 */
const deployInfo = computed(() => {
  return formRef.value?.values
})

const checkDuplicate = async () => {
  try {
    const result = await deployStore.fetchDeployNameDuplicate(formRef.value.values.deployName)
    console.log(result)
    // result 의 값이 true일 경우 중복된 프로젝트명이 있다.
    if (!result) {
      alertStore.openSuccessAlert(tt('사용할 수 있는 배포명입니다'))
    } else {
      alertStore.openErrorAlert(tt('중복된 배포명입니다'))
    }
    isDuplicateDeployName.value = result
    await schema.validateAt('deployName', formRef.value.values)
  } catch (e) {
    console.log(e)
  }
}

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

const getBuildList = async () => {
  const res = await buildStore.getBuilds({
    projectId: selectedProject.value.projectId,
  })
  builds.value = res
}

const getDeployCds = async () => {
  const res = await devOpsCommonStore.getCommonGroups('deploy')
  deployCds.value = res
}

const makeParameters = values => {
  return {
    deployName: values.deployName,
    deployApproveFlow: values.deployApproveFlow,
    buildId: values.buildId,
    deployCd: values.deployCd,
  }
}

const validateComponent = computed(() => {
  if (formRef.value.values.deployCd === DEPLOY_TYPE.SHELL) {
    return deployShellFormRef.value.validate()
  } else {
    return deployInfoFormRef.value.validate()
  }
})

const fetchNewDeploy = async values => {
  try {
    if (!validateComponent.value) return

    // console.log(formData)
    await deployStore.fetchNewDeploy(makeParameters(values))
    alertStore.openAlert({
      titleName: tt('생성되었습니다'),
      type: 'success',
    })
    return true
  } catch (e) {
    alertStore.openAlert({
      titleName: tt('생성하지 못했습니다'),
      type: 'error',
    })
    return false
  }
}

const submit = async () => {
  const result = await validate()
  console.log('result', result)
  if (result) {
    const { values } = formRef.value

    const result = await fetchNewDeploy(values)
    return result
  }
  return result
}

defineExpose({ validate, submit })

onMounted(() => {
  getBuildList()
  getDeployApproveFlows()
  getDeployCds()
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
