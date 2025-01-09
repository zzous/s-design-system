# Editor Components Guide

## SScriptEditor

코드 에디터 컴포넌트입니다. CodeMirror 6를 기반으로 하며, JavaScript와 YAML 코드 편집을 지원합니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| modelValue | String | No | "" | 에디터 내용 |
| height | String/Number | No | 0 | 에디터 높이 (px) |
| readonly | Boolean | No | false | 읽기 전용 모드 설정 |
| lang | String | No | null | 코드 언어 설정 (yaml 등) |

### 기능

- 자동 포커스
- 탭 들여쓰기 지원
- 탭 크기: 2 spaces
- 구문 강조 (JavaScript, YAML)
- One Dark 테마 (읽기 전용이 아닐 때)
- 기본 키보드 단축키 지원

### 스타일

- 읽기 전용 모드: 투명 배경
- 편집 모드: 어두운 배경 (#282c34)
- 스크롤 가능한 wrapper

### 사용 예시

#### 기본 JavaScript 에디터

```vue
<template>
  <SScriptEditor
    v-model="code"
    :height="300"
  />
</template>

<script setup>
import { SScriptEditor } from '@';
import { ref } from 'vue';

const code = ref('// 여기에 코드를 작성하세요');
</script>
```

#### YAML 에디터

```vue
<template>
  <SScriptEditor
    v-model="yamlCode"
    :height="400"
    lang="yaml"
  />
</template>

<script setup>
import { SScriptEditor } from '@';
import { ref } from 'vue';

const yamlCode = ref(`
apiVersion: v1
kind: Pod
metadata:
  name: example
`);
</script>
```

#### 읽기 전용 모드

```vue
<template>
  <SScriptEditor
    v-model="code"
    :readonly="true"
    :height="200"
  />
</template>
```

### 주의사항

1. height prop을 설정하지 않으면 에디터가 내용에 맞춰 자동으로 크기가 조절됩니다.
2. readonly 모드에서는 One Dark 테마가 적용되지 않습니다.
3. lang prop이 'yaml'일 때만 YAML 구문 강조가 활성화됩니다.
