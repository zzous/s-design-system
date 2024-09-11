<template>
  <div class="domain-input-wrapper">
    <v-row>
      <v-col class="small-col">
        <v-select v-model="selectedProtocol" :items="protocolList" :disabled="disabled" />
      </v-col>
      <v-col class="large-col">
        <v-text-field placeholder="도메인을 입력하세요" :disabled="disabled" />
      </v-col>
    </v-row>
    <div class="error-message-wrapper">
      <span class="error-message">규칙에 맞게 입력해주세요 (영문자, 숫자, (.), (_), (-) 만 가능)</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const protocolList = ref(['http://', 'https://'])
const selectedProtocol = ref('http://')
defineProps({
  disabled: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.large-col {
  flex: 1; /* 남은 공간을 균등하게 나누기 */
  max-width: calc(100%); /* 4개 열을 동일하게 배치 */
  padding-left: 0;
}
.small-col {
  flex: 0 0 8%; /* 작은 칸은 5%로 고정 */
  padding-right: 0;
}
.domain-input-wrapper {
  position: relative;
}

.error-message {
  position: absolute;
  color: red;
  font-size: 12px;
  bottom: 0;
}
</style>
