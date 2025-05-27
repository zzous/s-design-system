<template>
  <div :class="`s-card-table ${props.class}`">
    <div class="s-card-table__wrapper">
      <div v-if="!hiddenHeader" class="s-card-table__header">
        <ul class="s-card-table__header-item">
          <li class="s-card-table__header-item-title" style="width: 50px" v-if="showSelect"></li>
          <li
            v-for="(header, index) in filterHeaders"
            :key="'header-key--' + index"
            class="s-card-table__header-item-title"
            :class="{ 'sortable': !header.disableSort }"
            :data-sorted="!!props.sortBy.find(sort => sort.key === header.key)"
            :style="{
              width: widthStyleTranslate(header.width),
              justifyContent: header.align,
            }"
            @click="!header.disableSort && onSort(header)"
          >
            {{ header.title }}
            <v-icon
              v-if="!header.disableSort"
              :icon="getSortIcon(header)"
              size="small"
              class="ml-1 sort-icon"
            />
          </li>
        </ul>
      </div>

      <template v-if="paginatedItems.length">
        <ul v-for="(tableItem, rIndex) in paginatedItems" :key="'content-row--' + rIndex" class="s-card-table__body">
          <li class="s-card-table__body-row">
            <div :class="`s-card-table__body-item ${showExpand ? 'table-expand_header' : 'table-expand_body'}`">
              <div v-if="showExpand" class="s-card__body-icon--expand">
                <slot
                  name="table-expand"
                  :item="tableItem"
                  :expanded="tableItem.showExpandRow"
                  :on-click-expand="onClickExpand"
                >
                  <v-btn
                    density="comfortable"
                    variant="text"
                    :icon="tableItem.showExpandRow ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click.stop.prevent="onClickExpand(tableItem)"
                  />
                </slot>
              </div>
              <div v-if="showSelect" style="width: 50px">
                <slot name="table-select" :item="tableItem">
                  <v-checkbox-btn :model-value="modelValue.includes(tableItem[itemValue])" @update:model-value="onClickSelect(tableItem)" />
                </slot>
              </div>
              <div
                v-for="(header, cIndex) in filterHeaders"
                :key="'content-row--' + rIndex + '__col--' + cIndex"
                class="s-card-table__body-wrapper"
                :class="{ 'strong-text': options?.strongs?.includes(header.key) }"
                :style="{
                  width: widthStyleTranslate(header.width),
                  justifyContent: header.align === 'd-none' ? 'center' : header.align || 'center',
                }"
              >
                <slot :name="`${header.key}`" :item="tableItem">
                  {{ isEmpty(tableItem[header.key]) ? '-' : tableItem[header.key] }}
                </slot>
              </div>
            </div>
            <div v-if="tableItem.showExpandRow" class="s-card-table__body-row-expand">
              <slot name="expanded-row" :item="tableItem" :columns="filterHeaders" />
            </div>
          </li>
        </ul>
      </template>
      <template v-else>
        <s-empty :description="noDataText" class="s-card-table__empty">
          <slot name="empty-content" />
        </s-empty>
      </template>
    </div>
    <v-pagination
      v-if="!scrolled"
      :model-value="currentPage"
      class="s-card-table__pagination"
      size="small"
      rounded
      active-color="#0D69D4"
      variant="flat"
      :total-visible="10"
      :length="options?.pageCnt || pageCnt"
      @update:model-value="onChnagePage"
    />
  </div>
</template>

<script setup>
/**
 * 컴포넌트 요약
 * ✔ 블라인드 형태의 카드 테이블
 */

/**
 * TODO 남은 작업
 * 1. label left 위치에 check box => 이벤트 전달 작업 필요
 * 2. 정렬 기능 추가
 */
import { computed, ref, onMounted, watch } from 'vue'
import stringUtil from '@/utils/stringUtil.js'

import SEmpty from '@/components/containment/SEmpty.vue'

const {isEmpty } = stringUtil

const props = defineProps({
  itemValue: {
    type: String,
    default: 'id',
    description: 'selected item value',
  },
  itemTitle: {
    type: String,
    default: undefined,
    description: 'title이 될 item 값',
  },
  outlined: {
    type: Boolean,
    default: false,
    description: '',
  },
  shadowed: {
    type: Boolean,
    default: false,
    description: '',
  },
  items: {
    type: Array,
    default: () => {
      return []
    },
  },
  headers: {
    type: Array,
    default: () => {
      return []
    },
    description: 'key, title 값으로 구성된 Array(Object)',
  },
  itemsPerPage: {
    type: [Number, String],
    default: 5,
    description: 'per page',
  },
  noDataText: {
    type: String,
    default: 'no data.',
    description: '구성 요소에 항목이 제공되지 않을 때 표시되는 텍스트',
  },
  page: {
    type: [Number, String],
    default: 1,
    description: '현재 표시된 페이지 번호(인덱스 1개)',
  },
  isPageRender: {
    type: Boolean,
    default: false,
    description: '서버에서 페이지 정보 전달 여부',
  },
  search: {
    type: [String, Array],
    default: undefined,
    description: '항목 필터링에 사용되는 텍스트 또는 key:value Object를 포함한 텍스트 배열 입력',
  },
  smartSearch: {
    type: Array,
    default: () => [],
    description: 'smart search 조건',
  },
  showSelect: {
    type: Boolean,
    default: false,
    description: '머리글과 행 모두에서 선택 확인란을 표시합니다(기본 행을 사용하는 경우).',
  },
  options: {
    type: Object,
    default: () => {
      return {
        strongs: [],
        pageCnt: 0,
        totalElements: 0,
      }
    },
    description: '',
  },
  selected: {
    type: Array,
    default: () => {
      return []
    },
  },
  width: {
    type: [Number, String],
    default: '100%',
  },
  showExpand: {
    type: Boolean,
    default: false,
  },
  hiddenHeader: {
    type: Boolean,
    default: false,
  },
  scrolled: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: '',
  },
  setTotal: {
    type: Function,
    default: () => {},
    description: '전체 개수 초기화(필터링 적용)',
  },
  showSelect: {
    type: Boolean,
    default: false,
  },
  selectStrategy: {
    type: String,
    default: 'single',
    description: 'select strategy 가능한 값 single, all (page는 아직 작업이 되지 않았습니다.)',
  },
  disableSort: {
    type: Boolean,
    default: false,
    description: '정렬 기능 비활성화 여부',
  },
  sortBy: {
    type: Array,
    default: () => [],
    description: '정렬 상태를 관리하는 배열'
  }
})

const emits = defineEmits([
  'update:page',
  'update:selected',
  'update:filtered-cnt',
  'update:sort-by'
])

/* pagination 처리 */
const lazyPage = ref(1)
const currentPage = computed({
  get: () => props.page,
  set: (value) => emits('update:page', value)
})
// const isPageRender = ref(props.isPageRender) // server render

const filterHeaders = computed(() => {
  return props.headers.filter(item => item.key !== props.itemTitle)
})

// 정렬 관련 상태
const onSort = (header) => {
  if (props.disableSort) return

  let newSortBy = [...props.sortBy]
  const existingSort = newSortBy.find(sort => sort.key === header.key)

  if (existingSort) {
    if (existingSort.order === 'asc') {
      existingSort.order = 'desc'
    } else if (existingSort.order === 'desc') {
      newSortBy = newSortBy.filter(sort => sort.key !== header.key)
    }
  } else {
    newSortBy = [{ key: header.key, order: 'asc' }]
  }

  emits('update:sort-by', newSortBy)
}

const filterDatas = computed(() => {
  // console.log(props.items, 'props.items')
  if (props.search) {
    // 일반 검색 (no smart search)
    const keys = props.headers.map(h => h.key)
    const filteredList = props.items.filter(data =>
      keys.some(key => {
        if (data[key]) {
          if (typeof data[key] === typeof {} || typeof data[key] === typeof []) {
            return JSON.stringify(data[key]).toLowerCase().indexOf(props.search.toLowerCase()) > -1
          }
          return data[key].toString().toLowerCase().indexOf(props.search.toLowerCase()) > -1
        }
        return false
      }),
    )
    emits('update:filtered-cnt', filteredList.length)
    return filteredList
  }

  if (props.smartSearch.length) {
    const filteredList = props.items.filter(data => {
      // 검색 조건을 key별로 그룹화
      const groupedSearches = props.smartSearch.reduce((acc, option) => {
        if (!acc[option.key]) {
          acc[option.key] = []
        }
        acc[option.key].push(option)
        return acc
      }, {})

      // 각 key 그룹별로 검색 (다른 key 그룹 간에는 AND 조건)
      return Object.entries(groupedSearches).every(([key, options]) => {
        // 미지정 태그 검색 처리
        if (key === 'undefinedTag') {
          return !data.tagList?.length
        }

        // 동일 key 내에서는 OR 조건으로 검색
        return options.some(option => {
          if (!option.value) {
            return true
          }

          // 태그 검색
          if (option.type === 'tag' && data.tagList?.length) {
            return data.tagList.some(tagObj =>
              tagObj.tagKey.toLowerCase() === option.key.toLowerCase() &&
              tagObj.tagValue.toLowerCase() === option.value.toLowerCase()
            )
          }

          // 일반 검색
          if (option.type !== 'tag') {
            if (typeof data[option.key] === 'object') {
              const searchData = JSON.stringify(data[option.key])
              return searchData.toLowerCase() === option.value.toLowerCase()
            }
            if (typeof data[option.key] === 'number') {
              return data[option.key].toString() === option.value
            }
            return data[option.key].toLowerCase() === option.value.toLowerCase()
          }

          return false
        })
      })
    })
    emits('update:filtered-cnt', filteredList.length)
    return filteredList
  }
  emits('update:filtered-cnt', props.items?.length || 0)
  return props.items || []
})

// 정렬된 데이터 계산
const sortedDatas = computed(() => {
  if (!filterDatas.value.length || !props.sortBy.length) return filterDatas.value

  return [...filterDatas.value].sort((a, b) => {
    const sortConfig = props.sortBy[0] // 현재는 단일 정렬만 지원
    const key = sortConfig.key
    const aValue = a[key]
    const bValue = b[key]

    // null, undefined 처리
    if (aValue === null || aValue === undefined) return 1
    if (bValue === null || bValue === undefined) return -1

    // 숫자 비교
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortConfig.order === 'asc' ? aValue - bValue : bValue - aValue
    }

    // 문자열 비교
    const aStr = String(aValue).toLowerCase()
    const bStr = String(bValue).toLowerCase()
    return sortConfig.order === 'asc'
      ? aStr.localeCompare(bStr)
      : bStr.localeCompare(aStr)
  })
})

// paginatedItems를 sortedDatas를 사용하도록 수정
const paginatedItems = computed(() => {
  if (!props.options?.pageCnt) {
    const start = (props.page - 1) * props.itemsPerPage
    const end = start + props.itemsPerPage
    return sortedDatas.value.slice(start, end)
  }
  return sortedDatas.value
})

const modelValue = ref([])

const onClickSelect = tableItem => {
  if (props.selectStrategy === 'single') {
    if (modelValue.value.includes(tableItem[props.itemValue])) {
      modelValue.value = []
    } else {
      modelValue.value = [tableItem[props.itemValue]]
    }
  } else { // 'all'
      if (modelValue.value.includes(tableItem[props.itemValue])) {
      modelValue.value = modelValue.value.filter(item => item !== tableItem[props.itemValue])
    } else {
      modelValue.value.push(tableItem[props.itemValue])
    }
  }
  emits('update:selected', modelValue.value)
}

const updatePage = e => {
  currentPage.value = e
  lazyPage.value = e
  // setDatas()
}

const onChnagePage = e => {
  updatePage(e)
}

const pageCnt = computed(() => {
  if(props.itemsPerPage !== -1) {
  return props.options?.pageCnt || Math.ceil(filterDatas.value.length / props.itemsPerPage)
  }
  return props.options?.pageCnt || Math.ceil(filterDatas.value.length)
})

const widthStyleTranslate = computed(() => {
  return widthValue => {
    if (typeof widthValue === typeof 1) {
      return `${widthValue}%`
    }
    if (widthValue) {
      return widthValue
    }
    return '100px'
  }
})

// const childRef = ref(null)
const onClickExpand = tableItem => {
  // console.log('onClickExpand')
  tableItem.showExpandRow = !tableItem.showExpandRow
}

watch(
  () => [props.search, props.smartSearch],
  () => {
    updatePage(1)
  },
  { deep: true },
)

// watch(
//   () => props.items,
//   () => {
//     setDatas()
//   },
// )

watch(
  () => filterDatas.value,
  nv => {
    props.setTotal(nv.length)
  },
)

onMounted(() => {
  // setDatas()
  lazyPage.value = props.page
})

const getSortIcon = (header) => {
  const sortConfig = props.sortBy.find(sort => sort.key === header.key)
  if (!sortConfig) return 'mdi-arrow-up'
  return sortConfig.order === 'asc' ? 'mdi-arrow-up' : 'mdi-arrow-down'
}
</script>

<style lang="scss">
.s-card-table {
  padding: 10px;

  .s-card-table__header-item {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 5px;

    .s-card-table__header-item-title {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 38px;
      padding: 0 10px;
      @include set-text(600, 14, $s-default--gray-9);

      &.sortable {
        cursor: pointer;
        user-select: none;

        .sort-icon {
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        &:hover {
          .sort-icon {
            opacity: 0.5;
          }
        }

        &:active {
          .sort-icon {
            opacity: 1;
          }
        }

        // 정렬 상태일 때는 항상 아이콘 표시
        &[data-sorted="true"] {
          .sort-icon {
            opacity: 1;
          }
        }
      }
    }
  }

  .s-card-table__body {
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.16));
    display: flex;
    width: 100%;
    min-height: 60px;
    margin-bottom: 10px;

    .s-card-table__body-row {
      background-color: white;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      border-radius: 10px;
      border: 1px solid $s-default--gray-5;
    }

    .s-card-table__body-row-expand {
      width: 100%;
      padding: 5px;
    }

    .s-card-table__body-item {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 5px;
    }

    .s-card-table__empty {
      width: 100%;
      height: 100%;
      display: flex;
    }
  }

  .card-label__checkbox {
    height: 30px;
  }

  .s-card-table__body-item {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    font-size: 14px;
    font-weight: 400;

    .s-card-table__body-wrapper {
      width: 100%;
      padding: 0 10px;
      display: flex;
      align-items: center;
      gap: 0 10px;
      min-height: 50px;

      &.strong-text {
        @include set-text(bold, 18, null);
      }
    }

    .s-card__body-icon--expand {
      width: 10%;
      min-width: 56px;
    }
  }

  .s-card-table__pagination {
    width: 100%;
    margin-top: 59px;
  }

  .v-checkbox .v-selection-control {
    min-height: fit-content;
  }

  .table-expand_header {
    padding: 0 10px;
  }

  .table-expand_body {
    padding-left: 20px;
  }
}
</style>
