# React 마이그레이션 설정 완료 ✅

## 완료된 작업

1. ✅ **React + TypeScript 환경 설정**
   - React 18.3.1
   - TypeScript 5.7.3
   - Vite React 플러그인

2. ✅ **Storybook React 설정**
   - `.storybook/main.js` - React용으로 변경
   - `.storybook/preview.js` - React용으로 변경

3. ✅ **개발 환경 설정**
   - `src/main.tsx` - React 진입점
   - `src/App.tsx` - React 앱 예시
   - `src/components/example/ExampleButton.tsx` - 컴포넌트 변환 예시

## 사용 방법

### Storybook 실행

```bash
pnpm run sb
```

브라우저에서 `http://localhost:6006` 접속

### 개발 서버 실행

```bash
pnpm run dev
```

브라우저에서 `http://localhost:5173` 접속

## 다음 단계

### Table 컴포넌트 변환 시

1. **ag-Grid 사용**
   - `ag-grid-react` 라이브러리 사용
   - 엔터프라이즈급 그리드 기능 제공
   - 기존 SCSS 스타일(`SDataTable.scss`) 재사용 가능

2. **변환 가이드 참고**
   - `MIGRATION_GUIDE.md` - Vue → React 변환 가이드
   - `TABLE_MIGRATION_GUIDE.md` - **ag-Grid를 사용한 Table 컴포넌트 변환 가이드** ⭐
   - `src/components/example/ExampleButton.tsx` - 변환 예시

3. **주요 변환 포인트**
   - Props: `defineProps` → TypeScript Interface
   - 이벤트: `@click` → `onClick`
   - 조건부: `v-if` → `{condition && <div>}`
   - 반복: `v-for` → `{items.map()}`
   - 상태: `ref()` → `useState()`
   - 슬롯: `<template #slot>` → ag-Grid의 `cellRenderer` 사용
   - 정렬/필터링: ag-Grid 내장 기능 활용

## 파일 구조

```
src/
├── components/
│   ├── example/
│   │   ├── ExampleButton.tsx      # React 컴포넌트 예시
│   │   ├── ExampleButton.scss
│   │   └── ExampleButton.stories.tsx
│   └── table/                      # 나중에 변환할 컴포넌트
│       └── SDataTable.vue          # Vue (변환 예정)
├── App.tsx                         # React 앱
├── main.tsx                        # React 진입점
└── styles/                         # 공통 스타일 (그대로 사용 가능)
```

## 참고사항

- 기존 Vue 컴포넌트들은 그대로 유지되어 있습니다
- 필요한 컴포넌트만 점진적으로 변환하면 됩니다
- SCSS 파일은 그대로 사용 가능합니다
- 유틸리티 함수들(`src/utils/`)도 그대로 사용 가능합니다
