<template>
  <div class="branch-select mt-4">
    <v-row class="">
      <v-col class="pb-0">
        <v-select
          v-model="selectedBranch"
          width="240"
          :items="branchList"
          item-title="name"
          item-value="id"
          density="compact"
          variant="outlined"
        />
      </v-col>
      <v-col class="text-end" cols="4">
        <DefaultButtonComponent class="mr-1" title="전체 보기" :height="40" />
        <v-btn variant="flat" base-color="#ecf5ff" :height="40"> 전체 닫기 </v-btn>
      </v-col>
    </v-row>
  </div>
  <div>
    <CommitAccordionComponent title="2024.09.12 커밋"> test </CommitAccordionComponent>
  </div>
</template>

<script setup>
import DefaultButtonComponent from '@/components/common/button/DefaultButtonComponent.vue'
import { ref } from 'vue'
import CommitAccordionComponent from '@/components/file/CommitAccordionComponent.vue'

const branchList = ref([
  { id: 'dev', name: 'dev' },
  { id: 'stg', name: 'stg' },
  { id: 'prod', name: 'prod' }
])
const selectedBranch = ref('dev')
</script>

<style scoped>
/* 배경색 커스터마이징 */
.v-expansion-panel-title {
  background-color: #f1f1f1;
}

/* 커밋 패널 내 텍스트 스타일링 */
.v-expansion-panel-text {
  padding: 16px;
}
</style>
