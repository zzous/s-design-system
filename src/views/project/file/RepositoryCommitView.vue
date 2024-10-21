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
        <default-button-component class="mr-1" title="전체 보기" :height="40" />
        <v-btn variant="flat" base-color="#ecf5ff" :height="40">전체 닫기</v-btn>
      </v-col>
    </v-row>
  </div>
  <div>
    <commit-accordion-component title="2024.09.12 커밋">
      <div class="table-container">
        <table class="commit-table">
          <tbody>
            <tr>
              <td class="commit-message">[DevOps]add template</td>
              <!-- Rowspan을 사용하여 첫 번째 열을 두 행에 걸쳐 병합 -->
              <td rowspan="2" class="commit-date">2024-09-12 19:07</td>
            </tr>
            <tr>
              <td class="commit-repository">strato-devops</td>
            </tr>
          </tbody>
        </table>
      </div>
    </commit-accordion-component>
  </div>
</template>

<script setup>
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
import { ref } from 'vue'
import CommitAccordionComponent from '@/components/file/CommitAccordionComponent.vue'

const branchList = ref([
  { id: 'dev', name: 'dev' },
  { id: 'stg', name: 'stg' },
  { id: 'prod', name: 'prod' },
])
const selectedBranch = ref('dev')
</script>

<style lang="scss" scoped>
.table-container {
  font-size: 14px;
  display: flex;
  justify-content: center;
}

.commit-table {
  width: 100%;
}

.commit-message {
  font-size: 1.1em;
  font-weight: bold;
}

.commit-repository {
  color: #919191;
  font-size: 13px;
  font-weight: 400;
}

.commit-date {
  text-align: right;
  color: #666;
  font-size: 13px;
  font-weight: 400;
}
</style>
