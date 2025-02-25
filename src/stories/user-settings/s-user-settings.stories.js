import { SUserSettings } from '@';

export default {
  title: 'UserSettings/SUserSettings',
  component: SUserSettings,
  tags: ['autodocs'],
  argTypes: {
    languageList: {
      control: 'object',
      description: '언어 목록',
      defaultValue: [
        { value: 'ko', name: '한국어' },
        { value: 'en', name: 'English' },
      ],
    },
    languageCode: {
      control: 'select',
      options: ['ko', 'en'],
      description: '선택된 언어 코드',
      defaultValue: 'ko',
    },
    costCurrencyList: {
      control: 'object',
      description: '통화 목록',
      defaultValue: [
        { value: 'krw', name: 'KRW' },
        { value: 'usd', name: 'USD' },
      ],
    },
    costCurrencyCode: {
      control: 'select',
      options: ['krw', 'usd'],
      description: '선택된 통화 코드',
      defaultValue: 'krw',
    },
    isEmailAlertEnabled: {
      control: 'boolean',
      description: '이메일 알림 설정',
      defaultValue: true,
    },
    isSlackAlertEnabled: {
      control: 'boolean',
      description: '슬랙 알림 설정',
      defaultValue: false,
    },
    companySlackEnabled: {
      control: 'boolean',
      description: '기업 슬랙 사용 여부 : 슬랙 정보를 등록한 기업에서만 슬랙 알람을 수신 가능합니다.',
      defaultValue: false,
    },
  },
};

// 기본 사용 예시
const defaultCode = `
<template>
  <SUserSettings
    :languageList="languageList"
    :languageCode="languageCode"
    :costCurrencyList="costCurrencyList"
    :costCurrencyCode="costCurrencyCode"
    :isEmailAlertEnabled="isEmailAlertEnabled"
    :isSlackAlertEnabled="isSlackAlertEnabled"
    :companySlackEnabled="companySlackEnabled"
    @update:language="onLanguageChange"
    @update:currency="onCurrencyChange"
    @update:email="onEmailChange"
    @update:slack="onSlackChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const languageList = ref([
  { value: 'ko', name: '한국어' },
  { value: 'en', name: 'English' },
])

const costCurrencyList = ref([
  { value: 'krw', name: 'KRW' },
  { value: 'usd', name: 'USD' },
])

const languageCode = ref('ko')
const costCurrencyCode = ref('krw')
const isEmailAlertEnabled = ref(true)
const isSlackAlertEnabled = ref(false)
const companySlackEnabled = ref(true)

const onLanguageChange = (value) => {
  console.log('Language changed:', value)
  languageCode.value = value
}

const onCurrencyChange = (value) => {
  console.log('Currency changed:', value)
  costCurrencyCode.value = value
}

const onEmailChange = (value) => {
  console.log('Email alert changed:', value)
  isEmailAlertEnabled.value = value
}

const onSlackChange = (value) => {
  console.log('Slack alert changed:', value)
  isSlackAlertEnabled.value = value
}
</script>
`;

const Template = (args) => ({
  components: { SUserSettings },
  setup() {
    return { args };
  },
  template: `<SUserSettings v-bind="args" />`,
});

// 기본 설정
export const Default = Template.bind({});
Default.args = {
  languageList: [
    { value: 'ko', name: '한국어' },
    { value: 'en', name: 'English' },
  ],
  languageCode: 'ko',
  costCurrencyList: [
    { value: 'krw', name: 'KRW' },
    { value: 'usd', name: 'USD' },
  ],
  costCurrencyCode: 'krw',
  isEmailAlertEnabled: true,
  isSlackAlertEnabled: false,
  companySlackEnabled: true,
};
Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
      language: 'vue',
      type: 'auto',
    },
    description: {
      story: '사용자 설정의 기본 상태를 보여줍니다.',
    },
  },
};

// 영어 설정
export const EnglishSettings = Template.bind({});
EnglishSettings.args = {
  languageList: [
    { value: 'ko', name: '한국어' },
    { value: 'en', name: 'English' },
  ],
  languageCode: 'en',
  costCurrencyList: [
    { value: 'krw', name: 'KRW' },
    { value: 'usd', name: 'USD' },
  ],
  costCurrencyCode: 'usd',
  isEmailAlertEnabled: true,
  isSlackAlertEnabled: false,
  companySlackEnabled: true,
};
EnglishSettings.parameters = {
  docs: {
    description: {
      story: '영어와 USD 통화가 선택된 상태를 보여줍니다.',
    },
  },
};

// 알림 모두 활성화
export const AllAlertsEnabled = Template.bind({});
AllAlertsEnabled.args = {
  languageList: [
    { value: 'ko', name: '한국어' },
    { value: 'en', name: 'English' },
  ],
  languageCode: 'ko',
  costCurrencyList: [
    { value: 'krw', name: 'KRW' },
    { value: 'usd', name: 'USD' },
  ],
  costCurrencyCode: 'krw',
  isEmailAlertEnabled: true,
  isSlackAlertEnabled: true,
  companySlackEnabled: true,
};
AllAlertsEnabled.parameters = {
  docs: {
    description: {
      story: '이메일과 슬랙 알림이 모두 활성화된 상태를 보여줍니다.',
    },
  },
};

// 슬랙 비활성화
export const SlackDisabled = Template.bind({});
SlackDisabled.args = {
  languageList: [
    { value: 'ko', name: '한국어' },
    { value: 'en', name: 'English' },
  ],
  languageCode: 'ko',
  costCurrencyList: [
    { value: 'krw', name: 'KRW' },
    { value: 'usd', name: 'USD' },
  ],
  costCurrencyCode: 'krw',
  isEmailAlertEnabled: true,
  isSlackAlertEnabled: false,
  companySlackEnabled: false,
};
SlackDisabled.parameters = {
  docs: {
    description: {
      story: '기업 슬랙이 비활성화되어 슬랙 알림을 설정할 수 없는 상태를 보여줍니다.',
    },
  },
};

// 알림 모두 비활성화
export const NoAlerts = Template.bind({});
NoAlerts.args = {
  languageList: [
    { value: 'ko', name: '한국어' },
    { value: 'en', name: 'English' },
  ],
  languageCode: 'ko',
  costCurrencyList: [
    { value: 'krw', name: 'KRW' },
    { value: 'usd', name: 'USD' },
  ],
  costCurrencyCode: 'krw',
  isEmailAlertEnabled: false,
  isSlackAlertEnabled: false,
  companySlackEnabled: true,
};
NoAlerts.parameters = {
  docs: {
    description: {
      story: '모든 알림이 비활성화된 상태를 보여줍니다.',
    },
  },
};
