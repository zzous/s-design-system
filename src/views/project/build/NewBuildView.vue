<template>
  <div class="view-wrapper">
    <div class="title-wrapper">
      <span>기본 구성 설정</span>
    </div>
    <div class="border-t-md border-b-md pb-15 pt-4">
      <v-row no-gutters>
        <v-col>
          <v-label>빌드명</v-label>
          <div class="d-flex align-center">
            <v-text-field variant="outlined" density="compact" error-messages="규칙에 맞게 입력해주세요.(영문자, 숫자, (-)만 가능)" />
            <DefaultButtonComponent class="input-text-btn" title="중복체크"></DefaultButtonComponent>
          </div>
        </v-col>
        <v-col>
          <v-label>기본 브랜치</v-label>
          <v-select
            placeholder="브랜치를 선택하세요"
            :items="branchList"
            density="compact"
            variant="outlined"
            error-messages="항목을 선택해주세요."
          />
        </v-col>
      </v-row>
      <v-label>빌드 승인 프로세스</v-label>
      <v-select density="compact" variant="outlined" :items="approveProcessList" placeholder="빌드 승인 프로세스를 선택하세요." />
      <v-label>패키지 유형</v-label>
      <div>
        <v-btn-toggle>
          <v-btn variant="outlined">Container Image</v-btn>
          <v-btn variant="outlined">WAR</v-btn>
        </v-btn-toggle>
      </div>
    </div>
  </div>
</template>

<script setup>
import DefaultButtonComponent from '@/components/common/button/DefaultButtonComponent.vue'
import { ref } from 'vue'

const branchList = ref(['dev', 'stage', 'master'])
const approveProcessList = ref(['프로세스1', '프로세스2', '프로세스3'])
</script>
<style scoped>
.input-text-btn {
  margin: 0 5px 23px 5px;
}
</style>
