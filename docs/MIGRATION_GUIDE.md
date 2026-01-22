# Vue → React 마이그레이션 가이드

## 현재 상태

- ✅ Vite + React + TypeScript 설정 완료
- ✅ Storybook React 설정 완료
- ⏳ 컴포넌트 변환 (필요시 진행)

## Vue → React 변환 가이드

### 1. 컴포넌트 구조 변환

#### Vue (이전)
```vue
<template>
  <div class="component">
    <button @click="handleClick">{{ title }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String
})

const handleClick = () => {
  console.log('clicked')
}
</script>
```

#### React (변환 후)
```tsx
import React from 'react';
import './Component.scss';

interface ComponentProps {
  title?: string;
}

export const Component: React.FC<ComponentProps> = ({ title }) => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="component">
      <button onClick={handleClick}>{title}</button>
    </div>
  );
};
```

### 2. 주요 변환 포인트

#### Props
- Vue: `defineProps({ title: String })`
- React: `interface Props { title?: string }`

#### 이벤트 핸들러
- Vue: `@click="handleClick"`
- React: `onClick={handleClick}`

#### 조건부 렌더링
- Vue: `v-if="condition"`
- React: `{condition && <div>...</div>}`

#### 반복 렌더링
- Vue: `v-for="item in items"`
- React: `{items.map(item => <div key={item.id}>...</div>)}`

#### 클래스 바인딩
- Vue: `:class="{ active: isActive }"`
- React: `className={isActive ? 'active' : ''}`

#### 상태 관리
- Vue: `const count = ref(0)`
- React: `const [count, setCount] = useState(0)`

### 3. Table 컴포넌트 변환 시 참고사항

Table 컴포넌트는 복잡하므로 다음을 고려하세요:

1. **순수 React로 구현**
   - UI 라이브러리 없이 순수 React + TypeScript로 구현
   - 기존 SCSS 스타일(`SDataTable.scss`) 재사용
   - Vuetify의 v-data-table 기능을 직접 구현

2. **주요 기능 구현**
   - 정렬 (sorting): `useState`로 정렬 상태 관리
   - 필터링 (filtering): `useMemo`로 필터링된 데이터 계산
   - 페이징 (pagination): `useState`로 페이지 상태 관리
   - 선택 (selection): `useState`로 선택된 항목 관리
   - 리사이즈 가능한 컬럼: `onMouseDown` 이벤트로 구현

3. **예시 컴포넌트**
   - `src/components/example/ExampleButton.tsx` 참고
   - 기존 Vue 컴포넌트의 로직을 React Hooks로 변환

## 다음 단계

1. 의존성 설치: `npm install` 또는 `pnpm install`
2. Storybook 실행: `npm run sb`
3. 필요한 컴포넌트만 점진적으로 변환

