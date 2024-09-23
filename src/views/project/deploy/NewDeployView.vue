<template>
  <div class="view-wrapper">
    <label for="input_deploy_name">배포명</label>
    <v-row>
      <v-col :cols="11">
        <v-text-field
          id="input_deploy_name"
          v-model="deployName"
          variant="outlined"
          name="inputDeployName"
          height="15"
          density="compact"
          :rules="deployNameRule"
          placeholder="배포명을 입력하세요."
        ></v-text-field>
      </v-col>
      <v-col cols="auto">
        <DefaultButtonComponent title="중복 체크" />
      </v-col>
    </v-row>
    <label for="select_deploy_approve_process">배포 승인 프로세스</label>
    <v-select
      id="select_deploy_approve_process"
      variant="outlined"
      density="compact"
      name="deployApproveProcess"
      :items="deployApproveProcessList"
      item-title="name"
    />
    <br />
    <label for="select_build">빌드</label>
    <v-select id="select_build" name="build" :items="buildList" variant="outlined" density="compact" item-title="name" />
    <label>배포 유형</label>
    <br />
    <v-btn-toggle v-model="selectedDeployType" mandatory class="deploy-toggle-wrapper">
      <v-btn
        v-for="deployType in deployTypeList"
        :key="deployType.id"
        selected-class="selectedDeploy"
        class="deploy-type"
        :color="deployTypeBtnColor"
        :value="deployType.id"
        >{{ deployType.name }}
      </v-btn>
    </v-btn-toggle>
    <DeployShellScriptComponent v-if="selectedDeployType === 'SHELL'" />
    <div v-if="selectedDeployType === 'K8S'">
      <label>프로바이더</label>
      <v-select name="provider" placeholder="빌드를 선택하세요." density="compact" variant="outlined" />
      <label>클러스터</label>
      <v-select name="provider" placeholder="구성 항목을 선택하세" density="compact" variant="outlined" />
      <div style="position: relative; height: 30px">
        <DefaultButtonComponent title="Yaml" class="float-right" size="small" />
      </div>
      <AccordionMenuComponent class="border-t-md" title="기본">
        <label>배포 복사</label>
        <v-text-field density="compact" variant="outlined" />
        <label>네임스페이스</label>
        <v-text-field density="compact" variant="outlined" />
        <v-alert title="목록에서 선택하거나 새롭게 생성 가능 (현재 필터링 적용)" icon="$warning"></v-alert>
        <label>이름</label>
        <v-text-field density="compact" variant="outlined" />
        <label>컨트롤러</label>
        <v-text-field density="compact" variant="outlined" />
        <label>레플리카</label>
        <v-text-field density="compact" variant="outlined" />
        <label>배포 전략</label>
        <v-text-field density="compact" variant="outlined" />
        <label>서비스타입</label>
        <v-text-field density="compact" variant="outlined" />
        <label>포트</label>
        <DeployPortInputComponent v-model="inputPortList" />
        <br />
        <label>도메인</label>
        <v-text-field density="compact" variant="outlined" />
        <DomainInputComponent :disabled="false" />
        <v-row>
          <v-col><label>KEY 파일</label><FileInputButtonComponent /></v-col>
          <v-col><label>CRT 파일</label><FileInputButtonComponent /></v-col>
        </v-row>
      </AccordionMenuComponent>
      <AccordionMenuComponent class="border-t-md" title="Advance">
        <label>imagePullSecrets</label>
        <v-text-field density="compact" variant="outlined" placeholder="Secret을 입력하세요." />
        <label>명령</label>
        <v-text-field density="compact" variant="outlined" placeholder="선택항목" />
        <label>Args</label>
        <v-text-field density="compact" variant="outlined" placeholder="선택항목" />
        <label>환경변수</label>
        <EnvInputComponent v-model="envList" />
        <label>ConfigMap</label>
        <TextCheckBoxInputComponent />
        <label>SecretKey</label>
        <TextCheckBoxInputComponent />
        <label>호스트이름</label>
        <v-text-field density="compact" variant="outlined" />
        <label>노드선택</label>
        <v-text-field density="compact" variant="outlined" />
        <label>HostAliases</label>
        <HostAliasesInputComponent v-model="hostAliaseList" />
      </AccordionMenuComponent>
      <AccordionMenuComponent class="border-t-md" title="Storage">
        <label>볼륨 - PersistentVolumeClaim</label>
        <PersistentVolumeClaimInputComponent v-model="pvcList" />
        <label>볼륨 - HostPath</label>
        <HostPathInputComponent v-model="hostPathList" />
      </AccordionMenuComponent>
      <AccordionMenuComponent title="Resource" class="border-b-md border-t-md">
        <label>Requests</label>
        <CpuMemoryInputComponent />
        <label>Limits</label>
        <CpuMemoryInputComponent class="border-b-md" />
        <div>
          <span>HPA (Horizontal Pod Autoscaling)</span>
        </div>
        <v-label for="maximumReplicaNumber">최대 레플리카</v-label>
        <v-text-field id="maximumReplicaNumber" variant="outlined" />
        <v-label>평균 사용률</v-label>
        <CpuMemoryInputComponent />
      </AccordionMenuComponent>
      <div>
        <div class="inline-block float-right mt-2">
          <v-btn flat color="#7E8299" class="mr-1">취소</v-btn>
          <DefaultButtonComponent title="저장" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { REG_ALLOW_ENG_NUM_HYPHEN } from '@/assets/consts/regex'
import { DEFAULT_BUTTON_COLOR } from '@/assets/consts/consts'
import DefaultButtonComponent from '@/components/common/button/DefaultButtonComponent.vue'
import { ref } from 'vue'
import DeployShellScriptComponent from '@/components/deploy/DeployShellScriptComponent.vue'
import AccordionMenuComponent from '@/components/common/AccordionMenuComponent.vue'
import DeployPortInputComponent from '@/components/deploy/DeployPortInputComponent.vue'
import DomainInputComponent from '@/components/deploy/DomainInputComponent.vue'
import FileInputButtonComponent from '@/components/deploy/FileInputButtonComponent.vue'
import EnvInputComponent from '@/components/deploy/EnvInputComponent.vue'
import TextCheckBoxInputComponent from '@/components/common/input/TextCheckBoxInputComponent.vue'
import HostAliasesInputComponent from '@/components/deploy/HostAliasesInputComponent.vue'
import PersistentVolumeClaimInputComponent from '@/components/deploy/PersistentVolumeClaimInputComponent.vue'
import HostPathInputComponent from '@/components/deploy/HostPathInputComponent.vue'
import CpuMemoryInputComponent from '@/components/deploy/CpuMemoryInputComponent.vue'

const hostPathList = ref([])
const pvcList = ref([])
const hostAliaseList = ref([])
const envList = ref([])
const inputPortList = ref([])
const deployTypeBtnColor = ref(DEFAULT_BUTTON_COLOR)
const selectedDeployType = ref('')
const deployTypeList = ref([
  { id: 'K8S', name: 'K8S' },
  { id: 'SHELL', name: 'SHELL' }
])
const deployName = ref('')
const deployNameRule = ref([
  (v) => !!v || '배포명은 필수 입니다.',
  (v) => (v && REG_ALLOW_ENG_NUM_HYPHEN.test(v)) || '규칙에 맞게 입력 해 주세요.(영문자, 숫자, (-)만 가능)'
])
const deployApproveProcessList = ref([
  { id: 1, name: '1번 프로세스' },
  { id: 2, name: '2번 프로세스' },
  { id: 3, name: '3번 프로세스' }
])
const buildList = ref([
  { id: 1, name: '1번 빌드' },
  { id: 2, name: '2번 빌드' },
  { id: 3, name: '3번 빌드' }
])
</script>

<style scoped>
.deploy-type {
  border: 1px solid gray;
}

.script-component {
  margin-top: 30px;
}

.deploy-toggle-wrapper {
  margin-bottom: 40px;
}
</style>
