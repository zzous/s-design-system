# Table 컴포넌트 React 변환 가이드 (ag-Grid)

## 개요

Vuetify의 `v-data-table`을 **ag-Grid React**로 변환하는 가이드입니다.
ag-Grid는 엔터프라이즈급 그리드 라이브러리로 정렬, 필터링, 페이징, 선택 등 모든 기능을 제공합니다.

## 설치

```bash
pnpm add ag-grid-community ag-grid-react
```

## 기본 사용법

```tsx
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './SDataTable.scss'; // 기존 스타일 재사용

interface TableProps<T = any> {
  items: T[];
  headers: ColDef[];
  itemsPerPage?: number;
}

function DataTable<T>({ items, headers, itemsPerPage = 10 }: TableProps<T>) {
  return (
    <div className="ag-theme-alpine s-data-table" style={{ height: 400 }}>
      <AgGridReact
        rowData={items}
        columnDefs={headers}
        pagination={true}
        paginationPageSize={itemsPerPage}
        rowSelection="multiple"
        animateRows={true}
      />
    </div>
  );
}
```

## 주요 기능 구현

### 1. Column 정의 (Vue headers → ag-Grid ColDef)

```tsx
import { ColDef } from 'ag-grid-community';

// Vue의 headers를 ag-Grid ColDef로 변환
const convertHeaders = (vueHeaders: any[]): ColDef[] => {
  return vueHeaders.map(header => ({
    field: header.key || header.value,
    headerName: header.title || header.value,
    width: header.width,
    sortable: header.sortable !== false,
    resizable: true, // ag-Grid는 기본적으로 리사이즈 지원
    cellStyle: { textAlign: header.align || 'left' },
    // 커스텀 렌더러
    cellRenderer: header.cellRenderer,
  }));
};
```

### 2. 정렬 기능 (내장)

```tsx
<AgGridReact
  rowData={items}
  columnDefs={columnDefs}
  defaultColDef={{
    sortable: true,
  }}
  onSortChanged={(params) => {
    console.log('정렬 변경:', params);
  }}
/>
```

### 3. 필터링 기능 (내장)

```tsx
<AgGridReact
  rowData={items}
  columnDefs={columnDefs}
  defaultColDef={{
    filter: true,
    filterParams: {
      // 필터 옵션
    },
  }}
/>
```

### 4. 페이징 기능 (내장)

```tsx
<AgGridReact
  rowData={items}
  columnDefs={columnDefs}
  pagination={true}
  paginationPageSize={itemsPerPage}
  paginationPageSizeSelector={[10, 20, 50, 100]}
/>
```

### 5. 선택 기능 (내장)

```tsx
import { useState } from 'react';

function DataTable({ items, headers }) {
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <AgGridReact
      rowData={items}
      columnDefs={columnDefs}
      rowSelection="multiple"
      onSelectionChanged={(params) => {
        setSelectedRows(params.api.getSelectedRows());
      }}
      checkboxSelection={true}
    />
  );
}
```

### 6. 커스텀 셀 렌더러 (Vue 슬롯 → cellRenderer)

```tsx
// Vue의 슬롯을 ag-Grid의 cellRenderer로 변환
const customCellRenderer = (params: any) => {
  const { value, data } = params;

  // 커스텀 컴포넌트 렌더링
  return (
    <div className="custom-cell">
      {value ?? '-'}
    </div>
  );
};

const columnDefs: ColDef[] = [
  {
    field: 'name',
    cellRenderer: customCellRenderer,
  },
];
```

### 7. 툴팁 (Vue v-tooltip → ag-Grid tooltipValueGetter)

```tsx
const columnDefs: ColDef[] = [
  {
    field: 'description',
    tooltipValueGetter: (params) => {
      return params.value || '-';
    },
    tooltipField: 'description', // 또는 특정 필드 지정
  },
];
```

### 8. 기본 구조

```tsx
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './SDataTable.scss';

interface DataTableProps<T = any> {
  items: T[];
  headers: any[]; // Vue headers 형식
  itemsPerPage?: number;
  showSelect?: boolean;
  tooltip?: boolean;
}

function DataTable<T>({
  items,
  headers,
  itemsPerPage = 10,
  showSelect = false,
  tooltip = false,
}: DataTableProps<T>) {
  const columnDefs = useMemo(() => convertHeaders(headers), [headers]);

  const gridOptions: GridOptions = {
    rowHeight: 48,
    headerHeight: 48,
    animateRows: true,
    enableRangeSelection: true,
  };

  return (
    <div className="ag-theme-alpine s-data-table" style={{ height: 600 }}>
      <AgGridReact
        rowData={items}
        columnDefs={columnDefs}
        gridOptions={gridOptions}
        pagination={true}
        paginationPageSize={itemsPerPage}
        rowSelection={showSelect ? "multiple" : undefined}
        checkboxSelection={showSelect}
        tooltipShowDelay={tooltip ? 500 : 0}
      />
    </div>
  );
}
```

## 스타일링

ag-Grid 테마와 기존 스타일을 함께 사용:

```tsx
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './SDataTable.scss'; // 기존 스타일 재사용

// 커스텀 스타일 적용
<div className="ag-theme-alpine s-data-table">
  <AgGridReact ... />
</div>
```

ag-Grid CSS 변수로 커스터마이징:

```scss
.ag-theme-alpine {
  --ag-header-background-color: #f5f5f5;
  --ag-row-hover-color: #f0f0f0;
  --ag-border-color: #ddd;
}
```

## 슬롯(Slots) 변환

Vue의 슬롯을 ag-Grid의 `cellRenderer`로 변환:

### Vue 슬롯

```vue
<template #item.name="{ item }">
  <custom-component :data="item" />
</template>
```

### ag-Grid 변환

```tsx
const columnDefs: ColDef[] = [
  {
    field: 'name',
    cellRenderer: (params: any) => {
      return <CustomComponent data={params.data} />;
    },
  },
];
```

또는 함수형 컴포넌트로:

```tsx
const NameCellRenderer = (params: any) => {
  return <CustomComponent data={params.data} />;
};

const columnDefs: ColDef[] = [
  {
    field: 'name',
    cellRenderer: NameCellRenderer,
  },
];
```

## ag-Grid 주요 장점

1. **내장 기능**: 정렬, 필터링, 페이징, 선택 등 모든 기능 내장
2. **성능**: 대용량 데이터 처리 최적화
3. **커스터마이징**: cellRenderer, cellEditor 등으로 완전한 커스터마이징 가능
4. **TypeScript 지원**: 완벽한 타입 정의 제공
5. **문서화**: 풍부한 문서와 예제 제공

## 참고사항

1. **기존 SCSS 재사용**: `src/components/table/SDataTable.scss` 그대로 사용 가능
2. **유틸리티 함수**: `src/utils/` 폴더의 함수들 그대로 사용 가능
3. **타입 정의**: ag-Grid의 `ColDef`, `GridOptions` 타입 활용
4. **성능**: ag-Grid는 자동으로 가상 스크롤링과 최적화 제공
5. **접근성**: ag-Grid가 키보드 네비게이션과 ARIA 속성 자동 제공

## 변환 순서 권장사항

1. ag-Grid 기본 설정 및 설치
2. Vue headers를 ag-Grid ColDef로 변환
3. 기본 데이터 렌더링
4. 정렬/필터링/페이징 설정 (내장 기능 활용)
5. 선택 기능 설정
6. 커스텀 cellRenderer 구현 (Vue 슬롯 변환)
7. 툴팁 설정
8. 스타일 커스터마이징
9. 고급 기능 (확장, 그룹핑 등)

## ag-Grid 공식 문서

- [ag-Grid React 문서](https://www.ag-grid.com/react-data-grid/)
- [Column 정의](https://www.ag-grid.com/react-data-grid/column-definitions/)
- [Cell Renderer](https://www.ag-grid.com/react-data-grid/cell-rendering/)
