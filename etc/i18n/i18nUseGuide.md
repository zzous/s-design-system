# I18n 사용 가이드

> i18next 라이브러리를 기준으로 작성되었습니다.
자세한 사항은 [공식 라이브러리 문서](https://www.i18next.com/translation-function/interpolation)를 참고 바랍니다.

## Basic

<strong>Keys</strong>

  ```
  {
    "key": "i18next is great"
  }
  ```

<strong>sample</strong>

  ```
  <template>
    <span>$t('key')</span>
  </template>
  // -> i18next is great
  ```

<strong>❗️ 중요 ❗️</strong>
영문으로 바꾸면 문법상 단어의 순서 바꾸기 어려워지기 때문에 key를 세분화하여 나누는건 지양합니다.

<strong>Keys</strong>

  ```
  {
    "key1": "{{what}} is {{how}}" ✅
  }
  {
    "what": "i18next",
    "is how": "is great" ❌
  }
  ```

## 데이터 매핑

<strong>Keys</strong>

  ```
  {
    "key": "I am {{author.name}}"
  }
  ```

<strong>sample</strong>

  ```
  import { useI18n } from 'i18next-vue'
  const { t } = useI18n()
  const author = {
    name: 'Jan',
    github: 'jamuhl'
  };
  t('key', { author });
  // -> "I am Jan"
  ```

## 추가 개선 사항

<span style="color: red">`<Trans />` 컴포넌트를 사용한 고차함수 번역은 자동 추출 기능 사용이 어렵습니다.</span>
