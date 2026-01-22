# pnpm install 에러 해결 방법

## ERR_PNPM_EPERM 에러

Windows에서 파일 권한 문제로 발생하는 에러입니다.

## 해결 방법

### 1. 실행 중인 프로세스 종료 (권장)

**방법 A: 터미널에서 직접 종료**
```bash
# Storybook 종료 (Ctrl + C)
# 또는 다른 터미널에서 실행 중인 개발 서버 종료
```

**방법 B: 작업 관리자에서 종료**
- `Ctrl + Shift + Esc`로 작업 관리자 열기
- "Node.js JavaScript Runtime" 프로세스 모두 종료
- 또는 "Vite", "Storybook" 관련 프로세스 찾아서 종료

**방법 C: 명령어로 종료**
```bash
# Windows PowerShell에서
taskkill /F /IM node.exe
```

### 2. node_modules 삭제 후 재설치

```bash
# node_modules 삭제
rm -rf node_modules
# 또는 Windows에서
rmdir /s /q node_modules

# 재설치
pnpm install
```

### 3. pnpm 캐시 정리 후 재설치

```bash
pnpm store prune
pnpm install
```

### 4. 관리자 권한으로 실행

- 터미널을 관리자 권한으로 실행 후 `pnpm install`

## 예방 방법

- 개발 서버를 종료한 후 패키지 설치/업데이트
- 한 번에 하나의 터미널에서만 개발 서버 실행
