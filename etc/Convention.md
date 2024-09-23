1. 파일명은 camelCase로 작성하고 Vue 컴포넌트는 대문자, 그 외 파일은 소문자로 시작한다.
2. 컴포넌트 생성시 import 문은 `<script setup>` 요소 안에 넣고, `<script setup>` 은 최 상단에 위치 하도록 할 것
3. Vue 파일들은 어떤의용도인지 이름 끝에 붙일것 예를 들어 컴포넌트는 꼭 파일명 끝에 Component, 뷰는 파일명 끝에 View 를 붙일것
4. html 요소들의 id class 추가시 id는 underscore , class 는 kebab-case 로 작성할 것
5. 무한스크롤 사용지 꼭 가상 스크롤 (v-infinite-scroll 참고) 사용 할 것
6. table 의 경우 vuetify 의 virtual tables 를 이용할 것 
7. URL 에 camelCase 금지, kebab-case 허용
8. vuetify 컴포넌트 클래스 변경시 ::v-deep .v-slide-group__content 와 같이 ::v-deep 을 작성하여 scoped 스타일 내에 작성할것