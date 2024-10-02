1. 파일명은 camelCase로 작성하고 Vue 컴포넌트는 대문자, 그 외 파일은 소문자로 시작한다.
2. 컴포넌트 생성시 import 문은 `<script setup>` 요소 안에 넣고, `<script setup>` 은 최 상단에 위치 하도록 할 것
3. Vue 파일들은 어떤의용도인지 이름 끝에 붙일것 예를 들어 컴포넌트는 꼭 파일명 끝에 Component, 뷰는 파일명 끝에 View 를 붙일것
4. html 요소들의 id class 추가시 BEM 규칙을 따를것
5. 무한스크롤 사용지 꼭 가상 스크롤 (v-infinite-scroll 참고) 사용 할 것
6. table 의 경우 vuetify 의 virtual tables 를 이용할 것
7. URL 에 camelCase 금지, kebab-case 허용
8. vuetify 컴포넌트 클래스 변경시 ::v-deep .v-slide-group__content 와 같이 ::v-deep 을 작성하여 scoped 스타일 내에 작성할것
9. Tab 인덴트는 2칸
10. _common 컴포넌트는 내부 이벤트에 대한 메서드는 부모가 가지는 형식으로 할 것
11. _common 컴포넌트는 상태관련 코드 금지
12. 목록화면은 /list 로 구성 ex) 빌드 목록 -> /build/list
13. components/_common의 커스텀 컴포넌트는 class 명에 s- 접두사를 붙일 것
14. 컨트롤러 단위로 store를 나누되 파일명 기준은 uri를 참고하고 단수형으로 작성한다.
15. store 및 변수 사용 시 모듈 기준으로 작성한다.
        - 통합 포탈 모듈 -> portal
        - 데브옵스 모듈 -> devops
        - 컨테이너 모듈 -> comp