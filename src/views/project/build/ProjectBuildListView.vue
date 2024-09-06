<template>
  <div class='viewWrapper'>
    <ViewHeaderComponent title='빌드'>
      <DefaultButtonComponent title='새 빌드' />
    </ViewHeaderComponent>
    <div class='contentsWrapper'>
      <v-data-table
        :custom-filter="filterOnlyCapsText"
        :headers="headers"
        :items="items"
        :search="search"
        item-value="name"
      >
        <template #headers='{ columns }'>
          <tr class='tableHeader'>
            <th v-for='(header, idx) in columns' :style='{"textAlign": header.align}' :key='idx'> {{header.title}}</th>
          </tr>
        </template>
        <template #[`item.action`]>
          <DefaultButtonComponent title='빌드' />
          <DefaultButtonComponent title='상세' class='ml-1' />
          <DefaultButtonComponent title='삭제' class='ml-1' />
        </template>
        <template #top>
          <v-text-field
            v-model="search"
            class="pa-2"
            placeholder='배포명으로 검색'
            prepend-inner-icon='mdi-magnify'
          ></v-text-field>
        </template>
        <template #bottom>
          <div class="text-center pt-2">
            <v-pagination
              v-model="page"
              :length="pageCount"
            ></v-pagination>
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import ViewHeaderComponent from '@/components/common/ListViewHeaderComponent.vue'
import DefaultButtonComponent from '@/components/common/button/DefaultButtonComponent.vue'
export default {
  name: 'ProjectBuildView',
  components: { DefaultButtonComponent, ViewHeaderComponent },
  data: () => {
    return {
      page: 1,
      itemsPerPage: 5,
      search: '',
      headers: [
        {
          title: '빌드명',
          align: 'start',
          key: 'name',
        },
        {
          title: '브랜치',
          align: 'center',
          key: 'branch',
        },
        {
          title: '빌드 수',
          align: 'center',
          key: 'buildCnt',
        },
        {
          title: '마지막 빌드 시간',
          align: 'center',
          key: 'lastBuildTime',
        },
        {
          title: '마지막 빌드 상태',
          align: 'center',
          key: 'lastBuildState',
        },
        {
          title: '액션',
          key: 'action',
          align: 'center',
        },
      ],
      items: [
        {
          name: 'spring-boot-demo-build-stg',
          branch: 'stage',
          buildCnt: 8,
          lastBuildTime: '2024-09-03 18:26:31',
          lastBuildState: 'SUCCESS'
        }
      ],
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
  },
  methods: {
    filterOnlyCapsText (value, query) {
      return value != null &&
        query != null &&
        typeof value === 'string' &&
        value.toString().toLocaleUpperCase().indexOf(query) !== -1
    },
  },
}
</script>

<style scoped lang='scss'>
@import "src/assets/style/variables";
.contentsWrapper {

}
.tableHeader{
  background: $data-table-header-color;
}

</style>