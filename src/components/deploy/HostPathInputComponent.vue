<template>
  <div class="port-input-wrapper">
    <v-row class="port-header port-row" dense no-gutters>
      <v-col class="port-header-col large-col">이름</v-col>
      <v-col class="port-header-col large-col">MountPath</v-col>
      <v-col class="port-header-col large-col">HostPath</v-col>
      <v-col class="port-header-col large-col">Type</v-col>
      <v-col class="port-header-col small-col">
        <v-icon icon="mdi-plus-circle-outline" @click="onClickAddRow" />
      </v-col>
    </v-row>

    <v-row v-for="hostPath in model" :key="hostPath.name" class="port-row" dense no-gutters>
      <v-col class="port-input-col large-col">
        <v-text-field v-model="hostPath.name" variant="outlined" type="" placeholder="app-log" />
      </v-col>
      <v-col class="port-input-col large-col">
        <v-text-field v-model="hostPath.mountPath" variant="outlined" type="" placeholder="/logs" />
      </v-col>
      <v-col class="port-input-col large-col">
        <v-text-field v-model="hostPath.hostPath" variant="outlined" type="" placeholder="/logs" />
      </v-col>
      <v-col class="port-input-col large-col">
        <v-select v-model="hostPath.type" :items="hostPathTypeList" />
      </v-col>
      <v-col class="port-input-col small-col">
        <v-icon icon="mdi-minus-circle-outline" @click="onClickRemoveRow" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hostPathTypeList = ref(['DirectoryOrCreate', 'Directory', 'FileOrCreate', 'File'])
const onClickRemoveRow = idx => {
  model.value.splice(idx, 1)
}
const onClickAddRow = () => {
  model.value.push({
    name: '',
    mountPath: '',
    hostPath: '',
    type: 'DirectoryOrCreate',
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
