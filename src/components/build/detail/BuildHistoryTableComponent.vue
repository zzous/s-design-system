<template>
  <div class="form-wrapper">
    <s-sub-header
      :show-cnt="false"
      :title="`${$t('빌드 내역')} (${buildHistories?.length || 0})`"
      class-name="sub-title"
    />
    <v-data-table :headers="buildHistoryHeader" :items="buildHistories" :items-per-page="itemsPerPage" :page="page">
      <template #headers="{ columns }">
        <tr class="tableHeader">
          <template v-for="(header, idx) in columns" :key="idx">
            <th :style="{ textAlign: header.align ? header.align : 'center' }">
              {{ header.title }}
            </th>
          </template>
        </tr>
      </template>
      <template #[`item.buildResult`]="{ item }">
        <img v-if="item.buildResult === 'FAIL'" :alt="item.state" src="/public/devops/assets/images/icon_f.gif" />
        <img
          v-else-if="item.buildResult === 'APPROVE'"
          :alt="item.state"
          src="/public/devops/assets/images/icon_s.gif"
        />
        <template v-else>
          {{ item.buildResult }}
        </template>
      </template>
      <template #[`item.approveHistory`]="{ item }">
        <!-- <v-icon
        class="historyButton"
        icon="mdi-clipboard-outline"
      /> -->
        <s-btn variant="outlined" :title="$t('상세보기')" @click="onClickHistoryDetail(item)" />
      </template>
      <template #bottom>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCnt" />
        </div>
      </template>
    </v-data-table>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { ref } from 'vue'
const props = defineProps({
  buildHistories: {
    type: Array,
    required: true,
  },
})
const page = ref(1)
const itemsPerPage = ref(10)
const pageCnt = computed(() => Math.ceil((props.buildHistories ? props.buildHistories.length : 0) / itemsPerPage.value))
const onClickHistoryDetail = history => {
  console.error('onClickHistoryDetail : ', history)
}

const buildHistoryHeader = ref([
  { title: '상태', key: 'buildResult', align: 'center', sortable: false },
  { title: '빌드 아이디', key: 'buildId', align: 'center', sortable: false },
  { title: '브랜치', key: 'branch', align: 'center', sortable: false },
  { title: '빌드 사용자', key: 'buildUserName', align: 'center', sortable: false },
  { title: '빌드 일시', key: 'buildDate', align: 'center', sortable: false },
  { title: '승인이력', key: 'approveHistory', align: 'center', sortable: false },
])
</script>
