<template>
  <v-menu class="s-filter-select" :close-on-content-click="false">
    <template v-slot:activator="{ props, isActive }">
      <v-tooltip :text="displayText" location="end">
        <template v-slot:activator="{ props: tooltipProps }">
          <v-btn
            v-bind="{ ...props, ...tooltipProps }"
            :width="width"
            class="s-filter-select__button"
            variant="outlined"
            :density="density"
            :append-icon="isActive ? 'mdi-menu-up' : 'mdi-menu-down'"
          >
            {{ displayText }}
          </v-btn>
        </template>
      </v-tooltip>
    </template>
    <v-list
      select-strategy="classic"
      :item-title="props.itemTitle"
      :item-value="props.itemValue"
      :items="filterItems"
      :selected="filterValues"
      :density="density"
      min-width="360px"
      @update:selected="onUpdateModelValue"
    >
      <div class="s-filter-select__filter">
        <v-text-field
          class="s-input__inner my-1 pl-3"
          :density="density"
          variant="plain"
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
            <v-list-item-action start>
              <v-checkbox-btn
                class="s-filter-select__checkbox-btn"
                :indeterminate="someChecked && !allChecked"
                :model-value="allChecked"
                :density="density"
              ></v-checkbox-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider class="my-1"></v-divider>
      </div>
      <v-virtual-scroll
        :items="filterItems"
        max-height="350"
      >
        <template v-slot="{ item }">
          <div class="v-virtual-scroll__item">
            <slot name="null-data" v-if="props.hasNullValue">
              <v-list-item
                v-if="[null, props.nullValue].includes(item[props.itemValue])"
                :value="props.nullValue"
                :density="density"
              >
                <template v-slot:prepend="{ isActive }">
                  <v-list-item-action start>
                    <v-checkbox-btn class="s-filter-select__checkbox-btn" :model-value="isActive" :density="density"></v-checkbox-btn>
                  </v-list-item-action>
                </template>
                <v-list-item-title :title="props.nullTitle" :density="density">
                  {{ props.nullTitle }}
                </v-list-item-title>
              </v-list-item>
            </slot>
            <v-list-item
              v-if="![null, props.nullValue].includes(item[props.itemValue])"
              :value="item[props.itemValue]"
              :density="density"
            >
              <template v-slot:prepend="{ isActive }">
                <v-list-item-action start>
                  <v-checkbox-btn :model-value="isActive" :density="density"></v-checkbox-btn>
                </v-list-item-action>
              </template>
              <v-list-item-title
                :title="item[props.itemTitle]"
                :density="density"
              >
                {{ item[props.itemTitle] }}
              </v-list-item-title>
            </v-list-item>
          </div>
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
const filterItems = ref([])
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
    filterItems.value = props.items.map(item => {
      if (item[props.itemValue] === null) {
        return {
          ...item,
          [props.itemTitle]: props.nullTitle,
          [props.itemValue]: props.nullValue,
        }
      }
      return item
    })
    setAllChecked()
  },
  {
    immediate: true,
  }
)

const setNullValues = () => {
  // 먼저 null을 nullValue 문자열로 치환
  const convertedModelValue = convertNullToString(props.modelValue)

  if (props.hasNullValue) {
    filterValues.value = convertedModelValue.filter(value => {
      // nullValue 문자열인 경우
      if (value === props.nullValue) {
        // 검색어가 있다면 nullTitle에서 검색어를 포함하는지 확인
        if (searchWord.value) {
          return props.nullTitle.toLowerCase().includes(searchWord.value.trim().toLowerCase())
        }
        // 검색어가 없다면 항상 포함
        return true
      }
      // null이 아닌 값들은 현재 필터된 아이템들에 포함되어 있는지 확인
      const mapItems = filterItems.value.map(mItem => mItem[props.itemValue])
      return mapItems.includes(value)
    })
  } else {
    filterValues.value = convertedModelValue.filter(value => {
      const mapItems = filterItems.value.map(mItem => mItem[props.itemValue])
      return mapItems.includes(value)
    })
  }
}

watch(
  () => searchWord.value,
  () =>
  {
    if (searchWord.value) {
      filterItems.value = props.items.filter(item => {
        if (
          item[props.itemTitle] === props.nullTitle ||
          (item[props.itemTitle] === props.nullValue && item[props.itemValue] === props.nullValue)
        ) {
          return props.hasNullValue
            ? props.nullTitle.includes(searchWord.value.trim().toLowerCase())
            : false
        }
        if (item[props.itemTitle] !== props.nullValue) {
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
        if (item[props.itemValue] !== props.nullValue) {
          return item[props.itemValue]
            .toLowerCase()
            .includes(searchWord.value.trim().toLowerCase())
        }
        return false
      })

      setNullValues()
    } else {
      filterItems.value = props.items
      setNullValues()
    }
    setAllChecked()
  }
)

// modelValue의 null을 nullValue 문자열로 치환하는 함수
const convertNullToString = (values) => {
  if (!props.hasNullValue) return values
  return values.map(value => value === null ? props.nullValue : value)
}

watch(
  () => props.modelValue,
  () => {
    if (props.modelValue.length) {
      filterValues.value = convertNullToString(props.modelValue)
    } else {
      filterValues.value = []
    }
    setAllChecked()
  },
  {
    immediate: true,
  }
)

const onChangeFilterValue = values => {
  // 중복 제거
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

const changeNullValue = (value) => {
  return value.map(value => value === props.nullValue ? null : value)
}

const toggle = () => {
  const setData = new Set(filterValues.value)
  if (allChecked.value) {
    // 전체 해제: 현재 필터된 아이템들을 모두 제거
    filterItems.value.forEach(item => {
      const itemValue = item[props.itemValue]
      if (itemValue === props.nullValue || itemValue === null) {
        setData.delete(props.nullValue)
        setData.delete(null)
      } else {
        setData.delete(itemValue)
      }
    })
  } else {
    // 전체 선택: 현재 필터된 아이템들을 모두 추가
    try {
      filterItems.value.forEach(item => {
        const itemValue = item[props.itemValue]
        if (itemValue === props.nullValue || itemValue === null) {
          setData.add(props.nullValue)
        } else if (itemValue) {
          setData.add(itemValue)
        }
      })
    } catch (e) {
      console.warn(e)
    }
  }
  const result = Array.from(setData)
  onChangeFilterValue(result)
  emits('update:model-value', changeNullValue(result))
}

const onUpdateModelValue = value => {
  onChangeFilterValue(value)
  emits('update:model-value', changeNullValue(value))
}
</script>

<style lang="scss" scoped>
@import './SFilterSelect.scss';
</style>
