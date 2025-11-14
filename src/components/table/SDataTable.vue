<template>
  <v-data-table
    ref="sDataTableRef"
    :class="['s-data-table', { 'disable-sort': disableSort, 'fixed-table': fixedTable, 'no-vertical-lines': !resizable }]"
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
    item-selectable
    @update:sort-by="onSortBy"
    @update:model-value="updateModelValue"
    @update:options="$emit('update:options', $event)"
    @update:expanded="$emit('update:expanded', $event)"
  >
  <!-- sortBy Vuetify 내부 함수와 정렬 기능 충돌이 발생하여 sortBy 속성을 사용하지 않음 -->
    <template #headers="bind" v-if="$slots.headers">
      <slot name="headers" v-bind="bind"></slot>
    </template>

    <template v-for="(header, index) in lazyHeaders" #[`header.${header.key}`] :key="index">
      <div
        class="header-cell d-flex align-center position-relative"
        :class="getHeaderAlignClass(header.align)"
        @click="handleSortClick(header.key)"
      >
        <!-- 우측 정렬일 때는 아이콘을 텍스트 앞에 배치 -->
        <v-icon
          v-if="(header.sortable !== false && !disableSort) && (header.align === 'end' || header.align === 'right')"
          class="custom-sort-icon"
          :class="{
            'active': isColumnSorted(header.key)
          }"
        >
          {{ getSortIcon(header.key) }}
        </v-icon>
        <span>{{ header.title || header.value }}</span>
        <!-- 좌측/중앙 정렬일 때는 아이콘을 텍스트 뒤에 배치 -->
        <v-icon
          v-if="(header.sortable !== false && !disableSort) && (header.align !== 'end' && header.align !== 'right')"
          class="custom-sort-icon"
          :class="{
            'active': isColumnSorted(header.key)
          }"
        >
          {{ getSortIcon(header.key) }}
        </v-icon>
        <div
          v-if="resizable"
          class="resize-handle"
          @mousedown="startResize($event, header.key, index)"
          @click.stop
        />
      </div>
    </template>

    <template v-for="(el, index) in lazyHeaders" #[`item.${el.key}`]="bind" :key="index">
      <v-tooltip v-if="tooltip" location="bottom" max-width="450px">
        <template #activator="{ props: dataProps }">
          <span
            v-if="!$slots[`item.${el.key}`]"
            v-bind="dataProps"
            class="d-inline-block text-truncate s-table-column__text"
            :class="[
              bind.item.highlight,
            ]"
          >
            {{ isEmpty(bind.item[el.key]) ? '-' : bind.item[el.key] }}
          </span>
          <span v-else :class="[bind.item.highlight || '']">
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
    <template #[`header.data-table-select`]="bind">
      <div class="header-cell checkbox-header d-flex align-center position-relative justify-center">
        <v-checkbox-btn
          v-if="selectStrategy !== 'single'"
          :indeterminate="bind.someSelected && !bind.allSelected"
          :model-value="bind.allSelected"
          @update:model-value="bind.selectAll(!bind.allSelected)"
        ></v-checkbox-btn>
        <span v-else></span>
        <div
          v-if="resizable"
          class="resize-handle"
          @mousedown="startResize($event, 'data-table-select-header', -1)"
          @click.stop
        />
      </div>
    </template>
    <template #[`item.data-table-select`]="{ item, isSelected, toggleSelect, internalItem }">
      <div :class="[item?.highlight || '']">
        <slot v-if="$slots['item.data-table-select']" name="item.data-table-select" v-bind="{ item, isSelected, toggleSelect, internalItem }">
          <template v-if="item.selectable">
            <v-checkbox-btn :model-value="isSelected(internalItem)" @update:model-value="toggleSelect(internalItem)" />
          </template>
          <template v-else>
          </template>
        </slot>
        <v-checkbox-btn
          v-else-if="!itemSelectable || item[itemSelectable] !== false"
          :model-value="isSelected(internalItem)"
          @update:model-value="toggleSelect(internalItem)"
        />
      </div>
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
import { ref, watch, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { filterData } from '@/components/Input/advanced-search/filter-data.js'
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
  advancedSearch: {
    type: Array,
    default: () => {
      return []
    },
    description: 'Advanced Search 검색 기능',
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
  resizable: {
    type: Boolean,
    default: false,
    description: '컬럼 크기 조정 가능 여부',
  },
})

const selected = ref([])
const sortBy = ref([])
const sortDesc = ref([])
const lazyHeaders = ref([])

// 리사이징 관련 상태
const isResizing = ref(false)
const hasDragged = ref(false) // 드래그 여부 판별
const startX = ref(0)
const startWidth = ref(0)
const currentColumn = ref(null) // { key, index }
const columnWidths = ref(new Map())
const sDataTableRef = ref(null)
const isTableInitialized = ref(false)
const resizeObserver = ref(null)
const observedWidth = ref(0)

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


  if (props.advancedSearch.length > 0) {

    const lists = filterData(props.items, props.advancedSearch)
    console.log(lists)
    return lists
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
          // console.log(`Sorting ${sortKey}: aValue=${aValue}, bValue=${bValue}, desc=${desc}`)

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
  // Vuetify의 기본 정렬 기능은 사용하지 않음
  // 커스텀 정렬 아이콘 클릭으로만 정렬 처리
  return
}

const currentPage = computed({
  get: () => props.page,
  set: (value) => updatePage(value)
})

watch(
  () => props.headers,
  nv => {
    lazyHeaders.value = nv.filter(h => h.align !== 'd-none')
    if (!isResizing.value) {
      isTableInitialized.value = false;
      nextTick(() => {
        initializeTableWidths()
        if (!props.resizable) {
          applyFixedColumnWidths()
        }
      })
    }
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
  () => props.advancedSearch,
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
  requestAnimationFrame(() => {
    initializeTableWidths();
    if (!props.resizable) {
      applyFixedColumnWidths();
    }
  });

  // ResizeObserver 설정 - eager 탭 내의 테이블 너비 갱신을 위해 필요
  if (props.resizable) {
    const rootEl = getRootEl();
    if (rootEl) {
      resizeObserver.value = new ResizeObserver((entries) => {
        const wrapper = entries[0]?.target.querySelector('.v-table__wrapper');
        if (wrapper) {
          const newWidth = wrapper.clientWidth;
          // 테이블이 표시될 때 너비가 0에서 양수 값으로 변경됩니다.
          // 이 전환 시에만 다시 초기화하여 무한 루프를 방지합니다.
          if (newWidth > 0 && observedWidth.value === 0) {
            isTableInitialized.value = false;
            nextTick(() => {
              initializeTableWidths();
            });
          }
          observedWidth.value = newWidth;
        }
      });
      resizeObserver.value.observe(rootEl);
    }
  }
});

// 초기 테이블 너비 설정
const initializeTableWidths = () => {
  const rootEl = getRootEl();
  const table = getTableEl();
  if (!rootEl || !table || isTableInitialized.value) return;

  const wrapper = rootEl.querySelector('.v-table__wrapper');
  if (!wrapper) return;

  if (props.resizable) {
    const ths = table.querySelectorAll('thead tr th');
    const hasCheckbox = props.showSelect;
    const checkboxOffset = hasCheckbox ? 1 : 0;
    const tempWidths = new Map();

    // 1. Calculate initial widths from headers or DOM
    ths.forEach((th, index) => {
      let width;
      let key;
      const headerIndex = index - checkboxOffset;
      const header = lazyHeaders.value[headerIndex];

      if (hasCheckbox && index === 0) {
        key = 'data-table-select-header';
        width = 48; // 고정 너비
      } else if (header) {
        key = header.key;
        if (header.width) {
          width = parseInt(String(header.width), 10);
        } else {
          width = th.offsetWidth;
        }
      } else {
        width = th.offsetWidth;
      }

      if (key) {
        tempWidths.set(key, width);
      }
    });

    // 2. Calculate total width and compare with container
    const containerWidth = wrapper.clientWidth;
    const checkboxWidth = tempWidths.get('data-table-select-header') || 0;

    let totalDataColumnWidth = 0;
    tempWidths.forEach((width, key) => {
        if (key !== 'data-table-select-header') {
            totalDataColumnWidth += (width || 0);
        }
    });

    const totalInitialWidth = totalDataColumnWidth + checkboxWidth;

    // 3. Decide whether to scale or not
    if (totalInitialWidth < containerWidth) {
      const availableWidthForDataCols = containerWidth - checkboxWidth;
      if (totalDataColumnWidth > 0) {
        const scaleFactor = (availableWidthForDataCols - 2) / totalDataColumnWidth;
        tempWidths.forEach((width, key) => {
          if (key === 'data-table-select-header') {
            columnWidths.value.set(key, width);
          } else {
            columnWidths.value.set(key, Math.max(50, Math.floor(width * scaleFactor)));
          }
        });
      } else if (checkboxWidth > 0) {
        columnWidths.value.set('data-table-select-header', checkboxWidth);
      }
    } else {
      tempWidths.forEach((width, key) => {
        columnWidths.value.set(key, Math.max(50, width || 0));
      });
    }

    // 4. Apply widths as CSS variables
    if (hasCheckbox) {
      const width = columnWidths.value.get('data-table-select-header');
      if (width) {
        rootEl.style.setProperty('--column-0-width', `${width}px`);
      }
    }
    lazyHeaders.value.forEach((header, index) => {
      const width = columnWidths.value.get(header.key);
      if (width) {
        const cssIndex = index + checkboxOffset;
        rootEl.style.setProperty(`--column-${cssIndex}-width`, `${width}px`);
      }
    });

    // 5. Switch to fixed layout.
    table.style.tableLayout = 'fixed';
    wrapper?.classList.add('table-resizing');
    updateTableTotalWidth(); // Update total width after setting individual widths
    isTableInitialized.value = true;
  }
};

// tr class를 결정하는 함수 추가
const getItemClass = (item) => {
  return item.highlight || ''  // highlight 속성이 있으면 해당 클래스를 반환
}

// header align에 따른 클래스 반환 함수
const getHeaderAlignClass = (align) => {
  switch (align) {
    case 'start':
    case 'left':
      return 'justify-start'
    case 'center':
      return 'justify-center'
    case 'end':
    case 'right':
      return 'justify-end'
    default:
      return 'justify-start' // 기본값
  }
}

const tableColumnWidth = (width) => {
  if (width && (width?.toString()?.endsWith('%') || width?.toString()?.endsWith('px'))) {
    return width
  } else if (width) {
    return `${width}px`
  }
  return '250px'
}

// 커스텀 정렬 관련 함수들
const isColumnSorted = (key) => {
  return sortBy.value.some(item => item.key === key)
}

const getSortDirection = (key) => {
  const sortItem = sortBy.value.find(item => item.key === key)
  return sortItem ? sortItem.order : null
}

const getSortIcon = (key) => {
  const direction = getSortDirection(key)
  if (direction === 'asc') {
    return 'mdi-arrow-up'
  } else if (direction === 'desc') {
    return 'mdi-arrow-down'
  } else {
    return 'mdi-arrow-up-down'
  }
}

const handleSortClick = (key) => {
  if (isResizing.value) return;
  if (props.disableSort) return

  const header = props.headers.find(h => h.key === key)
  if (header && header.sortable === false) return

  const currentSort = sortBy.value.find(item => item.key === key)
  let newOrder = 'asc'

  if (!currentSort) {
    // 처음 정렬하는 경우: 없음 → ASC
    newOrder = 'asc'
  } else if (currentSort.order === 'asc') {
    // ASC → DESC
    newOrder = 'desc'
  } else if (currentSort.order === 'desc') {
    // DESC → 없음
    newOrder = null
  }

  if (newOrder === null) {
    // 정렬 해제
    sortBy.value = []
    sortDesc.value = []
  } else {
    // 정렬 설정
    sortBy.value = [{ key: key, order: newOrder }]
    sortDesc.value = [newOrder === 'desc']
  }

  emit('update:sort-by', sortBy.value)
  updatePage(1)
}

// 리사이징 관련 함수들
const getRootEl = () => sDataTableRef.value?.$el || null
const getTableEl = () => getRootEl()?.querySelector('table') || null

const startResize = (e, columnKey, columnIndex) => {
  if (!props.resizable) return;

  e.preventDefault();
  e.stopPropagation();

  if (isResizing.value) return;

  const table = getTableEl();
  if (!table) return;

  // startResize가 처음 호출될 때 너비가 아직 초기화되지 않았다면 초기화 실행
  if (!isTableInitialized.value) {
    initializeTableWidths();
  }

  isResizing.value = true;

  const hasCheckbox = props.showSelect;
  const checkboxOffset = hasCheckbox ? 1 : 0;
  // SDataTable.vue의 columnIndex는 lazyHeaders 기준이므로, 실제 DOM 인덱스 계산
  const actualDomIndex = columnIndex === -1 ? 0 : columnIndex + checkboxOffset;

  startX.value = e.clientX;
  currentColumn.value = { key: columnKey, index: actualDomIndex };

  // Use the stored width as the starting point, not the prop width or a fresh DOM read.
  startWidth.value = columnWidths.value.get(columnKey) || 0;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', stopResize);
  document.body.style.userSelect = 'none';
  document.body.style.cursor = 'col-resize';
};

const onMouseMove = (e) => {
  if (!isResizing.value || !currentColumn.value) return;

  e.preventDefault();

  const diffX = e.clientX - startX.value;

  // 3px 이상 움직였을 때만 드래그로 간주
  if (!hasDragged.value && Math.abs(diffX) > 3) {
    hasDragged.value = true;
  }

  // 드래그 상태일 때만 너비 업데이트
  if (hasDragged.value) {
    const newWidth = Math.max(50, startWidth.value + diffX); // 최소 너비 50px
    updateColumnWidth(currentColumn.value.key, currentColumn.value.index, newWidth);
  }
};

const stopResize = () => {
  if (!isResizing.value) return;

  // Prevent width changes on simple clicks without dragging
  if (!hasDragged.value) {
    isResizing.value = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', stopResize);
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
    return;
  }

  isResizing.value = false;
  hasDragged.value = false; // Reset drag state
  currentColumn.value = null;

  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', stopResize);
  document.body.style.userSelect = '';
  document.body.style.cursor = '';
};

const updateColumnWidth = (columnKey, domIndex, width) => {
  const rootEl = getRootEl()
  if (!rootEl) return

  columnWidths.value.set(columnKey, width);
  rootEl.style.setProperty(`--column-${domIndex}-width`, `${width}px`);

  updateTableTotalWidth();
};

// 테이블 전체 너비를 모든 컬럼 너비의 합으로 조정
const updateTableTotalWidth = () => {
  const table = getTableEl();
  const wrapper = getRootEl()?.querySelector('.v-table__wrapper');
  if (!table || !wrapper) return;

  if (wrapper.classList.contains('table-resizing')) {
    const totalWidth = Array.from(columnWidths.value.values()).reduce((sum, width) => sum + (width || 0), 0);

    if (totalWidth > 0) {
      table.style.width = `${totalWidth}px`;
      table.style.minWidth = `${totalWidth}px`;
    }

    const containerWidth = wrapper.clientWidth;
    // 컨테이너 너비보다 클 때만 가로 스크롤 표시
    if (totalWidth > containerWidth) {
      wrapper.style.overflowX = 'auto';
    } else {
      wrapper.style.overflowX = 'hidden';
    }
  }
};

// width 값을 CSS에서 사용할 수 있는 형태로 변환
const normalizeWidth = (width) => {
  if (!width) return '150px' // 기본값

  // 이미 문자열이고 단위가 포함된 경우 (예: '100px', '50%', '10rem')
  if (typeof width === 'string' && /\d+(px|%|em|rem|vw|vh)$/.test(width)) {
    return width
  }

  // 숫자인 경우 px 단위 추가
  if (typeof width === 'number' || (typeof width === 'string' && /^\d+$/.test(width))) {
    return `${width}px`
  }

  // 그 외의 경우 기본값 반환
  return '150px'
}

// resizable이 false일 때 고정 컬럼 너비 적용
const applyFixedColumnWidths = () => {
  const rootEl = getRootEl()
  if (!rootEl) return

  // checkbox 컬럼이 있는지 확인 (showSelect prop 사용)
  const hasCheckbox = props.showSelect
  const checkboxOffset = hasCheckbox ? 1 : 0

  lazyHeaders.value.forEach((header, index) => {
    const width = normalizeWidth(header.width) // 너비 값 정규화
    const actualColumnIndex = index + checkboxOffset + 1 // checkbox가 있으면 +1

    // CSS 변수로 각 컬럼의 너비 설정
    rootEl.style.setProperty(`--column-${actualColumnIndex - 1}-width`, width)

    // 각 컬럼에 개별 너비 적용
    const columnSelector = `th:nth-child(${actualColumnIndex}), td:nth-child(${actualColumnIndex})`
    const elements = rootEl.querySelectorAll(columnSelector)
    elements.forEach(el => {
      el.style.setProperty('--column-width', width)
    })
  })

  // checkbox 컬럼이 있다면 첫 번째 컬럼(checkbox)에 고정 너비 설정
  if (hasCheckbox) {
    rootEl.style.setProperty('--column-0-width', '60px')
    const checkboxElements = rootEl.querySelectorAll('th:nth-child(1), td:nth-child(1)')
    checkboxElements.forEach(el => {
      el.style.setProperty('--column-width', '60px')
    })
  }
}




// 컴포넌트 언마운트 시 이벤트 리스너 정리
onBeforeUnmount(() => {
  if (isResizing.value) {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', stopResize)
    document.body.style.userSelect = ''
    document.body.style.cursor = ''
  }

  // ResizeObserver 정리
  if (resizeObserver.value) {
    resizeObserver.value.disconnect()
    resizeObserver.value = null
  }
})

</script>

<style lang="scss" scoped>
@import url('./SDataTable.scss');

.s-data-table.disable-sort thead th {
  pointer-events: none;
  user-select: none;
}
</style>
