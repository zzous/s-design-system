<template>
  <div class="s-advanced-search">
    <div class="s-advanced-search__top">
      <div class="s-advanced-search__top__search">
        <div v-if="$slots.left" class="s-advanced-search__top__left"><slot name="left"/></div>
        <v-text-field ref="inputRef" v-model="inputValue" :density="density"
                      :variant="variant" :width="width" :placeholder="placeholder" :hideDetails="true"
                      prependInnerIcon="mdi-magnify" :appendInnerIcon="`mdi-menu-${isOpen ? 'up' : 'down'}`"
                      @focus="onFocusTextField" @blur="onBlurTextField" @keydown.arrow-down="onKeydownArrowDownTextField"
                      @keydown.enter="onKeydownEnterTextField"/>

        <v-list v-if="isOpen" ref="popoverRef" class="s-advanced-search__top__left__popover"
                :style="{ minWidth: width, ...popupStyle }" @mousedown.prevent @focusin="onFocusInPopover">
          <v-list-subheader :title="subHeaderTitle"/>
          <v-divider/>
          <template v-if="!isDatePicker">
            <v-list-item v-for="({title, value}, index) in currentPopoverList" :key="value" :ref="el => { if (el) listItemsRef[index] = el }"
                         :title="title" tabindex="0" @click="onClickListItem(title, value)" @blur="onBlurLastListItem(index)"
                         @keydown.enter="onKeydownEnterListItem"/>
            <v-list-item v-if="currentPopoverList.length === 0" title="No Data"/>
            <v-list-item v-if="currentPopoverList.length === 0" title="초기화" @click="onClickResetItem"/>
          </template>
          <v-date-picker v-else v-model="dateValue" class="s-advanced-search__top__left__date-picker" hide-header/>
        </v-list>
      </div>
      <div v-if="$slots.right" class="s-advanced-search__top__right"><slot name="right"/></div>
    </div>

    <v-chip-group class="s-advanced-search__bottom">
      <v-chip v-for="item in filterOptions" :key="`${item.field}_${item.operator}_${item.value}`"
              closable  :ripple="false" @click:close="onClickDeleteFilter(item)" :link="false">
        <span>{{item.fieldText}}</span>
        <b>{{item.operator}}</b>
        <span>{{item.value}}</span>
      </v-chip>
    </v-chip-group>
  </div>
</template>

<script setup>
import {computed, onUnmounted, reactive, ref, watch} from 'vue'
import useOutsideClick from '../../../hooks/out-side-click.js'
import dateUtil from '../../../utils/date.js'
import { findIndex, isEqual } from 'lodash-es'

// region [Defines]
const STEP_LIST = ['field', 'operator', 'value']
const NUMBER_DATE_OPERATOR = [
  { title: '같음 (=)', value: '=' },
  { title: '크거나 같음 (>=)', value: '>=' },
  { title: '작거나 같음 (<=)', value: '<=' },
  { title: '보다 작음 (<)', value: '<' },
  { title: '보다 큼 (>)', value: '>' },
]
const STRING_OPERATOR = [{ title: '같음 (=)', value: '=' }, { title: '포함 (:)', value: ':' }]

const emit = defineEmits(['update:model-value', 'update:key', 'update:target-item'])
const props = defineProps({
  modelValue: { type: Array, default: () => [] },
  headers: { type: Array, default: () => [], description: '[{ title: "", key: "" }]' },
  items: { type: Array, default: () => [], description: '테이블 리스트 데이터' },
  density: { type: String, default: 'comfortable' },
  variant: { type: String, default: 'outlined' },
  width: { type: String, default: '350px' },
  placeholder: { type: String, default: '검색어를 입력하세요. (Key<=Value)' },
  languageCode: { type: String, default: 'ko', description: '언어 구분 문자열 "ko" | "en"' },
  // searchTag: { type: Boolean, default: false, description: 'tag 검색 기능 사용 여부. true면 items의 모든 tag 값을 headers에 추가' },
})

let blurTimeout = null
const inputRef = ref(null)
const popoverRef = ref(null)
const listItemsRef = ref([])

const isOpen = ref(false)
const inputValue = ref('')
const dateValue = ref(null)
const step = ref(STEP_LIST[0])
const filterOptions = ref([]) // ⚡️ 최종 <SDataTable/> 컴포넌트한테 넘기는 데이터 ⚡️
const popupStyle = reactive({ top: 0, left: 0 })
const selectedState = reactive({
  field: null,
  fieldText: null,
  type: null,
  operator: null,
  value: null,
})
// endregion


// region [Computed]
const popoverRefEl = computed(() => popoverRef.value?.$el)
const inputRefEl = computed(() => inputRef.value?.$el)
const isKorean = computed(() => props.languageCode === 'ko')
const operatorList = computed(() => {
  if (['number', 'date'].includes(selectedState.type)) {
    return NUMBER_DATE_OPERATOR
  }
  if ('string' === selectedState.type) {
    return STRING_OPERATOR
  }
  return []
})

const currentPopoverList = computed(() => {
  if (isFieldStep.value) {
    return getFieldStepList()
  }
  if (isOperatorStep.value) {
    return operatorList.value ?? []
  }
  if (isValueStep.value) {
    return getValueStepList()
  }
  return []
})

const subHeaderTitle = computed(() => {
  if (step.value === STEP_LIST[0]) {
    return isKorean.value ? '속성' : 'Attribute'
  }
  if (step.value === STEP_LIST[1]) {
    return isKorean.value ? '연산자' : 'Operator'
  }
  if (step.value === STEP_LIST[2]) {
    return isKorean.value ? `${selectedState.fieldText}값` : `${selectedState.fieldText} values`
    return
  }
})
const isDatePicker = computed(() =>
    (selectedState.type === 'date' && selectedState?.operator && isValueStep.value))
// endregion

// region [Step Validation]
const isFieldStep = computed(() => step.value === STEP_LIST[0])
const isOperatorStep = computed(() => step.value === STEP_LIST[1])
const isValueStep = computed(() => step.value === STEP_LIST[2])
// endregion

useOutsideClick(popoverRefEl, closePopover, isOpen, inputRefEl)

// region [Privates]
function getFieldStepList() {
  const textValue = inputValue.value.trim().toLowerCase()
  const headerList = props.headers
      .filter(item => item.key !== "tagList") // 'tagList' 값 제외 시킴 나중에 태그 추가 개발시 수정
      .map(item => ({ title: item.title, value: item.key }))

  if (textValue === '') {
    return headerList
  }
  return headerList.filter(item => item.title.toLowerCase().includes(textValue))
}

function getValueStepList() {
  const searchValue = selectedState.value?.toLowerCase()

  // 1. 연산자 조건 확인: ':', '=' 일 때만 값이 null 또는 undefined 항목에 '-'를 추가
  const isEqualityOperator = selectedState.operator === '='

  let filteredItems = props.items.map(item => {
    const rawValue = item[selectedState.field]
    let displayValue

    if (rawValue === undefined || rawValue === null) {
      displayValue = isEqualityOperator ? '-' : null //  '-' or null 반환(null 이면 filteredItems 에서 걸러짐)
    } else {
      displayValue = rawValue
    }

    return { title: displayValue, value: displayValue }
  })

  // 2. value가 null인 항목 (값이 없었으나 동등 연산자가 아니어서 제외된 항목)을 제거
  filteredItems = filteredItems.filter(item => item.value !== null)
  // 3. '-' 값 정렬 (항상 맨 뒤로)
  filteredItems.sort((a, b) => {
    if (a.value === '-' && b.value !== '-') return 1
    if (a.value !== '-' && b.value === '-') return -1
    return 0
  })

  const sanitizedItems = Array.from(new Map(filteredItems.map(item => [item.value, item]))).map(([_, item]) => item)

  if (!searchValue) { return sanitizedItems }

  const filteredItemsBySearch = sanitizedItems.filter(item => String(item.value).toLowerCase().includes(searchValue))

  if (selectedState.operator === ':') {
    return [{ title: selectedState.value, value: selectedState.value }, ...filteredItemsBySearch]
  }
  return filteredItemsBySearch
}

function getType(item, key) {
  const value = item[key]

  if (typeof value === 'string' && dateUtil.isValidDateFormat(value)) {
    return 'date'
  }
  return typeof value
}

function onNextStep() {
  const currentIndex = STEP_LIST.findIndex(s => s === step.value)
  const nextIndex = currentIndex + 1

  if (nextIndex < STEP_LIST.length) {
    step.value = STEP_LIST[nextIndex]
  }
  if (nextIndex === STEP_LIST.length) {
    syncFilterOptions()
  }
}

function closePopover() {
  isOpen.value = false
}

function openPopover() {
  isOpen.value = true
}

const focusPopover = () => {
  setTimeout(() => {
    popoverRef.value?.focus()
  }, 80)
}

const initializeDate = (newDate) => {
  const formattedDate = dateUtil.getFormattedDate(newDate)
  calculateNextStep(null, formattedDate)
}

const calculatePopoverPosition = () => {
  if (!inputRef?.value) {
    throw Error('not found inputRef:', inputRef)
  }
  const rect = inputRef.value?.getBoundingClientRect()
  const gapSize = { top: 1, left: -36 }

  // popupStyle.top = `${rect.bottom + gapSize.top}px`
  popupStyle.top = `${rect.bottom + gapSize.top}px`
  popupStyle.left = `${rect.left + gapSize.bottom}px`
}

const calculateNextStep = (title, value) => {
  /** 1. [Field 검색]: 필드와 필드의 Value 타입 저장 */
  if (isFieldStep.value) {
    inputValue.value = title
    selectedState.fieldText = title
    selectedState.field = value
    emit('update:key', value)

    const allTypes = props.items.filter(item => {
      const fieldValue = item[value]
      return fieldValue !== null && fieldValue !== undefined
    }).map(item => getType(item, value)) // (1) 모든 value 의 타입을 undefined, null 제외하고 배열로 만듬 ex) ['number', 'string', 'date']
    const typeCounts = allTypes.reduce((acc, type) => (acc[type] = (acc[type] || 0) + 1, acc), {}) // (2) 타입별 빈도수를 계산
    const mostFrequentType = Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a])[0] // (3) 가장 많은 타입 검색

    if (Object.keys(typeCounts).length > 1) { // (4) 타입이 섞여있는 경우 경고
      console.error(`Multiple types found. Using majority type: ${mostFrequentType}`)
    }
    selectedState.type = mostFrequentType // 가장 많은 타입으로 적용
  }
  /** 2. [Operator 검색] */
  if (isOperatorStep.value) {
    selectedState.operator = value
    const isContainedOperator = inputValue.value.includes(value)
    if (!isContainedOperator) {
      inputValue.value += value
    }
  }
  /** 3. [Value 검색] */
  if (isValueStep.value) {
    selectedState.value = value
  }
  onNextStep()
}

function syncTextFieldValue(value) {

  const lowerValue = value.trim().toLowerCase()
  const targetItem = currentPopoverList.value[0]
  const fieldList = props.headers.map(item => item.title)
  const isCorrectField = fieldList.some(field => lowerValue === field.toLowerCase())

  if (lowerValue === '') {
    clearStep()
  }
  if (isFieldStep.value && isCorrectField) {
    calculateNextStep(targetItem.title, targetItem.value)
  }

  if (isOperatorStep.value) {
    const fieldTextLower = selectedState.fieldText.toLowerCase()
    if (!lowerValue.includes(fieldTextLower)) {
      clearStep() // console.log(`필드명 '${selectedState.fieldText}'이(가) 입력값에 없음. Step 초기화.`)
      return
    }

    const foundOperator = currentPopoverList.value.find(operator => lowerValue.includes(operator.value))
    if (foundOperator) {
      calculateNextStep(foundOperator.title, foundOperator.value)
    }
  }

  if (isValueStep.value) {
    const isCorrectValue = lowerValue.includes(selectedState.fieldText.toLowerCase() + selectedState.operator) // ex: "vpcid="
    const frontStrLength = selectedState.fieldText.length + selectedState.operator.length // field + operator 까지 길이

    if (!isCorrectValue) {
      step.value = STEP_LIST[1]
    } else {
      selectedState.value = value.slice(frontStrLength).trim()
    }
  }
}

function syncFilterOptions() {
  filterOptions.value = [...filterOptions.value, { ...selectedState }]
  clearStep()
  closePopover()
  inputValue.value = ''
  inputRef.value.blur()
  emit('update:target-item', { ...selectedState })
}

function clearStep() {
  selectedState.field = null
  selectedState.fieldText = null
  selectedState.operator = null
  selectedState.type = null
  selectedState.value = null
  step.value = STEP_LIST[0]
}

function clearOnCurrentStep() {
  if (isFieldStep.value) {
    inputValue.value = ''
  }
  if (isOperatorStep.value) {
    clearStep()
  }
  if (isValueStep.value) {
    clearStep()
  }
}

function deleteFilter(item) {
  const indexToRemove = findIndex(filterOptions.value, (currentItem) => isEqual(item, currentItem))
  if (indexToRemove !== -1) {
    filterOptions.value.splice(indexToRemove, 1)
  } else {
    console.error("제거하려는 항목을 filterOptions에서 찾을 수 없습니다.", item)
  }
}

const handleScroll = () => {
  if (!isOpen.value) return
  calculatePopoverPosition()
}

const cleanupPopoverListeners = () => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
}

const setupPopoverListeners = (_isOpen) => {
  if (_isOpen) {
    calculatePopoverPosition()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
  } else {
    cleanupPopoverListeners()
  }
}
// endregion


// region [Events]
const onFocusTextField = () => {
  if (blurTimeout) {
    clearTimeout(blurTimeout)
  }
  calculatePopoverPosition()
  openPopover()
}
const onBlurTextField = () => {
  blurTimeout = setTimeout(() => {
    const activeEl = document.activeElement
    const popoverRefEl = popoverRef.value?.$el

    if (popoverRefEl && popoverRefEl.contains(activeEl)) {
      return
    }
    closePopover()
  }, 100)
}
const onFocusInPopover = () => {
  const popoverRefEl = popoverRef.value?.$el

  if (popoverRefEl && popoverRefEl.contains(document.activeElement)) {
    if (blurTimeout) {
      clearTimeout(blurTimeout)
      blurTimeout = null
    }
  }
}

const onBlurLastListItem = (idx) => {
  if (currentPopoverList.value.length - 1 !== idx) {
    return
  }

  setTimeout(() => {
    const activeEl = document.activeElement
    const popoverRefEl = popoverRef.value?.$el
    const inputEl = inputRef.value?.$el
    if ((popoverRefEl && popoverRefEl.contains(activeEl)) || (inputEl && inputEl.contains(activeEl))) {
      return
    }
    closePopover()
  }, 100)
}

const onClickListItem = calculateNextStep
const onClickDeleteFilter = deleteFilter
const onClickResetItem = clearOnCurrentStep
const onKeydownArrowDownTextField = focusPopover
const onKeydownEnterListItem = focusPopover
const onKeydownEnterTextField = () => {
  if (!isValueStep.value) { return }
  if (selectedState.operator === ':' || selectedState.type === 'number') {
    calculateNextStep(null, selectedState.value)
  }
  if (currentPopoverList.value.length === 1) {
    calculateNextStep(null, currentPopoverList.value[0].value)
  }
}
// endregion


// region [Life Cycles]
watch(inputValue, syncTextFieldValue)
watch(dateValue, initializeDate)
watch(filterOptions, newValue => emit('update:model-value', newValue))
watch(isOpen, setupPopoverListeners)
onUnmounted(cleanupPopoverListeners)
// endregion
</script>

<style lang="scss">
.s-advanced-search {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  .s-advanced-search__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    width: 100%;

    .s-advanced-search__top__search {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .s-advanced-search__top__left__popover {
        position: fixed;
        top: auto;
        left: auto;
        display: block;
        width: auto;
        max-width: 100%;
        max-height: 400px;
        padding: 4px 0;
        border: 1px solid $active-font-color;
        border-radius: 3px;
        background: $s-default--gray-0;
        z-index: 1010;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        overflow: visible;

        .v-divider {
          margin-bottom: 4px;
        }
      }

      .s-advanced-search__top__left__date-picker {
        width: 100%;
      }
    }

    .s-advanced-search__top__right {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
}

.s-advanced-search__bottom {
  position: relative;
  margin-top: 8px;

  .v-chip > .v-chip__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
  }
}
</style>
