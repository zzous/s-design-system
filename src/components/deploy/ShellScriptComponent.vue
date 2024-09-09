<template>
  <div>
    <div class='label-wrapper'>
      <label>스크립트</label>
      <DefaultButtonComponent title='스크립트 생성'  class='float-right'/>
    </div>
    <div class='shell-script-wrapper'>
      <!-- 라인 번호 표시 영역 -->
      <div class='line-numbers'>
        <span v-for='n in lineCount' :key='n'>{{ n }}</span>
      </div>

      <!-- 쉘 스크립트 입력 영역 -->
      <v-textarea
        v-model='shellScript'
        placeholder=''
        auto-grow
        rows='10'
        outlined
        class='shell-script-textarea'
        @input='updateLineCount'
      ></v-textarea>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DefaultButtonComponent from '@/components/common/button/DefaultButtonComponent.vue'

const shellScript = ref('') // 쉘 스크립트 내용
const lineCount = ref(1) // 라인 수

const updateLineCount = () => {
  // 현재 쉘 스크립트의 줄 수를 업데이트
  lineCount.value = shellScript.value.split('\n').length
}
</script>

<style scoped>

.shell-script-wrapper {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.line-numbers {
  padding: 15px 20px 14px 20px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-right: none;
  background-color: #f5f5f5;
  text-align: right;
  user-select: none;
  min-height: 271px;
}

.line-numbers span {
  display: block;
  text-align: right;
  line-height: 1.5;
}

.shell-script-textarea {
  flex-grow: 1;
}
.label-wrapper {
  height: 35px;
  line-height: 35px;
  padding-right: 50px;
}
</style>