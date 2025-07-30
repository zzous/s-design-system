import { onMounted, ref, watch } from 'vue'
import { LOCALSTORAGE_KEY } from '../constants/key.js'
import { PER_PAGES } from '../constants/page.js'


const useTablePage = onFetch => {
  const pageNum = ref(1)
  const searchs = ref([])

  const perPages = ref(localStorage.getItem(LOCALSTORAGE_KEY.PER_PAGES) || PER_PAGES[0].value)

  const checkedList = ref([])

  const setPage = page => {
    pageNum.value = page
  }

  const setPerPages = newPerPage => {
    perPages.value = newPerPage
  }

  const setCheckedList = list => {
    console.log(list)
    checkedList.value = list
  }

  const onRefresh = () => {
    onFetch?.()
    setPage(1)
    setCheckedList([])
  }

  const perPageSync = perPageVal => {
    localStorage.setItem(LOCALSTORAGE_KEY.PER_PAGES, perPageVal)
  }

  watch(perPages, perPageSync)

  onMounted(() => {
    if (onFetch && typeof onFetch === 'function') {
      onFetch().then()
    }
  })

  return { pageNum, searchs, perPages, checkedList, setPage, setPerPages, setCheckedList, onRefresh }
}

export default useTablePage
