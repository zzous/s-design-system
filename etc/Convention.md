# Convention

## 파일, 폴더 규칙

### 1. 폴더 명 규칙

* 폴더 명은 kebab-case로 작성한다.

### 2. 파일 명 규칙

* 파일 명은 camelCase로 작성하고 Vue 컴포넌트는 대문자, 그 외 파일은 소문자로 시작한다.
* Vue 파일들은 어떤의용도인지 이름 끝에 붙일것 예를 들어 컴포넌트는 꼭 파일 명 끝에 Component, 뷰는 파일 명 끝에 View 를 붙일 것.
* Store
  * 컨트롤러 단위로 store를 나누되 파일 명 기준은 API의 URI를 참고하고 단수형으로 작성한다.
  * 예: /api/v1/devops/projects -> /stores/project.js

## 코드 규칙

### 1. 공통(JS, CSS)

* 컴포넌트 생성시 import 문은 `<script setup>` 요소 안에 넣고, `<script setup>` 은 최 상단에 위치 하도록 할 것
* components/_common의 커스텀 컴포넌트는 class 명에 s- 접두사를 붙일 것
* html 요소들의 id class 추가시 BEM 규칙을 따를것
* URL 에 camelCase 금지, kebab-case 허용
* Tab 인덴트는 2칸

### 2. 함수 명 규칙

* 함수 명은 camelCase로 작성
* 함수 만들경우 이벤트에 의해 호출되는 함수 일 경우 이벤트명 추가 할 것
    1. ex) 클릭에 의한 호출 일 경우 onCLick{{함수명}}
    2. ex) keyup에 의한 호출 일 경우 onKeyUp{{함수명}}
* remove 사용 금지, delete  허용

### 3. 변수/상수 명 규칙

* 변수명 목록일 경우 복수형으로 표시하고 list 로 표시하지 않을것
    1. ex) projects -> O, projectList -> X
* API 통신을 위한 URL 상수 지정시 아래 규칙 따를것
    1. /api/v1/devops/build/{buildId} -> BUILD_$BUILDID
    2. '/' 는 '-' 으로 치환
    3. path variable 은 $이름 으로 표현 {buildId} => $BUILDID
    4. test-name 과 같이 '-'은 붙여서 대문자 표현 -> test-name => TESTNAME
* Store
  * 변수 사용 시 모듈 기준으로 작성한다.
    * 통합 포탈 모듈 -> portal
    * 데브옵스 모듈 -> devops
    * 컨테이너 모듈 -> comp

### 4. 컴포넌트 사용 규칙

* 무한스크롤 사용지 꼭 가상 스크롤 (v-infinite-scroll 참고) 사용 할 것
* table 의 경우 vuetify 의 virtual tables 를 이용할 것
* vuetify 컴포넌트 클래스 변경시 ::v-deep .v-slide-group__content 와 같이 ::v-deep 을 작성하여 scoped 스타일 내에 작성할것

### 5. 컴포넌트 작성 규칙

* _common 컴포넌트는 내부 이벤트에 대한 메서드는 부모가 가지는 형식으로 할 것
* _common 컴포넌트는 상태관련 코드 금지

### 6. URL(Router) 경로 규칙

* 목록화면은 /list 로 구성 ex) 빌드 목록 -> /build/list
  * 상세, 수정, 생성 등의 화면은 팝업으로 구성되지만 예외로 페이지가 필요할 경우 (/detail, /edit, /new 로 구성한다.)
