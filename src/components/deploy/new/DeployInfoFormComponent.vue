<template>
  <div class="form-wrapper">
    <vee-form ref="deployInfoFormRef" v-slot="{ values }" :validation-schema="schema">
      <s-sub-header :show-cnt="false" :title="$t('배포 정보')" class-name="sub-title">
        <s-btn color="black" height="30" @click="onClickYamlPreivew">{{ $t('Yaml 미리보기') }}</s-btn>
      </s-sub-header>
      <s-form-table>
        <s-form-item v-slot="{ errors }" :label="$t('프로바이더')" name="providerCd" required>
          <v-select
            v-model="formValues.providerCd"
            variant="outlined"
            density="compact"
            hide-details="auto"
            item-value="codeCd"
            item-title="codeName"
            :placeholder="$t('프로바이더를 선택하세요')"
            :items="providers"
            :error-messages="errors"
            @update:model-value="onChangeProvider"
          />
        </s-form-item>
        <s-form-item v-slot="{ errors }" :label="$t('클러스터')" name="k8sId" required>
          <v-select
            :model-value="formValues.k8sId"
            variant="outlined"
            density="compact"
            hide-details="auto"
            item-value="k8sId"
            item-title="k8sName"
            :placeholder="$t('클러스터를 선택하세요')"
            :items="clusters"
            :error-messages="errors"
            @update:model-value="onChangeCluster"
          />
        </s-form-item>
        <s-form-item v-slot="{ errors, handleChange }" :label="$t('배포 복사')" name="deployId">
          <v-select
            v-model="copyDeployId"
            variant="outlined"
            density="compact"
            hide-details="auto"
            item-value="deployId"
            item-title="deployName"
            :placeholder="$t('복사할 배포를 선택하세요')"
            :items="deploys"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
          <s-btn height="30" variant="outlined" :disabled="!copyDeployId" @click="onClickCopyDeploy">
            {{ $t('복사') }}
          </s-btn>
        </s-form-item>
        <s-form-item v-slot="{ errors, handleChange }" :label="$t('네임스페이스')" name="namespace" required>
          <v-select
            v-model="formValues.namespace"
            variant="outlined"
            density="compact"
            hide-details="auto"
            item-value="commonCd"
            item-title="codeName"
            :placeholder="$t('네임스페이스를 선택하세요')"
            :items="namespaces"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </s-form-item>
        <s-form-item v-slot="{ errors, handleChange }" :label="$t('컨트롤러 이름')" name="controllerName" required>
          <v-text-field
            v-model="formValues.controllerName"
            variant="outlined"
            density="compact"
            hide-details="auto"
            :placeholder="$t('컨트롤러 이름을 입력하세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
            @input="isDuplicateControllerName = true"
          />
          <s-btn height="30" variant="outlined" :disabled="!isDuplicateControllerName" @click="checkDuplicate">
            {{ $t('중복 체크') }}
          </s-btn>
        </s-form-item>
        <s-form-item v-slot="{ errors, handleChange }" :label="$t('컨트롤러')" name="controller" required>
          <v-select
            v-model="formValues.controller"
            variant="outlined"
            density="compact"
            hide-details="auto"
            item-value="commonCd"
            item-title="codeName"
            :placeholder="$t('컨트롤러를 선택하세요')"
            :items="controllers"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </s-form-item>
        <s-form-item v-slot="{ errors, handleChange }" :label="$t('레플리카')" name="replicas" required>
          <v-text-field
            v-model="formValues.replicas"
            variant="outlined"
            density="compact"
            hide-details="auto"
            type="number"
            :placeholder="$t('레플리가 개수를 입력하세요')"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </s-form-item>
        <s-form-item v-slot="{ errors, handleChange }" :label="$t('배포 전략')" name="strategyType" required>
          <v-select
            v-model="formValues.strategyType"
            variant="outlined"
            density="compact"
            hide-details="auto"
            item-value="codeCd"
            item-title="codeName"
            :placeholder="$t('배포 전략을 선택하세요')"
            :items="strategyTypes"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </s-form-item>
        <s-form-item v-slot="{ errors, handleChange }" :label="$t('서비스 타입')" name="serviceType">
          <v-select
            v-model="formValues.serviceType"
            variant="outlined"
            density="compact"
            hide-details="auto"
            item-value="codeCd"
            item-title="codeName"
            :placeholder="$t('서비스 타입을 선택하세요')"
            :items="serviceTypes"
            :error-messages="errors"
            @update:model-value="handleChange"
          />
        </s-form-item>
        <s-form-item :label="$t('포트')" name="ports" required content-class="w-100">
          <deploy-port-input-component ref="portRef" v-model="formValues.ports" :service-type="values.serviceType" />
        </s-form-item>
        <s-form-item :label="$t('도메인')">
          <div class="form-item--half">
            <v-select
              v-model="formValues.proxyInfo.tlsYn"
              variant="outlined"
              density="compact"
              hide-details="auto"
              item-value="value"
              item-title="title"
              :placeholder="$t('도메인 방식을 선택하세요')"
              :items="[
                { title: '미사용', value: null },
                { title: 'http://', value: 'N' },
                { title: 'https://', value: 'Y' },
              ]"
              @update:model-value="onChangeTlsYn"
            />
          </div>
          <div>
            <vee-field v-slot="{ errors, handleChange }" name="proxyInfo.domainName">
              <v-text-field
                v-model="formValues.proxyInfo.domainName"
                variant="outlined"
                density="compact"
                hide-details="auto"
                :disabled="!formValues.proxyInfo.tlsYn"
                :error-messages="errors"
                :placeholder="$t('도메인 주소를 입력하세요')"
                @update:model-value="handleChange"
              />
            </vee-field>
          </div>
          <div class="form-item--half">
            <vee-field v-slot="{ errors }" name="proxyInfo.tlsKey">
              <s-file-input-btn
                :placeholder="$t('Key 파일을 업로드하세요')"
                :model-value="formValues.proxyInfo.tlsKey"
                :error-messages="errors"
                accept=".key"
                :btn-disabled="formValues.proxyInfo.tlsYn !== 'Y'"
                @update:model-value="e => updateFile('tlsKey', e)"
              />
            </vee-field>
            <vee-field v-slot="{ errors }" name="proxyInfo.tlsCrt">
              <s-file-input-btn
                :placeholder="$t('Crt 파일을 업로드하세요')"
                :model-value="formValues.proxyInfo.tlsCrt"
                :error-messages="errors"
                accept=".crt"
                :btn-disabled="formValues.proxyInfo.tlsYn !== 'Y'"
                @update:model-value="e => updateFile('tlsCrt', e)"
              />
            </vee-field>
          </div>
        </s-form-item>
      </s-form-table>
    </vee-form>
    <!-- ImagePullSecrets, 명령, args, 환경 변수, ConfigMap, SecretKey, 호스트 이름, 노드선택자, HostAliases -->
    <deploy-advanced-form-component ref="deployAdvancedFormRef" />

    <!-- 볼륨 pvc, 볼륨 hostpath, Requests, Limits, HPA 최대 레플리카, HPA 평균 사용률 -->
    <deploy-etc-form-component ref="deployEtcFormRef" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
// VeeForm 사용 시 s-form-item 컴포넌트에 name 값 필수
import { Form as VeeForm, Field as VeeField } from 'vee-validate'
import * as yup from 'yup'

import { useI18n } from '@/_setting/i18n'
import { useDevOpsCommonStore } from '@/stores/devops/common'
import { useDeployStore } from '@/stores/devops/deploy'
import { useDevOpsServiceGroupStore } from '@/stores/devops/service-group'
import { useAlertStore } from '@/stores/components/alert'

import DeployPortInputComponent from '@/components/deploy/DeployPortInputComponent.vue'
import SFileInputBtn from '@/components/_common/input/FileInputButtonComponent.vue'
import DeployAdvancedFormComponent from './DeployAdvancedFormComponent.vue'
import DeployEtcFormComponent from './DeployEtcFormComponent.vue'

const emits = defineEmits(['validate', 'errors', 'update:model-value'])

const props = defineProps({
  deployInfo: {
    type: Object,
    default: () => ({}),
  },
})

const commonStore = useDevOpsCommonStore()
const deployStore = useDeployStore()
const alertStore = useAlertStore()

const { tt } = useI18n()
const sgStore = useDevOpsServiceGroupStore()
const { serviceGroupId } = storeToRefs(sgStore)

const deployInfoFormRef = ref(null)

const schema = yup.object({
  providerCd: yup.string().label(tt('프로바이더')).required(),
  k8sId: yup.string().label(tt('클러스터')).required(),
  namespace: yup.string().label(tt('네임스페이스')).required(),
  controllerName: yup.string().onlyEngNumHyphen().label(tt('컨트롤러 이름')).required(),
  controller: yup.string().label(tt('컨트롤러')).required(),
  replicas: yup.number().min(1).label(tt('레플리카')).required(),
  strategyType: yup.string().label(tt('배포 전략')).required(),
  serviceType: yup.string().label(tt('서비스 타입')).required(),
  ports: yup.array().min(1).label(tt('포트')).required(),
  proxyInfo: yup.object({
    defaultDomainYn: yup.string(),
    domainName: yup
      .string()
      .domain()
      .label(tt('도메인 주소'))
      .when('tlsYn', (tlsYn, schema) => {
        if (tlsYn.at(0)) {
          return schema.required()
        }
        return schema
      }),
    tlsCrt: yup
      .string()
      .label(tt('CRT 파일'))
      .when('tlsYn', (tlsYn, schema) => {
        if (tlsYn.at(0) === 'Y') {
          return schema.required()
        }
        return schema
      }),
    tlsCrtName: yup.string(),
    tlsKey: yup
      .string()
      .label(tt('TLS Key'))
      .when('tlsYn', (tlsYn, schema) => {
        if (tlsYn.at(0) === 'Y') {
          return schema.required()
        }
        return schema
      }),
    tlsKeyName: yup.string(),
    tlsSecretName: yup.string(),
    tlsYn: yup.string(),
  }),
})

const formValues = ref({
  providerCd: null,
  k8sId: null,
  namespace: null,
  controllerName: null,
  replicas: 1,
  strategyType: null,
  serviceType: null,
  ports: [],
  proxyInfo: {
    defaultDomainYn: 'N',
    domainName: '',
    tlsCrt: null,
    tlsCrtName: '',
    tlsKey: null,
    tlsKeyName: '',
    tlsSecretName: '',
    tlsYn: null,
  },
})

const isDuplicateControllerName = ref(false)

const controllers = ref([])
const clusters = ref([])
const providers = ref([])
const serviceTypes = ref([])
const strategyTypes = ref([])
const namespaces = ref([])
const rolloutStrategies = ref([])
const deploys = ref([]) // 배포 복사를 위한 배포 목록
const copyDeployId = ref(null)

// Form check
const deployAdvancedFormRef = ref(null)
const deployEtcFormRef = ref(null)

const getProviders = async () => {
  providers.value = await commonStore.getCommonGroups('provider')
}

const getControllers = async () => {
  controllers.value = await commonStore.getCommonGroups('Controller')
}
const getClusters = async () => {
  clusters.value = await deployStore.getConfigList({
    providerCd: deployInfoFormRef.value.values.providerCd,
    serviceGroupId: serviceGroupId.value,
  })
}

const getNamespaces = async value => {
  namespaces.value = []
  if (value) {
    namespaces.value = await deployStore.getNamespaces(value)
    if (namespaces.value.length) {
      formValues.value.namespace = 'default'
      deployInfoFormRef.value.setFieldValue('namespace', formValues.value.namespace)
    }
  }
}
const getStrategyTypes = async () => {
  strategyTypes.value = await commonStore.getCommonGroups('StrategyType')
}
const getServiceTypes = async () => {
  serviceTypes.value = await commonStore.getCommonGroups('ServiceType')
  if (serviceTypes.value.length) {
    formValues.value.serviceType = serviceTypes.value.at(0)?.commonCd
    deployInfoFormRef.value.setFieldValue('serviceType', formValues.value.serviceType)
  }
}
const getRolloutStrategies = async () => {
  rolloutStrategies.value = await commonStore.getCommonGroups('RolloutStrategy')
}

const onChangeProvider = async value => {
  deployInfoFormRef.value.setFieldValue('providerCd', value)
  onChangeCluster(null)
  await getClusters()
}

const onChangeCluster = async value => {
  formValues.value.k8sId = value
  deployInfoFormRef.value.setFieldValue('k8sId', value)
  await getNamespaces(value)
}

const onChangeTlsYn = async value => {
  formValues.value.proxyInfo.tlsYn = value
  deployInfoFormRef.value.setFieldValue('proxyInfo.tlsYn', value)

  // tlsYn=N -> tlsCrt, tlsKey, tlsCrtName, tlsKeyName, tlsSecretName, domainName, defaultDomainYn
  if (value === 'N') {
    formValues.value.proxyInfo.domainName = ''
    formValues.value.proxyInfo.tlsCrt = ''
    formValues.value.proxyInfo.tlsKey = ''
    deployInfoFormRef.value.setFieldValue('proxyInfo.domainName', '')
    deployInfoFormRef.value.setFieldValue('proxyInfo.tlsCrt', '')
    deployInfoFormRef.value.setFieldValue('proxyInfo.tlsKey', '')
  }
}

const updateFile = (fieldName, value) => {
  deployInfoFormRef.value.setFieldValue(fieldName, value)
}

const onClickCopyDeploy = async () => {}
const checkDuplicate = async () => {
  const { valid: k8sIdValid } = await deployInfoFormRef.value.validateField('k8sId')
  const { valid: namespaceValid } = await deployInfoFormRef.value.validateField('namespace')

  if (!k8sIdValid || !namespaceValid) {
    return
  }

  try {
    const result = await deployStore.fetchControllerNameDuplicate({
      name: formValues.value.controllerName,
      k8sId: formValues.value.k8sId,
      namespace: formValues.value.namespace,
    })
    console.log(result)
    if (!result) {
      alertStore.openSuccessAlert(tt('사용할 수 있는 컨트롤러명입니다'))
    } else {
      alertStore.openErrorAlert(tt('중복된 컨트롤러명입니다'))
    }
    isDuplicateControllerName.value = result
  } catch (e) {
    console.log(e)
  }
}

const yamlParameter = computed(() => {
  return {
    deployName: '',
    deployApproveFlow: '',
    buildId: '',
    deployCd: '',
    buildName: '',
    deployFrom: 1,
    deployId: -1,
    projectId: null,
    flowId: '',
    k8sId: '',
    namespace: '',
    controller: '',
    replicas: 1,
    strategyType: '',
    name: '',
    proxyInfo: {
      defaultDomainYn: '',
      domainName: '',
      tlsYn: '',
      tlsSecretName: '',
      tlsCrt: '',
      tlsCrtName: '',
      tlsKey: '',
      tlsKeyName: '',
    },
    ports: [],
    resource: { requestCpu: '', requestMemory: '', limitCpu: '', limitMemory: '' },
    autoscale: { resourceName: '', maxReplicas: '', averageUtilization: '' },
    labels: { '': '' },
    command: [],
    imagePullSecrets: '',
    args: [],
    configMapName: '',
    configMapCreateYn: 'N',
    configMapData: null,
    secretName: '',
    secretCreateYn: null,
    secretData: { '': '' },
    hostname: '',
    nodeSelector: [],
    hostPathVolumes: [],
    pvcVolumeMounts: [],
    env: [],
    hostAliases: [],
    serviceType: 'ClusterIP',
    stageCd: 'DEV',
    ...props.deployInfo,
    ...formValues.value,
  }
})

const onClickYamlPreivew = async () => {
  console.log(yamlParameter.value)
  await deployStore.getK8sDeployYaml(yamlParameter.value)
}

const getFormValues = () => {
  const { controller, namespace, replicas, strategyType, serviceType, k8sId, ports } = deployInfoFormRef.value.values
  return {
    controller,
    namespace,
    replicas,
    strategyType,
    serviceType,
    k8sId,
    ports,
    ...formValues.value,
  }
}

const portRef = ref(null)

const validate = async () => {
  if (deployInfoFormRef.value) {
    const { valid, errors } = await deployInfoFormRef.value.validate()

    let childValid = true
    let childErrors = {}
    if (portRef.value) {
      const res = await portRef.value.validate()
      childValid = res.valid
      childErrors = res.errors
    }
    if (valid && childValid) {
      emits('validate', valid)
    } else {
      emits('errors', { ...errors, ...childErrors })
    }
    return valid
  }
}

defineExpose({ getFormValues, validate })

onMounted(() => {
  getProviders()
  getControllers()
  getStrategyTypes()
  getRolloutStrategies()
  getServiceTypes()
})
</script>

<style lang="scss" scoped></style>
