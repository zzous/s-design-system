<template>
  <div v-if="buildDetail" class="view-wrapper">
    <div class="form-wrapper">
      <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
      <s-form-table>
        <s-form-item :label="$t('빌드명')" name="buildName">
          {{ buildDetail.buildName }}
        </s-form-item>
        <s-form-item :label="$t('브랜치')" name="buildBranch">
          {{ buildDetail.branch }}
        </s-form-item>
        <s-form-item :label="$t('빌드 승인 프로세스')" name="buildApproveProcess">??</s-form-item>
        <s-form-item :label="$t('패키지 유형')" name="packageType">
          {{ buildDetail.packageCdName }}
        </s-form-item>
      </s-form-table>
    </div>
    <template v-if="showContainerBuildInfo">
      <div class="form-wrapper">
        <s-sub-header :show-cnt="false" :title="$t('컨테이너 빌드 정보')" class-name="sub-title" />
        <s-form-table>
          <s-form-item :label="$t('Application 포트')" name="appPort">
            {{ buildDetail.applicationPort }}
          </s-form-item>
          <s-form-item :label="$t('Application 설치 경로')" name="appPath">
            {{ buildDetail.applicationInstallPath }}
          </s-form-item>
        </s-form-table>
      </div>
    </template>

    <div class="form-wrapper">
      <s-sub-header :show-cnt="false" :title="$t('파이프라인 정보')" class-name="sub-title" />
      <template v-for="(pipeline, idx) in buildDetail.pipelines" :key="idx">
        <div class="mt-3">
          {{ pipeline.pipelineCd }}
          <script-editor v-model="pipeline.pipelineScript" :height="300" :read-only="true" />
        </div>
      </template>
    </div>
    <build-history-table-component :build-histories="buildHistories" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useBuildStore } from '@/stores/devops/build'
import { useSmcStore } from '@/stores/devops/smc'
import { computed } from 'vue'
import BuildHistoryTableComponent from '@/components/build/detail/history/BuildHistoryTableComponent.vue'
import ScriptEditor from '@/components/_common/editor/ScriptEditor.vue'

const props = defineProps({
  buildId: {
    type: Number,
    default: 0,
  },
})

const buildStore = useBuildStore()
const smcStore = useSmcStore()
const { buildDetail, buildHistories } = storeToRefs(buildStore)
//const { smcFlowStates } = storeToRefs(smcStore)
const showContainerBuildInfo = computed(() => {
  return (
    buildDetail.value.packageCdName &&
    buildDetail.value.packageCdName.toLowerCase().includes('container') &&
    buildDetail.value.packageCdName.toLowerCase().includes('image')
  )
})

const getBuildDetail = async () => {
  if (props.buildId) {
    //1. 빌드 상세 조회
    buildStore.getBuildDetail(props.buildId)
    //2. 빌드 history 조회
    await buildStore.getBuildHistory(props.buildId)
    const lastBuild = buildHistories.value.at(-1)
    //3. 가장 최근 history 기준 승인 조회 /smc/flow | POST
    smcStore.getPostSmcFlows({ key1: 'build', key2: props.buildId })
    if (lastBuild) {
      //4. 가장 최근 history 기준 flow 조회 /smc/flow/state | POST
      smcStore.getPostSmcFlowState({ key1: 'build', key2: props.buildId, key3: lastBuild.buildHistoryId })
      //5. 가장 최근 history 기준 flow 조회 /smc/flow/states | POST
      smcStore.getPostSmcFlowStates({ key1: 'build', key2: props.buildId, key3: lastBuild.buildHistoryId })
    }
  }
  //console.error('getBuildDetail ', props.buildId)
}

onMounted(() => {
  getBuildDetail()
})
</script>

<style lang="scss" scoped></style>
