# Layout Components Guide

## SHeader

애플리케이션의 상단 헤더를 구성하는 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| isLoggedIn | Boolean | No | false | 로그인 상태 |
| userInfo | Object | No | { name: '-', ... } | 사용자 정보 |
| logoSrc | String | No | null | 로고 이미지 경로 |
| serviceMenus | Array | No | [] | 서비스 메뉴 목록 |

### 사용 예시

```vue
<template>
  <SHeader
    :is-logged-in="true"
    :user-info="userInfo"
    :service-menus="menus"
    @click:logo="handleLogoClick"
  />
</template>

<script setup>
import { SHeader } from '@';

const userInfo = {
  name: 'John Doe',
  picture: { format: 'png' }
};

const menus = [
  { menuName: 'Dashboard', menuUrl: '/dashboard' },
  { menuName: 'Settings', menuUrl: '/settings' }
];
</script>
```

## SNavi

좌측 네비게이션 메뉴를 구성하는 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| serviceName | String | No | "Service" | 서비스 이름 |
| menuPath | Object | No | { ... } | 메뉴 경로 정보 |

### 사용 예시

```vue
<template>
  <SNavi
    service-name="My Service"
    :menu-path="currentMenuPath"
    @click:service-name="handleServiceClick"
  />
</template>

<script setup>
import { SNavi } from '@';

const currentMenuPath = {
  menuUrl: '/dashboard',
  menuName: 'Dashboard',
  menuNameKr: '대시보드',
  subMenus: [
    { menuName: 'Overview', menuUrl: '/dashboard/overview' }
  ]
};
</script>
```

## SSubHeader

페이지나 섹션의 서브 헤더를 구성하는 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| className | String | No | '' | 페이지타이틀의 custom class |
| title | String | Yes | - | 표시할 제목 |
| showCnt | Boolean | No | true | 목록 개수 표시 여부 |
| listCnt | Number | No | 0 | 표시할 목록 개수 |

### 주의사항

- SDataTable 또는 SCardTable과 함께 사용할 경우:
  - `show-cnt`를 true(기본값)로 설정
  - `list-cnt` props에 테이블의 전체 아이템 개수를 전달해야 함

### 사용 예시

```vue
<template>
  <!-- 기본 사용 -->
  <SSubHeader
    title="자원 목록"
    :show-cnt="false"
  />

  <!-- 테이블과 함께 사용 -->
  <SSubHeader
    title="자원 목록"
    :list-cnt="tableItems.length"
  />
  <SDataTable
    :items="tableItems"
    ...
  />
</template>

<script setup>
import { SSubHeader } from '@';
</script>
```
