<template>
  <div class="s-smart-search">
    <v-autocomplete
      ref="autoComp"
      class="s-autocomplete"
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
          @click="onEnter($event, item?.raw.title, item?.raw.type)"
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
    <v-chip-group v-show="valuesItem.length">
      <v-chip
        v-for="(item, index) in valuesItem"
        :key="'smart-search__value--' + item.title + '__' + item.value"
        closable
        @click:close="onDeleteSearchItem(index)"
      ><strong>{{ item.title }}</strong> : {{ item.value }}</v-chip>
    </v-chip-group>
  </div>
</template>

<script setup>
/**
 * TODO 남은 업무
 * 1. 선택된 값 중 중복 선택 값 제거
 */
import * as _ from 'lodash-es'
import { ref, computed, reactive } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
    description: 'data table의 경우 header 값을 의미한다. 데이터 형태: { title: "", key: "" }',
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: '검색어를 입력하세요. (Key:Value)',
  },
  values: {
    type: Array,
    default: () => [],
  },
  datas: {
    type: Array,
    default: () => [],
  },
  density: {
    type: String,
    default: 'default',
  },
  variant: {
    type: String,
    default: 'filled',
  },
  width: {
    type: [Number, String],
    default: 600,
  },
  searchTag: {
    type: Boolean,
    default: false,
    description: 'tag 검색 기능을 사용할지에 대한 여부. true일 경우 datas의 모든 tag 값들을 items에 추가한다.',
  },
  prependInnerIcon: {
    type: String,
    default: undefined,
  },
})

const emit = defineEmits(['update:values'])

const searchValue = ref(null)
const isValueSearch = ref(false)
const isTagSearching = ref(false)
const selectedKeyItem = ref(null)
const valuesItem = reactive(props.values)
const autoComp = ref(null)
const menuProps = reactive({
  closeOnClick: false,
  closeOnContentClick: false,
})

const onClear = () => {
  searchValue.value = null
  isValueSearch.value = false
  isTagSearching.value = false
}

const updateModelValue = (event) => {
  if (!event) {
    onClear()
  }
  searchValue.value = event
}

const filterTagKeys = (type) => {
  // 전체 datas에서 tag의 key 값 추출
  const setFilterDatas = new Set()
  if (props.datas?.length) {
    props.datas.forEach(data => {
      if (data.tagList?.length) {
        data.tagList.forEach(tagObj => {
          if (tagObj[type] !== null) {
            setFilterDatas.add(tagObj[type])
          }
        })
      }
    })
  }
  return Array.from(setFilterDatas)
}

const filterTagValues = (keyName, valueName) => {
  // 전체 datas에서 tag의 key 값 추출
  const setFilterDatas = new Map()
  if (props.datas?.length) {
    props.datas.forEach(data => {
      if (data.tagList?.length) {
        data.tagList.forEach(tagObj => {
          const appendData = setFilterDatas.get(tagObj[keyName]) || []
          if (tagObj[valueName] !== null) {
            appendData.push(tagObj[valueName])
            setFilterDatas.set(tagObj[keyName], appendData)
          } else {
            setFilterDatas.set(tagObj[keyName], appendData)
          }
        })
      }
    })
  }
  return Object.fromEntries(setFilterDatas)
}

const setOptionItemFormat = (arr, type) => {
  const result = []
  arr.forEach(value => {
    if (Array.isArray(value)) {
      result.push({ title: value, value, type })
    } else {
      result.push({ title: value, value, type })
    }
  })
  return result
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
    if (!props.datas.length) {
      return []
    }
    const setFilterDatas = new Set()
    props.datas.forEach(item => {
      if (item[selectedKeyItem.value]) {
        setFilterDatas.add(item[selectedKeyItem.value])
      }
    })
    const uniqueArr = _.cloneDeep(setFilterDatas)
    const keyItem = searchValue.value?.split(':')[0]
    if (keyItem) {
      optionItems.push({
        subheader: keyItem,
        title: '',
      })
    }
    optionItems = optionItems.concat(setOptionItemFormat(uniqueArr))

    return optionItems
  }

  optionItems.push({ subheader: '속성', title: '' })

  props.items.forEach(item => {
    if (item.align !== 'd-none' && item.title) {
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
  title = title.toString()?.split(':')[0].trim().toLowerCase()
  const sortItems = props.items
  _.sortBy(sortItems, 'title')
  const result = sortItems.some(item => {
    // 직접 입력(string)과 list item(ref object) 선택에 따른 분기처리
    const itemTitle =
      typeof item.title === typeof {} ? item.title.value : item.title
    const itemKey =
      typeof item.key === typeof {} ? item.key.value : item.key
    if (itemTitle.toLowerCase() === title) {
      findTitle = itemTitle
      findKey = itemKey
      return item
    }
    if (itemTitle.toLowerCase().indexOf(title) > -1) {
      findTitle = itemTitle
      findKey = itemKey
      return item
    }
    return false
  })

  if (!result) {
    findTitle = title
    findKey = title
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

const onEnter = (event, title, type) => {
  console.log(event.key, title, type)
  let inputValue = ''

  if (!title) {
    return
  }

  // value 값
  const searchValueSplit = searchValue.value?.split(':') || []
  const setValue =
    searchValueSplit?.length > 1 && searchValueSplit[1]?.trim()
      ? searchValue.value.replace(`${searchValue.value?.split(':')[0]}:`, '')
      : title?.toString().trim()
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
      emit('update:values', valuesItem)

      // 선택된 key, value, title 정보 저장
      const addItem = {
          title: findTitle,
          value: setValue.trim(),
          key: findKey,
          type: isTagSearching.value ? 'tag' : null,
        }
        valuesItem.push(addItem)
        // 변경된 검색 데이터 목록
        emit('update:search', valuesItem)

        // 추가된 아이템 이벤트
        emit('update:target-item', addItem)

        // 이벤트 delay => 너무 빨라서 select items 목록이 안닫힘
        setTimeout(() => {
          menuProps.closeOnClick = false
          menuProps.closeOnContentClick = false
        }, 500)

        onClear()
        return
    }
  } else {
    // key 값 세팅
    menuProps.closeOnClick = true
    menuProps.closeOnContentClick = true

    selectedKeyItem.value = props.items.find(item => item.title === title)?.key
    isValueSearch.value = true
    if (type === 'tag') {
      isTagSearching.value = true
    }
    if (inputValue) {
      setInputKey(inputValue)
      return
    }

    // 이벤트 delay => 너무 빨라서 select items 목록이 안닫힘
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
  valuesItem.push({ title: '미지정 태그', value: '-', key: 'undefinedTag', type: 'tag' })
  emit('update:values', valuesItem)

  if (autoComp.value) {
    autoComp.value.search = ''
  }
}

const onDeleteSearchItem = (index) => {
  valuesItem.splice(index, 1)
  emit('update:values', valuesItem)
}
</script>

<style lang="scss" scoped>
@import url('./SSmartSearch.scss');
</style>
