# Containment Components Guide

## SEmpty

빈 상태나 데이터가 없는 상태를 표시하는 컨테이너 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| title | String | No | "" | empty 제목 |
| description | String | No | "" | empty 내용 |
| elevation | Number/String | No | undefined | 카드의 입체감 조절 0~24까지 가능 |
| outlined | Boolean | No | true | 카드의 외곽선 설정 |
| shadowed | Boolean | No | true | 카드에 그림자 효과 부여 on/off |

### Slots

- `default`: 카드 내부에 추가할 커스텀 콘텐츠

### 스타일

- 기본 높이: 80px
- 제목 텍스트: 14px, bold
- 내용 텍스트: 12px, 500 weight
- 테두리: 점선 스타일
- 레이아웃: flex, 중앙 정렬

### 사용 예시

#### 기본 사용법

```vue
<template>
  <SEmpty
    title="데이터 없음"
    description="표시할 데이터가 없습니다."
    :elevation="2"
  />
</template>

<script setup>
import { SEmpty } from '@';
</script>
```

#### 커스텀 콘텐츠 추가

```vue
<template>
  <SEmpty
    title="검색 결과 없음"
    description="검색 결과가 없습니다."
  >
    <template #default>
      <v-btn color="primary" size="small">
        새로 만들기
      </v-btn>
    </template>
  </SEmpty>
</template>
```

### 주의사항

1. elevation 값은 0에서 24 사이의 값만 사용 가능합니다.
2. outlined와 shadowed 속성은 동시에 사용 가능합니다.
3. 높이는 기본 80px로 고정되어 있으며, 필요한 경우 스타일 오버라이드가 필요합니다.
