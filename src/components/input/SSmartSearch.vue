<template>
  <div class="s-smart-search">
    <div class="s-smart-search__top">
      <div class="s-smart-search__input-wrapper">
        <v-autocomplete
          ref="autoComp"
          class="s-smart-search__input"
          :style="{ width: width + 'px' }"
          closable-chips
          :multiple="multiple"
          :density="density"
          :variant="variant"
          :items="filterItems"
          :search="searchValue"
          :custom-filter="customFilter"
          :placeholder="placeholder"
          :menu-props="menuProps"
          hide-details
          :prepend-inner-icon="prependInnerIcon"
          @input="onUpdateInput"
          @update:search="updateModelValue"
          @keyup.enter.stop="onEnter"
        >
          <template v-slot:item="{ item }">
            <template v-if="item.raw.subheader">
              <v-list-subheader class="s-list-subheader">{{ item.raw.subheader }}</v-list-subheader>
              <hr />
            </template>

            <v-list-item
              v-else
              :title="item?.props?.title"
              @click="onEnter($event, item?.raw.title, item?.raw.type, item?.raw.value)"
            ></v-list-item>
          </template>
          <template v-slot:append-item v-if="searchTag">
            <slot name="null-tag">
              <v-list-subheader>미지정 태그 검색</v-list-subheader>
              <hr />
              <v-list-item @click="onClickSearchNullTag">미지정 태그</v-list-item>
            </slot>
          </template>
        </v-autocomplete>
      </div>
      <div class="s-smart-search__right">
        <slot name="right" />
      </div>
    </div>
    <div class="s-smart-search__chips-wrapper" v-show="valuesItem.length">
      <v-chip-group>
        <v-chip
          v-for="(item, index) in valuesItem"
          :key="'smart-search__value--' + item.title + '__' + item.value"
          closable
          @mousedown.prevent
          @click:close="onDeleteSearchItem(index)"
        ><strong>{{ item.title }}</strong> : {{ item.value }}</v-chip>
      </v-chip-group>
    </div>
  </div>
</template>

<script setup>
/**
 * TODO 남은 업무
 * 1. 선택된 값 중 중복 선택 값 제거
 */
import { ref, computed, reactive } from 'vue'

const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
    description: 'data table의 경우 header 값을 의미한다. 데이터 형태: { title: "", key: "" }',
  },
  excludeSearchHeaders: {
    type: Array,
    default: () => [],
    description: '검색에서 제외할 헤더 키 목록',
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: '검색어를 입력하세요. (Key:Value)',
  },
  items: {
    type: Array,
    default: () => [],
  },
  density: {
    type: String,
    default: 'comfortable',
  },
  variant: {
    type: String,
    default: 'outlined',
  },
  width: {
    type: [Number, String],
    default: 350,
  },
  searchTag: {
    type: Boolean,
    default: false,
    description: 'tag 검색 기능을 사용할지에 대한 여부. true일 경우 items의 모든 tag 값들을 headers에 추가한다.',
  },
  prependInnerIcon: {
    type: String,
    default: 'mdi-magnify',
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:model-value', 'update:key', 'update:target-item'])

const searchValue = ref(null)
const isValueSearch = ref(false)
const isTagSearching = ref(false)
const selectedKeyItem = ref(null)
const valuesItem = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:model-value', Array.isArray(val) ? val : [])
})
const autoComp = ref(null)
const menuProps = reactive({
  closeOnClick: false,
  closeOnContentClick: false,
})

// 검색 조건 순서 및 의존성 추적
const searchOrderIndex = ref(0)

const onClear = () => {
  searchValue.value = null
  isValueSearch.value = false
  isTagSearching.value = false
  // searchOrderIndex는 리셋하지 않음 - 전체 검색 조건 간의 순서 유지
}

const updateModelValue = (event) => {
  if (!event) {
    onClear()
  }
  searchValue.value = event
}

const filterTagKeys = (type) => {
  // 전체 items에서 tag의 key 값 추출
  const setFilterDatas = new Set()
  if (props.items?.length) {
    props.items.forEach(data => {
      if (data.tagList?.length) {
        data.tagList.forEach(tagObj => {
          // null, undefined, 빈 문자열, '-'를 모두 같은 값으로 간주
          const value = tagObj[type]
          if (value === null || value === undefined || value === '' || value === '-') {
            setFilterDatas.add('-')
          } else {
            setFilterDatas.add(value)
          }
        })
      }
    })
  }
  return Array.from(setFilterDatas)
}

const filterTagValues = (keyName, valueName) => {
  // 전체 items에서 tag의 key 값 추출
  const setFilterDatas = new Map()
  if (props.items?.length) {
    props.items.forEach(data => {
      if (data.tagList?.length) {
        data.tagList.forEach(tagObj => {
          // null, undefined, 빈 문자열, '-'를 모두 같은 값으로 간주
          const keyValue = tagObj[keyName]
          const valueValue = tagObj[valueName]

          const normalizedKey = (keyValue === null || keyValue === undefined || keyValue === '' || keyValue === '-') ? '-' : keyValue
          const normalizedValue = (valueValue === null || valueValue === undefined || valueValue === '' || valueValue === '-') ? '-' : valueValue

          const appendData = setFilterDatas.get(normalizedKey) || []
          appendData.push(normalizedValue)
          setFilterDatas.set(normalizedKey, appendData)
        })
      }
    })
  }
  return Object.fromEntries(setFilterDatas)
}

const setOptionItemFormat = (arr, type) => {
  const result = []
  const processedValues = new Set() // 중복 제거를 위한 Set

  arr.forEach(value => {
    let formattedValue = value

    // null, undefined, 빈 문자열, '-'를 모두 같은 값으로 간주
    if (value === null || value === undefined || value === '' || value === '-') {
      formattedValue = '-'
    }
    // object나 array 타입인 경우 JSON 문자열로 변환
    else if (typeof value === 'object' || Array.isArray(value)) {
      formattedValue = JSON.stringify(value)
    }

    // 중복 제거
    if (!processedValues.has(formattedValue)) {
      processedValues.add(formattedValue)
      result.push({
        title: String(formattedValue),
        value: String(formattedValue),
        type
      })
    }
  })

  // 오름차순 정렬 (asc)
  return result.sort((a, b) => {
    const aTitle = String(a.title).toLowerCase()
    const bTitle = String(b.title).toLowerCase()
    return aTitle.localeCompare(bTitle, 'ko-KR')
  })
}

const filterItems = computed(() => {
  let optionItems = []

  if (isTagSearching.value) {
    const keyItem = searchValue.value?.split(':')[0]
    if (keyItem) {
      optionItems.push({
        subheader: keyItem,
        title: '',
      })
    }
    const makedOptionItemObj = filterTagValues('tagKey', 'tagValue')
    optionItems = optionItems.concat(
      setOptionItemFormat(makedOptionItemObj[keyItem], 'tag'),
    )

    return optionItems
  }

  if (isValueSearch.value) {
    if (!props.items.length) {
      return []
    }

    // 현재 선택한 key가 이미 이전에 사용된 key인지 확인
    const usedKeys = valuesItem.value.map(item => item.key)
    const isReusedKey = usedKeys.includes(selectedKeyItem.value)

    // 필터링에 사용할 조건 생성
    // 같은 key를 재사용하는 경우, 해당 key와 그 key에 의존하는 조건들을 제외 (OR 조건 추가용)
    let filterConditions = []

    if (isReusedKey) {
      // 제외할 order들을 수집 (재귀적으로)
      const ordersToExclude = new Set()

      // 현재 선택한 key의 모든 order 추가
      valuesItem.value
        .filter(v => v.key === selectedKeyItem.value)
        .forEach(v => ordersToExclude.add(v.order))

      // 재귀적으로 의존하는 모든 조건들의 order 추가
      const findDependentOrders = (orderToCheck) => {
        valuesItem.value.forEach(item => {
          if (item.basedOnOrders && item.basedOnOrders.includes(orderToCheck)) {
            if (!ordersToExclude.has(item.order)) {
              ordersToExclude.add(item.order)
              findDependentOrders(item.order)
            }
          }
        })
      }

      ordersToExclude.forEach(order => findDependentOrders(order))

      // 제외 목록에 없는 조건들만 포함
      filterConditions = valuesItem.value.filter(item => {
        // order가 없는 항목은 유지
        if (item.order === undefined || item.order === null) {
          return true
        }
        return !ordersToExclude.has(item.order)
      })
    } else {
      filterConditions = valuesItem.value
    }

    const valuesItemMap = filterConditions.reduce((acc, item) => {
      if (!acc[item.key]) {
        acc[item.key] = []
      }
      acc[item.key].push(item.value)
      return acc
    }, {})

    // valuesItem 기준으로 props.items 를 필터링 함.
    const sanitizedItems = Object.keys(valuesItemMap).length > 0
      ? props.items.filter(item => {
          return Object.keys(valuesItemMap).every(key => {
            const itemValue = item[key]
            const targetValues = valuesItemMap[key]

            // 같은 key의 여러 value는 OR 조건
            return targetValues.some(targetValue => {
              // '-'는 null, undefined, '', '-'와 매칭
              if (targetValue === '-') {
                return itemValue === null || itemValue === undefined || itemValue === '' || itemValue === '-'
              }
              // 일반 값은 정확히 일치
              return itemValue === targetValue
            })
          })
        })
      : props.items // 필터 조건이 없으면 전체 items 사용

    const setFilterDatas = new Set()

    sanitizedItems.forEach(item => {
      // null, undefined, 빈 문자열, '-'를 모두 같은 값으로 간주
      const value = item[selectedKeyItem.value]
      // undefined 값도 포함하도록 조건 수정
      if (value === null || value === undefined || value === '' || value === '-') {
        setFilterDatas.add('-')
      } else {
        setFilterDatas.add(value)
      }
    })

    const keyItem = searchValue.value?.split(':')[0]
    if (keyItem) {
      optionItems.push({
        subheader: keyItem,
        title: '',
      })
    }
    optionItems = optionItems.concat(setOptionItemFormat(setFilterDatas))
    return optionItems
  }

  optionItems.push({ subheader: '속성', title: '' })

  props.headers.forEach(item => {
    if (item.title && !props.excludeSearchHeaders.includes(item.key)) {
      optionItems.push(item)
    }
  })

  if (props.searchTag) {
    optionItems.push({ subheader: '태그', title: '' })
    optionItems = optionItems.concat(
      setOptionItemFormat(filterTagKeys('tagKey'), 'tag'),
    )
  }

  return optionItems
})

const customFilter = (item, queryText, itemText) => {
  const searchText = queryText.toLowerCase()
  const splitSearchValue = searchText?.split(':') || []
  let indexOfTargetText = ''
  if (itemText.raw.subheader) {
    return true
  }
  if (splitSearchValue?.length > 1) {
    indexOfTargetText = splitSearchValue[1].trim().toLowerCase()
  } else {
    indexOfTargetText = searchText.trim().toLowerCase()
  }
  if (typeof itemText?.value === 'string') {
    return itemText?.value?.toLowerCase().indexOf(indexOfTargetText.toLowerCase()) > -1
  }
  return itemText?.value?.value?.toLowerCase().indexOf(indexOfTargetText.toLowerCase()) > -1
}

const onFindTitle = (title) => {
  if (!title) {
    return { result: false, findTitle: '', findKey: '' }
  }

  let findTitle = ''
  let findKey = ''
  const searchTitle = title.toString()?.split(':')[0].trim().toLowerCase()

  const sortItems = [...props.headers]

  let result = false

  result = sortItems.some(item => {
    const itemTitle = typeof item.title === typeof {} ? item.title.value : item.title
    const itemKey = typeof item.key === typeof {} ? item.key.value : item.key

    if (itemTitle.toLowerCase() === searchTitle) {
      findTitle = itemTitle
      findKey = itemKey
      return true
    }
    return false
  })

  if (!result) {
    result = sortItems.some(item => {
      const itemTitle = typeof item.title === typeof {} ? item.title.value : item.title
      const itemKey = typeof item.key === typeof {} ? item.key.value : item.key

      if (itemTitle.toLowerCase().indexOf(searchTitle) > -1 && searchTitle.length >= 2) {
        findTitle = itemTitle
        findKey = itemKey
        return true
      }
      return false
    })
  }

  if (!result) {
    findTitle = title.toString()?.split(':')[0].trim()
    findKey = title.toString()?.split(':')[0].trim()
    isTagSearching.value = true
  }

  return { result, findTitle, findKey }
}

const onUpdateInput = (event) => {
  if (!event) {
    onClear()
  }
}

const setInputKey = (value) => {
  const { findKey, findTitle } = onFindTitle(value)

  // 선택된 key 정보 저장
  selectedKeyItem.value = findKey
  emit('update:key', findKey)
  searchValue.value = `${findTitle}:`
  isValueSearch.value = true
}

const onEnter = (event, title, type, value) => {
  // console.log(event.key, title, type, value)
  let inputValue = ''

  if (!title) {
    return
  }

  // value 값 - 선택한 options의 value 사용
  const searchValueSplit = searchValue.value?.split(':') || []
  const setValue = value || title?.toString().trim()
  if (!isValueSearch.value) {
    inputValue =
      searchValueSplit.length && searchValueSplit[0].trim()
        ? searchValueSplit[0]
        : title?.toString().trim()
  } else {
    // 키보드 이벤트 시 예외처리
    inputValue = searchValueSplit.length
      ? `${searchValueSplit[0]}: ${setValue}`
      : ''
  }

  const splitValue = searchValue.value?.split(':') || []
  const { findTitle, findKey } = onFindTitle(splitValue[0])

  // key 값이 있을 때
  if (isValueSearch.value && setValue) {
    if (setValue) {
      // emit('update:model-value', valuesItem)

      // 현재 선택한 key가 이전에 사용된 적이 있는지 확인
      const usedKeys = valuesItem.value.map(item => item.key)
      const isReusedKey = usedKeys.includes(findKey)

      // 이 검색 조건이 기반으로 하는 현재 valuesItem의 order들 저장
      let basedOnOrders = []

      if (isReusedKey) {
        // 같은 key를 재선택하는 경우
        // 기존 같은 key 항목들의 basedOnOrders를 그대로 사용 (같은 레벨의 OR 조건)
        const existingSameKeyItem = valuesItem.value.find(item => item.key === findKey)
        basedOnOrders = existingSameKeyItem?.basedOnOrders || []
      } else {
        // 새로운 key를 선택하는 경우
        // 현재까지의 모든 조건에 의존
        basedOnOrders = valuesItem.value.map(item => item.order)
      }

      // 선택된 key, value, title 정보 저장 - options의 value 사용
      const addItem = {
        title: findTitle,
        value: setValue, // 선택한 options의 value 사용
        key: findKey,
        type: isTagSearching.value ? 'tag' : null,
        order: searchOrderIndex.value++, // 순서 저장
        basedOnOrders: basedOnOrders, // 이 조건이 의존하는 이전 조건들의 order
      }

      // 중복 체크: key와 value가 모두 같은 항목이 이미 있는지 확인
      const isDuplicate = valuesItem.value.some(item =>
        item.key === addItem.key && item.value === addItem.value
      )

      if (!isDuplicate) {
        valuesItem.value = [...valuesItem.value, addItem]

        // 추가된 아이템 이벤트
        emit('update:target-item', addItem)
      } else {
        // 중복인 경우 order index 되돌리기
        searchOrderIndex.value--
      }

      // 이벤트 delay => 너무 빨라서 select headers 목록이 안닫힘
      setTimeout(() => {
        menuProps.closeOnClick = false
        menuProps.closeOnContentClick = false
      }, 500)

      onClear()
      return
    }
  } else {
    // console.log('key 값 세팅', menuProps)
    // key 값 세팅
    menuProps.closeOnClick = true
    menuProps.closeOnContentClick = true

    selectedKeyItem.value = props.headers.find(item => item.title === title)?.key
    isValueSearch.value = true
    if (type === 'tag') {
      isTagSearching.value = true
    }
    if (inputValue) {
      setInputKey(inputValue)
      return
    }

    // 이벤트 delay => 너무 빨라서 select headers 목록이 안닫힘
    setTimeout(() => {
      menuProps.closeOnClick = false
      menuProps.closeOnContentClick = false
    }, 500)
  }

  if (autoComp.value) {
    autoComp.value.search = ''
  }
}

const onClickSearchNullTag = () => {
  const basedOnOrders = valuesItem.value.map(item => item.order)

  const addItem = {
    title: '미지정 태그',
    value: '-',
    key: 'undefinedTag',
    type: 'tag',
    order: searchOrderIndex.value++,
    basedOnOrders: basedOnOrders,
  }

  valuesItem.value = [...valuesItem.value, addItem]

  if (autoComp.value) {
    autoComp.value.search = ''
  }
}

const onDeleteSearchItem = (index) => {
  // 단순히 해당 index의 항목만 삭제 (의존성 무시)
  const next = valuesItem.value.slice()
  next.splice(index, 1)
  valuesItem.value = next
}
</script>

<style lang="scss" scoped>
@import url('./SSmartSearch.scss');
</style>
