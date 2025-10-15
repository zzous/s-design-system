<template>
  <div class="s-alert">
    <v-snackbar
      v-if="shouldShowAlert"
      :style="alertStyle"
      :model-value="isActive"
      :multi-line="multiLine"
      :timeout="timeout"
      :color="color"
      :height="dynamicHeight"
      elevation="0"
      min-width="600"
      location="top"
      @update:model-value="updateModelValue"
    >
      <slot name="alert-icon" />
      <pre
        ref="titleRef"
        class="s-alert__title"
        :style="{ width: width }"
      >{{ titleName }}</pre>
      <template #actions>
        <s-btn v-if="isClose" :color="'#fff'" variant="text" @click="onClickCloseAlert">Close</s-btn>
      </template>
    </v-snackbar>

    <!-- 높이 계산 중일 때 숨겨진 텍스트 요소 -->
    <div v-if="isActive && !shouldShowAlert" class="s-alert__hidden-measure">
      <pre
        ref="titleRef"
        class="s-alert__title"
        :style="{ width: width }"
      >{{ titleName }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, nextTick, computed } from 'vue';
import SBtn from '../button/SBtn.vue';

const emits = defineEmits(['update:model-value'])

const props = defineProps({
  titleName: {
    type: String,
    default: '',
    description: '알림 내용',
  },
  modelValue: {
    type: Boolean,
    default: false,
    description: '알림 오픈 여부',
  },
  multiLine: {
    type: Boolean,
    default: true,
    description: '최소 높이를 더 높게 설정합니다.',
  },
  color: {
    type: String,
    default: '#036EB8',
    description: '알림 색상',
  },
  height: {
    type: [String, Number],
    default: '48px',
    description: '알림 높이',
  },
  width: {
    type: [String, Number],
    default: '450px',
    description: '알림 넓이',
  },
  timeout: {
    type: Number,
    default: 5000,
    description: '알림 오픈 시간',
  },
  isClose: {
    type: Boolean,
    default: true,
    description: 'Close 버튼 노출 유무',
  },
  alertStyle: {
    type: Object,
    default: () => {
      return {}
    },
  },
})

const isActive = ref(props.modelValue)
const titleRef = ref(null)
const calculatedHeight = ref(48)
const isCalculating = ref(false)
const isHeightCalculated = ref(false)

// 동적 높이 계산
const dynamicHeight = computed(() => {
  if (props.multiLine) {
    // 최소 높이만 보장하고 최대 높이 제한 제거
    const minHeight = 48
    const height = Math.max(calculatedHeight.value, minHeight)
    // console.log('dynamicHeight 계산:', {
    //   calculatedHeight: calculatedHeight.value,
    //   finalHeight: height,
    //   multiLine: props.multiLine,
    //   isHeightCalculated: isHeightCalculated.value
    // })
    return `${height}px`
  }
  return props.height
})

// 알림 표시 여부 결정
const shouldShowAlert = computed(() => {
  if (!isActive.value) return false

  // multiLine이 아닌 경우 즉시 표시
  if (!props.multiLine) return true

  // multiLine인 경우 높이 계산 완료 후 표시
  return isHeightCalculated.value
})

const calculateTextHeight = async () => {
  // console.log('calculateTextHeight 시작:', {
  //   titleRef: !!titleRef.value,
  //   isActive: isActive.value,
  //   isCalculating: isCalculating.value
  // })

  if (!titleRef.value || !isActive.value || isCalculating.value) {
    console.log('calculateTextHeight 조건 불만족으로 종료')
    return
  }

  isCalculating.value = true
  isHeightCalculated.value = false

  try {
    await nextTick()

    // DOM이 완전히 렌더링될 때까지 대기
    await new Promise(resolve => setTimeout(resolve, 100))

    // 텍스트 요소의 실제 높이를 측정
    const textHeight = titleRef.value.scrollHeight
    const clientHeight = titleRef.value.clientHeight

    console.log('텍스트 높이 측정:', {
      scrollHeight: textHeight,
      clientHeight: clientHeight,
      textContent: titleRef.value.textContent?.substring(0, 50) + '...'
    })

    // 기본 패딩과 여백을 고려하여 최소 높이 계산
    const minHeight = 48
    const padding = 26 // 상하 패딩 13px * 2
    const newHeight = Math.max(minHeight, textHeight + padding)

    // 높이 변화가 있을 때만 업데이트 (임계값 완화)
    if (Math.abs(newHeight - calculatedHeight.value) > 2) {
      console.log('높이 업데이트:', {
        oldHeight: calculatedHeight.value,
        newHeight: newHeight,
        textHeight: textHeight,
        difference: Math.abs(newHeight - calculatedHeight.value)
      })
      calculatedHeight.value = newHeight
    } else {
      console.log('높이 변화 미미하여 업데이트 스킵:', {
        oldHeight: calculatedHeight.value,
        newHeight: newHeight,
        difference: Math.abs(newHeight - calculatedHeight.value)
      })
    }

    // 높이 계산 완료 표시
    isHeightCalculated.value = true
    console.log('높이 계산 완료:', calculatedHeight.value)
  } finally {
    isCalculating.value = false
  }
}

const updateModelValue = value => {
  isActive.value = value
  emits('update:model-value', value)

  if (value) {
    // multiLine이 아닌 경우 즉시 표시
    if (!props.multiLine) {
      isHeightCalculated.value = true
    } else {
      // multiLine인 경우 높이 계산 후 표시
      isHeightCalculated.value = false
      setTimeout(() => {
        calculateTextHeight()
      }, 300)
    }
  } else {
    // 알림이 닫힐 때 상태 초기화
    isHeightCalculated.value = false
  }
}

const onClickCloseAlert = () => {
  isActive.value = false
  emits('update:model-value', false)
}

watchEffect(() => {
  isActive.value = props.modelValue

  if (props.modelValue) {
    if (props.multiLine) {
      // multiLine인 경우 높이 계산 후 표시
      isHeightCalculated.value = false
      setTimeout(() => {
        calculateTextHeight()
      }, 300)
    } else {
      // multiLine이 아닌 경우 즉시 표시
      isHeightCalculated.value = true
    }
  } else {
    // 알림이 닫힐 때 상태 초기화
    isHeightCalculated.value = false
  }
})

// titleName이 변경될 때도 높이 재계산
watchEffect(() => {
  if (isActive.value && props.multiLine) {
    isHeightCalculated.value = false
    setTimeout(() => {
      calculateTextHeight()
    }, 300)
  }
})

</script>

<style lang="scss">
@import url('./SAlert.scss');
</style>
