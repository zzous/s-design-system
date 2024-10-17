<template>
  <div class="view-wrapper">
    <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
    <s-form-table>
      <s-form-item
        :label="$t('빌드명')"
        name="buildName"
        required
      >
        <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('빌드명을 입력하세요')"
        />
        <s-btn height="30">
          {{ $t('중복 체크') }}
        </s-btn>
      </s-form-item>

      <s-form-item
        :label="$t('브랜치')"
        name="branch"
      >
        <!-- <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('브랜치 선택 select')"
        /> -->
        <v-select
          v-model="selectedBranch"
          :items="branchs"
          variant="outlined"
          density="compact"
          hide-details="auto"
        />
      </s-form-item>
      <s-form-item
        :label="$t('빌드 승인 프로세스')"
        name="templateId"
      >
        <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('빌드 승인 프로세스 선택 select')"
        />
      </s-form-item>
      <s-form-item
        :label="$t('패키지 유형')"
        name="templateId"
      >
        {{ '패키지 유형 ex Container Image' }}
      </s-form-item>
    </s-form-table>
    <s-sub-header :show-cnt="false" :title="$t('컨테이너 빌드 정보')" class-name="sub-title" />
    <s-form-table>
      <s-form-item
        :label="$t('Application 포트')"
        name="templateId"
        required
      >
        <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('Application 포트를 입력하세요(숫자만 입력 가능)')"
        />
      </s-form-item>
      <s-form-item
        :label="$t('Application 설치 경로')"
        name="templateId"
        required
      >
        <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('Application 설치 경로를 입력하세요')"
        />
      </s-form-item>
    </s-form-table>
    <div class="mt-3 text-align-center">
      <s-btn height="30" class="mr-2">
        {{ $t('저장') }}
      </s-btn>
      <s-btn height="30" variant="outlined">
        {{ $t('취소') }}
      </s-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const branchs = ref(['stage', 'dev', 'master'])
const selectedBranch = ref('stage')

// 빌드승인flow
// /api/v1/devops/smc/flows | POST
// {key1:'project', key2:projectId, key3:'B'}
</script>
<style lang="scss" scoped>
.input-text-btn {
  margin: 0 5px 23px;
}

.title-wrapper {
  height: 50px;
  line-height: 50px;
}

.title-button {
  top: 6px;
}
</style>
