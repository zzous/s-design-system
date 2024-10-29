<template>
  <v-form ref="formRef" class="list-input-wrapper">
    <v-row v-for="(itemGroup, index) in model" :key="itemGroup.idx" class="list-input-row" dense no-gutters>
      <v-col class="list-input-col">
        <v-text-field
          v-model="itemGroup.value"
          variant="outlined"
          density="compact"
          :placeholder="placeholder"
          hide-details
        />
      </v-col>
      <v-col class="list-input-col col-icon">
        <v-icon v-if="index === model.length - 1" icon="mdi-plus-circle" color="#1297F2" @click="onClickAddRow()" />
        <v-icon v-else icon="mdi-minus-circle" color="#999999" @click="onClickRemoveRow(itemGroup.idx)" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emits = defineEmits(['update:model-value'])

const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
})

const formRef = ref(null)
const model = ref([])

const idx = ref(0)

const onClickAddRow = () => {
  model.value.push({
    idx: idx.value,
    value: '',
  })
  idx.value += 1
  emits('update:model-value', model.value)
}
const onClickRemoveRow = idx => {
  const findIdx = model.value.findIndex(item => item.idx === idx)
  model.value.splice(findIdx, 1)
  emits('update:model-value', model.value)

  if (!model.value.length) {
    onClickAddRow()
  }
}

onMounted(() => {
  model.value = props.modelValue
  if (!model.value.length) {
    onClickAddRow()
  }
})
</script>

<style lang="scss" scoped>
.list-input-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  .list-input-row {
    display: grid;
    grid-template-columns: 1fr 40px;
    align-items: center;
    width: 100%;
    gap: 10px;
  }
}
</style>
