# Form Components Usage Guide

## SFormTable & SFormItem

SFormTable과 SFormItem은 폼 레이아웃을 구성하기 위한 컴포넌트입니다. Vuetify의 form 컴포넌트들과 함께 사용할 수 있습니다.

### 기본 사용법

```vue

<template>
<SFormTable>
<SFormItem
label="이름"
required
>
<VTextField
placeholder="이름을 입력하세요"
variant="outlined"
density="compact"
hide-details="auto"
/>
</SFormItem>
</SFormTable>
</template>
<script setup>
import { SFormTable, SFormItem } from '@';
import { VTextField } from 'vuetify/components';
</script>
```

### Props

#### SFormItem Props

| Prop 이름 | 타입 | 기본값 | 설명 |
|-----------|------|--------|------|
| label | String | '' | 폼 항목의 라벨 텍스트 |
| required | Boolean | false | 필수 입력 항목 여부 |
| showLabel | Boolean | true | 라벨 표시 여부 |
| className | String | '' | 추가 CSS 클래스 |
| contentClass | String | '' | 콘텐츠 영역 CSS 클래스 |
| name | String | '' | validation 체크용 필드명 |

### Slots

#### SFormItem Slots

| Slot 이름 | 설명 |
|-----------|------|
| default | 메인 입력 필드 영역 |
| outer-append | 입력 필드 우측에 추가 요소 배치 |

### 사용 예시

```vue
<template>
  <SFormTable>
    <!-- 기본 텍스트 입력 필드 -->
    <SFormItem
    label="이름"
    required
    >
      <VTextField
      placeholder="이름을 입력하세요"
      variant="outlined"
      density="compact"
      hide-details="auto"
      />
        <!-- outer-append 슬롯 사용 예시 -->
        <template #outer-append>
          <SBtn
          color="black"
          size="small"
          title="중복 체크"
          />
        </template>
      </SFormItem>
      <!-- Select 입력 필드 -->
      <SFormItem
      label="구분"
      required
      >
      <VSelect
      :items="items"
      item-title="title"
      item-value="value"
      placeholder="구분을 선택하세요"
      variant="outlined"
      density="compact"
      hide-details="auto"
      />
    </SFormItem>
  </SFormTable>
</template>
<script setup>
import { SFormTable, SFormItem } from '@';
import { VTextField, VSelect } from 'vuetify/components';
import { SBtn } from '@';
const items = [
  { title: 'Option 1', value: '1' },
  { title: 'Option 2', value: '2' },
  { title: 'Option 3', value: '3' }
];
</script>
```

### 주의사항

1. SFormItem은 반드시 SFormTable 내부에서 사용해야 합니다.
2. Vuetify 컴포넌트와 함께 사용할 때는 density="compact"와 hide-details="auto" 속성을 추가하는 것을 권장합니다.
3. 필수 입력 항목의 경우 required prop을 설정하면 라벨 옆에 * 표시가 자동으로 추가됩니다.
