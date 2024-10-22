<template>
  <div class="view-wrapper">
    <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
    <s-form-table>
      <s-form-item :label="$t('빌드명')" name="buildName" required>
        <v-text-field
          v-model="buildName"
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('빌드명을 입력하세요')"
        />
        <s-btn height="30" @click="checkBuildNameDuplicate">
          {{ $t('중복 체크') }}
        </s-btn>
      </s-form-item>

      <s-form-item :label="$t('브랜치')" name="branch">
        <!-- <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('브랜치 선택 select')"
        /> -->
        <v-select
          v-model="selectedBranch"
          :items="defaultBranchs"
          :placeholder="$t('브랜치 선택')"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-title="branchName"
          item-value="stageCd"
          @update:model-value="onChangeInputRelevantPipeline"
        />
      </s-form-item>
      <s-form-item :label="$t('빌드 승인 프로세스')" name="templateId">
        <v-select
          v-model="selectedFlow"
          :items="smcFlows"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-title="flowName"
          item-value="flowId"
          :placeholder="$t('빌드 승인 프로세스 선택')"
        />
      </s-form-item>
      <s-form-item :label="$t('패키지 유형')" name="templateId">
        <!-- {{ '패키지 유형 ex Container Image' }}packageTypes -->
        <v-select
          v-model="selectedPackageTypeCode"
          :disabled="!!selectedProject.packageCd"
          :items="packageTypes"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-title="codeName"
          item-value="commonCd"
          @change="onChangeInputRelevantPipeline"
        />
      </s-form-item>
    </s-form-table>
    <s-sub-header :show-cnt="false" :title="$t('컨테이너 빌드 정보')" class-name="sub-title" />
    <s-form-table>
      <s-form-item :label="$t('Application 포트')" name="templateId">
        <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('Application 포트를 입력하세요(숫자만 입력 가능)')"
        />
      </s-form-item>
      <s-form-item :label="$t('Application 설치 경로')" name="templateId">
        <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('Application 설치 경로를 입력하세요')"
        />
      </s-form-item>
    </s-form-table>
    <s-sub-header :show-cnt="false" :title="$t('파이프라인 정보')" class-name="sub-title" />
    <div class="position-relative">
      <s-btn class="position-absolute create-script-button" @click="onClickNewScript">
        {{ $t('스크립트 생성') }}
      </s-btn>
    </div>
    <s-form-table>
      <v-row>
        <v-col cols="10">
          <template v-if="!pipeLines.length">
            <div>{{ tt('스크립트를 생성해주세요') }}</div>
          </template>
          <template v-for="(pipeLineScript, idx) in pipeLines" :key="idx">
            <div>{{ pipeLineScript.pipelineCd }}</div>
            <script-editor v-model="pipeLineScript.pipelineScript" :height="400" class="mt-2" />
          </template>
        </v-col>
        <v-col cols="2">
          <accordion-menu-component
            v-for="pipeline in commonPipeLineSteps"
            :key="pipeline.commonCd"
            class="ml-2"
            :title="pipeline.commonCd"
          >
            <v-item-list
              v-for="(pipelineScript, idx) in pipeline.scripts"
              :key="idx"
              class="cursor-pointer"
              @click="onClickAddPipeLine(pipelineScript)"
            >
              {{ pipelineScript.pipelineName }}
            </v-item-list>
          </accordion-menu-component>
        </v-col>
      </v-row>
    </s-form-table>
    <div class="mt-3 text-align-center">
      <s-btn height="30" class="mr-2">
        {{ $t('저장') }}
      </s-btn>
      <s-btn height="30" variant="outlined">
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

const { tt } = useI18n()
const buildName = ref('')
const smcStore = useSmcStore()
const projectSotre = useProjectStore()
const alertStore = useAlertStore()
const buildStore = useBuildStore()
const commonStore = useDevOpsCommonStore()
const sonarqubeStore = useSonarqubeStore()

const { defaultBranchs } = storeToRefs(commonStore)
const { smcFlows } = storeToRefs(smcStore)
const { selectedProject } = storeToRefs(projectSotre)
const { rules } = storeToRefs(sonarqubeStore)

const packageTypes = ref([])
const commonPipeLineSteps = ref([])

const selectedBranch = ref()
const selectedFlow = ref()
const selectedPackageTypeCode = ref()

const isDuplicatedName = ref(true) //이름 중복체크 결과

//const selectedPackageTypeCode = ref(selectedProject.value.packageCd ? selectedProject.value.packageCd : 'DOCKER_IMAGE')
//스크립트 생성 누를떄 출력할 스크립트
const { buildDefaultJenkinsPipelines } = storeToRefs(buildStore)
const pipeLines = ref([])

const getSmcFlows = async () => {
  if (selectedProject.value && selectedProject.value.projectId) {
    await smcStore.getPostSmcFlows({ key1: 'project', key2: selectedProject.value.projectId, key3: 'B' })
    /*if(smcFlows.value.length) {
      selectedFlow.value = smcFlows.value[0].flowId
    }*/
  }
}

const onChangeInputRelevantPipeline = async () => {
  if (selectedBranch.value && buildName.value && selectedPackageTypeCode.value && !isDuplicatedName.value) {
    await getCommonPipeLine()
    await getDefaultPipeLine()
    getCommonPipeLineScripts()
  }
}

const getCommonPipeLineScripts = async () => {
  const reqParam = {
    projectId: selectedProject.value.projectId,
    branch: selectedBranch.value,
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
  const params = {
    projectId: selectedProject.value.projectId,
    buildName: buildName.value,
    branch: selectedBranch.value,
    packageCd: selectedPackageTypeCode.value,
  }
  await buildStore.getBuildJenkinsPipelineDefault(params)
}

const checkBuildNameDuplicate = async () => {
  if (!buildName.value) alert('이름없음')
  const parmas = {
    projectId: selectedProject.value.projectId,
    buildName: buildName.value,
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
  pipeLines.value = [...buildDefaultJenkinsPipelines.value]
}

const onClickAddPipeLine = pipelineScript => {
  if (!pipeLines.value.length) return alertStore.openAlert({ titleName: tt('스크립트를 생성 해 주세요') })
  const tempPipeLine = {
    pipelineScript: pipelineScript.pipelineScript,
    pipelineCd: pipelineScript.pipelineCd,
  }
  pipeLines.value.splice(pipeLines.value.length - 1, 0, tempPipeLine)
}

const getDefaultPackages = async () => {
  const packages = await commonStore.getCommonGroups('Package')
  selectedPackageTypeCode.value = selectedProject.value.packageCd
    ? selectedProject.value.packageCd
    : packages[0].commonCd
  packageTypes.value = packages
}
const getSonarqubeRules = async () => {
  const reqBody = { buildCd: selectedProject.value.buildCd, serviceGroupId: selectedProject.value.serviceGroupId }
  await sonarqubeStore.getSonarqubeRules(reqBody)
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
</style>
