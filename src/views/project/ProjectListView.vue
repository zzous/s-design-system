<template>
  <div class="layout__list">
    <ViewHeaderComponent :title="$t('프로젝트 목록')" :list-cnt="projectList.length">
      <DefaultButtonComponent class="inline-block" :title="$t('신규 프로젝트')" />
    </ViewHeaderComponent>
    <div class="layout__list-contents">
      <v-text-field
        class="sp-text-field search-box-text"
        variant="outlined"
        density="compact"
        width="200px"
        hide-details
        :placeholder="$t('프로젝트명으로 검색')"
        prepend-inner-icon="mdi-magnify"
      />
      <v-data-table
        v-model:page="page"
        class="sp-data-table"
        :hide-default-header="true"
        :items="projectList"
        :items-per-page="itemsPerPage"
      >
        <!--  custom image -->
        <template #item="{ item }">
          <s-card-table :item="item" />
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
import SCardTable from '@/components/_common/table/CustomCardTableComponent.vue'
import ViewHeaderComponent from '@/components/_common/ListViewHeaderComponent.vue'
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
import { computed, ref } from 'vue'

const itemsPerPage = ref(5)
const page = ref(1)
const projectList = ref([
  {
    img: 'gradle',
    title: 'Frozen Yogurt',
    projectAlias: '데모',
    buildCnt: 5,
    deployCnt: 0,
    userCnt: 9,
    repoName: 'repoName',
    createDate: '2024-08-27 09:15:56',
    showButton: true
  }
])
const pageCnt = computed(() => Math.ceil(projectList.value.length / itemsPerPage.value))
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.input-wrapper {
  padding-top: 20px;
  padding-right: 20px;
}
</style>
