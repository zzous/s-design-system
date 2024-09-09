<template>
  <div class='view-wrapper'>
    <label for='input_deploy_name'>배포명</label>
    <v-form>
      <v-row>
        <v-col :cols='11'>
          <v-text-field
            id='input_deploy_name'
            name='inputDeployName'
            v-model="deployName"
            height='15'
            density='compact'
            :rules='deployNameRule'
            placeholder='배포명을 입력하세요.'
          ></v-text-field>
        </v-col>
        <v-col cols='auto'>
          <DefaultButtonComponent title='중복 체크'/>
        </v-col>
      </v-row>
      <label for='select_deploy_approve_process'>배포 승인 프로세스</label>
      <v-select name='deployApproveProcess' id='select_deploy_approve_process' :items='deployApproveProcessList' item-title='name'/>
      <br>
      <label for='select_build'>빌드</label>
      <v-select name='build' id='select_build' :items='buildList' item-title='name'/>
      <label>배포 유형</label>
      <br>
      <v-btn-toggle v-model="selectedDeployType" mandatory>
        <v-btn selected-class='selectedDeploy' class='deploy-type' :color='deployTypeBtnColor'
               :value="deployType.id" :key='deployType.id' v-for='deployType in deployTypeList'>{{ deployType.name }}</v-btn>
      </v-btn-toggle>
    </v-form>


  </div>
</template>

<script setup>
import { REG_ALLOW_ENG_NUM_HYPHEN } from '@/assets/consts/regex'
import { DEFAULT_BUTTON_COLOR } from '@/assets/consts/consts'
import DefaultButtonComponent from '@/components/common/button/DefaultButtonComponent.vue'
import { ref } from 'vue'

const deployTypeBtnColor = ref(DEFAULT_BUTTON_COLOR)
const selectedDeployType = ref('')
const deployTypeList = ref([
  { id: 1, name: 'K8S' },
  { id: 2, name: 'SHELL' }
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
</style>