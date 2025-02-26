<template>
  <div class="s-user-setting">
    <div class="s-user-setting__header-box">
      <span> {{ fieldSet.title }} </span>
    </div>
    <div class="s-user-setting__contents-box">
      <!-- 언어 설정 -->
      <div class="s-user-setting__content">
        <div class="s-user-setting__title-wrapper">
          <div class="s-user-setting__title">
            <span> 언어/Language </span>
          </div>
          <div class="s-user-setting__select-wrapper">
            <v-select
              variant="outlined"
              itemTitle="name"
              itemValue="value"
              :items="languageList"
              v-model="userSettings.languageCode"
              @update:modelValue="onChangeLanguage"
            ></v-select>
          </div>
        </div>
      </div>
      <!-- 비용 통화 설정 -->
      <div class="s-user-setting__content">
        <div class="s-user-setting__title-wrapper">
          <div class="s-user-setting__title">
            <span> {{ fieldSet.costCurrency }}</span>
          </div>
          <div class="s-user-setting__select-wrapper">
            <v-select
              variant="outlined"
              itemTitle="name"
              itemValue="value"
              :items="costCurrencyList"
              v-model="userSettings.costCurrencyCode"
              @update:modelValue="onChangeCurrency"
            ></v-select>
          </div>
        </div>
      </div>
      <!-- 알림 수신 설정 -->
      <div class="s-user-setting__content">
        <div class="s-user-setting__title-wrapper">
          <div class="s-user-setting__title">
            <span> {{ fieldSet.alert }}</span>
          </div>
          <div class="s-user-setting__checkbox-wrapper">
            <v-checkbox
              class="table-checkbox"
              hide-details
              v-model="userSettings.isEmailAlertEnabled"
              :label="'Email'"
              @change="onChangeEmail"
            ></v-checkbox>
            <v-checkbox
              class="table-checkbox"
              hide-details
              :disabled="!companySlackEnabled"
              v-model="userSettings.isSlackAlertEnabled"
              :label="'Slack'"
              @change="onChangeSlack"
            ></v-checkbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const emits = defineEmits(['update:language', 'update:currency', 'update:email', 'update:slack', 'get-company-slack-enabled'])

const props = defineProps({
  languageCode: {
    type: String,
    default: 'ko',
  },
  languageList: {
    type: Array,
    default: () => [
      { value: 'ko', name: '한국어' },
      { value: 'en', name: 'English' },
    ],
  },
  costCurrencyCode: {
    type: String,
    default: 'krw',
  },
  costCurrencyList: {
    type: Array,
    default: () => [
      { value: 'krw', name: 'KRW' },
      { value: 'usd', name: 'USD' },
    ],
  },
  isEmailAlertEnabled: {
    type: Boolean,
    default: false,
  },
  isSlackAlertEnabled: {
    type: Boolean,
    default: false,
  },
  companySlackEnabled: {
    type: Boolean,
    default: false,
  },
})

const userSettings = ref({
  languageCode: 'ko',
  costCurrencyCode: 'krw',
  isEmailAlertEnabled: false,
  isSlackAlertEnabled: false,
})

const fieldSet = ref({
  title: '사용자 설정',
  costCurrency: '비용 통화 설정',
  alert: '알림 수신',
})

const onChangeLanguage = () => {
  emits('update:language', userSettings.value.languageCode)
}

const onChangeCurrency = () => {
  emits('update:currency', userSettings.value.costCurrencyCode)
}

const onChangeEmail = () => {
  emits('update:email', userSettings.value.isEmailAlertEnabled)
}

const onChangeSlack = () => {
  emits('update:slack', userSettings.value.isSlackAlertEnabled)
}

const setFieldSetLanguage = languageCode => {
  if (languageCode === 'en') {
    fieldSet.value.title = 'User Settings'
    fieldSet.value.costCurrency = 'Cost Currency Settings'
    fieldSet.value.alert = 'Alert Settings'
  } else {
    fieldSet.value.title = '사용자 설정'
    fieldSet.value.costCurrency = '비용 통화 설정'
    fieldSet.value.alert = '알림 수신'
  }
}

const checkCompanySlackEnabled = () => {
  emits('get-company-slack-enabled')
  console.log('checkCompanySlackEnabled')
}

onMounted(() => {
  userSettings.value = {
    languageCode: props.languageCode || 'ko',
    costCurrencyCode: props.costCurrencyCode || 'krw',
    isEmailAlertEnabled: props.isEmailAlertEnabled || false,
    isSlackAlertEnabled: props.isSlackAlertEnabled || false,
  }

  setFieldSetLanguage(props.languageCode)
  checkCompanySlackEnabled()
})
</script>

<style lang="scss">
@import url('./SUserSettings.scss');
</style>
