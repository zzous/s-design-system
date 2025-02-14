<template>
  <v-menu class="s-filter-select" :close-on-content-click="false">
    <template v-slot:activator="{ props, isActive }">
      <v-btn
        v-bind="props"
        :width="width"
        class="s-filter-select__button"
        :variant="variant"
        :density="density"
        :append-icon="isActive ? 'mdi-menu-up' : 'mdi-menu-down'"
      >
        {{ displayText }}
      </v-btn>
    </template>
    <v-list
      select-strategy="classic"
      :item-title="props.itemTitle"
      :item-value="props.itemValue"
      :items="filterItems"
      :selected="modelValue"
      :density="density"
      @update:selected="onUpdateModelValue"
    >
      <div class="s-filter-select__filter">
        <v-text-field
          class="s-input__inner my-1 pl-3"
          :density="density"
          variant="text"
          hide-details
          :placeholder="placeholder"
          v-model="searchWord"
          prepend-icon="mdi-filter"
        />
        <v-divider class="mb-1"></v-divider>
        <v-list-item
          :title="searchWord ? `필터링 된 검색 ${filterItems.length} 건` : '전체 검색'"
          :density="density"
          @click="toggle"
        >
          <template v-slot:prepend>
            <v-checkbox-btn
              :indeterminate="someChecked && !allChecked"
              :model-value="allChecked"
              :density="density"
            ></v-checkbox-btn>
          </template>
        </v-list-item>
        <v-divider class="my-1"></v-divider>
      </div>
      <v-virtual-scroll
        :items="filterItems"
        :visibleItems="Math.min(20, filterItems.length)"
        max-height="350"
        :width="width"
        renderless
      >
        <template v-slot="{ item, isActive }">
          <slot name="null-data" v-if="hasNullValue">
            <v-list-item
              v-if="[null, 'NULL'].includes(item[props.itemValue])"
              :value="nullValue"
              ><template v-slot:prepend="{ isActive }">
                <v-list-item-action start>
                  <v-checkbox-btn :model-value="isActive" :density="density"></v-checkbox-btn>
                </v-list-item-action>
              </template>
              <v-list-item-title :selected="isActive" :title="nullTitle" :density="density">{{
                nullTitle
              }}</v-list-item-title></v-list-item
            >
          </slot>
          <v-list-item
            :value="item[props.itemValue]"
            v-if="![null, 'NULL'].includes(item[props.itemValue])"
          >
            <template v-slot:prepend="{ isActive }">
              <v-list-item-action start>
                <v-checkbox-btn :model-value="isActive" :density="density"></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title
              :selected="isActive"
              :title="item[props.itemTitle]"
              >{{ item[props.itemTitle] }}</v-list-item-title
            >
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-list>
  </v-menu>
</template>

<script setup>
import { watch, computed, ref } from 'vue'

const props = defineProps({
  itemTitle: {
    type: String,
    default: '',
  },
  itemValue: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  displayText: {
    type: String,
    default: '',
  },
  hasNullValue: {
    type: Boolean,
    default: false,
  },
  nullTitle: {
    type: String,
    default: 'Value is NULL',
  },
  nullValue: {
    type: String,
    default: 'NULL',
  },
  density: {
    type: String,
    default: 'default',
  },
  variant: {
    type: String,
    default: 'filled',
  },
  hideDetails: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '검색',
  },
  width: {
    type: [String, Number],
    default: 316,
  },
})

const emits = defineEmits(['update:model-value'])

const searchWord = ref(null)
const filterItems = ref(props.items)
const filterValues = ref([])

const allChecked = ref(false)

const setAllChecked = () => {
  let result = false
  if (filterValues.value.length) {
    result = filterValues.value.length === filterItems.value.length
  }
  allChecked.value = result
}

watch(
  () => props.items,
  () => {
    filterItems.value = props.items
    setAllChecked()
  },
)

watch(
  () => searchWord.value,
  () =>
  {
    if (searchWord.value) {
      filterItems.value = props.items.filter(item => {
        // if (item[props.itemTitle] === null) return false
        if (
          item[props.itemTitle] === props.nullTitle ||
          (item[props.itemTitle] === null && item[props.itemValue] === null)
        ) {
          return props.hasNullValue
            ? props.nullTitle.includes(searchWord.value.trim().toLowerCase())
            : false
        }
        if (item[props.itemTitle] !== null) {
          if (
            item[props.itemTitle]
              .toLowerCase()
              .includes(searchWord.value.trim().toLowerCase())
          ) {
            return true
          }
        }
        // ID 검색 허용 (기존에는 Name 검색만 허용이었으나 Id 검색도 추가)
        // ID 에는 Null Title이 없음
        if (item[props.itemValue] !== null) {
          return item[props.itemValue]
            .toLowerCase()
            .includes(searchWord.value.trim().toLowerCase())
        }
        return false
      })

      filterValues.value = props.modelValue.filter(value => {
        if (value === props.nullValue || value === null) {
          return props.hasNullValue
            ? props.nullValue.includes(searchWord.value.trim().toLowerCase())
            : false
        }
        if (value !== props.nullValue || value !== null) {
          const mapItems = filterItems.value.map(
            mItem => mItem[props.itemValue],
          )
          return mapItems.includes(value)
        }
        return false
      })
    } else {
      filterItems.value = props.items
      filterValues.value = props.modelValue
    }
    setAllChecked()
  },
)

watch(
  () => props.modelValue,
  () => {
    setAllChecked()
  },
)

const onChangeFilterValue = values => {
  const map = new Map(
    filterItems.value.map(item => [item[props.itemValue], item]),
  )
  filterValues.value = values.filter(value => {
    return map.has(value) || value === props.nullValue
  })
}

const someChecked = computed(() => {
  return filterValues.value.length > 0
})

const toggle = () => {
  const setData = new Set(props.modelValue)
  if (allChecked.value) {
    filterValues.value.forEach(item => {
      if (item !== null) setData.delete(item)
      else setData.delete('NULL')
    })
  } else {
    try {
      filterItems.value.forEach(item => {
        if (item[props.itemValue]) setData.add(item[props.itemValue])
        else setData.add('NULL')
      })
    } catch (e) {
      console.warn(e)
    }
  }
  const result = Array.from(setData)
  onChangeFilterValue(result)
  emits('update:model-value', result)
}

const onUpdateModelValue = value => {
  onChangeFilterValue(value)
  emits('update:model-value', value)
}
</script>

<style lang="scss" scoped>
@import './SFilterSelect.scss';
</style>
