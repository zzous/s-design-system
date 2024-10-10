<template>
  <div class="view-wrapper">
    <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
    <s-form-table ref="formRef" :validation-schema="schema" @submit.prevent="validate">
      {{ schema }}
      <s-form-item
        v-slot="{ errors, handleChange }"
        :label="$t('템플릿')"
        name="template"
        type="text"
        required
      >
        {{ errors }}
        <v-text-field
          v-model="schema.template"
          variant="outlined"
          density="compact"
          hide-details="auto"
          :error-messages="errors"
          @update:model-value="handleChange"
        />
      </s-form-item>
      <s-form-item
        v-slot="{ errors, handleChange }"
        :label="$t('프로젝트 명')"
        name="projectName"
        type="text"
        required
      >
        {{ errors }}
        <v-text-field
          v-model="schema.projectName"
          variant="outlined"
          density="compact"
          hide-details="auto"
          :error-messages="errors"
          @update:model-value="handleChange"
        />
      </s-form-item>
      <s-form-item :label="$t('프로젝트 별칭')" />
      <s-form-item :label="$t('빌드 승인 프로세스')" required />
      <s-form-item :label="$t('배포 승인 프로세스')" required />
      <s-form-item :label="$t('프로젝트 관리자')" required />
      <s-form-item :label="$t('설명(250자 이내)')" />
      <s-btn type="submit">
        test
      </s-btn>
    </s-form-table>

    <s-sub-header :title="$t('템플릿 속성')" :show-cnt="false" class-name="sub-title" />
    <s-form-table class="s-table__form">
      <s-form-item :label="$t('패키지 명')" required />
      <s-form-item :label="$t('JDK 버전')" required />
    </s-form-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import * as yup from 'yup'

const emits = defineEmits(['validate', 'click:cancel'])

const schema = yup.object({
  template: yup.string().required(),
  projectName: yup.string().required(),
})

const formRef = ref()
const validate = (values) => {
  console.log(formRef.value, schema)

  emits('validate', values)
}

defineExpose({ validate })

</script>

<style lang="scss" scoped>

</style>