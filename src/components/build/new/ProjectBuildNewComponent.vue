<template>
  <div class="view-wrapper">
    <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
    <s-form-table>
      <s-form-item
        :label="$t('템플릿')"
        name="templateId"
        required
      />
      <s-form-item
        :label="$t('프로젝트명')"
        name="templateId"
        required
      >
        <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('프로젝트명을 입력하세요')"
        />
        <s-btn height="30">
          {{ $t('중복 체크') }}
        </s-btn>
      </s-form-item>
      <s-form-item
        :label="$t('프로젝트 별칭')"
        name="templateId"
        required
      >
        <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('프로젝트 별칭을 입력하세요')"
        />
      </s-form-item>
      <s-form-item
        :label="$t('빌드 승인 프로세스')"
        name="templateId"
        required
      >
        <s-btn height="30" variant="outlined">
          {{ $t('프로세스 선택') }}
        </s-btn>
      </s-form-item>
      <s-form-item
        :label="$t('배포승인 프로세스')"
        name="templateId"
        required
      >
        <s-btn height="30" variant="outlined">
          {{ $t('프로세스 선택') }}
        </s-btn>
      </s-form-item>
      <s-form-item
        :label="$t('프로젝트 관리자')"
        name="templateId"
        required
      >
        <s-btn height="30" variant="outlined">
          {{ $t('관리자 선택') }}
        </s-btn>
      </s-form-item>
      <s-form-item
        :label="`${$t('설명')}(250${$t('자 이내')})`"
        name="templateId"
        required
      >
        <v-textarea
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('설명을 입력하세요')"
        />
      </s-form-item>
    </s-form-table>
    <s-sub-header :show-cnt="false" :title="$t('템플릿 속성')" class-name="sub-title" />
    <s-form-table>
      <s-form-item
        :label="$t('패키지명')"
        name="templateId"
        required
      >
        <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('패키지명명을 입력하세요')"
        />
      </s-form-item>
      <s-form-item
        :label="$t('JDK 버전')"
        name="templateId"
        required
      >
        <v-text-field
          variant="outlined"
          density="compact"
          hide-details="auto"
          :placeholder="$t('JAVA 버전을 입력하세요')"
        />
      </s-form-item>
    </s-form-table>
  </div>
</template>

<script setup>
// import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
import { ref } from 'vue'
// import AccordionMenuComponent from '@/components/_common/AccordionMenuComponent.vue'
// import ShellScriptInputComponent from '@/components/_common/input/ShellScriptInputComponent.vue'
// import { DEFAULT_CHECKOUT_SCRIPT, DEFAULT_FILE_UPLOAD_SCRIPT } from '@/assets/consts/consts'

// const checkoutScript = ref(DEFAULT_CHECKOUT_SCRIPT)
// const fileUploadScript = ref(DEFAULT_FILE_UPLOAD_SCRIPT)
const branchList = ref(['dev', 'stage', 'master'])
// const approveProcessList = ref(['프로세스1', '프로세스2', '프로세스3'])
// const sonarQunbeRuleList = ref(['rule1', 'rule2', 'rule3'])
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
