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
  </div>
</template>

<script>
import titleSvg from '@/assets/svg/title_bg.svg'
export default {
  name: 'ProjectListView',
  data: function() {
   return {
     projectCnt: 0,
     titleSvgPath: titleSvg
   }
  }
}
</script>

<style scoped>
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
</style>