# Image Components Guide

## SAvatar

사용자 아바타 및 메뉴를 표시하는 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| user | Object | No | {} | 회원정보 |
| menuItems | Array | No | [] | 회원정보 메뉴들 |
| className | Object | No | {} | custom class |

### Slots

- `badge`: 아바타에 표시될 뱃지

### Events

- `click:menu-item`: 메뉴 아이템 클릭 시 발생 (value: 선택된 메뉴 값)

### 스타일

- 아바타 크기: 32px
- 사용자 이름: 14px, 흰색
- 메뉴 리스트: 12px, 500 weight
- 드롭다운 화살표 아이콘 포함

### 사용 예시

```vue
<template>
  <SAvatar
    :user="{ name: '사용자' }"
    :menu-items="[
      { title: '프로필', value: 'profile' },
      { title: '로그아웃', value: 'logout' }
    ]"
    @click:menu-item="handleMenuClick"
  >
    <template #badge>
      <v-badge content="2" color="error" />
    </template>
  </SAvatar>
</template>

<script setup>
import { SAvatar } from '@';

const handleMenuClick = (value) => {
  console.log('Selected menu:', value);
};
</script>
```

## SImg

Vuetify v-img를 확장한 커스텀 이미지 컴포넌트입니다.

### Props

| Prop 이름 | 타입 | 필수 여부 | 기본값 | 설명 |
|-----------|------|-----------|--------|------|
| src | String/Object | No | "" | 이미지 url |
| srcUrl | String | No | undefined | 기본 경로가 아닌 경로에서 가져올 이미지 경로 |
| lazySrc | String | No | undefined | 로딩 중 표시될 이미지 경로 |
| publicPath | String | No | "" | /public 이후의 경로 |
| className | Object | No | undefined | 클래스 이름 값 할당 |

### Slots

- `default`: 이미지 위에 표시될 콘텐츠
- `placeholder`: 이미지 로딩 중 표시될 콘텐츠

### Events

- `error`: 이미지 로드 실패 시 발생
- `load`: 이미지 로드 완료 시 발생
- `loadstart`: 이미지 로드 시작 시 발생

### 사용 예시

#### 기본 사용법

```vue
<template>
  <SImg
    src="logo.png"
    public-path="/assets"
    @error="handleError"
  />
</template>

<script setup>
import { SImg } from '@';

const handleError = (event) => {
  console.error('Image load failed:', event);
};
</script>
```

#### 로딩 플레이스홀더 사용

```vue
<template>
  <SImg
    src="large-image.jpg"
    lazy-src="thumbnail.jpg"
  >
    <template #placeholder>
      <v-row align="center" justify="center">
        <v-progress-circular indeterminate />
      </v-row>
    </template>
  </SImg>
</template>
```

### 주의사항

1. src와 srcUrl은 동시에 사용할 수 없습니다.
2. lazySrc를 사용할 때는 작은 크기의 이미지나 블러 처리된 이미지를 사용하는 것이 좋습니다.
3. publicPath는 /public 디렉토리 이후의 경로만 지정해야 합니다.
