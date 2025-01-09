# Table Components Guide

## SCardTable

카드 형태로 데이터를 표시하는 테이블 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| itemValue | String | No | "id" | 선택된 아이템의 value 값 |
| itemTitle | String | No | undefined | title이 될 item 값 |
| datas | Array | No | [] | 테이블에 표시될 데이터 배열 |
| headers | Array | No | [] | key, title 값으로 구성된 헤더 배열 |
| itemPerPage | Number/String | No | 5 | 페이지당 표시할 아이템 수 |
| search | String/Array | No | undefined | 검색어 또는 key:value Object를 포함한 검색 배열 |
| showSelect | Boolean | No | false | 선택 체크박스 표시 여부 |

### Events

- `update:page`: 페이지 변경 시 발생
- `update:selected`: 아이템 선택 시 발생

### Slots

- `table-select`: 선택 체크박스 커스텀 슬롯
- `table-expand`: 확장 영역 커스텀 슬롯
- `expanded-row`: 확장된 행 컨텐츠 슬롯
- `empty-content`: 데이터가 없을 때 표시될 컨텐츠

### 사용 예시

```vue
<template>
  <SCardTable
    :headers="headers"
    :datas="items"
    :item-per-page="5"
    show-select
    @update:selected="onSelect"
  >
    <template #empty-content>
      데이터가 없습니다.
    </template>
  </SCardTable>
</template>

<script setup>
import { ref } from 'vue';
import { SCardTable } from '@';

const headers = ref([
  { key: 'name', title: '이름' },
  { key: 'age', title: '나이' },
  { key: 'email', title: '이메일' }
]);

const items = ref([
  { id: 1, name: '홍길동', age: 20, email: 'hong@mail.com' },
  { id: 2, name: '김철수', age: 25, email: 'kim@mail.com' }
]);

const onSelect = (selected) => {
  console.log('Selected items:', selected);
};
</script>
```

## SDataTable

페이지네이션과 정렬 기능을 포함한 기본 데이터 테이블 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| headers | Array | Yes | [] | 테이블 헤더 정보 (title, key 키 필수) |
| items | Array | Yes | [] | 테이블 데이터 |
| itemsPerPage | String/Number | No | 10 | 페이지당 표시할 아이템 수 |
| search | String | No | undefined | 검색어 |
| smartSearch | Array | No | [] | 스마트 검색 옵션 배열 |
| density | String | No | "default" | 테이블 행 높이 |

### Headers 형식

headers 배열의 각 객체는 반드시 다음 두 키를 포함해야 합니다:

- `title`: 컬럼 헤더에 표시될 텍스트
- `key`: items 배열의 객체에서 매칭될 데이터의 키값

```javascript
const headers = [
  { title: '이름', key: 'name' },
  { title: '나이', key: 'age' }
]
```

### Events

- `update:page`: 페이지 변경 시 발생
- `update:sort-by`: 정렬 변경 시 발생
- `update:model-value`: 선택 항목 변경 시 발생

### 사용 예시

```vue
<template>
  <SDataTable
    :headers="headers"
    :items="items"
    :search="searchQuery"
    :smart-search="smartSearchOptions"
    @update:sort-by="onSort"
  />
</template>

<script setup>
import { ref } from 'vue';
import { SDataTable } from '@';

const headers = ref([
  { key: 'name', title: '이름', sortable: true },
  { key: 'department', title: '부서', sortable: true },
  { key: 'position', title: '직급' }
]);

const items = ref([
  { id: 1, name: '홍길동', department: '개발팀', position: '과장' },
  { id: 2, name: '김철수', department: '인사팀', position: '대리' }
]);

const searchQuery = ref('');
const smartSearchOptions = ref([
  { key: 'department', value: '개발팀', type: 'exact' }
]);

const onSort = (sortBy) => {
  console.log('Sort by:', sortBy);
};
</script>
```

### 스타일 가이드

1. 테이블 헤더

- 배경색: #F7F9FA
- 폰트: 14px, 600 weight
- 높이: 36px

2. 테이블 셀

- 폰트: 14px, 300 weight
- 높이: 42px
- 패딩: 0 20px

3. 페이지네이션

- 마진 상단: 60px
- 폰트 크기: 12px
- 활성 페이지 색상: #1297F2

### 주의사항

1. smartSearch 사용 시 검색 조건은 OR 조건으로 적용됩니다.
2. 태그 검색과 일반 검색이 다르게 동작합니다.
3. fixed-table 클래스 적용 시 컬럼 너비가 고정됩니다.
