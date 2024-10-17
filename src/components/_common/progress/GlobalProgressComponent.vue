<!-- 전역 로딩 바 -->
<template>
  <v-overlay
    :model-value="modelValue"
    class="align-center justify-center"
    contained
    persistent
    no-click-animation
    scrim="transparent"
    z-index="9999"
  >
    <div class="s-loading">
      <div class="s-loading__message">
        {{ loadingMessage }}
      </div>
      <div class="s-loading__spinner">
        <s-progress-circular />
      </div>
      <div class="s-loading__text">
        Please wait...
      </div>
    </div>
  </v-overlay>
</template>

<script setup>
import SProgressCircular from '@/components/_common/progress/CustomProgressCircularComponent.vue'
defineProps({
  loadingMessage: {
    type: String,
    default: 'Check-loading',
    description: '로딩창 메세지 값',
  },
  modelValue: {
    type: Boolean,
    default: false,
    description: '로딩 오픈 여부',
  }
})
</script>

<style lang="scss" scoped>
.s-loading {
  $this: 's-loading';
  z-index: 100000;
  position: fixed;
  background-color: white;
  width: 400px;
  height: 234px;
  border: 1px solid $s-default--gray-5;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  top: -50px;


  .#{$this}__message {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 26px;
  }
  .#{$this}__spinner {
    text-align: center;
  }
  .#{$this}__text {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
  }
}
</style>