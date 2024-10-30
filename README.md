# #{`name`}

## 프로젝트 구조
```bash
📁 frontend-documentation
├── 📁 .storybook           # 스토리북 설정 공간
├── 📁 lib                  # 최종 빌드 경로
├── 📁 src
│   ├── 📁 components       # 컴포넌트
│   │   └── 📁 Button
│   │       ├── 📄 Button.vue
│   │       └── 📄 index.js
│   ├── 📁 plugins          # 플러그인
│   │   ├── 📄 customTheme.js
│   │   └── 📄 vuetify.js
│   ├── 📁 stories            # 스토리북
│   │   └── 📁 Button
│   │       ├── 📄 DefaultButton.stories.js
│   │       └── 📄 Configure.mdx
│   ├── 📁 styles             # 공통 스타일 모음
│   ├── 📄 App.vue
│   ├── 📄 index.js           # 최초 빌드 진입 파일
│   └── 📄 main.js
├── 📁 storybook-static       # 스토리북 빌드 경로 
├── 📄 index.html
├── 📄 package.json
├── 📄 README.md
└── 📄 vite.config.js
```


## 스토리북 개발 서버 실행
```bash
   npm run sb
```

## 스토리북 빌드
```bash
   npm run sb-build
```

## NPM 배포
```bash
   npm run build && npm run publish
```

## 개발 서버 실행
```bash
   npm run dev
```
