<template>
  <div class="view-wrapper">
    <ViewHeaderComponent title="빌드">
      <DefaultButtonComponent title="새 빌드" to="builds/new" />
      <!--/serviceGroups/9/console/projects/83/builds/new-->
    </ViewHeaderComponent>
    <div class="contentsWrapper">
      <v-data-table :custom-filter="filterOnlyCapsText" :headers="headers" :items="items" :search="search" item-value="name">
        <template #headers="{ columns }">
          <tr class="tableHeader">
            <th v-for="(header, idx) in columns" :key="idx" :style="{ textAlign: header.align }">
              {{ header.title }}
            </th>
          </tr>
        </template>
        <template #[`item.action`]>
          <DefaultButtonComponent title="빌드" />
          <DefaultButtonComponent title="상세" class="ml-1" to="builds/detail/27" />
          <DefaultButtonComponent title="삭제" class="ml-1" />
        </template>
        <template #top>
          <v-text-field
            v-model="search"
            variant="outlined"
            class="pa-2"
            placeholder="빌드명으로 검색"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </template>
        <template #bottom>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCnt"></v-pagination>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script setup>
import ViewHeaderComponent from '@/components/common/ListViewHeaderComponent.vue'
import DefaultButtonComponent from '@/components/common/button/DefaultButtonComponent.vue'
import { computed, ref } from 'vue'

const page = ref(1)
const itemsPerPage = ref(5)
const search = ref('')
const headers = ref([
  {
    title: '빌드명',
    align: 'start',
    key: 'name'
  },
  {
    title: '브랜치',
    align: 'center',
    key: 'branch'
  },
  {
    title: '빌드 수',
    align: 'center',
    key: 'buildCnt'
  },
  {
    title: '마지막 빌드 시간',
    align: 'center',
    key: 'lastBuildDate'
  },
  {
    title: '마지막 빌드 상태',
    align: 'center',
    key: 'lastBuildState'
  },
  {
    title: '액션',
    key: 'action',
    align: 'center'
  }
])
const items = ref([
  {
    name: 'spring-boot-demo-build-stg',
    branch: 'stage',
    buildCnt: 8,
    lastBuildDate: '2024-09-03 18:26:31',
    lastBuildState: 'SUCCESS'
  }
])
const pageCnt = computed(() => Math.ceil(items.value.length / itemsPerPage.value))
const filterOnlyCapsText = (value, query) => {
  return value != null && query != null && typeof value === 'string' && value.toString().toLocaleUpperCase().indexOf(query) !== -1
}
</script>

<style scoped lang="scss">
@import 'src/assets/style/variables';
.contentsWrapper {
}
.tableHeader {
  background: $data-table-header-color;
}
</style>
