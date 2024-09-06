<template>
  <div class='viewWrapper'>
    <ViewHeaderComponent title='프로젝트 목록' :list-cnt='projectList.length'>
      <div class="d-flex inputWrapper">
        <v-text-field
          density="compact"
          width='200px'
          class='mr-5'
          placeholder="프로젝트명으로 검색"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
        ></v-text-field>
        <DefaultButtonComponent class='inline-block' title='신규 프로젝트'/>
      </div>
    </ViewHeaderComponent>
    <div id='project_list_wrapper'>
      <v-data-table
        v-model:page="page"
        :hide-default-header='true'
        :items="projectList"
        :items-per-page="itemsPerPage"
      >
        <!--  custom image -->
        <template #item="{ item }">
          <ProjectListRowComponent :item='item' />
        </template>
        <template #bottom>
          <div class="text-center pt-2">
            <v-pagination
              v-model="page"
              :length="pageCount"
            ></v-pagination>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import gradleImag from '@/assets/images/gradle_logo.png'
import ProjectListRowComponent from '@/components/project/ProjectListRowComponent.vue'
import ViewHeaderComponent from '@/components/common/ListViewHeaderComponent.vue'
import DefaultButtonComponent from '@/components/common/button/DefaultButtonComponent.vue'

export default {
  name: 'ProjectListView',
  components: { DefaultButtonComponent, ViewHeaderComponent, ProjectListRowComponent },
  data: function() {
   return {
     page: 1,
     itemsPerPage: 5,
     projectList: [
       {
         img: gradleImag,
         title: 'Frozen Yogurt',
         projectAlias: '데모',
         buildCnt: 5,
         deployCnt: 0,
         userCnt: 9,
         repoName: 'repoName',
         createDate: '2024-08-27 09:15:56',
         showButton: true
       }
     ],
   }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.projectList.length / this.itemsPerPage)
    },
  },
}
</script>

<style scoped lang='scss'>
@import "src/assets/style/variables";

.inputWrapper {
  padding-top: 20px;
  padding-right: 20px;
}
#project_list_wrapper {
  padding-top: 50px;
  height: 300px;
}
</style>