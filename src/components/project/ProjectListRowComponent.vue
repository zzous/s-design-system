<template>
  <tr class='textAlignCenter'>
    <td class='projectImage'><v-img width='30' height='30' :src='item.img'/></td>
    <td class='activeTextColor projectTitle'>{{item.title}}</td>
    <td>
      <div class='projectAlias'>{{item.projectAlias}}</div>
      <div class='rowContents'></div>
    </td>
    <td class='multiRowColumn'>
      <div class='rowTitle'>빌드</div>
      <div class='rowContents cntContents'>{{item.buildCnt}}</div>
    </td>
    <td class='w-10'>
      <div class='rowTitle'>배포</div>
      <div class='rowContents cntContents'>{{item.deployCnt}}</div>
    </td>
    <td class='w-10'>
      <div class='rowTitle'>회원</div>
      <div class='rowContents cntContents'>{{item.userCnt}}</div>
    </td>
    <td class='w-10'>
      <div class='rowTitle'>저장소</div>
      <div class='rowContents'>{{item.repoName}}</div>
    </td>
    <td class='w-10'>
      <div class='rowTitle'>생성일</div>
      <div class='rowContents'>{{item.createdAt}}</div>
    </td>
    <td>
      <v-btn :color='defaultBtnColor' class='mr-1'>상세</v-btn>
      <v-btn :color='defaultBtnColor'>삭제</v-btn>
    </td>
  </tr>
</template>

<script>
import { DEFAULT_BUTTON_COLOR } from '@/assets/consts/consts'

export default {
  name: 'ProjectListRowComponent',
  data: function() {
    return {
      defaultBtnColor: DEFAULT_BUTTON_COLOR
    }
  },
  props: {
    item: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped lang='scss'>
.rowTitle {
  color: gray;
}
.rowContents {
  height: 50px;
  line-height: 50px;
}
.projectAlias {

}
.cntContents {
  font-size: 30px;
}
.projectTitle {
  font-size: 18px;
}

</style>