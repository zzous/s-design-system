<template>
  <tr class="text-align-center">
    <td class="projectImage">
      <v-img width="30" height="30" :src="`/images/${item.img}_logo.png`" />
    </td>
    <td class="active-text-color project-title">{{ item.title }}</td>
    <td>
      <div class="project-alias">{{ item.projectAlias }}</div>
      <div class="row-contents"></div>
    </td>
    <td class="multiRowColumn">
      <div class="row-title">빌드</div>
      <div class="row-contents cnt-contents">{{ item.buildCnt }}</div>
    </td>
    <td class="w-10">
      <div class="row-title">배포</div>
      <div class="row-contents cnt-contents">{{ item.deployCnt }}</div>
    </td>
    <td class="w-10">
      <div class="row-title">회원</div>
      <div class="row-contents cnt-contents">{{ item.userCnt }}</div>
    </td>
    <td class="w-10">
      <div class="row-title">저장소</div>
      <div class="row-contents">{{ item.repoName }}</div>
    </td>
    <td class="w-10">
      <div class="row-title">생성일</div>
      <div class="row-contents">{{ item.createDate }}</div>
    </td>
    <td>
      <DefaultButtonComponent title="상세" class="mr-1" />
      <DefaultButtonComponent title="삭제" />
    </td>
  </tr>
</template>

<script setup>
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
defineProps({
  item: {
    type: Object,
    default: null,
    require: true
  }
})
</script>

<style scoped lang="scss">
.row-title {
  color: gray;
}
.row-contents {
  height: 50px;
  line-height: 50px;
}
.project-alias {
}
.cnt-contents {
  font-size: 30px;
}
.project-title {
  font-size: 18px;
}
</style>
