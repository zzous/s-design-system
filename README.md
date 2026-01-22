# S Design System

React 기반 디자인 시스템 컴포넌트 라이브러리

## 설치

### GitHub Packages에서 설치

1. GitHub Personal Access Token 생성
   - GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
   - `read:packages` 권한 필요

2. 프로젝트 루트에 `.npmrc` 파일 생성:
```ini
@zzous:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

3. 패키지 설치:
```bash
npm install @zzous/s-design-system
# 또는
pnpm add @zzous/s-design-system
# 또는
yarn add @zzous/s-design-system
```

## 사용법

```tsx
import { SBtn, SModal, SDataTable } from '@zzous/s-design-system';
import '@zzous/s-design-system/lib/style.css';

function App() {
  return (
    <div>
      <SBtn title="버튼" onClick={() => alert('클릭!')} />
    </div>
  );
}
```

## 개발

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# Storybook 실행
pnpm sb

# 빌드
pnpm build

# 패키지 배포
pnpm publish
```

## 배포

GitHub Packages에 배포하려면:

1. GitHub Personal Access Token 생성 (위치: GitHub Settings > Developer settings > Personal access tokens)
   - `write:packages` 권한 필요

2. 환경 변수 설정:
```bash
export GITHUB_TOKEN=your_token_here
```

3. 빌드 및 배포:
```bash
pnpm build
pnpm publish
```

## 컴포넌트

- **Button**: SBtn, SRefreshBtn
- **Alert**: SAlert
- **Modal**: SModal, SConfirm
- **Table**: SDataTable
- **Progress**: SProgressCircular, SGlobalProgress, SProgressStages
- **Input**: SFileInputBtn
- **Image**: SAvatar, SIcon, SImg
- **Tooltip**: SSimpleTooltip
- **Containment**: SEmpty
- **Accordion**: SAccordionMenu
- **Dropdown**: SDropdownButton

## 라이선스

MIT
