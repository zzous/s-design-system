# 다국어(i18n) 작성 규칙

## 기본 규칙

```bash
{
 code: "ko",  // en
  language: "한국어",  // 화면에 노출된 언어
  ...
}
```

## 화면 규칙

- fields: label에 들어갈 텍스트
  - 공통적으로 사용하는 텍스트는 반드시 해당 객체에 포함하도록 합니다.
  - 예) $t('fields.type') => "유형" (o), $t('vpc.fields.type') => "유형" (x)
  - 예) $t('fields.vpcDescription') => "VPC의 설명" (△), $t('vpc.fields.description') => "VPC의 설명" (o)
- button: 공통적으로 사용하는 버튼 명
- menu: 모든 메뉴 명
- common: 공통적으로 사용하는 메세지, placeholder 등
- [특정 화면 명]: 특정 화면에서만 사용하는 메세지, placeholder 등
  - 상세, 수정 등의 단위로는 쪼개지 않도록 합니다.
  - 예) vpc (O), vpcList (X)

```bash
{
  ...
 fields: {
  name: "이름"
  },
  button: {
  new: "생성",
  save: "저장"
 },
 menu: {
  main: "Main"
 },
 common: {
  message: {},
  placeholder: {}
 },
 [특정 화면 명]: {
  title: {
   list: "VPC 목록",
   edit: "VPC 수정",
   new: "VPC 생성",
  },
  message: {
   successedNewVpc: "VPC 생성을 완료하였습니다."
  },
  placeholder: {
   vpcName: "VPC 명을 입력하세요."
  },
  button: {
   new: "VPC 생성"
  }
 }
  ...
}
```

## 입력 관련 규칙

- validation: vee-validate 기능 사용 시 표기될 메세지 모음

```bash
{
 ...
 validation: {
  required: "{field} 항목은 필수 정보입니다"
 }
 ...
}
```

## 주의 사항

### 사용시 주의 사항

- 두 개 이상의 단어 조합은 지양합니다.

```bash
<!-- 예시 ❌ -->
<sp-button class="button__new" @click="onClickCreate">
 {{ $t('vpc.title.list') }} {{ $t('button.new') }}
</sp-button>

<!-- 예시 ✅ -->
<sp-button class="button__new" @click="onClickCreate">
 {{ $t('vpc.button.new') }}
</sp-button>

<!-- 결과값: VPC 생성 -->
```
