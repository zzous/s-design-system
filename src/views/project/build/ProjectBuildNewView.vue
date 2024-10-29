<template>
  <div class="view-wrapper">
    <div class="title-wrapper border-b-md">
      <span>기본 구성 설정</span>
    </div>
    <div class="pb-13 pt-4">
      <v-row no-gutters>
        <v-col>
          <v-label>빌드명</v-label>
          <div class="d-flex align-center">
            <v-text-field
              variant="outlined"
              density="compact"
              error-messages="규칙에 맞게 입력하세요.(영문자, 숫자, (-)만 가능)"
            />
            <default-button-component class="input-text-btn" title="중복체크" />
          </div>
        </v-col>
        <v-col>
          <v-label>기본 브랜치</v-label>
          <v-select
            placeholder="브랜치를 선택하세요"
            :items="branchList"
            density="compact"
            variant="outlined"
            error-messages="항목을 선택하세요."
          />
        </v-col>
      </v-row>
      <v-label>빌드 승인 프로세스</v-label>
      <v-select
        density="compact"
        variant="outlined"
        :items="approveProcessList"
        placeholder="빌드 승인 프로세스를 선택하세요."
      />
      <v-label>패키지 유형</v-label>
      <div>
        <v-btn-toggle>
          <v-btn variant="outlined">Container Image</v-btn>
          <v-btn variant="outlined">WAR</v-btn>
        </v-btn-toggle>
      </div>
    </div>

    <div class="title-wrapper border-b-md">
      <span>컨테이너 빌드</span>
    </div>
    <div class="pt-4 mb-5">
      <v-row>
        <v-col>
          <v-label class="mb-1">Application 포트</v-label>
          <v-text-field
            variant="outlined"
            density="compact"
            placeholder="Application 포트를 입력하세요"
            error-messages="숫자만 입력 가능합니다."
          />
        </v-col>
        <v-col>
          <v-label class="mb-1">Application 포트</v-label>
          <v-text-field
            variant="outlined"
            density="compact"
            placeholder="Application 설치 경로를 입력하세요"
            error-messages="내용을 입력하세요."
          />
        </v-col>
      </v-row>
    </div>
    <div class="title-wrapper border-b-md position-relative">
      <span>파이프라인</span>
      <default-button-component title="스크립트 생성" class="float-right title-button" />
    </div>
    <div class="mt-5">
      <v-row>
        <v-col cols="9" class="pl-15">
          <shell-script-input-component v-model="checkoutScript" label-title="CHECKOUTBUILD" />
          <shell-script-input-component v-model="fileUploadScript" label-title="FILEUPLOAD" />
        </v-col>
        <v-col class="pr-15">
          <accordion-menu-component :title-bold="true" title="123">
            <div>test1</div>
          </accordion-menu-component>
          <accordion-menu-component :title-bold="true" title="213">
            <div>test1</div>
          </accordion-menu-component>
          <accordion-menu-component :title-bold="true" title="432">
            <div>test1</div>
          </accordion-menu-component>
          <accordion-menu-component :title-bold="true" title="JUNIT">
            <div>default_script</div>
          </accordion-menu-component>
          <accordion-menu-component :title-bold="true" title="SONARQUBE">
            <div>default_script</div>
            <div>sonarqube 선택안함</div>
          </accordion-menu-component>
          <accordion-menu-component :title-bold="true" title="SHELL_SCRIPT">
            <div>test1</div>
          </accordion-menu-component>
          <accordion-menu-component :title-bold="true" title="TEST">
            <div>test1</div>
          </accordion-menu-component>
        </v-col>
      </v-row>
    </div>
    <div class="title-wrapper border-b-md position-relative">
      <span>소나큐브</span>
    </div>
    <div class="mt-2">
      <v-select variant="outlined" density="compact" :items="sonarQunbeRuleList" />
    </div>
  </div>
</template>

<script setup>
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
import { ref } from 'vue'
import AccordionMenuComponent from '@/components/_common/AccordionMenuComponent.vue'
import ShellScriptInputComponent from '@/components/_common/input/ShellScriptInputComponent.vue'
import { DEFAULT_CHECKOUT_SCRIPT, DEFAULT_FILE_UPLOAD_SCRIPT } from '@/assets/consts/consts'

const checkoutScript = ref(DEFAULT_CHECKOUT_SCRIPT)
const fileUploadScript = ref(DEFAULT_FILE_UPLOAD_SCRIPT)
const branchList = ref(['dev', 'stage', 'master'])
const approveProcessList = ref(['프로세스1', '프로세스2', '프로세스3'])
const sonarQunbeRuleList = ref(['rule1', 'rule2', 'rule3'])
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
