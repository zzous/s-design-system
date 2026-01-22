# Storybook 404 에러 해결 가이드

## 현재 발생 중인 에러

```
Failed to load resource: iframe.html 404 (Not Found)
WebSocket is already in CLOSING or CLOSED state
```

## 해결 방법

### 1. 완전히 재시작 (가장 확실한 방법)

**단계별:**

1. **모든 Node 프로세스 종료**
   ```bash
   # Windows PowerShell에서
   taskkill /F /IM node.exe
   ```

2. **캐시 완전히 삭제**
   ```bash
   rm -rf node_modules/.cache
   rm -rf .storybook-static
   ```

3. **Storybook 재시작**
   ```bash
   pnpm run sb
   ```

4. **브라우저 완전히 새로고침**
   - 브라우저를 완전히 닫았다가 다시 열기
   - 또는 `Ctrl + Shift + Delete`로 캐시 삭제 후 재접속
   - `http://localhost:6006` 접속

### 2. Storybook이 정상적으로 시작되는지 확인

Storybook을 시작할 때 터미널에 다음 메시지가 보여야 합니다:

```
✓ Storybook 8.5.3 for React started
✓ Local:   http://localhost:6006/
```

**에러가 보이면:**
- 빨간색 에러 메시지를 확인
- 컴포넌트 import 에러인지 확인
- TypeScript/SCSS 에러인지 확인

### 3. 포트 확인

설정은 6006 포트인데, 에러 메시지에 6007이 보이면:
- 다른 Storybook 인스턴스가 실행 중일 수 있음
- 모든 Storybook 프로세스 종료 후 재시작

### 4. Storybook 설정 단순화

만약 계속 문제가 발생하면, `.storybook/main.js`를 최소 설정으로 시작:

```js
export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
};
```

### 5. 컴포넌트 파일 확인

`src/components/example/ExampleButton.tsx`가 정상인지 확인:

```bash
# TypeScript 에러 확인
npx tsc --noEmit
```

## 일반적인 원인

1. **Storybook이 제대로 빌드되지 않음** - 빌드 과정에서 에러 발생
2. **캐시 문제** - 이전 빌드 캐시가 남아있음
3. **포트 충돌** - 다른 프로세스가 포트 사용 중
4. **컴포넌트 에러** - 컴포넌트에 문법 에러가 있어 빌드 실패

## 다음 단계

1. 위의 1번 방법(완전히 재시작)을 시도해보세요
2. Storybook 시작 시 터미널 에러 메시지를 확인하세요
3. 여전히 문제가 있으면 터미널의 전체 에러 메시지를 공유해주세요
