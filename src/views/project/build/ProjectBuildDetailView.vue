<template>
  <div class="view-wrapper">
    <div class="pl-15 pr-7">
      <DetailViewHeaderComponent branch-name="test branch" build-name="test build name" project-name="test project">
        <DefaultButtonComponent title="수정" />
        <DefaultButtonComponent class="ml-1" title="삭제" />
      </DetailViewHeaderComponent>
      <div class="buildContents">
        <div class="mt-16 mb-16">
          빌드 승인 프로세스
          <div class="pl-10 pr-10">
            <div id="work_flow_contents">
              <v-row class="scroll-row" no-gutters>
                <WorkFlowComponent title="Build Request" type="circle" updated-at="2024-09-06 0:48" user-name="demouser1" />
                <WorkFlowComponent title="Project Manager" type="decision" updated-at="2024-09-06 0:48" user-name="demouser1" />
                <WorkFlowComponent title="Project Manager" type="decision" updated-at="2024-09-06 0:48" user-name="demouser1" />
                <WorkFlowComponent title="Project Manager" type="decision" updated-at="2024-09-06 0:48" user-name="demouser1" />
                <WorkFlowComponent title="Project Manager" type="decision" updated-at="2024-09-06 0:48" user-name="demouser1" />
                <WorkFlowComponent title="Project Manager" type="decision" updated-at="2024-09-06 0:48" user-name="demouser1" />
                <WorkFlowComponent title="Project Manager" type="decision" updated-at="2024-09-06 0:48" user-name="demouser1" />
                <WorkFlowComponent title="Project Manager" type="decision" updated-at="2024-09-06 0:48" user-name="demouser1" />
                <WorkFlowComponent title="Project Manager" type="decision" updated-at="2024-09-06 0:48" user-name="demouser1" />
                <WorkFlowComponent title="Project Manager" type="decision" updated-at="2024-09-06 0:48" user-name="demouser1" />
                <WorkFlowComponent
                  :show-arrow="false"
                  title="Build Request"
                  type="dotCircle"
                  updated-at="2024-09-06 0:48"
                  user-name="demouser1"
                />
              </v-row>
            </div>
          </div>
        </div>
        <div id="build_history_list_wrapper">
          <div id="build_history_list_table_title">빌드 내역 (0)</div>
          <div id="build_history_list_table_wrapper" class="mt-10">
            <v-data-table v-model="page" :headers="buildHistoryHeader" :items="buildHistoryList">
              <template #headers="{ columns }">
                <tr class="tableHeader">
                  <template v-for="(header, idx) in columns" :key="idx">
                    <th :style="{ textAlign: header.align ? header.align : 'center' }">
                      {{ header.title }}
                    </th>
                  </template>
                </tr>
              </template>
              <template #[`item.state`]="{ item }">
                <img v-show="item.state === 'FAIL'" :alt="item.state" src="@/assets/images/icon/icon_f.gif" />
                <img v-show="item.state === 'SUCCESS'" :alt="item.state" src="@/assets/images/icon/icon_s.gif" />
              </template>
              <template #[`item.approveHistory`]>
                <v-icon class="historyButton" icon="mdi-clipboard-outline"></v-icon>
              </template>
              <template #bottom>
                <div class="text-center pt-2">
                  <v-pagination v-model="page" :length="pageCnt"></v-pagination>
                </div>
              </template>
            </v-data-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DefaultButtonComponent from '@/components/common/button/DefaultButtonComponent.vue'
import DetailViewHeaderComponent from '@/components/build/DetailViewHeaderComponent.vue'
import WorkFlowComponent from '@/components/build/WorkFlowComponent.vue'
import { computed, ref } from 'vue'

const page = ref(1)
const pageCnt = computed(() => Math.ceil(buildHistoryList.value.length / buildHistoryList.value))
//const itemPerPage = ref(5)
const buildHistoryHeader = ref([
  { title: '상태', key: 'state', align: 'center', sortable: false },
  { title: '빌드 아이디', key: 'buildId', align: 'center', sortable: false },
  { title: '브랜치', key: 'branch', align: 'center', sortable: false },
  { title: '설명', key: 'desc', align: 'center', sortable: false },
  { title: '빌드 사용자', key: 'buildUserName', align: 'center', sortable: false },
  { title: '빌드 날짜', key: 'buildDate', align: 'center', sortable: false },
  { title: '승인이력', key: 'approveHistory', align: 'center', sortable: false }
])
const buildHistoryList = ref([
  {
    state: 'SUCCESS',
    buildId: '#1',
    branch: '#master',
    desc: 'test',
    buildUserName: 'test@strato.co.kr',
    buildDate: '2024-07-13 16:20:06',
    approveHistoryList: []
  },
  {
    state: 'SUCCESS',
    buildId: '#1',
    branch: '#master',
    desc: 'test',
    buildUserName: 'test@strato.co.kr',
    buildDate: '2024-07-13 16:20:06',
    approveHistoryList: []
  },
  {
    state: 'SUCCESS',
    buildId: '#1',
    branch: '#master',
    desc: 'test',
    buildUserName: 'test@strato.co.kr',
    buildDate: '2024-07-13 16:20:06',
    approveHistoryList: []
  },
  {
    state: 'SUCCESS',
    buildId: '#1',
    branch: '#master',
    desc: 'test',
    buildUserName: 'test@strato.co.kr',
    buildDate: '2024-07-13 16:20:06',
    approveHistoryList: []
  }
])
</script>

<style lang="scss" scoped>
@import 'src/assets/style/variables';

#work_flow_contents {
  overflow-x: auto; /* 가로 스크롤 활성화 */
  white-space: nowrap; /* 줄 바꿈 방지 */
  height: 300px;
  padding-top: 20px;
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
