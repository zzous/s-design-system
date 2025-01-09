# SAccordionMenu Component Guide

## 개요

SAccordionMenu는 접었다 펼 수 있는 아코디언 스타일의 메뉴 컴포넌트입니다.
클릭하여 내용을 보여주거나 숨길 수 있으며, 부드러운 애니메이션 효과가 적용됩니다.

## 컴포넌트 정보

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| title | String | Yes | - | 아코디언 메뉴의 제목 |
| titleBold | Boolean | No | false | 제목을 굵게 표시할지 여부 |

### Slots

| Slot 이름 | 설명 |
|-----------|------|
| default | 아코디언 내부에 표시될 콘텐츠 |

### 스타일

- 기본 폰트 크기: 18px
- 라인 높이: 50px
- 애니메이션 시간: 0.5초

## 사용 예시

### 기본 사용법

```vue
<template>
  <SAccordionMenu title="기본 메뉴">
   <div>아코디언 내부 콘텐츠</div>
  </SAccordionMenu>
</template>
<script setup>
import { SAccordionMenu } from '@';
</script>
```

### 굵은 제목으로 사용

```vue
<template>
  <SAccordionMenu
  title="굵은 제목 메뉴"
  :titleBold="true"
  >
    <div>아코디언 내부 콘텐츠</div>
  </SAccordionMenu>
</template>
```

## 기능

- 클릭 시 부드러운 펼침/접힘 애니메이션
- 우측에 화살표 아이콘으로 상태 표시
- 펼쳐진 상태: 아래 화살표
- 접힌 상태: 오른쪽 화살표

## 주의사항

1. title prop은 필수값입니다.
2. 내부 콘텐츠의 높이는 자동으로 계산됩니다.
3. Vuetify의 v-icon 컴포넌트를 사용하므로, Vuetify가 설치되어 있어야 합니다.
