<template>
  <div class="port-input-wrapper">
    <v-row class="port-header port-row" dense no-gutters>
      <v-col class="port-header-col">ServicePort</v-col>
      <v-col class="port-header-col">ContainerPort</v-col>
      <v-col class="port-header-col">NodePort</v-col>
      <v-col class="port-header-col">IngressPath</v-col>
      <v-col class="port-header-col">
        <v-icon icon="mdi-plus-circle port-icon" color="#666666" @click="onClickAddRow" />
      </v-col>
    </v-row>
    <v-form ref="formRef">
      <v-row v-for="(portGroup, index) in model" :key="index" class="port-row port-content" dense no-gutters>
        <v-col class="port-input-col">
          <v-text-field
            v-model="portGroup.servicePort"
            type="number"
            variant="outlined"
            density="compact"
            placeholder="8080"
            :rules="[v => !!v || 'Required']"
            hide-details
          />
        </v-col>
        <v-col class="port-input-col">
          <v-text-field
            v-model="portGroup.containerPort"
            type="number"
            variant="outlined"
            density="compact"
            placeholder="8080"
            :rules="[v => !!v || 'Required']"
            hide-details
          />
        </v-col>
        <v-col class="port-input-col">
          <v-text-field
            v-model="portGroup.nodePort"
            variant="outlined"
            type="number"
            density="compact"
            hide-details
            :rules="[v => (!nodePortDisabled ? !!v || 'Required' : true)]"
            :disabled="nodePortDisabled"
          />
        </v-col>
        <v-col class="port-input-col">
          <v-text-field
            v-model="portGroup.ingressPath"
            density="compact"
            variant="outlined"
            placeholder="/app"
            hide-details
            :rules="[v => (!ingressPathDisabled ? !!v || 'Required' : true)]"
            :disabled="ingressPathDisabled"
          />
        </v-col>
        <v-col class="port-input-col">
          <v-icon icon="mdi-minus-circle" color="#999999" @click="onClickRemoveRow(portGroup.idx)" />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { DEPLOY_SERVICE_TYPE } from '@/assets/consts/consts'

const emits = defineEmits(['update:model-value'])

const props = defineProps({
  serviceType: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
})
const model = ref([])
const idx = ref(0)
const onClickAddRow = () => {
  model.value.push({
    idx: idx.value,
    name: '',
    protocol: 'tcp',
    servicePort: null,
    containerPort: null,
    nodePort: null,
    ingressPath: '',
  })
  idx.value += 1
  emits('update:model-value', model.value)
}

const onClickRemoveRow = idx => {
  const findIdx = model.value.findIndex(item => item.idx === idx)
  model.value.splice(findIdx, 1)

  if (!model.value.length) {
    onClickAddRow()
  }
}

const dataReset = () => {
  model.value = []
  onClickAddRow()
  emits('update:model-value', model.value)
}

const nodePortDisabled = computed(() => {
  // Node Port는 서비스가 ClusterIp, LoadBalancer일 경우 입력하지 못하도록 한다.
  if ([DEPLOY_SERVICE_TYPE.CLUSTER_IP, DEPLOY_SERVICE_TYPE.LOAD_BALANCER].includes(props.serviceType)) {
    return true
  }
  return false
})
const ingressPathDisabled = computed(() => {
  // IngressPath는 서비스가 ClusterIp, LoadBalancer일 경우 입력하지 못하도록 한다.
  if ([DEPLOY_SERVICE_TYPE.NODE_PORT, DEPLOY_SERVICE_TYPE.LOAD_BALANCER].includes(props.serviceType)) {
    return true
  }
  return false
})

watch(
  () => props.serviceType,
  () => {
    dataReset()
  },
)

const formRef = ref(null)
const validate = () => {
  return formRef.value.validate()
}

onMounted(() => {
  model.value = props.modelValue
})

defineExpose({ validate })
</script>

<style lang="scss" scoped>
.port-input-wrapper {
  width: 100%;
  text-align: center;
}

.port-header {
  font-weight: 600;
  border-top: 1px solid;
  background: $data-table-header-color;
  min-height: 36px;
}

.port-content {
  min-height: 40px;

  .port-input-col {
    padding: 0 10px;
  }
}

.port-header-col {
  align-items: center;
}

.port-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 40px;
  align-items: center;
  border-bottom: 1px solid $s-default--gray-5;
  width: 100%;

  ::v-deep(.v-text-field) {
    min-width: initial !important;
    .v-input__control .v-field .v-field__input {
      min-width: initial;
    }
  }

  .port-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
