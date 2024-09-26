# I18n 사용 가이드

> i18next 라이브러리를 기준으로 작성되었습니다.
자세한 사항은 [공식 라이브러리 문서](https://www.i18next.com/translation-function/interpolation)를 참고 바랍니다.

## Basic

<strong>Keys</strong>

  ```
  {
    "key": "{{what}} is {{how}}"
  }
  ```

<strong>sample</strong>

  ```
  $t('key', { what: 'i18next', how: 'great' })
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
