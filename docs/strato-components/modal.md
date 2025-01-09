# Modal Components Guide

## SModal

다양한 크기와 스타일을 지원하는 커스텀 모달 다이얼로그입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| title | String | No | "" | 모달 헤더 이름 |
| className | Object/String | No | "" | 클래스 명 |
| modalWidth | String | No | "" | 모달 넓이 |
| modalHeight | String | No | "" | 모달 높이 |
| modelValue | Boolean | No | false | 모달 오픈 여부 |
| isWhite | Boolean | No | false | 모달 헤드 색깔 여부 |
| hideHeader | Boolean | No | false | 헤더 유무 |
| teleportId | String | No | "destination" | Teleport ID |
| size | String | No | "medium" | 모달 크기 |

### Slots

- `buttons`: 모달 트리거 버튼
- `default`: 모달 본문 내용
- `footer`: 모달 하단 영역
- `header-btn-append`: 헤더 우측 추가 버튼

### Events

- `update:model-value`: 모달 상태 변경 시 발생

### 크기 옵션

- `x-small`: 460px
- `small`: 500px
- `medium`: 1000px
- `large`: 1300px
- `x-large`: 1450px

### 사용 예시

```vue
<template>
  <SModal
    v-model="isOpen"
    title="모달 제목"
    size="medium"
    :is-white="true"
  >
    <template #buttons="{ props }">
      <v-btn v-bind="props">모달 열기</v-btn>
    </template>

    <template #default>
      <div>모달 내용</div>
    </template>

    <template #footer>
      <div class="d-flex justify-end pa-4">
        <SBtn title="저장" @click="handleSave" />
      </div>
    </template>
  </SModal>
</template>

<script setup>
import { ref } from 'vue';
import { SModal, SBtn } from '@';

const isOpen = ref(false);
const handleSave = () => {
  // 저장 로직
  isOpen.value = false;
};
</script>
```

## SConfirm

사용자 확인이 필요한 작업에 사용되는 모달 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| contents | String | No | "" | 컨펌창 내용 |
| modelValue | Boolean | No | false | 컨펌창 오픈 여부 |
| teleportId | String | No | "destination" | Teleport ID |
| confirmButtonText | String | No | "확인" | 확인 버튼의 텍스트 |
| cancelButtonText | String | No | "취소" | 취소 버튼의 텍스트 |
| noCancel | Boolean | No | false | 취소 버튼 숨김 여부 |

### Events

- `update:model-value`: 모달 상태 변경 시 발생
- `click:confirm`: 확인 버튼 클릭 시 발생
- `click:cancel`: 취소 버튼 클릭 시 발생

### 스타일

- 모달 너비: 446px
- 최소 내용 높이: 130px
- 버튼 크기: 110px x 36px
- 내용 텍스트: 중앙 정렬, pre-line

### 사용 예시

```vue
<template>
  <SConfirm
    v-model="showConfirm"
    contents="정말 삭제하시겠습니까?"
    confirm-button-text="삭제"
    @click:confirm="handleDelete"
    @click:cancel="handleCancel"
  />
</template>

<script setup>
import { ref } from 'vue';
import { SConfirm } from '@';

const showConfirm = ref(false);

const handleDelete = () => {
  // 삭제 로직
  showConfirm.value = false;
};

const handleCancel = () => {
  showConfirm.value = false;
};
</script>
```

### 주의사항

1. SModal의 size prop에 따라 내부 폼 요소의 크기가 자동으로 조정됩니다.
2. SConfirm은 항상 중앙에 위치하며 크기가 고정되어 있습니다.
3. 모달 내용이 긴 경우 자동으로 스크롤이 생성됩니다 (최대 높이: 700px).
