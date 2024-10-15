<template>
  <v-data-table
    ref="sDataTableRef"
    class="s-data-table"
    :custom-filter="customFilter"
    :custom-key-filter="customKeyFilter"
    :expanded="expanded"
    :expand-on-click="expandOnClick"
    :filter-keys="filterKeys"
    :filter-mode="filterMode"
    :fixed-footer="fixedFooter"
    :fixed-header="fixedHeader"
    :group-by="groupBy"
    :headers="headers"
    :height="height"
    :hide-no-data="hideNoData"
    :item-props="itemProps"
    :items="filterDatas"
    :item-value="itemValue"
    :items-per-page="itemsPerPage"
    :model-value="selected"
    :multi-sort="multiSort"
    :must-sort="mustSort"
    :no-data-text="noDataText"
    :no-filter="noFilter"
    :page="lazyPage"
    :return-object="returnObject"
    :search="search"
    :show-expand="showExpand"
    :show-select="showSelect"
    :select-strategy="selectStrategy"
    :sort-by="sortBy"
    :width="width"
    :class="{
      'hide-footer': hideFooter,
      'fixed-table': fixedTable,
    }"
    hide-default-footer
    :density="density"
    @update:sort-by="updateSortBy"
    @update:model-value="updateModelValue"
  >
    <!-- DataTable 버전 이슈로 인하여 selectStrategy 값이 정상 작동하지 않아 헤더를 아래와 같이 임시로 처리합니다. -->
    <template v-if="single" #headers>
      <tr>
        <th class="v-data-table__td v-data-table__th v-data-table-column--align-center">
          <div class="v-data-table-header__content">
            -
          </div>
        </th>
        <th
          v-for="(el, index) in lazyHeaders"
          :key="index"
          class="v-data-table__td v-data-table__th v-data-table__th--sortable v-data-table__th v-data-table__th--sortable"
          :class="[
            `v-data-table-column--align-${el.align || 'center'}`,
            `${!el.order || 'v-data-table__th--sorted'}`,
          ]"
          @click="onClickSortBy(el)"
        >
          <div class="v-data-table-header__content">
            {{ el.title }}
            <i
              class="mdi v-icon notranslate v-theme--light v-icon--size-default v-data-table-header__sort-icon"
              :class="{
                'mdi-arrow-up': el.order === 'asc' || !el.order,
                'mdi-arrow-down': el.order === 'desc',
              }"
              aria-hidden="true"
            />
          </div>
        </th>
      </tr>
    </template>

    <template v-for="(el, index) in headers" #[`item.${el.key}`]="{ item }" :key="index">
      <v-tooltip v-if="tooltip" location="bottom">
        <template #activator="{ props: dataProps }">
          <span v-bind="dataProps" class="d-inline-block text-truncate sp-table-column__text">
            {{ item[el.key] || '-' }}
          </span>
        </template>
        <span>
          {{ item[el.key] || '-' }}
        </span>
      </v-tooltip>
      <span v-else>
        <slot :name="`item.${el.key}`" :item="item">
          {{ item[el.key] || '-' }}
        </slot>
      </span>
    </template>
    <template v-if="hasCheckedColumnSlot" #[`column.data-table-select`]="{ column, selectAll }">
      <slot name="column.data-table-select" :column="column" :select-all="selectAll" />
    </template>
    <template v-if="hasCheckedItemSlot" #[`item.data-table-select`]="{ item, isSelected, toggleSelect }">
      <slot
        name="item.data-table-select"
        :item="item"
        :is-selected="isSelected"
        :toggle-select="toggleSelect"
      />
    </template>
    <template #no-data>
      <div class="text-center no-data">
        {{ noDataText }}
      </div>
    </template>
    <template v-if="footers && Object.keys(footers).length" #[`tfoot`]>
      <tr>
        <th
          v-for="(head, hIndex) in headers"
          :key="'foot__' + hIndex"
          :width="head.width"
          :style="{ textAlign: head.align || 'start' }"
        >
          <template v-if="customSlotFooter[head.key]">
            <slot :name="`${head.key}_footer`" :props="footers" />
          </template>
          <template v-else>
            {{ footers[head.key] }}
          </template>
        </th>
      </tr>
    </template>
    <template #bottom>
      <slot name="append-content" />
      <div v-if="!hideFooter" class="text-center s-data-table-pagination">
        <v-pagination
          ref="paginateRef"
          v-model="lazyPage"
          size="small"
          rounded
          active-color="#1297F2"
          variant="flat"
          :total-visible="10"
          :length="options?.pageCnt || pageCnt"
        />
      </div>
    </template>
    <template #expanded-row="bind">
      <slot name="expanded-row" v-bind="bind" />
    </template>
  </v-data-table>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue'

const emit = defineEmits([
  'update:page',
  'update:filter',
  'update:search',
  'update:sort-by',
  'update:sort-desc',
  'update:group-by',
  'update:expanded',
  'update:model-value',
  'get-checkedbox-item',
])

const props = defineProps({
  // search: String,
  options: {
    type: Object,
    default: () => { },
  },
  getChipColors: {
    type: Function,
    default: undefined,
  },
  // onClickChips: Function,
  customSlotInfo: {
    type: Array,
    default: () => [],
  },
  // customSlotInfo: Array,
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
    description:
      '자식 구성 요소를 자동으로 생성하는 데 사용되는 문자열 또는 객체의 배열',
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
    description:
      '구성 요소의 v-model 값입니다. 구성 요소가 다중 소품을 지원하는 경우 기본값은 빈 배열입니다.',
  },
  multiSort: {
    type: Boolean,
    default: false,
    description: 'true일 경우 여러 속성에 대해 정렬할 수 있습니다.',
  },
  mustSort: {
    type: Boolean,
    default: false,
    description:
      'true일 경우 정렬을 비활성화할 수 없으면 항상 오름차순과 내림차순 간에 전환됩니다.',
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
    description:
      '머리글과 행 모두에서 선택 확인란을 표시합니다(기본 행을 사용하는 경우).',
  },
  // sortBy: {
  //   type: Array,
  //   default: () => [],
  //   description:
  //     '정렬 순서에 사용해야 하는 항목 속성을 변경합니다. .sync수정자 와 함께 사용할 수 있습니다.',
  // },
  selectStrategy: {
    type: String,
    default: 'page'
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
    default: () => { },
    description: 'tfoot 위치에 그릴 데이터',
  },
  customSlotFooter: {
    type: Object,
    default: () => { },
    description: 'custom footer',
  },
  smartSearch: {
    type: Array,
    default: () => {
      return []
    },
    description: 'Smart Search 검색 기능'
  },
  fixedTable: {
    type: Boolean,
    default: false
  },
  setTotal: {
    type: Function,
    default: () => { },
    description: '전체 개수 초기화(필터링 적용)'
  },
  density: {
    type: String,
    default: 'default',
    description: 'default | comfortable | compact 사이즈'
  },
  tooltip: {
    type: Boolean,
    default: false,
    description: '툴팁 사용 여부(툴팁을 사용하려면 테이블의 class가 fixed-table을 포함하고 있어야 합니다.)'
  },
})

const selected = ref([])
const lazyPage = ref(1)
const tempPage = ref(1)
const sortBy = ref([])
const lazyHeaders = ref([])

const updateModelValue = (item) => {
  // console.log('updateModelValue', item)
  emit('get-checkedbox-item', item)
  selected.value = item
  emit('update:model-value', selected.value)
}

const pageCnt = computed(() => {
  if (filterDatas.value.length > 0) {
    if (!props.options?.pageCnt) {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      lazyPage.value = tempPage.value
    }
    return Math.ceil(filterDatas.value.length / props.itemsPerPage)
  }
  if (!props.options?.pageCnt) {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    tempPage.value = props.lazyPage
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    lazyPage.value = 1
  }
  return 1
})
const filterDatas = computed(() => {
  // TODO Pagination 컴포넌트 사용 시 Search props와 페이지 수가 맞지 않는 오류가 있음 (해결방법: vuetify 업그레이드)
  // vuetify 업그레이드 전 임시코드
  if (props.search) {
    // 일반 검색 (no smart search)
    const keys = props.headers.map(h => h.key)
    const filteredList = props.items.filter(data => keys.some(key => {
      if (data[key]) {
        if (typeof data[key] === typeof {} || typeof data[key] === typeof []) {
          return JSON.stringify(data[key]).indexOf(props.search) > -1
        }
        return data[key].toString().indexOf(props.search) > -1
      } return false
    }))
    return filteredList
  }

  if (props.smartSearch.length){
    const filteredList = props.items.filter(data => {
      // 검색 결과는 OR 조건이기 때문에 some 함수 사용
      // TODO: 동일 key 값에 대해서는 OR 조건일 것
      // tag는 동일 값 검색
      // tag 외의 검색은 like 검색
      const isCorrect = props.smartSearch.some(
        option => {
          if (option.key === 'undefinedTag') {
            if (!data.tagList?.length) return true
            return false
          }
          if (!option.value) {
            return true
          }

          // s: 태그 검색 영역
          if (option.type === 'tag' && data.tagList?.length) {
            const result = data.tagList.some(tagObj => {
              // const tagObj = JSON.parse(tagStr)
              return tagObj.tagKey.toLowerCase() === option.key.toLowerCase()
                && tagObj.tagValue.toLowerCase() === option.value.toLowerCase()
            })
            return result
          }
          // e: 태그 검색 영역

          // s: 태그 외 검색
          if (option.type !== 'tag') {
            if (typeof data[option.key] === 'object') {
              const searchData = JSON.stringify(data[option.key])
              // 검색 결과는 like 검색이기 때문에 indexOf 사용
              return searchData.toLowerCase().indexOf(option.value.toLowerCase()) > -1
            }
            if (typeof data[option.key] === 'number') {
              return data[option.key].toString().indexOf(option.value) > -1
            }
            return data[option.key].toLowerCase().indexOf(option.value.toLowerCase()) > -1
          }
          return false
        // e: 태그 외 검색
        }
      )
      return isCorrect // 전체 조건에 맞는지 여부
    })
    return filteredList}
  return props.items
})

const sDataTableRef = ref()
const hasCheckedColumnSlot = computed(() => {
  return !!sDataTableRef.value?.$slots?.['column.data-table-select']
})
const hasCheckedItemSlot = computed(() => {
  return !!sDataTableRef.value?.$slots?.['item.data-table-select']
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
const updatePage = (e) => {
  emit('update:page', e)
}
const updateSortBy = (e) => {
  sortBy.value = e
  lazyPage.value = 1
  emit('update:page', 1)
}
const onClickSortBy = (el) => {
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

watch(
  () => props.page,
  (nv) => {
    lazyPage.value = nv
  }
)

watch(
  () => lazyPage,
  (nv) => {
    updatePage(nv)
  }
)

watch(
  () => props.headers,
  (nv) => {
    lazyHeaders.value = nv
  }
)
onMounted(() => {
  selected.value = props.modelValue
  lazyPage.value = props.page
  lazyHeaders.value = [...props.headers]
})

</script>

<style lang="scss" scoped>
.s-data-table {
  ::v-deep(.v-data-table__th) {
    --v-table-header-height: 36px;
    font-weight: 600;
    font-size: toRem(14);
  }

  ::v-deep(.v-data-table__td) {
    --v-border-color: 0,0,0;
    --v-table-row-height: 42px;
    font-size: toRem(14);
    font-weight: 300;
  }

  .status-chip {
    color: white;
    font-weight: 300;
  }

  .no-data {
    color: #ccc;
  }

  .s-data-table-column__text {
    width: inherit;
  }

  &.hide-footer {
    >::v-deep(.v-data-table-footer) {
      display: none !important;
    }
  }
  ::v-deep(.v-btn:hover)>.v-btn__overlay {
    opacity: 0.1;
    background: #1297f2;
  }

  ::v-deep(.v-btn--disabled).v-btn--variant-flat .v-btn__overlay {
    opacity: 1;
    background: transparent;
  }

  .s-data-table-pagination {
    position: relative;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #333;
    margin-top: 60px;

    ::v-deep(.v-pagination__item--is-active) {
      color: white;

      .v-btn--disabled {
        color: white;

        &.v-btn--variant-flat .v-btn__content {
          font-size: 15px;
          font-weight: 700;
          color: #333;
        }
      }
    }
  }

  /* 테이블 말 줄임표 */
  &::v-deep(.v-table__wrapper).fixed-table table {
    table-layout: fixed;

    .v-data-table__td {
      span {
        max-width: 100%;
        display: inline-block;
        word-break: break-all;
      }

      &:has(span + i) {
        span {
          max-width: calc(100% - 30px);
        }
      }
    }
  }

  .right-move {
    position: absolute;
    right: 0;
  }
}
</style>
