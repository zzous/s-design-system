<template>
  <div class="list-input-wrapper">
    <v-row class="list-input-header list-input-row" dense no-gutters :style="headerStyle">
      <v-col v-for="(header, cIdx) in headers" :key="cIdx" class="list-input-col">
        {{ header.title }}
      </v-col>
      <v-col class="list-input-col icon-col">
        <v-icon icon="mdi-plus-circle" color="#666666" @click="onClickAddRow" />
      </v-col>
    </v-row>

    <v-row
      v-for="rows in model"
      :key="rows.idx"
      class="list-input-row list-input-content"
      :style="headerStyle"
      dense
      no-gutters
    >
      <v-col v-for="(header, cIdx) in headers" :key="'row-' + rows.idx + 'col-' + cIdx" class="list-input-col">
        <v-text-field v-model="rows[header.key]" density="compact" variant="outlined" hide-details />
      </v-col>
      <v-col class="list-input-col icon-col">
        <v-icon icon="mdi-minus-circle" color="#999999" @click="onClickRemoveRow" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const emits = defineEmits(['update:model-value'])

const props = defineProps({
  headers: {
    type: Array,
    default: () => {
      return []
    },
  },
  modelValue: {
    type: Array,
    default: () => {
      return []
    },
  },
})

const idx = ref(0)
const headerStyle = computed(() => {
  return {
    gridTemplateColumns: `${Array.from({ length: props.headers.length }, () => '1fr').join(' ')} 40px`,
  }
})

const initialModel = computed(() => {
  return {
    ...props.headers.map(item => item.key),
    idx: idx.value,
  }
})

const onClickRemoveRow = idx => {
  const findIdx = model.value.findIndex(item => item.idx === idx)
  model.value.splice(findIdx, 1)

  emits('update:model-value', model.value)

  if (!model.value.length) {
    onClickAddRow()
  }
}

const onClickAddRow = () => {
  model.value.push(initialModel.value)
  idx.value += 0

  emits('update:model-value', model.value)
}
const model = defineModel({
  type: Array,
  default: [],
})

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
  text-align: center;

  .list-input-header {
    font-weight: 600;
    border-top: 1px solid;
    background: $data-table-header-color;
    min-height: 36px;
  }
  .list-input-row {
    display: grid;
    align-items: center;
    border-bottom: 1px solid $s-default--gray-5;
    width: 100%;

    ::v-deep(.v-text-field) {
      min-width: initial !important;
      .v-input__control .v-field .v-field__input {
        min-width: initial;
      }
    }
  }

  .list-input-content {
    min-height: 40px;
  }

  .list-input-col {
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0 10px;
  }
}
</style>
