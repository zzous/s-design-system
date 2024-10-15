<template>
  <s-modal
    :model-value="modelValue"
    :title="$t('빌드 상세')"
    @update:model-value="updateModal"
  >
    <div v-if="buildDetail" class="contents-wrapper">
      <div class="pl-15 pr-7">
        <detail-view-header-component
          :branch-name="buildDetail.branch"
          :build-name="buildDetail.buildName"
          :project-name="buildDetail.projectName"
        >
          <default-button-component title="수정" />
          <default-button-component
            class="ml-1"
            title="삭제"
          />
        </detail-view-header-component>
        <div class="buildContents">
          <div class="mt-16 mb-16">
            빌드 승인 프로세스
            <div class="pl-10 pr-10">
              <div id="work_flow_contents">
                <v-row
                  class="scroll-row"
                  no-gutters
                >
                  <work-flow-component
                    v-for="state in smcFlowStates"
                    :key="state.stateId"
                    :title="state.stateName"
                    type="circle"
                    :update-date="state.regDate"
                    :user-name="state.regId"
                  />
                  <!-- <work-flow-component
                    title="Build Request"
                    type="circle"
                    update-date="2024-09-06 0:48"
                    user-name="demouser1"
                  />
                  <work-flow-component
                    title="Project Manager"
                    type="decision"
                    update-date="2024-09-06 0:48"
                    user-name="demouser1"
                  />
                  <work-flow-component
                    title="Project Manager"
                    type="decision"
                    update-date="2024-09-06 0:48"
                    user-name="demouser1"
                  />
                  <work-flow-component
                    title="Project Manager"
                    type="decision"
                    update-date="2024-09-06 0:48"
                    user-name="demouser1"
                  />
                  <work-flow-component
                    title="Project Manager"
                    type="decision"
                    update-date="2024-09-06 0:48"
                    user-name="demouser1"
                  />
                  <work-flow-component
                    title="Project Manager"
                    type="decision"
                    update-date="2024-09-06 0:48"
                    user-name="demouser1"
                  />
                  <work-flow-component
                    title="Project Manager"
                    type="decision"
                    update-date="2024-09-06 0:48"
                    user-name="demouser1"
                  />
                  <work-flow-component
                    title="Project Manager"
                    type="decision"
                    update-date="2024-09-06 0:48"
                    user-name="demouser1"
                  />
                  <work-flow-component
                    title="Project Manager"
                    type="decision"
                    update-date="2024-09-06 0:48"
                    user-name="demouser1"
                  />
                  <work-flow-component
                    title="Project Manager"
                    type="decision"
                    update-date="2024-09-06 0:48"
                    user-name="demouser1"
                  />
                  <work-flow-component
                    :show-arrow="false"
                    title="Build Request"
                    type="dot-circle"
                    update-date="2024-09-06 0:48"
                    user-name="demouser1"
                  /> -->
                </v-row>
              </div>
            </div>
          </div>
          <div id="build_history_list_wrapper">
            <div id="build_history_list_table_title">
              빌드 내역 (0)
            </div>
            <div
              id="build_history_list_table_wrapper"
              class="mt-10"
            >
              <v-data-table
                :headers="buildHistoryHeader"
                :items="buildHistories"
              >
                <template #headers="{ columns }">
                  <tr class="tableHeader">
                    <template
                      v-for="(header, idx) in columns"
                      :key="idx"
                    >
                      <th :style="{ textAlign: header.align ? header.align : 'center' }">
                        {{ header.title }}
                      </th>
                    </template>
                  </tr>
                </template>
                <template #[`item.state`]="{ item }">
                  <img
                    v-show="item.state === 'FAIL'"
                    :alt="item.state"
                    src="/devops/assets/images/icon_f.gif"
                  >
                  <img
                    v-show="item.state === 'SUCCESS'"
                    :alt="item.state"
                    src="/devops/assets/images/icon_s.gif"
                  >
                </template>
                <template #[`item.approveHistory`]>
                  <v-icon
                    class="historyButton"
                    icon="mdi-clipboard-outline"
                  />
                </template>
                <template #bottom>
                  <div class="text-center pt-2">
                    <v-pagination
                      v-model="page"
                      :length="pageCnt"
                    />
                  </div>
                </template>
              </v-data-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </s-modal>
</template>

<script setup>
import { getLastItem } from '@/assets/consts/utils/array'
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
import DetailViewHeaderComponent from '@/components/build/DetailViewHeaderComponent.vue'
import WorkFlowComponent from '@/components/build/WorkFlowComponent.vue'
import { useBuildStore } from '@/stores/devops/build'
import { useSmcStore } from '@/stores/devops/smc'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
//import { useRoute } from 'vue-router'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  buildId: {
    type: Number,
    default: 0
  }
})
const emits = defineEmits(['update:model-value'])
const buildStore = useBuildStore()
const smcStore = useSmcStore()

//const route = useRoute()
const { buildDetail, buildHistories } = storeToRefs(buildStore)
const { smcFlowStates } = storeToRefs(smcStore)

const getBuildDetail = async () => {
  if(props.buildId){
    //1. 빌드 상세 조회
    buildStore.getBuildDetail(props.buildId)
    //2. 빌드 history 조회
    await buildStore.getBuildHistory(props.buildId)
    const lastBuild = getLastItem(buildHistories.value)
    //3. 가장 최근 history 기준 승인 조회 /smc/flow | POST
    smcStore.getPostSmcFlows({ key1:'build', key2:props.buildId })
    if(lastBuild) {
      //4. 가장 최근 history 기준 flow 조회 /smc/flow/state | POST
      smcStore.getPostSmcFlowState({ key1:'build', key2:props.buildId, key3: lastBuild.buildHistoryId })
      //5. 가장 최근 history 기준 flow 조회 /smc/flow/states | POST
      smcStore.getPostSmcFlowStates({ key1:'build', key2:props.buildId, key3: lastBuild.buildHistoryId })
    }
  }
  //console.error('getBuildDetail ', props.buildId)
}

const updateModal = () => {
  emits('update:model-value', false)
}

const init = () => {
  getBuildDetail()
}

const page = ref(1)
const pageCnt = computed(() => Math.ceil(buildHistories.value.length / buildHistories.value.length))
//const itemPerPage = ref(5)
const buildHistoryHeader = ref([
  { title: '상태', key: 'buildResult', align: 'center', sortable: false },
  { title: '빌드 아이디', key: 'buildId', align: 'center', sortable: false },
  { title: '브랜치', key: 'branch', align: 'center', sortable: false },
  { title: '설명', key: 'buildDesc', align: 'center', sortable: false },
  { title: '빌드 사용자', key: 'buildUserName', align: 'center', sortable: false },
  { title: '빌드 날짜', key: 'buildDate', align: 'center', sortable: false },
  { title: '승인이력', key: 'approveHistory', align: 'center', sortable: false }
])


init()
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

#work_flow_contents {
  overflow-x: auto; /* 가로 스크롤 활성화 */
  white-space: nowrap; /* 줄 바꿈 방지 */
  height: 300px;
  padding-top: 20px;
}

.contents-wrapper {
  width: 1700px;
  background: #fff;
}

.tableHeader {
  background: $data-table-header-color;
}

.scroll-row {
  display: flex;
  flex-wrap: nowrap; /* 줄 바꿈 방지 */
}

.historyButton {
  cursor: pointer;
}
</style>
