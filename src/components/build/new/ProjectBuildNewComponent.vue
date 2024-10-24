<template>
  <div class="view-wrapper">
    <div class="form-wrapper">
      <vee-form ref="formRef" v-slot="{ values }" :validation-schema="buildSchema">
        <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
        <s-form-table>
          <s-form-item v-slot="{ errors, handleChange }" :label="$t('빌드명')" name="buildName" required>
            <v-text-field
              :model-value="values.buildName"
              :error-messages="errors"
              variant="outlined"
              density="compact"
              hide-details="auto"
              :placeholder="$t('빌드명을 입력하세요')"
              @update:model-value="handleChange"
            />
            <s-btn height="30" variant="outlined" @click="checkBuildNameDuplicate">
              {{ $t('중복 체크') }}
            </s-btn>
          </s-form-item>

          <s-form-item v-slot="{ errors, handleChange }" :label="$t('브랜치')" name="branch">
            <!-- <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('브랜치 선택 select')"
        /> -->
            <v-select
              :model-value="values.branch"
              :error-messages="errors"
              :items="defaultBranchs"
              :placeholder="$t('브랜치 선택')"
              variant="outlined"
              density="compact"
              hide-details="auto"
              item-title="branchName"
              item-value="stageCd"
              @update:model-value="
                value => {
                  handleChange(value)
                  onChangeInputRelevantPipeline()
                }
              "
            />
          </s-form-item>
          <s-form-item v-slot="{ errors, handleChange }" :label="$t('빌드 승인 프로세스')" name="flowId">
            <v-select
              :model-value="values.flowId"
              :items="smcFlows"
              variant="outlined"
              density="compact"
              hide-details="auto"
              item-title="flowName"
              item-value="flowId"
              :placeholder="$t('빌드 승인 프로세스 선택')"
              :error-messages="errors"
              @update:model-value="handleChange"
            />
          </s-form-item>
          <s-form-item v-slot="{ errors, handleChange }" :label="$t('패키지 유형')" name="packageCd">
            <!-- {{ '패키지 유형 ex Container Image' }}packageTypes -->
            <v-select
              :model-value="values.packageCd"
              :items="packageTypes"
              :disabled="!!selectedProject.packageCd"
              variant="outlined"
              density="compact"
              hide-details="auto"
              item-title="codeName"
              item-value="commonCd"
              :placeholder="$t('패키지 유형 선택')"
              :error-messages="errors"
              @update:model-value="
                value => {
                  handleChange(value)
                  onChangeInputRelevantPipeline()
                }
              "
            />
          </s-form-item>
        </s-form-table>
        <s-sub-header :show-cnt="false" :title="$t('컨테이너 빌드 정보')" class-name="sub-title" />
        <s-form-table>
          <s-form-item v-slot="{ errors, handleChange }" :label="$t('Application 포트')" name="applicationPort">
            <v-text-field
              :model-value="values.applicationPort"
              variant="outlined"
              density="compact"
              hide-details="auto"
              :placeholder="$t('Application 포트를 입력하세요(숫자만 입력 가능)')"
              :error-messages="errors"
              @update:model-value="handleChange"
            />
          </s-form-item>
          <s-form-item
            v-slot="{ errors, handleChange }"
            :label="$t('Application 설치 경로')"
            name="applicationInstallPath"
          >
            <v-text-field
              :model-value="values.applicationInstallPath"
              variant="outlined"
              density="compact"
              hide-details="auto"
              :placeholder="$t('Application 설치 경로를 입력하세요')"
              :error-messages="errors"
              @update:model-value="handleChange"
            />
          </s-form-item>
        </s-form-table>
        <s-sub-header :show-cnt="false" :title="$t('파이프라인 정보')" class-name="sub-title">
          <s-btn color="black" height="30" @click="onClickNewScript">
            {{ $t('스크립트 생성') }}
          </s-btn>
        </s-sub-header>
        <s-form-table>
          <v-row>
            <v-col cols="10" style="display: inline" class="script-form">
              <s-form-item name="pipelines" :label="$t('파이프라인 정보')" :show-label="false">
                <template v-if="!values.pipelines || !values.pipelines.length">
                  <div>{{ tt('스크립트를 생성해주세요') }}</div>
                </template>
                <template v-else>
                  <div class="script-form">
                    <template v-for="(pipeLineScript, idx) in values.pipelines" :key="idx">
                      <div>{{ pipeLineScript.pipelineCd }}</div>

                      <script-editor v-model="pipeLineScript.pipelineScript" :height="400" class="mt-2" />
                    </template>
                  </div>
                </template>
              </s-form-item>
            </v-col>
            <v-col cols="2">
              <accordion-menu-component
                v-for="pipeline in commonPipeLineSteps"
                :key="pipeline.commonCd"
                class="ml-2"
                :title="pipeline.commonCd"
              >
                <v-list-item
                  v-for="(pipelineScript, idx) in pipeline.scripts"
                  :key="idx"
                  class="cursor-pointer"
                  @click="onClickAddPipeLine(pipelineScript)"
                >
                  {{ pipelineScript.pipelineName }}
                </v-list-item>
              </accordion-menu-component>
            </v-col>
          </v-row>
        </s-form-table>
      </vee-form>
    </div>
    <div class="mt-3 text-align-center">
      <s-btn height="30" class="mr-2" @click="onClickSave">
        {{ $t('저장') }}
      </s-btn>
      <s-btn height="30" variant="outlined" @click="onClickCancel">
        {{ $t('취소') }}
      </s-btn>
    </div>
  </div>
</template>

<script setup>
import { useProjectStore } from '@/stores/devops/project'
import { useSmcStore } from '@/stores/devops/smc'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import ScriptEditor from '@/components/_common/editor/ScriptEditor.vue'
import { useBuildStore } from '@/stores/devops/build'
import { useAlertStore } from '@/stores/components/alert'
import { useI18n } from '@/_setting/i18n'
import AccordionMenuComponent from '@/components/_common/AccordionMenuComponent.vue'
import { useDevOpsCommonStore } from '@/stores/devops/common'
import { useSonarqubeStore } from '@/stores/devops/sonarqube'
import * as yup from 'yup'
import { Form as VeeForm } from 'vee-validate'
import { useUserStore } from '@/stores/portal/user'

const { tt } = useI18n()
const smcStore = useSmcStore()
const projectSotre = useProjectStore()
const alertStore = useAlertStore()
const buildStore = useBuildStore()
const commonStore = useDevOpsCommonStore()
const sonarqubeStore = useSonarqubeStore()
const userStore = useUserStore()

const { defaultBranchs } = storeToRefs(commonStore)
const { smcFlows } = storeToRefs(smcStore)
const { selectedProject } = storeToRefs(projectSotre)
const { rules } = storeToRefs(sonarqubeStore)
const { buildDefaultJenkinsPipelines } = storeToRefs(buildStore)
const { userInfo } = storeToRefs(userStore)

const buildSchema = yup.object({
  //buildName
  buildName: yup.string().label(tt('빌드명')).required(),
  branch: yup.string().label(tt('브랜치')).required(),
  flowId: yup.string().label(tt('빌드 승인 프로세스')).required(),
  packageCd: yup.string().label(tt('패키지 유형')).required(),
  applicationPort: yup.number().label(tt('Application 포트')).required(),
  applicationInstallPath: yup.string().label(tt('Application 설치 경로')).required(),
  pipelines: yup
    .array()
    .of(
      yup.object({
        pipelineScript: yup.string().required(tt('스크립트를 입력 해 주세요')),
        pipelineCd: yup.string().required(tt('스크립트 필수요소가 누락되었습니다')),
        commonYn: yup.string().required(tt('스크립트 필수요소가 누락되었습니다')),
        protectedYn: yup.string().required(tt('스크립트 필수요소가 누락되었습니다')),
      }),
    )
    .required(tt('스크립트를 추가 해 주세요'))
    .min(1, tt('스크립트를 추가 해 주세요')),
})

// const selectedBranch = ref()
// const selectedFlow = ref()
// const selectedPackageTypeCode = ref()
// const buildName = ref('')
// const pipeLines = ref([])

const formRef = ref()
const packageTypes = ref([])
const commonPipeLineSteps = ref([])
const isDuplicatedName = ref(true) //이름 중복체크 결과

//const selectedPackageTypeCode = ref(selectedProject.value.packageCd ? selectedProject.value.packageCd : 'DOCKER_IMAGE')
//스크립트 생성 누를떄 출력할 스크립트

const getSmcFlows = async () => {
  if (selectedProject.value && selectedProject.value.projectId) {
    await smcStore.getPostSmcFlows({ key1: 'project', key2: selectedProject.value.projectId, key3: 'B' })
    /*if(smcFlows.value.length) {
      selectedFlow.value = smcFlows.value[0].flowId
    }*/
  }
}

const onChangeInputRelevantPipeline = async () => {
  const selectedBranch = formRef.value?.getValues()?.branch
  const selectedPackageTypeCode = formRef.value?.getValues()?.packageCd
  const buildName = formRef.value?.getValues()?.buildName

  if (selectedBranch && buildName && selectedPackageTypeCode && !isDuplicatedName.value) {
    await getCommonPipeLine()
    await getDefaultPipeLine()
    getCommonPipeLineScripts()
  }
}

const getCommonPipeLineScripts = async () => {
  const selectedBranch = formRef.value?.getValues()?.branch
  const reqParam = {
    projectId: selectedProject.value.projectId,
    branch: selectedBranch,
  }
  for (const idx in commonPipeLineSteps.value) {
    const scripts = await buildStore.getBuildJenkinsPipeLine(commonPipeLineSteps.value[idx].commonCd, reqParam)
    commonPipeLineSteps.value[idx].scripts = scripts
  }
}
const getCommonPipeLine = async () => {
  commonPipeLineSteps.value = await commonStore.getCommonGroups('pipeline')
}
const getDefaultPipeLine = async () => {
  const selectedBranch = formRef.value?.getValues()?.branch
  const selectedPackageTypeCode = formRef.value?.getValues()?.packageCd
  const buildName = formRef.value?.getValues()?.buildName
  const params = {
    projectId: selectedProject.value.projectId,
    buildName: buildName,
    branch: selectedBranch.toLowerCase(),
    packageCd: selectedPackageTypeCode,
  }
  await buildStore.getBuildJenkinsPipelineDefault(params)
}

const checkBuildNameDuplicate = async () => {
  const buildName = formRef.value?.getValues()?.buildName
  if (!buildName) alert('이름없음')
  const parmas = {
    projectId: selectedProject.value.projectId,
    buildName: buildName,
  }
  const result = await buildStore.getBuildNameDuplicate(parmas)
  isDuplicatedName.value = result
  if (!result) {
    alertStore.openAlert({ titleName: tt('사용가능한 이름 입니다') })
  } else {
    alertStore.openAlert({ titleName: tt('중복된 이름 입니다') })
  }
}

const onClickNewScript = () => {
  //pipeLines.value = [...buildDefaultJenkinsPipelines.value]
  const pipeLines = [...buildDefaultJenkinsPipelines.value]
  formRef.value.setFieldValue('pipelines', pipeLines)
  //console.error(formRef.value.getValues())
}

const onClickAddPipeLine = pipelineScript => {
  const pipeLines = [...formRef.value.getValues().pipelines]
  if (!pipeLines.length) return alertStore.openAlert({ titleName: tt('스크립트를 생성 해 주세요') })
  const tempPipeLine = {
    pipelineScript: pipelineScript.pipelineScript,
    pipelineCd: pipelineScript.pipelineCd,
    commonYn: 'N',
    protectedYn: 'N',
  }
  pipeLines.splice(pipeLines.length - 1, 0, tempPipeLine)
  formRef.value.setFieldValue('pipelines', pipeLines)
}

const getDefaultPackages = async () => {
  const packages = await commonStore.getCommonGroups('Package')
  const packageCd = selectedProject.value.packageCd ? selectedProject.value.packageCd : packages[0].commonCd
  packageTypes.value = packages
  formRef.value.setFieldValue('packageCd', packageCd)
}
const getSonarqubeRules = async () => {
  const reqBody = { buildCd: selectedProject.value.buildCd, serviceGroupId: selectedProject.value.serviceGroupId }
  await sonarqubeStore.getSonarqubeRules(reqBody)
}
const onClickSave = async () => {
  const { valid, errors } = await formRef.value.validate()
  if (valid) {
    const formValue = formRef.value.getValues()
    const postBuildBody = {
      ...formValue,
      regId: userInfo.value.userId,
      serviceGroupId: selectedProject.value.serviceGroupId,
      projectId: selectedProject.value.projectId,
      pipelineScript: formValue.pipelines.map(({ pipelineScript }) => pipelineScript).join('\n'),
    }
    const result = await buildStore.postBuild(postBuildBody)
    console.log(result)
    // alertStore.openSuccessAlert('성공')
    //TODO: 빌드 추가 후 후처리
  } else if (errors) {
    const keys = Object.keys(errors)
    alertStore.openErrorAlert(errors[keys[0]])
  }
}

const onClickCancel = () => {
  alertStore.openDefaultAlert('onClickCancel')
}

onMounted(async () => {
  getSmcFlows()
  getSonarqubeRules()
  await getDefaultPackages()
  await commonStore.getCommonBranchList()
})
</script>
<style lang="scss" scoped>
.input-text-btn {
  margin: 0 5px 23px;
}

.title-wrapper {
  height: 50px;
  line-height: 50px;
}

.title-button {
  top: 6px;
}
.create-script-button {
  top: -40px;
  right: 0px;
}
.script-form {
  display: block !important;
}
</style>
