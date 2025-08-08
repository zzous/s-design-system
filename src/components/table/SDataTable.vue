<template>
  <v-data-table
    ref="sDataTableRef"
    :class="['s-data-table', { 'disable-sort': disableSort, 'fixed-table': fixedTable }]"
    v-bind="$attrs"
    :headers="lazyHeaders"
    :fixed-header="fixedHeader"
    :height="height"
    :items="filterDatas"
    :page="currentPage"
    :items-per-page="itemsPerPage"
    :search="search"
    :item-value="itemValue"
    :show-select="showSelect"
    :return-object="returnObject"
    :model-value="selected"
    :select-strategy="selectStrategy"
    :loading="loading"
    :hover="hover"
    :show-expand="showExpand"
    :disable-sort="disableSort"
    :expanded="expanded"
    :expand-on-click="expandOnClick"
    :item-class="getItemClass"
    :sort-by="[]"
    @update:sort-by="onSortBy"
    @update:model-value="updateModelValue"
    @update:options="$emit('update:options', $event)"
    @update:expanded="$emit('update:expanded', $event)"
  >
    <template #headers="bind" v-if="$slots.headers">
      <slot name="headers" v-bind="bind"></slot>
    </template>

    <template v-for="(el, index) in lazyHeaders" #[`item.${el.key}`]="bind" :key="index">
      <v-tooltip v-if="tooltip" location="bottom">
        <template #activator="{ props: dataProps }">
          <span
            v-if="!$slots[`item.${el.key}`]"
            v-bind="dataProps"
            class="d-inline-block text-truncate s-table-column__text"
            :class="[
              bind.item.highlight,
            ]"
            :style="{
              maxWidth: tableColumnWidth(el.width),
            }"
          >
            {{ isEmpty(bind.item[el.key]) ? '-' : bind.item[el.key] }}
          </span>
          <span v-else>
            <slot :name="`item.${el.key}`" v-bind="bind">
              {{ isEmpty(bind.item[el.key]) ? '-' : bind.item[el.key] }}
            </slot>
          </span>
        </template>
        <span>
          {{ isEmpty(bind.item[el.key]) ? '-' : bind.item[el.key] }}
        </span>
      </v-tooltip>

      <div
        v-else
        :class="[
          bind.item.highlight,
        ]"
      >
        <slot :name="`item.${el.key}`" v-bind="bind">
          {{ isEmpty(bind.item[el.key]) ? '-' : bind.item[el.key] }}
        </slot>
      </div>
    </template>
    <template #[`header.data-table-select`]="bind" v-if="$slots['header.data-table-select']">
      <slot name="header.data-table-select" v-bind="bind">
        <v-checkbox-btn
          :indeterminate="bind.someSelected && !bind.allSelected"
          :model-value="bind.allSelected"
          @update:model-value="bind.selectAll(!bind.allSelected)"
        ></v-checkbox-btn>
      </slot>
    </template>
    <template #[`item.data-table-select`]="bind" v-if="$slots['item.data-table-select']">
      <slot name="item.data-table-select" v-bind="bind">
        <template v-if="bind.item.selectable">
          <v-checkbox-btn :model-value="bind.isSelected(bind.item)" @update:model-value="bind.toggleSelect(bind.item)" />
        </template>
        <template v-else>
        </template>
      </slot>
    </template>
    <template #no-data>
      <div class="text-center no-data">
        {{ noDataText }}
      </div>
    </template>
    <template #[`tfoot`]="bind">
      <slot name="tfoot" v-bind="bind">
        <tfoot v-if="footers && Object.keys(footers).length">
          <tr class="v-data-table__tr">
            <template v-for="(head, hIndex) in lazyHeaders" :key="'foot__' + hIndex">
              <td
                v-if="head.align !== 'd-none'"
                class="v-data-table__td"
                :width="head.width"
                :style="{ textAlign: head.align || 'start' }"
            >
              <template v-if="$slots[`footer.${head.key}`]">
                <span :class="[footers.highlight]">
                  <slot :name="`footer.${head.key}`" :props="footers" />
                </span>
              </template>
              <template v-else>
                <span :class="[footers.highlight]">{{ footers[head.key] }}</span>
                </template>
              </td>
            </template>
          </tr>
        </tfoot>
      </slot>
    </template>
    <template #item="bind" v-if="$slots.item">
      <slot name="item" v-bind="bind" />
    </template>
    <template #body="bind" v-if="$slots.body">
      <slot name="body" v-bind="{...bind, items: filterDatas}" />
    </template>
    <template #[`body.append`]="bind" v-if="$slots['body.append']">
      <slot name="body.append" v-bind="bind" />
    </template>
    <template #tbody="bind" v-if="$slots.tbody">
      <slot name="tbody" v-bind="bind" />
    </template>
    <template #bottom>
      <slot name="append-content" />
      <div v-if="!hideFooter" class="text-center s-data-table-pagination">
        <v-pagination
          :model-value="currentPage"
          size="small"
          rounded
          active-color="#1B75BB"
          variant="flat"
          :total-visible="10"
          :length="options?.pageCnt || pageCnt"
          @update:model-value="updatePage"
        />
      </div>
    </template>
    <template #expanded-row="bind" v-if="$slots[`expanded-row`]">
      <slot name="expanded-row" v-bind="bind" />
    </template>
  </v-data-table>
</template>

<script setup>
import { ref, watch, computed, onMounted, nextTick } from 'vue'
import stringUtil from '@/utils/stringUtil.js'

const { isEmpty } = stringUtil

const emit = defineEmits([
  'update:page',
  'update:filter',
  'update:search',
  'update:sort-by',
  'update:group-by',
  'update:expanded',
  'update:options',
  'update:model-value',
  'get-checkedbox-item',
  'update:filtered-cnt',
])

const props = defineProps({
  // search: String,
  options: {
    type: Object,
    default: () => {},
  },
  getChipColors: {
    type: Function,
    default: undefined,
  },
  // onClickChips: Function,
  customFilter: {
    type: [Number, Boolean, Array],
    default: undefined,
    description: '항목 필터링 기능',
  },
  customKeyFilter: {
    type: Object,
    default: undefined,
    description: '',
  },
  expanded: {
    type: Array,
    default: () => [],
    description: '',
  },
  expandOnClick: {
    type: Boolean,
    default: false,
    description: '',
  },
  filterKeys: {
    type: [String, Array],
    default: undefined,
    description: '',
  },
  filterMode: {
    type: String,
    default: 'intersection',
    description: '',
  },
  fixedFooter: {
    type: Boolean,
    default: false,
    description: '',
  },
  fixedHeader: {
    type: Boolean,
    default: false,
    description: '헤더 사이즈가 고정됩니다. (deprecated)',
  },
  groupBy: {
    type: Array,
    default: () => [],
    description:
      '항목을 그룹화하는 데 사용해야 하는 항목 속성을 변경합니다. 현재 형식의 단일 그룹화만 지원합니다: group또는 [group]. 배열을 사용할 때 첫 번째 요소만 고려됩니다. .sync수정자 와 함께 사용할 수 있습니다.',
  },
  headers: {
    type: Array,
    default: () => [],
    description: '각각 헤더 열을 설명하는 개체의 배열입니다.',
  },
  height: {
    type: [String, Number],
    default: undefined,
    description: '명시적인 테이블 높이 설정',
  },
  hideNoData: {
    type: Boolean,
    default: false,
    description: '',
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: 'props',
    description:
      '각 항목 구성 요소에 적용될 props 개체입니다. true원본 개체를 가공되지 않는 props로 취급하고 구성 요소에 직접 전달합니다.',
  },
  items: {
    type: Array,
    default: () => [],
    description: '자식 구성 요소를 자동으로 생성하는 데 사용되는 문자열 또는 객체의 배열',
  },
  itemsPerPage: {
    type: [String, Number],
    default: 10,
    description:
      '페이지당 표시할 항목 수를 변경합니다. .sync 수정자와 함께 사용할 수 있습니다. 이 prop을 -1로 설정하면 페이지의 모든 항목이 표시됩니다.',
  },
  itemValue: {
    type: [Boolean, String, Array, Function],
    default: 'id',
    description: '',
  },
  modelValue: {
    type: Array,
    default: () => [],
    description: '구성 요소의 v-model 값입니다. 구성 요소가 다중 소품을 지원하는 경우 기본값은 빈 배열입니다.',
  },
  multiSort: {
    type: Boolean,
    default: false,
    description: 'true일 경우 여러 속성에 대해 정렬할 수 있습니다.',
  },
  mustSort: {
    type: Boolean,
    default: false,
    description: 'true일 경우 정렬을 비활성화할 수 없으면 항상 오름차순과 내림차순 간에 전환됩니다.',
  },
  noDataText: {
    type: String,
    default: 'no data.',
    description: '구성 요소에 항목이 제공되지 않을 때 표시되는 텍스트',
  },
  noFilter: {
    type: Boolean,
    default: false,
    description: '',
  },
  page: {
    type: [String, Number],
    default: 1,
    description: '현재 표시된 페이지 번호(인덱스 1개)',
  },
  returnObject: {
    type: Boolean,
    default: false,
    description: '',
  },
  search: {
    type: String,
    default: undefined,
    description: '항목 필터링에 사용되는 텍스트 입력',
  },
  showExpand: {
    type: Boolean,
    default: false,
    description: '기본 행에 확장 토글을 표시합니다.',
  },
  showSelect: {
    type: Boolean,
    default: false,
    description: '머리글과 행 모두에서 선택 확인란을 표시합니다(기본 행을 사용하는 경우).',
  },
  sortBy: {
    type: Array,
    default: () => [],
    description:
      '정렬 순서에 사용해야 하는 항목 속성을 변경합니다. .sync수정자 와 함께 사용할 수 있습니다.',
  },
  selectStrategy: {
    type: String,
    default: 'page',
  },
  width: {
    type: [String, Number],
    default: undefined,
    description: '구성 요소의 너비를 설정합니다.',
  },
  // custom
  single: {
    type: Boolean,
    default: false,
    description: 'select model의 데이터를 단일/다중으로 세팅합니다.',
  },
  hideFooter: {
    type: Boolean,
    default: false,
    description: 'footer hide',
  },
  footers: {
    type: Object,
    default: () => {},
    description: 'tfoot 위치에 그릴 데이터',
  },
  customSlotFooter: {
    type: Object,
    default: () => {},
    description: 'custom footer',
  },
  smartSearch: {
    type: Array,
    default: () => {
      return []
    },
    description: 'Smart Search 검색 기능',
  },
  fixedTable: {
    type: Boolean,
    default: false,
  },
  setTotal: {
    type: Function,
    default: () => {},
    description: '전체 개수 초기화(필터링 적용)',
  },
  density: {
    type: String,
    default: 'default',
    description: 'default | comfortable | compact 사이즈',
  },
  tooltip: {
    type: Boolean,
    default: false,
    description: '툴팁 사용 여부(툴팁을 사용하려면 테이블의 class가 fixed-table을 포함하고 있어야 합니다.)',
  },
  itemSelectable: {
    type: String,
    default: null,
    description: '테이블의 checkbox가 선택이 가능한지의 여부를 판단할 수 있는 요소의 키 값입니다. (예: selectable)',
  },
  disableSort: {
    type: Boolean,
    default: false,
    description: '정렬 기능 비활성화',
  },
  loading: {
    type: Boolean,
    default: false,
    description: '로딩 상태',
  },
  hover: {
    type: Boolean,
    default: false,
    description: 'hover 상태',
  },
  fixedTable: {
    type: Boolean,
    default: false,
    description: '테이블 고정 여부',
  },
})

const selected = ref([])
const sortBy = ref([])
const sortDesc = ref([])
const lazyHeaders = ref([])

const updateModelValue = item => {
  // console.log('updateModelValue', item)
  emit('get-checkedbox-item', item)
  selected.value = item
  emit('update:model-value', selected.value)
}

const filterDatas = computed(() => {
  // TODO Pagination 컴포넌트 사용 시 Search props와 페이지 수가 맞지 않는 오류가 있음 (해결방법: vuetify 업그레이드)
  // vuetify 업그레이드 전 임시코드
  if (props.search) {
    // 일반 검색 (no smart search)
    const keys = props.headers.map(h => h.key)
    const searchValue = props.search
    const filteredList = props.items.filter(data =>
      keys.some(key => {
                const value = data[key]

        // null, undefined, 빈 문자열을 동일한 값으로 간주하여 검색
        if (searchValue === '-' || searchValue === 'null' || searchValue === 'undefined' || searchValue === '') {
          if (isEmpty(value)) {
            return true
          }
        }

        // 일반 값 검색
        if (!isEmpty(value)) {
          if (typeof value === typeof {} || typeof value === typeof []) {
            return JSON.stringify(value)?.indexOf(searchValue) > -1
          }
          return value?.toString()?.indexOf(searchValue) > -1
        }

        return false
      }),
    )
    emit('update:filtered-cnt', filteredList.length)
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
            return data.tagList.some(tagObj => {
              const tagKeyMatch = tagObj.tagKey === option.key

              // null, undefined, 빈 문자열을 동일한 값으로 간주
              if (option.value === '-' || option.value === 'null' || option.value === 'undefined' || option.value === '') {
                return tagKeyMatch && (isEmpty(tagObj.tagValue) || tagObj.tagValue === '-')
              }

              return tagKeyMatch && tagObj.tagValue === option.value
            })
          }

          // 일반 검색
          if (option.type !== 'tag') {
            // null, undefined, 빈 문자열을 동일한 값으로 간주
            // console.log('option.value:', option.value, 'data[option.key]:', data[option.key])
            if (option.value === '-' || option.value === 'null' || option.value === 'undefined' || option.value === '') {
              return isEmpty(data[option.key]) || data[option.key] === '-'
            }

            if (typeof data[option.key] === 'object') {
              const searchData = JSON.stringify(data[option.key])
              return searchData === option.value
            }
            if (typeof data[option.key] === 'number') {
              return data[option.key]?.toString() === option.value
            }
            return data[option.key] === option.value
          }

          return false
        })
      })
    })
    emit('update:filtered-cnt', filteredList.length)
    return filteredList
  }

  let result = props.items || []
  emit('update:filtered-cnt', result.length)

  // 정렬 로직 추가
  if (sortBy.value.length > 0) {
    result = [...result].sort((a, b) => {
      for (let i = 0; i < sortBy.value.length; i++) {
        const sortItem = sortBy.value[i]
        const key = sortItem.key || sortItem
        const desc = sortDesc.value[i] || false

        // headers에서 type과 sortKey 찾기
        const header = props.headers.find(h => h.key === key || h.value === key)
        // sortKey가 있으면 sortKey를 사용, 없으면 원래 key 사용
        const sortKey = header?.sortKey || key
        let aValue = a[sortKey]
        let bValue = b[sortKey]

        // 명시적으로 설정된 type을 우선 사용, 없으면 sortKey 유무에 따라 결정
        const type = header?.type || (header?.sortKey ? 'number' : 'string')

        if (type === 'number') {
          // 콤마 제거 및 숫자 변환
          aValue = Number(String(aValue).replace(/,/g, ''))
          bValue = Number(String(bValue).replace(/,/g, ''))
          // NaN 방지
          if (isNaN(aValue)) aValue = 0
          if (isNaN(bValue)) bValue = 0

          // 디버깅 로그
          console.log(`Sorting ${sortKey}: aValue=${aValue}, bValue=${bValue}, desc=${desc}`)

          if (aValue < bValue) return desc ? 1 : -1
          if (aValue > bValue) return desc ? -1 : 1
        } else {
          if (aValue == null) aValue = ''
          if (bValue == null) bValue = ''
          const result = aValue.toString().localeCompare(bValue.toString(), undefined, { numeric: true })
          if (result !== 0) return desc ? -result : result
        }
      }
      return 0
    })
  }

  return result
})

const pageCnt = computed(() => {
  if(props.itemsPerPage !== -1) {
  return props.options?.pageCnt || Math.ceil(filterDatas.value.length / props.itemsPerPage)
  }
  return props.options?.pageCnt || Math.ceil(filterDatas.value.length)
})

const sDataTableRef = ref()
// const getChipColor = (status) => {
//   // console.log(tag, 'getChipColor')

//   return props.getChipColors(status)
// }

// // 15 글자 넘어가면 말줄임표 추가 => TODO 폭에 따라 값 변경되게 수정
// const lessenText = (text) => {
//   if (text?.length > 20) {
//     text = `${text.substr(0, 18)}...`
//   }
//   return text
// }
const updatePage = (newPage) => {
  emit('update:page', newPage)
}
const updateSortBy = e => {
  // Vuetify 3의 정렬 이벤트 구조에 맞게 처리
  if (Array.isArray(e) && e.length > 0) {
    const sortItem = e[0]

    // 현재 정렬 상태 확인
    const currentSort = sortBy.value.find(item => item.key === sortItem.key)
    let newOrder = 'asc'

    if (!currentSort) {
      // 처음 정렬하는 경우
      newOrder = 'asc'
    } else if (currentSort.order === 'asc') {
      // asc → desc
      newOrder = 'desc'
    } else if (currentSort.order === 'desc') {
      // desc → 정렬 해제
      newOrder = null
    }

    if (newOrder === null) {
      // 정렬 해제
      sortBy.value = []
      sortDesc.value = []
    } else {
      // 정렬 설정
      sortBy.value = [{ key: sortItem.key, order: newOrder }]
      sortDesc.value = [newOrder === 'desc']
    }
  } else {
    sortBy.value = []
  }
  emit('update:sort-by', sortBy.value)
  updatePage(1)
}
const onSortBy = (e) => {
  if (props.disableSort) return

  // sortable: false인 컬럼은 정렬하지 않음
  if (Array.isArray(e) && e.length > 0) {
    const sortItem = e[0]
    const header = props.headers.find(h => h.key === sortItem.key)
    if (header && header.sortable === false) {
      return
    }
  }

  updateSortBy(e)
}

const currentPage = computed({
  get: () => props.page,
  set: (value) => updatePage(value)
})

watch(
  () => props.headers,
  nv => {
    lazyHeaders.value = nv.filter(h => h.align !== 'd-none')
  },
  { immediate: true }
)

watch(
  () => props.modelValue,
  nv => {
    selected.value = nv
  },
  { immediate: true }
)

watch(
  () => props.smartSearch,
  () => {
    updatePage(1)
  },
  {
    deep: true,
  }
)

watch(
  () => props.itemsPerPage,
  () => {
    updatePage(1)
  }
)

onMounted(() => {
  // console.log(sDataTableRef.value)
})

// tr class를 결정하는 함수 추가
const getItemClass = (item) => {
  return item.highlight || ''  // highlight 속성이 있으면 해당 클래스를 반환
}

const tableColumnWidth = (width) => {
  if (width && (width?.toString()?.endsWith('%') || width?.toString()?.endsWith('px'))) {
    return width
  } else if (width) {
    return `${width}px`
  }
  return '250px'
}


</script>

<style lang="scss" scoped>
@import url('./SDataTable.scss');

.s-data-table.disable-sort thead th {
  pointer-events: none;
  user-select: none;
}
</style>
