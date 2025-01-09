# Input Components Guide

## SFileInputBtn

파일 선택을 위한 버튼이 포함된 파일 입력 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| placeholder | String | No | "파일을 선택하세요" | 입력 필드의 플레이스홀더 |
| modelValue | Object/String | No | null | 선택된 파일 객체 |
| buttonText | String | No | "파일선택" | 버튼에 표시될 텍스트 |
| accept | String | No | "*" | 허용되는 파일 타입 |

### 사용 예시

```vue
<template>
  <SFileInputBtn
    v-model="file"
    accept=".jpg,.png"
    button-text="이미지 선택"
  />
</template>

<script setup>
import { SFileInputBtn } from '@';
import { ref } from 'vue';

const file = ref(null);
</script>
```

## SShellScriptInput

쉘 스크립트 입력을 위한 텍스트 에디터 컴포넌트입니다.

### 특징

- 라인 번호 자동 표시
- 자동 높이 조절
- 스크립트 문법 하이라이팅 (계획됨)

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| modelValue | String | Yes | "" | 쉘 스크립트 내용 |
| labelTitle | String | No | "" | 입력 필드 상단에 표시될 라벨 |

### 사용 예시

```vue
<template>
  <SShellScriptInput
    v-model="script"
    label-title="배포 스크립트"
  />
</template>

<script setup>
import { SShellScriptInput } from '@';
import { ref } from 'vue';

const script = ref('');
</script>
```
