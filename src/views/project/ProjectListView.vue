<template>
  <div class='contentsWrapper'>
    <div class='titleContainer d-flex justify-space-between align-center'>
      <span>
        <img :src='titleSvgPath' alt='icon' class='titleIcon'/>
        프로젝트 목록 ({{projectCnt}})
      </span>
      <div class="d-flex inputWrapper">
        <v-text-field
          density="compact"
          width='200px'
          class='mr-5'
          placeholder="프로젝트명으로 검색"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
        ></v-text-field>
        <v-btn class='inline-block' color='#017BE5'>신규 프로젝트</v-btn>
      </div>
    </div>
    <div id='project_list_wrapper'>
      <v-data-table
        v-model:page="page"
        :hide-default-header='true'
        :items="projectList"
        :items-per-page="itemsPerPage"
      >
        <!--  custom image -->
        <template v-slot:[`item.img`]="{ item }">
          <v-card elevation="2" rounded>
            <v-img
              :src='item.img'
              height="64"
              width='60'
            ></v-img>
          </v-card>
        </template>
        <template v-slot:[`item.title`]='{item}'>
          <div class='projectTitle'>
            {{ item.title }}
          </div>
        </template>
        <template v-slot:[`item.buildCnt`]='{item}'>
          <div class='textAlignCenter'>
            <div class='innerContentsTitle'>
              빌드
            </div>
            <div class='innerContents'>
              {{ item.buildCnt }}
            </div>
          </div>
        </template>
        <template v-slot:[`item.projectAlias`]='{item}'>
          <div class='textAlignCenter'>
            <div>
              {{item.projectAlias}}
            </div>
            <div class='innerContents'>
            </div>
          </div>
        </template>
        <template v-slot:[`item.deployCnt`]='{item}'>
          <div class='textAlignCenter'>
            <div class='innerContentsTitle'>
              배포
            </div>
            <div class='innerContents'>
              {{ item.deployCnt }}
            </div>
          </div>
        </template>
        <template v-slot:[`item.userCnt`]='{item}'>
          <div class='textAlignCenter'>
            <div class='innerContentsTitle'>
              회원
            </div>
            <div class='innerContents'>
              {{ item.userCnt }}
            </div>
          </div>
        </template>
        <template v-slot:[`item.repoName`]='{item}'>
          <div class='textAlignCenter'>
            <div class='innerContentsTitle'>
              저장소
            </div>
            <div class='innerContents'>
              {{ item.repoName }}
            </div>
          </div>
        </template>
        <template v-slot:[`item.createdAt`]='{item}'>
          <div class='textAlignCenter'>
            <div class='innerContentsTitle'>
              생성일
            </div>
            <div class='innerContents'>
              {{ item.createdAt }}
            </div>
          </div>
        </template>
        <template v-slot:[`item.showButton`]>
          <div class='textAlignCenter'>
            <div class='innerContentsTitle'>
            </div>
            <div class='innerContents'>
              <v-btn color='#017BE5' class='mr-1'>상세</v-btn>
              <v-btn color='#017BE5'>삭제</v-btn>
            </div>
          </div>
        </template>
        <template v-slot:bottom>
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
import titleSvg from '@/assets/svg/title_bg.svg'
import gradleImag from '@/assets/images/gradle_logo.png'
export default {
  name: 'ProjectListView',
  data: function() {
   return {
     projectCnt: 0,
     titleSvgPath: titleSvg,
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
         createdAt: '2024-08-27 09:15:56',
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

.contentsWrapper {
  padding-top: 20px;
  padding-left: 20px;
}
.titleContainer {
  height: 30px;
  align-items: center;
}

.titleIcon {
  width: 24px; /* 아이콘 크기 */
  height: 24px;
  margin-right: 8px; /* 타이틀과의 간격 */
}
.inputWrapper {
  padding-top: 20px;
  padding-right: 20px;
}
#project_list_wrapper {
  padding-top: 50px;
  height: 300px;
}
.projectTitle {
  color: $active-font-color;
}
.innerContents {
  height: 40px;
  line-height: 40px;
  color: blue;
}
.innerContentsTitle {
  color: red;
}
</style>