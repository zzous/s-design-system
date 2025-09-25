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
    <template v-for="(header, hIndex) in lazyHeaders" #[`header.${header.key}`] :key="'h-'+hIndex">
      <div class="header-cell d-flex align-center justify-space-between position-relative"
           @click="handleSortClick(header.key)">
        <span>{{ header.title || header.value }}</span>
        <v-icon
          v-if="header.sortable !== false && !disableSort"
          class="custom-sort-icon"
          :class="{ 'active': isColumnSorted(header.key) }"
        >
          {{ getSortIcon(header.key) }}
        </v-icon>
        <div
          class="resize-handle"
          @mousedown="startResize($event, header.key, hIndex)"
          @click.stop
        />
      </div>
    </template>

    <template v-for="(el, cIndex) in lazyHeaders" #[`item.${el.key}`]="bind" :key="'c-'+cIndex">
      <v-tooltip v-if="tooltip" location="bottom" @update:model-value="onTooltipToggle(cIndex)">
        <template #activator="{ props: dataProps }">
          <span
            v-if="!$slots[`item.${el.key}`]"
            v-bind="dataProps"
            class="d-inline-block s-table-column__text s-ellipsis"
            :class="[ bind.item.highlight ]"
          >
            {{ isEmpty(bind.item[el.key]) ? '-' : bind.item[el.key] }}
          </span>

          <span v-else>
            <slot :name="`item.${el.key}`" v-bind="bind">
              {{ isEmpty(bind.item[el.key]) ? '-' : bind.item[el.key] }}
            </slot>
          </span>
        </template>
        <span>{{ isEmpty(bind.item[el.key]) ? '-' : bind.item[el.key] }}</span>
      </v-tooltip>

      <div v-else :class="[ bind.item.highlight ]">
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
        />
      </slot>
    </template>
    <template #[`item.data-table-select`]="bind" v-if="$slots['item.data-table-select']">
      <slot name="item.data-table-select" v-bind="bind">
        <template v-if="bind.item.selectable">
          <v-checkbox-btn :model-value="bind.isSelected(bind.item)" @update:model-value="bind.toggleSelect(bind.item)" />
        </template>
        <template v-else />
      </slot>
    </template>

    <template #no-data>
      <div class="text-center no-data">{{ noDataText }}</div>
    </template>

    <template #[`tfoot`]="bind">
      <slot name="tfoot" v-bind="bind">
        <tfoot v-if="footers && Object.keys(footers).length">
          <tr class="v-data-table__tr">
            <template v-for="(head, fIndex) in lazyHeaders" :key="'foot__' + fIndex">
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

    <template #item="bind" v-if="$slots.item"><slot name="item" v-bind="bind" /></template>
    <template #body="bind" v-if="$slots.body"><slot name="body" v-bind="{...bind, items: filterDatas}" /></template>
    <template #[`body.append`]="bind" v-if="$slots['body.append']"><slot name="body.append" v-bind="bind" /></template>
    <template #tbody="bind" v-if="$slots.tbody"><slot name="tbody" v-bind="bind" /></template>

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
import stringUtil from '@/utils/stringUtil.js'
const { isEmpty } = stringUtil

const emit = defineEmits([
  'update:page','update:filter','update:search','update:sort-by','update:group-by',
  'update:expanded','update:options','update:model-value','get-checkedbox-item','update:filtered-cnt',
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
  hover: { type: Boolean, default: false, description: 'hover 상태' },

  persistKey: { type: String, default: null, description: 'persist 키' },
})

const selected = ref([])
const sortBy = ref([])
const sortDesc = ref([])
const lazyHeaders = ref([])

const isResizing = ref(false)
const startX = ref(0)
const startWidth = ref(0)
const currentColumn = ref(null) // { key, index }
const currentResizeHandle = ref(null)
const columnWidths = ref(new Map())
const tableInitialized = ref(false)
const initialTableWidth = ref(0)

const sDataTableRef = ref(null)

const updateModelValue = (item) => { emit('get-checkedbox-item', item); selected.value = item; emit('update:model-value', selected.value) }

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

const pageCnt = computed(() => props.itemsPerPage !== -1
  ? (props.options?.pageCnt || Math.ceil(filterDatas.value.length / props.itemsPerPage))
  : (props.options?.pageCnt || Math.ceil(filterDatas.value.length))
)

const updatePage = (p) => emit('update:page', p)
const onSortBy = () => {} // Vuetify 기본 정렬 비사용
const currentPage = computed({ get: () => props.page, set: v => updatePage(v) })

watch(() => props.headers, (nv) => { lazyHeaders.value = (nv || []).filter(h => h.align !== 'd-none') }, { immediate: true })
watch(() => props.modelValue, (nv) => { selected.value = nv }, { immediate: true })
watch(() => props.smartSearch, () => updatePage(1), { deep: true })
watch(() => props.itemsPerPage, () => updatePage(1))

const getItemClass = (item) => item.highlight || ''
const tableColumnWidth = (w) => (w && (String(w).endsWith('%') || String(w).endsWith('px'))) ? w : (w ? `${w}px` : '250px')
const isColumnSorted = (key) => sortBy.value.some(it => it.key === key)
const getSortDirection = (key) => sortBy.value.find(it => it.key === key)?.order ?? null
const getSortIcon = (key) => getSortDirection(key) === 'asc' ? 'mdi-arrow-up' : getSortDirection(key) === 'desc' ? 'mdi-arrow-down' : 'mdi-arrow-up-down'
const handleSortClick = (key) => {
  if (props.disableSort) return
  const header = props.headers.find(h => h.key === key)
  if (header && header.sortable === false) return
  const cur = sortBy.value.find(it => it.key === key)
  let order = 'asc'
  if (!cur) order = 'asc'
  else if (cur.order === 'asc') order = 'desc'
  else if (cur.order === 'desc') order = null
  if (order === null) { sortBy.value=[]; sortDesc.value=[] }
  else { sortBy.value=[{ key, order }]; sortDesc.value=[order === 'desc'] }
  emit('update:sort-by', sortBy.value)
  updatePage(1)
}

/* ===== DOM Accessors ===== */
const getRootEl = () => sDataTableRef.value?.$el || null
const getTableEl = () => getRootEl()?.querySelector('table') || null

/* ===== 초기 측정 / 적용 ===== */
const measureAndStoreAllColumnWidths = () => {
  const table = getTableEl(); if (!table) return 0
  const ths = table.querySelectorAll('thead tr th'); if (!ths?.length) return 0
  let total = 0
  ths.forEach((th, idx) => {
    const header = lazyHeaders.value[idx]; if (!header) return
    const w = th.offsetWidth
    if (w > 0) { columnWidths.value.set(header.key, w); total += w }
  })
  return total
}

const applyAllColumnWidths = () => {
  const table = getTableEl(); if (!table) return
  lazyHeaders.value.forEach((header, idx) => {
    const width = columnWidths.value.get(header.key)
    if (!width) return
    const th = table.querySelector(`thead tr th:nth-child(${idx + 1})`)
    if (th) { th.style.width = `${width}px`; th.style.minWidth = `${width}px`; th.style.maxWidth = `${width}px`; th.style.boxSizing = 'border-box' }
    const tBody = table.tBodies?.[0]
    if (tBody) {
      for (const row of tBody.rows) {
        const td = row.cells[idx]
        if (!td) continue
        td.style.width = `${width}px`
        td.style.minWidth = `${width}px`
        td.style.maxWidth = `${width}px`
        td.style.boxSizing = 'border-box'
      }
    }
  })
}

const setTableLayoutFixed = () => {
  const table = getTableEl(); if (!table) return
  table.style.tableLayout = 'fixed'
  table.style.width = `${initialTableWidth.value}px`
  table.style.minWidth = `${initialTableWidth.value}px`
  const wrapper = getRootEl()?.querySelector('.v-table__wrapper')
  if (wrapper) wrapper.style.overflowX = 'auto'
}

const initializeTableWidths = () => {
  if (tableInitialized.value) return
  nextTick(() => {
    const total = measureAndStoreAllColumnWidths()
    if (total === 0) return
    initialTableWidth.value = total
    setTableLayoutFixed()
    applyAllColumnWidths()
    tableInitialized.value = true
    afterTableReady()
  })
}

let initTableTimeout = null
const initializeTableWidthsDebounced = () => {
  if (initTableTimeout) clearTimeout(initTableTimeout)
  initTableTimeout = setTimeout(() => { initializeTableWidths(); initTableTimeout = null }, 100)
}

const getNumeric = v => (v ? parseFloat(v) || 0 : 0)

const computeAvailableWidth = (cell, wrapper) => {
  const cs = getComputedStyle(cell)
  let occupied = getNumeric(cs.paddingLeft) + getNumeric(cs.paddingRight)

  let sib = wrapper.nextElementSibling
  while (sib) {
    occupied += sib.offsetWidth
    const s = getComputedStyle(sib)
    occupied += Math.max(getNumeric(s.marginLeft), 0)
    sib = sib.nextElementSibling
  }

  const safety = 4
  return Math.max(0, cell.clientWidth - occupied - safety)
}

const adjustTruncationForColumn = (colIndex) => {
  const table = getTableEl(); if (!table) return
  const body = table.tBodies?.[0]; if (!body) return

  for (const row of body.rows) {
    const cell = row.cells[colIndex]; if (!cell) continue
    const wrapper = cell.querySelector('.s-table-column__text'); if (!wrapper) continue

    wrapper.classList.remove('s-ellipsis--off')
    wrapper.classList.add('s-ellipsis')
    wrapper.style.whiteSpace = 'nowrap'
    wrapper.style.overflow = 'hidden'
    wrapper.style.textOverflow = 'ellipsis'
    wrapper.style.width = ''

    const available = computeAvailableWidth(cell, wrapper)

    wrapper.style.maxWidth = `${available}px`

    const fits = wrapper.scrollWidth <= wrapper.clientWidth + 0.5

    if (fits) {
      wrapper.classList.add('s-ellipsis--off')
      wrapper.classList.remove('s-ellipsis')
      wrapper.style.maxWidth = ''
    } else {}
  }
}


let pendingCols = new Set()
let rafAdjustId = null
const scheduleAdjust = (colIndex) => {
  pendingCols.add(colIndex)
  if (rafAdjustId) return
  rafAdjustId = requestAnimationFrame(() => {
    for (const idx of pendingCols) adjustTruncationForColumn(idx)
    pendingCols.clear()
    rafAdjustId = null
  })
}

const onTooltipToggle = (colIndex) => {
  return () => requestAnimationFrame(() => scheduleAdjust(colIndex))
}

let headerResizeObserver = null
const observeHeaderForEllipsis = () => {
  const table = getTableEl(); if (!table || headerResizeObserver) return
  const head = table.tHead; if (!head) return

  headerResizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const th = entry.target
      const row = th.parentElement; if (!row) continue
      const cells = Array.from(row.children)
      const colIndex = cells.indexOf(th)
      if (colIndex >= 0) scheduleAdjust(colIndex)
    }
  })

  for (const row of head.rows) {
    for (const th of row.cells) headerResizeObserver.observe(th)
  }
}

const disconnectHeaderObserver = () => {
  if (headerResizeObserver) { headerResizeObserver.disconnect(); headerResizeObserver = null }
}

const updateColumnWidthDOM = (columnKey, width, isQuick = false) => {
  const colIndex = lazyHeaders.value.findIndex(h => h.key === columnKey)
  if (colIndex === -1) return
  const table = getTableEl(); if (!table) return

  const th = table.querySelector(`thead tr th:nth-child(${colIndex + 1})`)
  if (th) {
    th.style.width = `${width}px`
    th.style.minWidth = `${width}px`
    th.style.maxWidth = `${width}px`
    if (isQuick) th.style.boxSizing = 'border-box'
  }

  const body = table.tBodies?.[0]
  if (body) {
    for (const row of body.rows) {
      const td = row.cells[colIndex]; if (!td) continue
      td.style.width = `${width}px`
      td.style.minWidth = `${width}px`
      td.style.maxWidth = `${width}px`
      if (isQuick) td.style.boxSizing = 'border-box'
    }
  }

  scheduleAdjust(colIndex)

  if (!isQuick) {
    requestAnimationFrame(() => {
      table.style.tableLayout = 'auto'
      // eslint-disable-next-line no-unused-expressions
      table.offsetHeight
      table.style.tableLayout = 'fixed'
    })
  }
}

const startResize = (e, columnKey, columnIndex) => {
  try {
    e.preventDefault()
    if (isResizing.value) return
    if (!tableInitialized.value) initializeTableWidthsDebounced()
    if (columnIndex < 0 || columnIndex >= lazyHeaders.value.length) return

    isResizing.value = true
    startX.value = e.clientX
    currentColumn.value = { key: columnKey, index: columnIndex }
    startWidth.value = columnWidths.value.get(columnKey) || 100

    const handle = e.target
    if (handle) { handle.classList.add('resizing'); currentResizeHandle.value = handle }

    document.addEventListener('mousemove', onMouseMoveThrottled, { passive: true })
    document.addEventListener('mouseup', stopResize)

    document.body.style.userSelect = 'none'
    document.body.style.cursor = 'col-resize'
  } catch (err) { console.warn('startResize error:', err) }
}

let rafId = null
let lastMoveEvent = null
const onMouseMoveThrottled = (e) => {
  if (!isResizing.value || !currentColumn.value) return
  lastMoveEvent = e
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    rafId = null
    if (!lastMoveEvent) return
    doResize(lastMoveEvent)
    lastMoveEvent = null
  })
}

const doResize = (event) => {
  if (!isResizing.value || !currentColumn.value) return
  try {
    const diffX = event.clientX - startX.value
    const newWidth = Math.max(50, startWidth.value + diffX)
    const widthDiff = newWidth - startWidth.value

    columnWidths.value.set(currentColumn.value.key, newWidth)

    const table = getTableEl()
    if (table && initialTableWidth.value > 0) {
      const newTableWidth = initialTableWidth.value + widthDiff
      table.style.width = `${newTableWidth}px`
      table.style.minWidth = `${newTableWidth}px`
      table.style.tableLayout = 'fixed'
    }

    updateColumnWidthDOM(currentColumn.value.key, newWidth, true)

    const wrapper = getRootEl()?.querySelector('.v-table__wrapper')
    if (wrapper && table) {
      if (table.offsetWidth > wrapper.clientWidth) wrapper.style.overflowX = 'auto'
      // eslint-disable-next-line no-unused-expressions
      table.offsetWidth
    }
    document.body.style.cursor = 'col-resize'
  } catch (err) {
    console.warn('doResize error:', err)
    stopResize()
  }
}

const stopResize = () => {
  if (!currentColumn.value) return

  const key = currentColumn.value.key
  const finalWidth = columnWidths.value.get(key)
  if (finalWidth) updateColumnWidthDOM(key, finalWidth, false)

  if (currentResizeHandle.value) { currentResizeHandle.value.classList.remove('resizing'); currentResizeHandle.value = null }

  isResizing.value = false
  document.removeEventListener('mousemove', onMouseMoveThrottled)
  document.removeEventListener('mouseup', stopResize)
  document.body.style.userSelect = ''
  document.body.style.cursor = ''

  const total = Array.from(columnWidths.value.values()).reduce((acc, w) => acc + (w || 0), 0)
  if (total > 0) {
    initialTableWidth.value = total
    const table = getTableEl()
    if (table) {
      table.style.width = `${total}px`
      table.style.minWidth = `${total}px`
    }
  }

  persistColumnWidths()
  if (currentColumn.value) scheduleAdjust(currentColumn.value.index)
  currentColumn.value = null
}

const updateColumnWidth = (columnKey, width) => updateColumnWidthDOM(columnKey, width, false)

const persistColumnWidths = () => {
  if (!props.persistKey) return
  const payload = {}
  columnWidths.value.forEach((v, k) => { payload[k] = v })
  try { localStorage.setItem(`sdt-widths:${props.persistKey}`, JSON.stringify(payload)) } catch {}
}

const restoreColumnWidths = () => {
  if (!props.persistKey) return false
  let raw = null
  try { raw = localStorage.getItem(`sdt-widths:${props.persistKey}`) } catch {}
  if (!raw) return false
  try {
    const obj = JSON.parse(raw)
    const keys = lazyHeaders.value.map(h => h.key)
    let total = 0
    keys.forEach(k => {
      const w = Number(obj[k])
      if (w && w > 0) { columnWidths.value.set(k, w); total += w }
    })
    if (total > 0) {
      initialTableWidth.value = total
      nextTick(() => {
        setTableLayoutFixed()
        applyAllColumnWidths()
        tableInitialized.value = true
        afterTableReady()
      })
      return true
    }
  } catch {}
  return false
}

const afterTableReady = () => {
  requestAnimationFrame(() => {
    lazyHeaders.value.forEach((_, i) => scheduleAdjust(i))
    observeHeaderForEllipsis()
  })
}

onMounted(() => {
  nextTick(() => {
    if (props.items && props.items.length > 0) {
      const restored = restoreColumnWidths()
      if (!restored) initializeTableWidthsDebounced()
    }
  })
})
watch(() => props.items, (newItems) => {
  if (newItems && newItems.length > 0 && !tableInitialized.value) {
    nextTick(() => {
      const restored = restoreColumnWidths()
      if (!restored) initializeTableWidthsDebounced()
    })
  }
}, { deep: true })
onBeforeUnmount(() => {
  if (isResizing.value) {
    isResizing.value = false
    currentColumn.value = null
    if (currentResizeHandle.value) { currentResizeHandle.value.classList.remove('resizing'); currentResizeHandle.value = null }
    document.body.style.userSelect = ''
    document.body.style.cursor = ''
  }
  if (initTableTimeout) { clearTimeout(initTableTimeout); initTableTimeout = null }
  document.removeEventListener('mousemove', onMouseMoveThrottled)
  document.removeEventListener('mouseup', stopResize)
  disconnectHeaderObserver()
  if (rafAdjustId) cancelAnimationFrame(rafAdjustId)
})
</script>

<style lang="scss" scoped>
@import url('./SDataTable.scss');

.s-data-table.disable-sort thead th {
  pointer-events: none;
  user-select: none;
}
</style>
