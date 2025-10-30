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
      :density="density"
      min-width="360px"
    >
      <div class="s-filter-select__filter">
        <v-text-field
          class="s-input__inner my-1 pl-3"
          :density="density"
          variant="plain"
          hide-details
          :placeholder="placeholder"
          :model-value="searchWord"
          @update:model-value="onSearchWordChange"
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

      <div style="max-height: 350px; overflow-y: auto;">
        <template v-for="item in filterItems" :key="item[props.itemValue]">
          <!-- null 값 처리 -->
          <v-list-item
            v-if="props.hasNullValue && [null, props.nullValue].includes(item[props.itemValue])"
            :value="props.nullValue"
            :density="density"
            @click="onItemClick(props.nullValue)"
          >
            <template v-slot:prepend>
              <v-list-item-action start>
                <v-checkbox-btn
                  class="s-filter-select__checkbox-btn"
                  :model-value="filterValues.includes(props.nullValue)"
                  :density="density"
                ></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title :title="props.nullTitle">
              {{ props.nullTitle }}
            </v-list-item-title>
          </v-list-item>

          <!-- 일반 값 처리 -->
          <v-list-item
            v-else
            :value="item[props.itemValue]"
            :density="density"
            @click="onItemClick(item[props.itemValue])"
          >
            <template v-slot:prepend>
              <v-list-item-action start>
                <v-checkbox-btn
                  :model-value="filterValues.includes(item[props.itemValue])"
                  :density="density"
                ></v-checkbox-btn>
              </v-list-item-action>
            </template>
            <v-list-item-title :title="getDisplayTitle(item)">
              {{ getDisplayTitle(item) }}
            </v-list-item-title>
          </v-list-item>
        </template>
      </div>
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
  searchByValue: {
    type: Boolean,
    default: false,
    description: 'value(ID) 값으로도 검색할지 여부',
  },
})

const emits = defineEmits(['update:model-value'])

const searchWord = ref('')
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
    // 검색어가 있으면 즉시 필터링 수행
    if (searchWord.value) {
      performSearch(searchWord.value)
    } else {
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
    }
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

// 검색어 필터링 로직을 별도 함수로 분리
const performSearch = (searchTerm) => {
  // 검색어를 trim하고 빈 문자열 체크
  const trimmedSearch = (searchTerm || '').trim()

  if (trimmedSearch) {
    const searchTermLower = trimmedSearch.toLowerCase()

    filterItems.value = props.items
      .map(item => {
        // null 값을 nullValue로 변환
        if (item[props.itemValue] === null) {
          return {
            ...item,
            [props.itemTitle]: props.nullTitle,
            [props.itemValue]: props.nullValue,
          }
        }
        return item
      })
      .filter(item => {
        const titleValue = item[props.itemTitle]
        const idValue = item[props.itemValue]

        // null 값 처리
        if (
          titleValue === props.nullTitle ||
          (titleValue === props.nullValue && idValue === props.nullValue)
        ) {
          return props.hasNullValue
            ? props.nullTitle.toLowerCase().includes(searchTermLower)
            : false
        }

        // title 검색 (null, undefined, nullValue가 아닌 경우만)
        if (titleValue && titleValue !== props.nullValue) {
          const titleStr = String(titleValue).toLowerCase()
          if (titleStr.includes(searchTermLower)) {
            return true
          }
        }

        // ID 검색 허용 (searchByValue가 true이고, null, undefined, nullValue가 아닌 경우만)
        if (props.searchByValue && idValue && idValue !== props.nullValue) {
          const idStr = String(idValue).toLowerCase()
          if (idStr.includes(searchTermLower)) {
            return true
          }
        }

        return false
      })

    setNullValues()
  } else {
    // 검색어가 없으면 전체 목록 표시
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

    setNullValues()
  }
  setAllChecked()
}

// 검색어 변경 핸들러 (한글 입력 문제 해결)
const onSearchWordChange = (value) => {
  // null, undefined를 빈 문자열로 변환
  const searchValue = value ?? ''
  searchWord.value = searchValue

  // 즉시 필터링 수행
  performSearch(searchValue)
}

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

// 아이템 클릭 핸들러
const onItemClick = (value) => {
  const currentValues = [...filterValues.value]
  const index = currentValues.indexOf(value)

  if (index > -1) {
    // 이미 선택된 경우 제거
    currentValues.splice(index, 1)
  } else {
    // 선택되지 않은 경우 추가
    currentValues.push(value)
  }

  onChangeFilterValue(currentValues)
  emits('update:model-value', changeNullValue(currentValues))
}

// 표시할 타이틀 생성 함수
const getDisplayTitle = (item) => {
  const title = item[props.itemTitle]
  const value = item[props.itemValue]

  // searchByValue가 true이고, title과 value가 다른 경우 둘 다 표시
  if (props.searchByValue && value && title !== value) {
    return `${title} (${value})`
  }

  return title
}
</script>

<style lang="scss" scoped>
@import './SFilterSelect.scss';
</style>
