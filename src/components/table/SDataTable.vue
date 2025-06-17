<template>
  <v-data-table
    ref="sDataTableRef"
    class="s-data-table"
    :class="{
      'fixed-table': fixedTable,
    }"
    v-bind="$attrs"
    :headers="lazyHeaders"
    :fixed-header="fixedHeader"
    :height="height"
    :items="paginatedItems"
    :page="lazyPage"
    :items-per-page="itemsPerPage"
    :search="search"
    :sort-by="sortBy"
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
    @update:sort-by="updateSortBy"
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
      <slot name="body" v-bind="bind" />
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
import { ref, watch, computed, onMounted } from 'vue'
import stringUtil from '@/utils/stringUtil.js'

const { isEmpty } = stringUtil

const emit = defineEmits([
  'update:page',
  'update:filter',
  'update:search',
  'update:sort-by',
  'update:sort-desc',
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
const lazyPage = ref(1)
const tempPage = ref(1)
const sortBy = ref([])
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
    const filteredList = props.items.filter(data =>
      keys.some(key => {
        if (data[key]) {
          if (typeof data[key] === typeof {} || typeof data[key] === typeof []) {
            return JSON.stringify(data[key])?.toLowerCase()?.indexOf(props.search?.toLowerCase()) > -1
          }
          return data[key]?.toString()?.toLowerCase()?.indexOf(props.search?.toLowerCase()) > -1
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
            return data.tagList.some(tagObj =>
              tagObj.tagKey?.toLowerCase() === option.key?.toLowerCase() &&
              tagObj.tagValue?.toLowerCase() === option.value?.toLowerCase()
            )
          }

          // 일반 검색
          if (option.type !== 'tag') {
            if (typeof data[option.key] === 'object') {
              const searchData = JSON.stringify(data[option.key])
              return searchData?.toLowerCase() === option.value?.toLowerCase()
            }
            if (typeof data[option.key] === 'number') {
              return data[option.key]?.toString() === option.value
            }
            return data[option.key]?.toLowerCase() === option.value?.toLowerCase()
          }

          return false
        })
      })
    })
    emit('update:filtered-cnt', filteredList.length)
    return filteredList
  }
  emit('update:filtered-cnt', props.items?.length || 0)
  return props.items || []
})

const pageCnt = computed(() => {
  if(props.itemsPerPage !== -1) {
  return props.options?.pageCnt || Math.ceil(filterDatas.value.length / props.itemsPerPage)
  }
  return props.options?.pageCnt || Math.ceil(filterDatas.value.length)
})

const paginatedItems = computed(() => {
  if (!props.options?.pageCnt && props.itemsPerPage !== -1) {
    const start = (props.page - 1) * props.itemsPerPage
    const end = start + props.itemsPerPage
    return filterDatas.value.slice(start, end)
  }
  return filterDatas.value
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
  sortBy.value = e
  lazyPage.value = 1
  emit('update:sort-by', e)
  emit('update:page', 1)
}
const onClickSortBy = el => {
  // DataTable 업데이트 이슈로 인해 아래의 코드 삽입
  if (el.order && el.order === 'asc') {
    el.order = 'desc'
    sortBy.value = [{ key: el.key, order: 'desc' }]
  } else if (el.order && el.order === 'desc') {
    el.order = ''
    sortBy.value = []
  } else {
    el.order = 'asc'
    sortBy.value = [{ key: el.key, order: 'asc' }]
  }

  props.lazyHeaders.map(item => {
    if (item.key !== el.key) {
      item.order = null
    }
    return item
  })
}

const currentPage = computed({
  get: () => props.page,
  set: (value) => emit('update:page', value)
})

// watch 제거 - readonly 오류 해결
// watch(
//   () => props.page,
//   (newPage) => {
//     if (sDataTableRef.value) {
//       sDataTableRef.value.page = newPage
//     }
//   },
//   { immediate: true }
// )

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
    emit('update:page', 1)
  }
)

watch(
  () => props.itemsPerPage,
  () => {
    emit('update:page', 1)
  }
)

onMounted(() => {
  lazyPage.value = props.page
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
</style>
