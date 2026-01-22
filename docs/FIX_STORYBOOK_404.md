# Storybook 404 에러 해결 방법

## 에러 내용
```
GET http://localhost:6006/sb-preview/runtime.js net::ERR_ABORTED 404 (Not Found)
GET http://localhost:6006/iframe.html?viewMode=docs&id=example-button--docs 404 (Not Found)
```

## 해결 방법

### 1. Storybook 완전히 재시작 (권장)

1. **현재 실행 중인 Storybook 종료**
   - 터미널에서 `Ctrl + C`로 종료
   - 모든 Node 프로세스 확인: `tasklist | findstr node`

2. **캐시 삭제**
   ```bash
   rm -rf node_modules/.cache
   rm -rf node_modules/.vite
   ```

3. **Storybook 재시작**
   ```bash
   pnpm run sb
   ```

4. **브라우저 완전히 새로고침**
   - `Ctrl + Shift + R` (하드 리프레시)
   - 또는 브라우저 캐시 삭제 후 재접속

### 2. Storybook 버전 확인

현재 설치된 버전이 일치하는지 확인:
```bash
pnpm list storybook @storybook/react @storybook/react-vite
```

모든 Storybook 패키지가 같은 버전이어야 합니다 (8.5.3).

### 3. 완전히 깨끗하게 재설치 (최후의 수단)

```bash
# Storybook 관련 패키지 재설치
pnpm remove storybook @storybook/react @storybook/react-vite @storybook/addon-essentials
pnpm add -D storybook@8.5.3 @storybook/react@8.5.3 @storybook/react-vite@8.5.3 @storybook/addon-essentials@8.5.3

# 캐시 삭제
rm -rf node_modules/.cache

# 재시작
pnpm run sb
```

### 4. 포트 충돌 확인

다른 프로세스가 6006 포트를 사용 중인지 확인:
```bash
netstat -ano | findstr :6006
```

## 일반적인 원인

1. **Storybook이 제대로 시작되지 않음** - 빌드 과정에서 에러 발생
2. **캐시 문제** - 이전 빌드 캐시가 남아있음
3. **버전 불일치** - Storybook 패키지 버전이 서로 다름
4. **포트 충돌** - 다른 프로세스가 6006 포트 사용 중

## 확인 사항

Storybook을 시작할 때 터미널에 에러가 없는지 확인하세요.
정상적으로 시작되면 다음과 같은 메시지가 보입니다:
```
Storybook 8.5.3 for React started
```
