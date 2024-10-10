<template>
  <v-img
    class="s-image"
    :class="{ ...className }"
    :alt="alt"
    :aspect-ratio="aspectRatio"
    :cover="cover"
    :eager="eager"
    :gradient="gradient"
    :lazy-src="
      (lazySrc && `${publicPath}/assets/images/` + lazySrc) || lazySrcUrl
    "
    :options="options"
    :sizes="sizes"
    :src="(src && `${publicPath}/assets/images/` + src) || srcUrl"
    :srcset="srcset"
    :transition="transition"
    :width="width"
    v-bind="bind"
    @error="onError"
    @load="onLoad"
    @loadstart="onLoadStart"
  >
    <template #default>
      <slot name="default" />
    </template>
    <template #placeholder>
      <slot name="placeholder" />
    </template>
  </v-img>
</template>

<script setup>
const tag = '[Image]'

import { computed } from 'vue'

const emits = defineEmits(['error'])

defineProps({
  /*
    @brief 클래스 이름 값 할당
    @date 2021/11/04
    @example
    {
        클래스 이름 : {
        타입: '',
        필수유무: Boolean
        디폴트: 값
        }
    }
    */
  bind: {
    type: Object,
    default: undefined,
    description: 'v-bind 옵션값',
  },
  onProps: {
    type: Object,
    default: undefined,
    description: 'v-on 옵션값',
  },
  className: {
    type: Object,
    description: '클래스 이름 값 할당',
    isActive: {
      type: Boolean,
      description: '액티브 유무',
    },
    default: undefined,
  },
  alt: {
    type: String,
    default: undefined,
    description: '스크린 리더용 대체 텍스트',
  },
  aspectRatio: {
    type: [String, Number],
    default: undefined,
    description:
      '너비/높이로 계산되므로 1920x1080px 이미지의 경우 1.7778이 됨. 생략하면 자동으로 계산',
  },
  // contain: {
  //   type: Boolean,
  //   default: false,
  //   description: '크롭되는 이미지 사이즈를 예방함.',
  // },
  // contentClass: {
  //   type: String,
  //   default: undefined,
  //   description: '반응형 콘텐츠 div에 사용자 지정 클래스 적용',
  // },
  cover: {
    type: Boolean,
    default: false,
    description: '전체 컨테이너를 덮도록 배경 이미지의 크기를 조정합니다.',
  },
  // dark: {
  //   type: Boolean,
  //   default: false,
  //   description: '구성 요소에 어두운 테마 변형을 적용',
  // },
  eager: {
    type: Boolean,
    default: false,
    description: '마운트 시 구성 요소 콘텐츠를 강제로 렌더링',
  },
  gradient: {
    type: String,
    default: undefined,
    description: '이미지에 그라디언트를 만든다. linear-gradient 만 서포트',
  },
  lazySrc: {
    type: String,
    default: undefined,
    description:
      '기본 이미지가 로드되기를 기다리는 동안 표시할 항목으로 일반적으로 base64로 인코딩된 작은 축소판',
  },
  lazySrcUrl: {
    type: String,
    default: undefined,
    description: '기본 경로가 아닌 경로에서 가져올 lazyload 이미지 경로',
  },
  options: {
    type: Object,
    default: () => ({
      root: undefined,
      rootMargin: undefined,
      threshold: undefined,
    }),
    description: 'Intersection ovserver 생성자에 전달되는 옵션',
  },
  sizes: {
    type: String,
    default: undefined,
    description: 'srcset과 함께 사용.',
  },
  src: {
    type: [String, Object],
    default: '', // { src: String, srcset: String, lazySrc: String, aspect: Number }
    description: '이미지 url',
  },
  srcUrl: {
    type: String,
    default: undefined,
    description: '기본 경로가 아닌 경로에서 가져올 이미지 경로',
  },
  srcset: {
    type: String,
    default: undefined,
    description: '장치 크기에 따라 사용할 대체 이미지',
  },
  transition: {
    type: String,
    default: 'fade-transition',
    description: 'lazy-src에서 src로 전환할 때 사용할 전환',
  },
  width: {
    type: [String, Number],
    default: undefined,
    description: '구성 요소의 너비를 설정',
  },
})
const publicPath = computed(() => {
  // return import.meta.env.VITE_BASE_PUBLIC_URL
  return '/devops'
})
/*
    @brief 에러 발생 함수
    @date 2021/11/09
    @return
    @param
    - event: EventTarget(이벤트 값)
*/
const onError = (event) => {
  console.log(tag, 'onError')
  emits('error', event)
}
/*
    @brief 이미지 로드가 완료 되었을 때 호출 되는 함수
    @date 2021/11/09
    @return
    @param
    - event: EventTarget(이벤트 값)
*/
const onLoad = () =>{}
/*
    @brief 이미지 로드가 시작될 떄 호출되는 함수
    @date 2021/11/09
    @return
    @param
    - event: EventTarget(이벤트 값)
*/
const onLoadStart = () => {}
/*
    @brief 클릭 이벤트 함수
    @date 2021/11/08
    @return
    @param
    - event: EventTarget(이벤트 값)
*/
</script>

<style lang="scss">
.s-image {
&.with-btn {
    .v-responsive__content {
    width: 20px !important;
    max-width: 100px;
    }
}
}
</style>
