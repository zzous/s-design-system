# Alert Component Guide

## SAlert

상단에 표시되는 알림 메시지 컴포넌트입니다. Vuetify의 v-snackbar를 기반으로 합니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| titleName | String | No | "" | 알림 내용 |
| modelValue | Boolean | No | false | 알림 오픈 여부 |
| multiLine | Boolean | No | false | 최소 높이를 더 높게 설정 |
| color | String | No | "#036EB8" | 알림 색상 |
| height | String/Number | No | "48px" | 알림 높이 |
| width | String/Number | No | "450px" | 알림 넓이 |
| timeout | Number | No | 5000 | 알림 오픈 시간(ms) |
| isClose | Boolean | No | true | Close 버튼 노출 유무 |
| alertStyle | Object | No | {} | 추가 스타일 객체 |

### Slots

- `alert-icon`: 알림 아이콘 영역
- `actions`: 기본 Close 버튼 대신 사용할 액션 버튼 영역

### Events

- `update:model-value`: 알림 표시 상태가 변경될 때 발생

### 기본 사용 예시

```vue
<template>
  <SAlert
    v-model="showAlert"
    title-name="알림 메시지입니다."
    color="success"
  />
</template>

<script setup>
import { SAlert } from '@';
import { ref } from 'vue';

const showAlert = ref(false);
</script>
```

### 커스텀 아이콘 사용 예시

```vue
<template>
  <SAlert
    v-model="showAlert"
    title-name="경고 메시지입니다."
    color="error"
  >
    <template #alert-icon>
      <v-icon>mdi-alert</v-icon>
    </template>
  </SAlert>
</template>
```

### 커스텀 액션 버튼 예시

```vue
<template>
  <SAlert
    v-model="showAlert"
    title-name="확인이 필요한 메시지입니다."
    :is-close="false"
  >
    <template #actions>
      <s-btn color="white" variant="text" @click="handleConfirm">
        확인
      </s-btn>
      <s-btn color="white" variant="text" @click="handleCancel">
        취소
      </s-btn>
    </template>
  </SAlert>
</template>
```

### 스타일링

컴포넌트는 기본적으로 다음과 같은 스타일이 적용됩니다:

- 중앙 정렬된 콘텐츠
- 아이콘과 텍스트 사이 9px 마진
- 패딩: 13px 19px
- 폰트: 500 weight, 15px 크기, 흰색
