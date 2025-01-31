<template>
  <v-label v-if="labelTitle">
    {{ labelTitle }}
  </v-label>
  <div class="shell-script-wrapper">
    <!-- 라인 번호 표시 영역 -->
    <div class="line-numbers">
      <span v-for="n in lineCnt" :key="n">{{ n }}</span>
    </div>

    <!-- 쉘 스크립트 입력 영역 -->
    <v-textarea
        v-model="shellScript"
        placeholder=""
        auto-grow
        rows="10"
        outlined
        class="shell-script-textarea"
        @input="updateLineCnt"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue'

const shellScript = defineModel({
  type: String,
  default: '',
  required: true,
})
defineProps({
  labelTitle: {
    type: String,
    default: null,
    required: false,
  },
})
const lineCnt = ref(1) // 라인 수
const updateLineCnt = () => {
  // 현재 쉘 스크립트의 줄 수를 업데이트
  lineCnt.value = shellScript.value.split('\n').length
}
updateLineCnt()
</script>

<style lang="scss">
.shell-script-wrapper {
  display: flex;
  align-items: flex-start;
  position: relative;
}

.line-numbers {
  padding: 15px 20px 14px;
  border: 1px solid rgb(0 0 0 / 12%);
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
</style>
