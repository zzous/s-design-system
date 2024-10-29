<!-- 소스코드가 너무 길어서 잘랐습니다. -->
<template>
  <vee-form ref="deployAdvancedFormRef" :validation-schema="schema">
    <s-form-item v-slot="{ errors, handleChange }" :label="$t('ImagePullSecrets')" name="imagePullSecrets">
      <v-text-field
        v-model="formValues.imagePullSecrets"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :placeholder="$t('Secret을 입력하세요')"
        :error-messages="errors"
        @update:model-value="handleChange"
        @input="isDuplicateControllerName = true"
      />
    </s-form-item>
    <s-form-item :label="$t('명령')" name="command">
      <simple-list-input v-model="formValues.command" :placeholder="$t('선택항목')" />
    </s-form-item>
    <s-form-item :label="$t('args')" name="args">
      <simple-list-input v-model="formValues.args" :placeholder="$t('선택항목')" />
    </s-form-item>
    <s-form-item :label="$t('환경 변수')" name="env" content-class="w-100">
      <list-input v-model="formValues.env" :headers="keyValueHeaders" />
    </s-form-item>
    <s-form-item :label="$t('ConfigMap')">
      <div class="form-item--half">
        <vee-field v-slot="{ errors, handleChange }" name="configMapName">
          <v-text-field
            v-model="formValues.configMapName"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('configMap 명을 입력하세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </vee-field>
        <vee-field v-slot="{ handleChange }" name="configMapCreateYn">
          <v-checkbox
            v-model="formValues.configMapCreateYn"
            density="compact"
            hide-details
            true-value="Y"
            false-value="N"
            @update:model-value="handleChange"
          >
            <template #label>
              <span :class="{ 'label--active': formValues.configMapCreateYn === 'Y' }">
                {{ $t('생성') }}
              </span>
            </template>
          </v-checkbox>
        </vee-field>
      </div>
      <div>
        <simple-list-input v-model="formValues.configMapData" :placeholder="$t('선택항목')" />
      </div>
    </s-form-item>
    <s-form-item :label="$t('SecretKey')">
      <div class="form-item--half">
        <vee-field v-slot="{ errors, handleChange }" name="secretName">
          <v-text-field
            v-model="formValues.secretName"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('configMap 명을 입력하세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </vee-field>
        <vee-field v-slot="{ handleChange }" name="secretCreateYn">
          <v-checkbox
            v-model="formValues.secretCreateYn"
            density="compact"
            hide-details
            true-value="Y"
            false-value="N"
            @update:model-value="handleChange"
          >
            <template #label>
              <span :class="{ 'label--active': formValues.secretCreateYn === 'Y' }">
                {{ $t('생성') }}
              </span>
            </template>
          </v-checkbox>
        </vee-field>
      </div>
      <div>
        <simple-list-input v-model="formValues.secretData" :placeholder="$t('선택항목')" />
      </div>
    </s-form-item>
    <s-form-item v-slot="{ errors, handleChange }" :label="$t('호스트 이름')" name="hostname">
      <v-text-field
        v-model="formValues.hostname"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :placeholder="$t('호스트 이름을 입력하세요')"
        :error-messages="errors"
        @update:model-value="handleChange"
      />
    </s-form-item>
    <s-form-item v-slot="{ errors, handleChange }" :label="$t('노드선택자')" name="nodeSelector">
      <v-select
        v-model="formValues.nodeSelector"
        variant="outlined"
        density="compact"
        hide-details="auto"
        :placeholder="$t('노드선택자를 선택하세요')"
        :error-messages="errors"
        @update:model-value="handleChange"
        @input="isDuplicateControllerName = true"
      />
    </s-form-item>
    <s-form-item :label="$t('hostAliases')" name="hostAliases" content-class="w-100">
      <list-input v-model="formValues.hostAliases" :headers="keyValueHeaders" />
    </s-form-item>
  </vee-form>
</template>

<script setup>
import { ref } from 'vue'
import { Form as VeeForm, Field as VeeField } from 'vee-validate'
import * as yup from 'yup'

import SimpleListInput from '@/components/deploy/DeploySimpleListInputComponent.vue'
import ListInput from '@/components/deploy/DeployListInputComponent.vue'

const submit = () => {}

const validate = () => {
  return false
}

const schema = yup.object({
  command: yup.array(),
  args: yup.array(),
  env: yup.array(),
  configMapData: yup.array(),
  configMapName: yup.string(),
  configMapCreateYn: yup.string(),
  secretData: yup.array(),
  secretName: yup.string(),
  secretCreateYn: yup.string(),
  hostname: yup.string(),
  nodeSelector: yup.string(),
  hostAliases: yup.array(),
})

const formValues = ref({
  command: [],
  args: [],
  env: [],
  configMapName: '',
  configMapCreateYn: 'N',
  configMapData: [],
  imagePullSecrets: null,
  hostname: null,
  nodeSelector: null,
  hostAliases: [],
  secretName: '',
  secretCreateYn: 'N',
  secretData: [],
})

const getFormValues = () => {
  return formValues.value
}

defineExpose({ validate, submit, getFormValues })

const keyValueHeaders = ref([
  {
    title: 'name',
    key: 'name',
  },
  {
    title: 'value',
    key: 'value',
  },
])
</script>

<style lang="scss" scoped></style>
