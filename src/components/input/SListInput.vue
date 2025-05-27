<template>
  <div class="list-input-wrapper">
    <v-row class="list-input-header list-input-row" dense no-gutters :style="headerStyle">
      <v-col v-for="(header, cIdx) in headers" :key="cIdx" class="list-input-col">
        {{ header.title }}
      </v-col>
      <v-col v-if="!readonly" class="list-input-col icon-col">
        <v-icon icon="mdi-plus-circle" color="#666666" @click="onClickAddRow" />
      </v-col>
    </v-row>
    <v-form ref="formRef">
      <v-row
        v-for="(rows, rowIndex) in model"
        :key="rows.idx"
        class="list-input-row list-input-content"
        :style="headerStyle"
        dense
        no-gutters
      >
        <v-col v-for="(header, cIdx) in headers" :key="'row-' + rows.idx + 'col-' + cIdx" class="list-input-col">
          <span v-if="readonly">
            {{ rows[header.key] || '-' }}
          </span>
          <template v-else>
            <v-select
              v-if="header.type === 'select'"
              v-model="rows[header.key]"
              density="compact"
              variant="outlined"
              hide-details
              :item-title="header.itemTitle"
              :item-value="header.itemValue"
              :items="getSelectItems(header, rowIndex)"
              :placeholder="header.placeholder"
              :rules="header.rules"
            />
            <v-text-field
              v-else
              v-model="rows[header.key]"
              density="compact"
              variant="outlined"
              hide-details
              :rules="header.rules"
              :placeholder="header.placeholder"
            />
          </template>
        </v-col>
        <v-col v-if="!readonly" class="list-input-col icon-col">
          <v-icon icon="mdi-minus-circle" color="#999999" @click="onClickRemoveRow(rows.idx)" />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const emit = defineEmits(['update:model-value'])

const props = defineProps({
  headers: {
    type: Array,
    default: () => {
      return []
    },
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: Array,
    default: () => {
      return []
    },
  },
})

const idx = ref(0)

const model = defineModel({
  type: Array,
  default: [],
})

const headerStyle = computed(() => {
  return {
    gridTemplateColumns: `${Array.from({ length: props.headers.length }, () => '1fr').join(' ')} 40px`,
  }
})

const initialModel = computed(() => {
  const keys = props.headers.map(item => item.key)
  const result = {}
  keys.forEach(key => {
    result[key] = null
  })
  return {
    idx: idx.value,
    ...result,
  }
})

const getSelectItems = (header, rowIndex) => {
  if (typeof header.items === 'function') {
    return header.items(rowIndex)
  }
  return header.items
}

const onClickRemoveRow = idx => {
  const findIdx = model.value.findIndex(item => item.idx === idx)
  model.value.splice(findIdx, 1)
}

const onClickAddRow = () => {
  model.value.push(initialModel.value)
  idx.value += 1
}

const formRef = ref(null)
const validate = async () => {
  const { valid, errors } = await formRef.value.validate()
  return { valid, errors }
}

onMounted(() => {
  model.value = props.modelValue
})

watch(
  () => model.value,
  value => {
    emit('update:model-value', value)
  },
  { deep: true },
)

defineExpose({ validate })
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

    :deep(.v-text-field) {
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
