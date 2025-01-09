# Button Components Guide

## SBtn

Vuetify의 v-btn을 확장한 커스텀 버튼 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| title | String | No | "" | 버튼 텍스트 |
| to | String | No | null | 라우터 링크 경로 |
| height | String/Number | No | null | 버튼 높이 |
| size | String | No | "default" | 버튼 크기 |
| color | String | No | "blue" | 버튼 색상 |
| icon | String | No | undefined | 아이콘 이름 |

### 스타일 변형

#### Variants

- `elevated`: 배경색이 있는 기본 스타일
- `outlined`: 테두리만 있는 스타일

#### Colors

- `blue`: 파란색 계열 (#036EB8)
- `red`: 빨간색 계열
- `black`: 검정색

### 사용 예시

```vue
<template>
  <!-- 기본 버튼 -->
  <SBtn title="확인" color="blue" />

  <!-- 아웃라인 버튼 -->
  <SBtn
    variant="outlined"
    color="red"
    title="취소"
  />

  <!-- 아이콘 버튼 -->
  <SBtn
    icon="mdi-refresh"
    size="small"
  />

  <!-- 링크 버튼 -->
  <SBtn
    to="/dashboard"
    title="대시보드"
  />
</template>

<script setup>
import { SBtn } from '@';
</script>
```

## SRefreshBtn

날짜와 시간을 표시하고 새로고침 기능을 제공하는 버튼 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| onClickRefresh | Function | Yes | - | 새로고침 클릭 시 실행할 함수 |
| refreshDate | Date | No | new Date() | 갱신 날짜 |
| refreshDateTitle | String | No | "기준일자" | 날짜 표시 앞에 붙는 텍스트 |

### 사용 예시

```vue
<template>
  <SRefreshBtn
    :refresh-date="lastUpdateTime"
    refresh-date-title="최종 수정"
    :on-click-refresh="handleRefresh"
  />
</template>

<script setup>
import { SRefreshBtn } from '@';
import { ref } from 'vue';

const lastUpdateTime = ref(new Date());

const handleRefresh = () => {
  lastUpdateTime.value = new Date();
  // 새로고침 로직 구현
};
</script>
```

### 스타일링

- 날짜 텍스트: 12px, 400 weight
- 새로고침 아이콘: 커서 포인터
- 레이아웃: inline-flex로 정렬
