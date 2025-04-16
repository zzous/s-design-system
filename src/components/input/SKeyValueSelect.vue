<template>
  <v-menu
    v-model="isMenuOpen"
    class="s-key-value-selector"
    :close-on-content-click="false"
    :close-on-click="false"
    :max-height="300"
    location="bottom"
    :offset="5"
    transition="scroll-y-transition"
    @click:outside="handleMainMenuClose"
  >
    <template v-slot:activator="{ props, isActive }">
      <s-btn
        v-bind="props"
        :width="width"
        class="s-key-value-selector__button"
        variant="outlined"
        color="black"
        :density="density"
        :append-icon="isActive ? 'mdi-menu-up' : 'mdi-menu-down'"
      >
        {{ displayText }}
      </s-btn>
    </template>

    <v-list class="s-key-value-selector__list">
      <div class="s-key-value-selector__filter">
        <table class="s-key-value-selector__table">
          <thead>
            <tr>
              <th>{{ typeText.key }}</th>
              <th>{{ typeText.value }}</th>
              <th width="40"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!hasItems && !addingItems.length">
              <td colspan="3" class="s-key-value-selector__empty">
                <div class="s-key-value-selector__add-item">
                  {{ typeText.empty }}
                </div>
              </td>
            </tr>

            <tr
              v-for="(item, index) in validAddingItems"
              :key="'adding-' + index"
            >
              <td>
                <v-menu
                  v-if="item"
                  :close-on-content-click="false"
                  :close-on-click="false"
                  v-model="item.isKeyMenuOpen"
                  :max-height="300"
                  location="bottom"
                  :offset="5"
                  density="compact"
                  transition="scroll-y-transition"
                  @click:outside.stop="handleKeyMenuClose(item, $event)"
                >
                  <template v-slot:activator="{ props: menuProps, isActive: isKeyMenuActive }">
                    <s-btn
                      v-bind="menuProps"
                      variant="outlined"
                      color="black"
                      class="s-key-value-selector__button"
                      :append-icon="isKeyMenuActive ? 'mdi-menu-up' : 'mdi-menu-down'"
                    >
                      {{ item.key || typeText.select }}
                    </s-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      class="s-key-value-selector__list-item"
                      v-for="key in getAvailableKeys(index)"
                      :key="key"
                      :value="key"
                      @click="selectKey(key, index)"
                    >
                      {{ key }}
                    </v-list-item>
                  </v-list>
                </v-menu>
              </td>

              <td>
                <v-menu
                  v-if="item"
                  :close-on-content-click="false"
                  :close-on-click="false"
                  v-model="item.isValueMenuOpen"
                  :max-height="300"
                  location="bottom"
                  :offset="5"
                  transition="scroll-y-transition"
                  @click:outside.stop="handleValueMenuClose(item, $event)"
                >
                  <template v-slot:activator="{ props: menuProps, isActive: isValueMenuActive }">
                    <s-btn
                      v-bind="menuProps"
                      variant="outlined"
                      color="black"
                      class="s-key-value-selector__button"
                      :disabled="!item.key"
                      :append-icon="isValueMenuActive ? 'mdi-menu-up' : 'mdi-menu-down'"
                    >
                      {{
                        item.values.length
                          ? `${typeText.value} ${item.values.length}개`
                          : typeText.selectValue
                      }}
                    </s-btn>
                  </template>

                  <v-list :density="density">
                    <v-list-item
                      class="s-key-value-selector__list-item"
                      :title="allSelectButtonText"
                      @click.stop="toggleAllValues(index)"
                      :disabled="!item.key"
                    >
                      <template v-slot:prepend>
                        <v-checkbox-btn
                          density="compact"
                          class="s-key-value-selector__checkbox-btn"
                          :model-value="isAllValuesSelected(index)"
                          :indeterminate="isSomeValuesSelected(index)"
                          :disabled="!item.key"
                        ></v-checkbox-btn>
                      </template>
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item
                      v-for="value in getAvailableValues(index)"
                      :key="value"
                      :value="value"
                      class="s-key-value-selector__list-item"
                      :class="{'v-list-item--active': item.values.includes(value)}"
                      @click.stop="toggleValue(value, index)"
                      :disabled="!item.key"
                    >
                      <template v-slot:prepend>
                        <v-checkbox-btn
                          density="compact"
                          class="s-key-value-selector__checkbox-btn"
                          :model-value="item.values.includes(value)"
                          :disabled="!item.key"
                        ></v-checkbox-btn>
                      </template>
                      {{ value }}
                    </v-list-item>

                    <v-divider v-if="getAvailableValues(index).length > 0"></v-divider>

                    <v-list-item-action  class="s-key-value-selector__value-actions">
                      <s-btn
                        variant="text"
                        density="compact"
                        class="s-key-value-selector__value-btn"
                        @click.stop="handleValueCancel(index)"
                      >
                        {{ resetButtonText }}
                      </s-btn>
                      <s-btn
                        variant="text"
                        density="compact"
                        class="s-key-value-selector__value-btn s-key-value-selector__value-btn--apply"
                        @click.stop="handleValueApply(index)"
                      >
                        {{ applyButtonText }}
                      </s-btn>
                    </v-list-item-action>
                  </v-list>
                </v-menu>
              </td>

              <td>
                <s-btn
                  density="compact"
                  icon="mdi-minus-circle"
                  variant="text"
                  color="red"
                  @click="removeAddingItem(index)"
                ></s-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="s-key-value-selector__actions">
        <s-btn
          class="s-key-value-selector__add-btn"
          variant="text"
          prepend-icon="mdi-plus"
          @click="onAddItem"
        >
          {{ typeText.add }}
        </s-btn>
        <div class="s-key-value-selector__buttons">
          <s-btn
            variant="outlined"
            @click="onCancel"
          >
            {{ cancelButtonText }}
          </s-btn>
          <s-btn
            @click="onApply"
            :disabled="
              addingItems.length > 0 &&
              !addingItems.some(item => item.key && item.values.length)
            "
          >
            {{ applyButtonText }}
          </s-btn>
        </div>
      </div>
    </v-list>
  </v-menu>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { SBtn } from '@'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  keyList: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
  displayText: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'label',
    validator: value => ['label', 'tag'].includes(value),
  },
  applyButtonText: {
    type: String,
    default: '적용',
  },
  cancelButtonText: {
    type: String,
    default: '취소',
  },
  resetButtonText: {
    type: String,
    default: '초기화',
  },
  typeText: {
    type: Object,
    default: () => ({
      title: null,
      key: null,
      value: null,
      add: null,
      select: null,
    }),
    description: '타입에 따른 텍스트 설정',
  },
  allSelectButtonText: {
    type: String,
    default: '전체 선택',
  },
  getValueList: {
    type: Function,
    default: () => [],
  },
  density: {
    type: String,
    default: 'comfortable',
  },
  width: {
    type: [String, Number],
    default: 316,
  },
})
const emits = defineEmits([
  'update:model-value',
  'cancel',
  'apply',
  'add-label',
])

const selectedItems = ref([])
const addingItems = ref([])
const isMenuOpen = ref(false)
const valueListMap = ref({}) // key별 value 리스트를 저장하는 맵

// 추가: key에 대한 value 리스트를 비동기적으로 가져오는 함수
const fetchValueListsForKey = async keys => {
  const keysToFetch = keys.filter(key => key && !valueListMap.value[key])
  if (!keysToFetch.length) return

  const fetchPromises = keysToFetch.map(async key => {
    try {
      const reqUseKeyValueList = { keys: [key] }
      let valueList = []

      valueList = await props.getValueList(props.type, reqUseKeyValueList)

      let processedValues = []
      if (
        valueList.length > 0 &&
        typeof valueList[0] === 'object' &&
        'value' in valueList[0]
      ) {
        processedValues = valueList.map(item => {
          const { value } = item
          const parts = value.split(':')
          return parts.length > 1 ? parts[1] : value
        })
      } else {
        processedValues = valueList.map(item => {
          const parts = item.split(':')
          return parts.length > 1 ? parts[1] : item
        })
      }
      return { key, values: processedValues }
    } catch (error) {
      console.error('Failed to fetch values for key:', key, error)
      return { key, values: [] } // 에러 발생 시 빈 배열로 설정
    }
  })

  try {
    const results = await Promise.all(fetchPromises)
    results.forEach(({ key, values }) => {
      valueListMap.value[key] = values
    })
  } catch (error) {
    console.error('Error fetching value lists in parallel:', error)
  }
}

// 초기값 설정 및 초기 key들에 대한 value 리스트 가져오기
onMounted(() => {
  selectedItems.value = [...(props.modelValue || [])]
  addingItems.value = []
  const initialKeys = selectedItems.value.map(item => item.key).filter(Boolean)
  if (initialKeys.length > 0) {
    fetchValueListsForKey(initialKeys)
  }
})

// modelValue가 변경될 때마다 값 업데이트 및 새로운 key에 대한 value 리스트 가져오기
watch(
  () => props.modelValue,
  newValue => {
    selectedItems.value = [...(newValue || [])]
    if (!isMenuOpen.value) {
      addingItems.value = []
    }
    // modelValue에 있는 모든 key에 대해 valueListMap 업데이트 시도
    const keysFromModel = newValue.map(item => item.key).filter(Boolean)
    if (keysFromModel.length > 0) {
      fetchValueListsForKey(keysFromModel)
    }
  },
  { deep: true },
)

// 메뉴가 열릴 때 selectedItems를 addingItems로 복사
watch(
  () => isMenuOpen.value,
  newValue => {
    if (newValue) {
      addingItems.value = selectedItems.value.map(item => ({
        key: item.key,
        values: [...item.values],
        isKeyMenuOpen: false,
        isValueMenuOpen: false,
      }))
    }
  },
)

const hasItems = computed(() => {
  return (
    addingItems.value.some(item => item.key && item.values?.length > 0) ||
    addingItems.value.length > 0
  )
})

const displayText = computed(() => {
  if (props.displayText) return props.displayText

  // 현재 유효한 아이템 수 계산 (modelValue 기준)
  const validItemCount =
    props.modelValue?.filter(item => item.key && item.values.length > 0)
      .length || 0

  if (validItemCount === 0) return props.typeText.empty
  return `${props.typeText.title} ${validItemCount}개`
})

const getAvailableKeys = () => {
  const keyType = props.keyList.at(0)
  if (keyType === typeof {}) {
    return props.keyList.map(item => item.key)
  }
  return props.keyList
}

const getAvailableValues = index => {
  if (!addingItems.value[index]?.key) return []

  // 해당 key에 대한 value 리스트가 있으면 반환
  if (valueListMap.value[addingItems.value[index].key]) {
    return valueListMap.value[addingItems.value[index].key]
  }

  return []
}

const onAddItem = () => {
  addingItems.value.push({
    key: '',
    values: [],
    isKeyMenuOpen: false,
    isValueMenuOpen: false,
  })
}

const selectKey = async (key, index) => {
  addingItems.value[index].key = key
  addingItems.value[index].values = []
  addingItems.value[index].isKeyMenuOpen = false

  // key가 선택되면 해당 key에 대한 value 리스트를 API로 요청 (이미 있으면 요청 안함)
  if (!valueListMap.value[key]) {
    fetchValueListsForKey([key]) // 기존 함수 재사용
  }
}

const toggleValue = (value, index) => {
  const item = addingItems.value[index]
  const valueIndex = item.values.indexOf(value)
  if (valueIndex === -1) {
    item.values.push(value)
  } else {
    item.values.splice(valueIndex, 1)
  }
}

const isAllValuesSelected = index => {
  const item = addingItems.value[index]
  return item.values.length === getAvailableValues(index).length
}

const isSomeValuesSelected = index => {
  const item = addingItems.value[index]
  return item.values.length > 0 && !isAllValuesSelected(index)
}

const toggleAllValues = index => {
  const item = addingItems.value[index]
  if (isAllValuesSelected(index)) {
    item.values = []
  } else {
    item.values = [...getAvailableValues(index)]
  }
}

const removeAddingItem = index => {
  addingItems.value.splice(index, 1)
}

const onCancel = () => {
  selectedItems.value = [...(props.modelValue || [])]
  addingItems.value = []
  isMenuOpen.value = false
  emits('cancel')
}

const onApply = () => {
  const validItems = addingItems.value.filter(
    item => item.key && item.values.length,
  )
  selectedItems.value = [...validItems]
  emits(
    'update:model-value',
    validItems.map(item => ({
      key: item.key,
      values: item.values,
    })),
  )
  emits(
    'apply',
    validItems.map(item => ({
      key: item.key,
      values: item.values,
    })),
  )
  isMenuOpen.value = false
  addingItems.value = []
}

const handleKeyMenuClose = (item, event) => {
  // 이벤트 전파 중지
  event?.stopPropagation()

  // value 메뉴가 열려있지 않을 때만 key 메뉴를 닫음
  // if (!item.isValueMenuOpen) {
  //   item.isKeyMenuOpen = false
  // }
}

const handleValueMenuClose = (item, event) => {
  // 이벤트 전파 중지
  event?.stopPropagation()

  // key 메뉴가 열려있지 않을 때만 value 메뉴를 닫음
  if (!item.isKeyMenuOpen) {
    item.isValueMenuOpen = false
  }
}

const handleMainMenuClose = event => {
  // key나 value 선택 메뉴가 열려있는지 확인
  const hasOpenSubMenu = addingItems.value.some(
    item => item.isKeyMenuOpen || item.isValueMenuOpen,
  )

  // 서브메뉴가 열려있으면 메인 메뉴는 닫지 않음
  if (hasOpenSubMenu) {
    event?.preventDefault()
    event?.stopPropagation()
    return
  }

  // key와 value가 모두 선택된 항목이 있는지 확인
  const validItems = addingItems.value.filter(
    item => item.key && item.values.length,
  )

  selectedItems.value = [...validItems]
  emits(
    'update:model-value',
    validItems.map(item => ({
      key: item.key,
      values: item.values,
    })),
  )
  emits(
    'apply',
    validItems.map(item => ({
      key: item.key,
      values: item.values,
    })),
  )

  // 메뉴를 닫고 초기화
  isMenuOpen.value = false
  addingItems.value = []
}

const validAddingItems = computed(() => {
  return addingItems.value.filter(item => item)
})

const handleValueCancel = index => {
  const item = addingItems.value[index]
  item.values = []
  item.isValueMenuOpen = false
}

const handleValueApply = index => {
  const item = addingItems.value[index]
  item.isValueMenuOpen = false
}
</script>

<style lang="scss" scoped>
.s-key-value-selector {
  &__list {
    min-width: 800px;
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    flex-direction: column;
    max-height: 600px;
  }

  &__filter {
    padding: 16px;
    flex: 1;
    overflow-y: auto;
  }

  &__button {
    color: #333;
    background-color: #fff;
    justify-content: space-between;

    &.v-btn--variant-outlined {
      border: thin solid $s-default--gray-5;
    }

    &.v-btn.v-btn--density-compact {
      --v-btn-height: 42px;
    }

    &.v-btn.v-btn--density-comfortable {
      --v-btn-height: 52px;
    }

    :deep(.v-btn__content) {
      grid-area: prepend;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      width: 173px;
      text-align: left;
      text-transform: initial;
    }
  }

  &__select-btn {
    width: 350px;
    justify-content: space-between;
    text-align: left;
    border-color: rgba(0, 0, 0, 0.17) !important;
    overflow: hidden;

    .s-btn__content {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
      margin-right: 8px;
    }
  }

  &__checkbox-btn {
    font-size: 12px;

    .v-selection-control--density-compact {
      --v-selection-control-size: 30px;
    }
  }

  &__list-item {
    font-size: 14px;
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    overflow: hidden;

    th {
      background-color: $data-table-header-color;
      padding: 12px 24px;
      text-align: left;
      font-weight: 600;
      font-size: 14px;
    }

    td {
      padding: 16px 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      font-size: 14px;
      max-width: 350px;
      overflow: hidden;
    }
  }

  &__empty {
    text-align: center;
    padding: 40px !important;
  }

  &__add-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background-color: #f8f9fa;
    position: sticky;
    bottom: 0;
    z-index: 1;
  }

  &__add-btn {
    color: #1976d2;
    font-size: 14px;
  }

  &__buttons {
    display: flex;
    gap: 8px;
  }

  &__btn {
    color: #1976d2 !important;
    font-size: 14px;
    min-width: 80px !important;
    height: 32px !important;
    border-color: #1976d2 !important;

    &--apply {
      background-color: #1976d2 !important;
      color: #fff !important;
    }
  }

  :deep(.v-overlay__content) {
    max-height: 300px !important;
    overflow-y: auto !important;
    contain: none !important;
    min-width: 800px !important;
    max-width: 1200px !important;
  }

  :deep(.v-menu__content) {
    max-height: 300px !important;
    overflow-y: auto !important;
    contain: none !important;
    min-width: 800px !important;
    max-width: 1200px !important;
  }

  :deep(.v-list) {
    padding: 0 !important;
    height: auto !important;
    max-height: none !important;
    overflow-y: visible !important;
  }

  :deep(.v-overlay) {
    max-height: 300px !important;
    contain: none !important;
  }

  &__value-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 8px 16px;
    position: sticky;
    bottom: 0;
    background-color: #fff;
    z-index: 1;
  }

  &__value-btn {
    min-width: 60px !important;
    height: 32px !important;
    font-size: 14px;

    &--apply {
      color: #1976d2 !important;
    }
  }
}

.s-key-value-selector__button.v-btn.v-btn--density-comfortable {
  --v-btn-height: 48px;
}

</style>
