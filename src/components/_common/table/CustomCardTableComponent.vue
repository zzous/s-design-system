<template>
  <div :class="`s-card-table ${props.class}`">
    <div class="s-card-table__wrapper">
      <div v-if="!hiddenHeader" class="s-card-table__header">
        <ul class="s-card-table__header-item">
          <li
            v-for="(header, index) in filterHeaders"
            :key="'header-key--' + index"
            class="s-card-table__header-item-title"
            :style="{
              width: widthStyleTranslate(header.width),
              justifyContent: header.align,
            }"
          >
            {{ header.title }}
          </li>
        </ul>
      </div>

      <template v-if="splitDatas.length">
        <ul
          v-for="(tableItem, rIndex) in splitDatas"
          :key="'content-row--' + rIndex"
          class="s-card-table__body"
        >
          <li
            :class="`s-card-table__body-item ${showExpand ? 'table-expand_header' : 'table-expand_body'
            }`"
          >
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
                  :icon="tableItem.showExpandRow
                    ? 'mdi-chevron-up'
                    : 'mdi-chevron-down'
                  "
                  @click.stop.prevent="onClickExpand(tableItem)"
                />
              </slot>
            </div>
            <div
              v-for="(header, cIndex) in filterHeaders"
              :key="'content-row--' + rIndex + '__col--' + cIndex"
              class="s-card-table__body-wrapper"
              :class="{ 'strong-text': options?.strongs?.includes(header.key) }"
              :style="{
                width: widthStyleTranslate(header.width),
                justifyContent:
                  header.align === 'd-none' ? 'center' : header.align || 'center',
              }"
            >
              <slot :name="`${header.key}`" :item="tableItem">
                {{
                  isEmpty(tableItem[header.key])
                    ? '-'
                    : tableItem[header.key]
                }}
              </slot>
            </div>
            <div v-if="tableItem.showExpandRow">
              <slot name="expanded-row" :item="tableItem" :columns="filterHeaders" />
            </div>
          </li>
        </ul>
      </template>
      <template v-else>
        <empty :description="noDataText">
          <slot name="empty-content" />
        </empty>
      </template>
    </div>
    <v-pagination
      v-if="!scrolled"
      v-model="lazyPage"
      class="s-card-table__pagination"
      size="small"
      :total-visible="10"
      :length="pageCnt"
      rounded="circle"
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
import { isEmpty } from '@/assets/consts/utils/string'
import Empty from '@/components/_common/containment/CustomEmptyComponent.vue'

const props = defineProps({
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
  datas: {
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
  itemPerPage: {
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
    description:
      '항목 필터링에 사용되는 텍스트 또는 key:value Object를 포함한 텍스트 배열 입력',
  },
  showSelect: {
    type: Boolean,
    default: false,
    description:
      '머리글과 행 모두에서 선택 확인란을 표시합니다(기본 행을 사용하는 경우).',
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
    type: Boolean,
    default: false,
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
    default: () => { },
    description: '전체 개수 초기화(필터링 적용)',
  },
})

const emits = defineEmits(['update:page'])

/* pagination 처리 */
const lazyPage = ref(1)
// const isPageRender = ref(props.isPageRender) // server render

const filterHeaders = computed(() => {
  return props.headers.filter(item => item.key !== props.itemTitle)
})

const splitDatas = ref([])

const filterDatas = computed(() => {
  // smart search일 경우
  if (typeof props.search === typeof []) {
    if (props.search.length === 0) return props.datas

    const filteredList = props.datas.filter(data => {
      // 검색 결과는 OR 조건이기 때문에 some 함수 사용
      // TODO: 동일 key 값에 대해서는 OR 조건일 것
      // tag는 동일 값 검색
      // tag 외의 검색은 like 검색
      const isCorrect = props.search.some(option => {
        if (option.key === 'undefinedTag') {
          if (!data.tagList?.length) return true
          return false
        }
        if (!`${option.value}`) {
          return true
        }

        // s: 태그 검색 영역
        if (option.type === 'tag' && data.tagList?.length) {
          const result = data.tagList.some(tagObj => {
            // const tagObj = JSON.parse(tagStr)
            return (
              `${tagObj.tagKey}`.toLowerCase() ===
              `${option.key}`.toLowerCase() &&
              `${tagObj.tagValue}`.toLowerCase() ===
              `${option.value}`.toLowerCase()
            )
          })
          return result
        }
        // e: 태그 검색 영역

        // s: 태그 외 검색
        if (option.type !== 'tag') {
          if (
            typeof data[option.key] === typeof {} ||
            typeof data[option.key] === typeof []
          ) {
            const searchData = JSON.stringify(data[option.key])
            // 검색 결과는 like 검색이기 때문에 indexOf 사용
            return (
              `${searchData}`
                .toLowerCase()
                .indexOf(`${option.value}`.toLowerCase()) > -1
            )
          }
          return (
            `${data[option.key]}`
              .toLowerCase()
              .indexOf(`${option.value}`.toLowerCase()) > -1
          )
        }
        return false
        // e: 태그 외 검색
      })
      return isCorrect // 전체 조건에 맞는지 여부
    })
    return filteredList
  }
  // TODO Pagination 컴포넌트 사용 시 Search props와 페이지 수가 맞지 않는 오류가 있음 (해결방법: vuetify 업그레이드)
  // vuetify 업그레이드 전 임시코드
  if (props.search) {
    // 일반 검색 (no smart search)
    const keys = props.headers.map(h => h.key)
    const filteredList = props.datas.filter(data =>
      keys.some(key => {
        if (data[key]) {
          if (
            typeof data[key] === typeof {} ||
            typeof data[key] === typeof []
          ) {
            return JSON.stringify(data[key]).indexOf(props.search) > -1
          }
          return data[key].toString().indexOf(props.search) > -1
        }
        return false
      }),
    )
    return filteredList
  }
  return props.datas
})

const setDatas = () => {
  if (!props.isPageRender) {
    const startIndex = (lazyPage.value - 1) * props.itemPerPage
    const endIndex = lazyPage.value * props.itemPerPage
    // console.log(startIndex, endIndex)
    splitDatas.value = filterDatas.value.slice(startIndex, endIndex)
  } else {
    splitDatas.value = filterDatas.value
  }
}

const updatePage = e => {
  lazyPage.value = e
  emits('update:page', e)
  setDatas()
}

const onChnagePage = e => {
  updatePage(e)
}

const pageCnt = computed(() => {
  if (props.isPageRender) {
    return props.options.pageCnt
  }
  return Math.ceil(filterDatas.value.length / props.itemPerPage)
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
  console.log('onClickExpand')
  tableItem.showExpandRow = !tableItem.showExpandRow
}

watch(
  () => props.search,
  () => {
    setDatas()
  },
  { deep: true },
)

watch(
  () => props.datas,
  () => {
    setDatas()
  },
)

watch(
  () => filterDatas.value,
  nv => {
    props.setTotal(nv.length)
  },
)

onMounted(() => {
  // isPageRender.value = !!props.options.pageCnt
  setDatas()
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/_mixin.scss';
.s-card-table {
  padding: 10px;

  .s-card-table__header-item {
    display: flex;
    width: 100%;
    padding: 5px;

    .s-card-table__header-item-title{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 56px;
      padding: 0 10px;
      @include set-text(600, 12px, $s-default--gray-9);
    }
  }

  .s-card-table__body {
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.16));
    display: flex;
    width: 100%;
    height: 60px;

    .s-card-table__body-item {
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border-radius: 10px;
      border: 1px solid $s-default--gray-5;
    }
  }

  .card-label__checkbox {
    height: 30px;
  }

  .s-card-table__body-item {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    font-size: 12px;

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
}
</style>
<style lang="scss">
.s-card-table {
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
