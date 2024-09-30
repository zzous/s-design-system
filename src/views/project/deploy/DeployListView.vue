<template>
  <div class="view-wrapper">
    <ViewHeaderComponent title="배포">
      <DefaultButtonComponent title="새 배포" to="deploy/new" />
    </ViewHeaderComponent>
    <div class="contentsWrapper">
      <v-data-table
        :custom-filter="filterOnlyCapsText"
        :headers="headers"
        :items="items"
        :search="search"
        item-value="name"
      >
        <template #headers="{ columns }">
          <tr class="tableHeader">
            <th v-for="(header, idx) in columns" :key="idx" :style="{ textAlign: header.align }">
              {{ header.title }}
            </th>
          </tr>
        </template>
        <template #[`item.action`]>
          <DefaultButtonComponent title="빌드" />
          <DefaultButtonComponent title="상세" class="ml-1" />
          <DefaultButtonComponent title="삭제" class="ml-1" />
        </template>
        <template #top>
          <v-text-field
            v-model="search"
            variant="outlined"
            class="pa-2"
            placeholder="배포명으로 검색"
            prepend-inner-icon="mdi-magnify"
          />
        </template>
        <template #bottom>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCnt" />
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script setup>
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
import ViewHeaderComponent from '@/components/_common/ListViewHeaderComponent.vue'
import { computed, ref } from 'vue'

const page = ref(1)
const itemsPerPage = ref(5)
const search = ref('')
const headers = ref([
  {
    title: '배포명',
    align: 'start',
    key: 'deployName'
  },
  {
    title: '빌드명',
    align: 'center',
    key: 'buildName'
  },
  {
    title: '스테이지',
    align: 'center',
    key: 'stage'
  },
  {
    title: '프로바이더',
    align: 'center',
    key: 'provider'
  },
  {
    title: '마지막 배포 시간',
    align: 'center',
    key: 'lastDeployDate'
  },
  {
    title: '마지막 배포 상태',
    align: 'center',
    key: 'lastDeployState'
  },
  {
    title: '액션',
    key: 'action',
    align: 'center'
  }
])
const items = ref([
  {
    deployName: 'spring-boot-demo-build-stg',
    buildName: 'test build',
    stage: 'PROD',
    provider: 'SHELL',
    lastDeployDate: '2024-09-03 18:26:31',
    lastDeployState: 'SUCCESS'
  }
])

const pageCnt = computed(() => Math.ceil(items.value.length / itemsPerPage.value))
const filterOnlyCapsText = (value, query) => {
  return value != null && query != null && typeof value === 'string' && value.toString().toLocaleUpperCase().indexOf(query) !== -1
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';
.contentsWrapper {
}
.tableHeader {
  background: $data-table-header-color;
}
</style>
