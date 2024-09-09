<template>
  <div class='view-wrapper'>
    <label for='input_deploy_name'>배포명</label>
    <v-row>
      <v-col :cols='11'>
        <v-text-field
          id='input_deploy_name'
          name='inputDeployName'
          v-model='deployName'
          height='15'
          density='compact'
          :rules='deployNameRule'
          placeholder='배포명을 입력하세요.'
        ></v-text-field>
      </v-col>
      <v-col cols='auto'>
        <DefaultButtonComponent title='중복 체크' />
      </v-col>
    </v-row>
    <label for='select_deploy_approve_process'>배포 승인 프로세스</label>
    <v-select name='deployApproveProcess' id='select_deploy_approve_process' :items='deployApproveProcessList'
              item-title='name' />
    <br>
    <label for='select_build'>빌드</label>
    <v-select name='build' id='select_build' :items='buildList' item-title='name' />
    <label>배포 유형</label>
    <br>
    <v-btn-toggle v-model='selectedDeployType' mandatory class='deploy-toggle-wrapper'>
      <v-btn selected-class='selectedDeploy' class='deploy-type' :color='deployTypeBtnColor'
             :value='deployType.id' :key='deployType.id' v-for='deployType in deployTypeList'>{{ deployType.name }}
      </v-btn>
    </v-btn-toggle>
    <ShellScriptComponent v-if="selectedDeployType === 'SHELL'" />
    <div v-if="selectedDeployType === 'K8S'">

      <label>프로바이더</label>
      <v-select name='provider' placeholder='빌드를 선택하세요.' />
      <label>클러스터</label>
      <v-select name='provider' placeholder='구성 항목을 선택하세' />
      <DefaultButtonComponent title='Yaml' class='float-right' />

      <v-expansion-panels variant='accordion' multiple>

        <v-expansion-panel
          title='기본'
        >
          <template #text>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </template>
        </v-expansion-panel>
        <v-expansion-panel
          title='Advance'
        >
          <template #text>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </template>
        </v-expansion-panel>
        <v-expansion-panel
          title='Storage'
        >
          <template #text>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </template>
        </v-expansion-panel>
        <v-expansion-panel
          title='Resource'
        >
          <template #text>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </template>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>


  </div>
</template>

<script setup>
import { REG_ALLOW_ENG_NUM_HYPHEN } from '@/assets/consts/regex'
import { DEFAULT_BUTTON_COLOR } from '@/assets/consts/consts'
import DefaultButtonComponent from '@/components/common/button/DefaultButtonComponent.vue'
import { ref } from 'vue'
import ShellScriptComponent from '@/components/deploy/ShellScriptComponent.vue'

const deployTypeBtnColor = ref(DEFAULT_BUTTON_COLOR)
const selectedDeployType = ref('')
const deployTypeList = ref([
  { id: 'K8S', name: 'K8S' },
  { id: 'SHELL', name: 'SHELL' }
])
const deployName = ref('')
const deployNameRule = ref([
  v => !!v || '배포명은 필수 입니다.',
  v => (v && REG_ALLOW_ENG_NUM_HYPHEN.test(v)) || '규칙에 맞게 입력해주세요.(영문자, 숫자, (-)만 가능)'
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