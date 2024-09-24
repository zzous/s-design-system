<template>
  <div class="pt-0 view-wrapper">
    <ViewHeaderComponent title="프로젝트 목록" :list-cnt="projectList.length">
      <div class="d-flex input-wrapper">
        <v-text-field
          variant="outlined"
          density="compact"
          width="200px"
          class="mr-5"
          placeholder="프로젝트명으로 검색"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
        <DefaultButtonComponent class="inline-block" title="신규 프로젝트" />
      </div>
    </ViewHeaderComponent>
    <div id="project_list_wrapper">
      <v-data-table v-model:page="page" :hide-default-header="true" :items="projectList" :items-per-page="itemsPerPage">
        <!--  custom image -->
        <template #item="{ item }">
          <ProjectListRowComponent :item="item" />
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
import ProjectListRowComponent from '@/components/project/ProjectListRowComponent.vue'
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
@import 'src/assets/style/variables';

.input-wrapper {
  padding-top: 20px;
  padding-right: 20px;
}

#project_list_wrapper {
  padding-top: 50px;
  height: 300px;
}
</style>
