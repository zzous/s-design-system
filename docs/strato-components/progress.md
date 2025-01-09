# Progress Components Guide

## SGlobalProgress

전체 화면에 대한 로딩 상태를 표시하는 오버레이 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| loadingMessage | String | No | "Check-loading" | 로딩창 메세지 값 |
| modelValue | Boolean | No | false | 로딩 오픈 여부 |
| teleportId | String | No | "destination" | Teleport ID |

### 스타일

- 로딩창 크기: 400px x 234px
- 배경색: 흰색
- 테두리: 1px solid gray
- 메시지 폰트: 18px, bold
- 하단 텍스트: 14px, 500 weight
- 요소 간격: 15px

### 사용 예시

```vue
<template>
  <SGlobalProgress
    v-model="isLoading"
    loading-message="데이터를 불러오는 중입니다"
  />
</template>

<script setup>
import { ref } from 'vue';
import { SGlobalProgress } from '@';

const isLoading = ref(false);

// 로딩 시작
const startLoading = () => {
  isLoading.value = true;
  // 작업 완료 후
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
```

## SProgressCircular

로딩 상태를 표시하는 애니메이션 원형 프로그레스 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| size | Number | No | 50 | 프로그레스 크기 (px) |
| width | Number | No | 6 | 프로그레스 선 두께 (px) |

### 특징

- 그라데이션 효과 (파란색 #1B75BB에서 보라색 #7C0F80)
- 부드러운 회전 애니메이션
- 커스터마이저블한 크기와 선 두께
- SVG 기반 구현

### 사용 예시

#### 기본 사용법

```vue
<template>
  <SProgressCircular />
</template>

<script setup>
import { SProgressCircular } from '@';
</script>
```

#### 크기와 두께 커스터마이징

```vue
<template>
  <SProgressCircular
    :size="80"
    :width="8"
  />
</template>
```

### 애니메이션 상세

- 회전 애니메이션: 1.4초 주기로 연속 회전
- 대시 애니메이션: stroke-dasharray와 stroke-dashoffset을 활용한 부드러운 효과
- 트랜지션: 0.2초의 ease-in-out 효과

### 주의사항

1. SGlobalProgress는 항상 화면 중앙에 고정됩니다.
2. SProgressCircular의 크기는 부모 컨테이너의 제약을 받지 않습니다.
3. 그라데이션 효과는 SVG linearGradient를 사용하여 구현됩니다.
