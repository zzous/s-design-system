<template>
  <div class="port-input-wrapper">
    <v-row class="port-header port-row" dense no-gutters>
      <v-col class="port-header-col large-col">ServicePort</v-col>
      <v-col class="port-header-col large-col">ContainerPort</v-col>
      <v-col class="port-header-col large-col">NodePort</v-col>
      <v-col class="port-header-col large-col">IngressPath</v-col>
      <v-col class="port-header-col small-col">
        <v-icon icon="mdi-plus-circle-outline" @click="onClickAddRow" />
      </v-col>
    </v-row>

    <v-row v-for="portGroup in model" :key="portGroup.servicePort" class="port-row" dense no-gutters>
      <v-col class="port-input-col large-col">
        <v-text-field v-model="portGroup.servicePort" variant="outlined" type="" placeholder="8080" />
      </v-col>
      <v-col class="port-input-col large-col">
        <v-text-field v-model="portGroup.containerPort" variant="outlined" type="" placeholder="8080" />
      </v-col>
      <v-col class="port-input-col large-col">
        <v-text-field variant="outlined" disabled :model-value="30000" />
      </v-col>
      <v-col class="port-input-col large-col">
        <v-text-field v-model="portGroup.ingressPath" variant="outlined" type="" placeholder="/app" />
      </v-col>
      <v-col class="port-input-col small-col">
        <v-icon icon="mdi-minus-circle-outline" @click="onClickRemoveRow" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const onClickRemoveRow = idx => {
  model.value.splice(idx, 1)
}
const onClickAddRow = () => {
  model.value.push({
    servicePort: null,
    containerPort: null,
    ingressPath: '',
  })
}
const model = defineModel({
  type: Array,
  default: [],
})
</script>

<style lang="scss" scoped>
.port-input-wrapper {
  text-align: center;
}

.port-header {
  background: #e9e9e9;
}

.port-header-col {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-right: 1px solid;
}

.port-input-col {
  margin: 4px;
}

.port-row {
  margin-bottom: 2px;
}

.port-header .large-col:nth-child(1) {
  border-left: 1px solid;
}

.large-col {
  flex: 1; /* 남은 공간을 균등하게 나누기 */
  max-width: calc(100% / 4); /* 4개 열을 동일하게 배치 */
}

.small-col {
  flex: 0 0 4%; /* 작은 칸은 5%로 고정 */
}
</style>
