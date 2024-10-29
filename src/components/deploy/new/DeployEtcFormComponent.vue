<template>
  <vee-form ref="deployAdvancedFormRef" :validation-schema="schema">
    <s-form-item :label="$t('Persistent Volume Claim')" name="pvcVolumes" content-class="w-100">
      <list-input v-model="formValues.pvcVolumes" :headers="pvcHeaders" />
    </s-form-item>
    <s-form-item :label="$t('HostPath')" name="hostPathVolumes" content-class="w-100">
      <list-input v-model="formValues.hostPathVolumes" :headers="hostPathHeaders" />
    </s-form-item>
    <s-form-item :label="$t('Requests')">
      <div class="form-item--half">
        <span>CPU 단위: MilliCPU/1Core = 1000 MilliCPU</span>
        <span>Memory 단위: MiB</span>
      </div>
      <div class="form-item--half">
        <vee-field v-slot="{ errors, handleChange }" name="resource.requestCpu">
          <v-text-field
            v-model="formValues.resource.requestCpu"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('CPU를 입력하세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </vee-field>
        <vee-field v-slot="{ errors, handleChange }" name="resource.requestMemory">
          <v-text-field
            v-model="formValues.resource.requestMemory"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('Memory를 입력하세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </vee-field>
      </div>
    </s-form-item>
    <s-form-item :label="$t('Limits')">
      <div class="form-item--half">
        <span>CPU 단위: MilliCPU/1Core = 1000 MilliCPU</span>
        <span>Memory 단위: MiB</span>
      </div>
      <div class="form-item--half">
        <vee-field v-slot="{ errors, handleChange }" name="resource.limitCpu">
          <v-text-field
            v-model="formValues.resource.limitCpu"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('CPU를 입력하세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </vee-field>
        <vee-field v-slot="{ errors, handleChange }" name="resource.limitMemory">
          <v-text-field
            v-model="formValues.resource.limitMemory"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('Memory를 입력하세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </vee-field>
      </div>
    </s-form-item>
    <s-form-item
      v-slot="{ errors, handleChange }"
      :label="$t('HPA 최대 레플리카')"
      name="autoscale.maxReplicas"
      required
    >
      <v-text-field
        v-model="formValues.autoscale.maxReplicas"
        variant="outlined"
        density="compact"
        hide-details="auto"
        type="number"
        :placeholder="$t('레플리가 개수를 입력하세요')"
        :error-messages="errors"
        @update:model-value="handleChange"
      />
    </s-form-item>
    <s-form-item :label="$t('HPA 평균 사용률')">
      <div class="form-item--half">
        <span>CPU %</span>
        <span>Memory %</span>
      </div>
      <div class="form-item--half">
        <vee-field v-slot="{ errors, handleChange }" name="autoscale.cpuAverageUtilization">
          <v-text-field
            v-model="formValues.autoscale.cpuAverageUtilization"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('평균 사용률을 입력하세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </vee-field>
        <vee-field v-slot="{ errors, handleChange }" name="resource.memoryAverageUtilization">
          <v-text-field
            v-model="formValues.autoscale.memoryAverageUtilization"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('Memory를 입력하세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </vee-field>
      </div>
    </s-form-item>
  </vee-form>
</template>

<script setup>
import { ref } from 'vue'
import { Form as VeeForm, Field as VeeField } from 'vee-validate'
import * as yup from 'yup'

import { useI18n } from '@/_setting/i18n'

import ListInput from '@/components/deploy/DeployListInputComponent.vue'

const { tt } = useI18n()

const schema = yup.object({
  pvcVolumes: yup.array().required(),
  hostPathVolumes: yup.array().required(),
  resource: yup.object({
    requestCpu: yup.string().label(tt('CPU')).required(),
    requestMemory: yup.string().label(tt('Memory')).required(),
    limitCpu: yup.string().label(tt('CPU')).required(),
    limitMemory: yup.string().label(tt('Memory')).required(),
  }),
  autoscale: yup.object({
    maxReplicas: yup.string().label(tt('HPA 최대 레플리카')).required(),
    cpuAverageUtilization: yup.string().label(tt('CPU')).required(),
    memoryAverageUtilization: yup.string().label(tt('Memory')).required(),
  }),
})

const formValues = ref({
  pvcVolumes: [],
  hostPathVolumes: [],
  resource: {
    requestCpu: null,
    requestMemory: null,
    limitCpu: null,
    limitMemory: null,
  },
  autoscale: {
    maxReplicas: 0,
    resourceName: null,
    averageUtilization: 0,
    cpuAverageUtilization: 0,
    memoryAverageUtilization: 0,
  },
})

const getFormValues = () => {
  return formValues.value
}

const submit = () => {}
const validate = () => {
  return false
}

const pvcHeaders = ref([
  {
    title: 'MountPath',
    key: 'mountPath',
  },
  {
    title: 'PVC',
    key: 'pvc',
  },
])

const hostPathHeaders = ref([
  {
    title: '이름',
    key: 'name',
  },
  {
    title: 'MountPath',
    key: 'mountPath',
  },
  {
    title: 'HostPath',
    key: 'hostPath',
  },
  {
    title: 'Type',
    key: 'type',
  },
])

defineExpose({ validate, submit, getFormValues })
</script>

<style lang="scss" scoped></style>
