<template>
  <div class="accordion-wrapper">
    <div class="title pl-3 pr-3" :class="{ titleBold: titleBold }">
      {{ title }}
      <v-icon class="float-right" style="top: 10px" icon="mdi-minus-circle" @click="toggleAccordion" />
    </div>
    <div ref="accordion" class="accordion-contents pl-3 pr-3" :style="{ height: accordionHeight }" @transitionend="onTransitionEnd">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  titleBold: {
    type: Boolean,
    default: false
  }
})

const accordion = ref(null)
const isActive = ref(false)
const accordionHeight = ref('0px')

const toggleAccordion = () => {
  if (isActive.value) {
    accordionHeight.value = `${accordion.value.scrollHeight}px` // 현재 높이 설정
    requestAnimationFrame(() => {
      accordionHeight.value = '0px' // 닫히는 애니메이션
      isActive.value = false
    })
  } else {
    accordionHeight.value = `${accordion.value.scrollHeight}px` // 열리는 애니메이션
    isActive.value = true
  }
}

const onTransitionEnd = () => {
  if (isActive.value) {
    accordionHeight.value = 'auto' // 열린 상태에서 auto로 설정
  }
}
</script>

<style scoped>
.accordion-wrapper {
  font-size: 18px;
  line-height: 50px;
  overflow: hidden;
}
.accordion-contents {
  height: 0;
  transition: height 0.5s;
}

.title {
  border: 1px solid;
}
.titleBold {
  font-weight: bold;
}
</style>
