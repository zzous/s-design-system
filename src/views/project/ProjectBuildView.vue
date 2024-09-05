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
          <tr>
            <th v-for='(header, idx) in columns' :style='{"textAlign": header.align}' :key='idx'> {{header.title}}</th>
          </tr>
        </template>
        <template #top>
          <v-text-field
            v-model="search"
            class="pa-2"
            placeholder='배포명으로 검색'
            prepend-inner-icon='mdi-magnify'
          ></v-text-field>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import ViewHeaderComponent from '@/components/common/ViewHeaderComponent.vue'
import DefaultButtonComponent from '@/components/common/button/DefaultButtonComponent.vue'
export default {
  name: 'ProjectBuildView',
  components: { DefaultButtonComponent, ViewHeaderComponent },
  data: () => {
    return {
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
          key: 'lastBuildStat',
        },
        {
          title: 'TDP (W)',
          align: 'center',
          key: 'tdp',
        },
      ],
      items: [
        {
          name: 'Intel Core i9-11900K',
          cores: 8,
          threads: 16,
          baseClock: '3.5 GHz',
          boostClock: '5.3 GHz',
          tdp: '125W',
        },
        {
          name: 'AMD Ryzen 9 5950X',
          cores: 16,
          threads: 32,
          baseClock: '3.4 GHz',
          boostClock: '4.9 GHz',
          tdp: '105W',
        },
        {
          name: 'Intel Core i7-10700K',
          cores: 8,
          threads: 16,
          baseClock: '3.8 GHz',
          boostClock: '5.1 GHz',
          tdp: '125W',
        },
        {
          name: 'AMD Ryzen 5 5600X',
          cores: 6,
          threads: 12,
          baseClock: '3.7 GHz',
          boostClock: '4.6 GHz',
          tdp: '65W',
        },
        {
          name: 'Intel Core i5-10600K',
          cores: 6,
          threads: 12,
          baseClock: '4.1 GHz',
          boostClock: '4.8 GHz',
          tdp: '125W',
        },
        {
          name: 'AMD Ryzen 7 5800X',
          cores: 8,
          threads: 16,
          baseClock: '3.8 GHz',
          boostClock: '4.7 GHz',
          tdp: '105W',
        },
        {
          name: 'Intel Core i3-10100',
          cores: 4,
          threads: 8,
          baseClock: '3.6 GHz',
          boostClock: '4.3 GHz',
          tdp: '65W',
        },
        {
          name: 'AMD Ryzen 3 3300X',
          cores: 4,
          threads: 8,
          baseClock: '3.8 GHz',
          boostClock: '4.3 GHz',
          tdp: '65W',
        },
        {
          name: 'Intel Pentium Gold G6400',
          cores: 2,
          threads: 4,
          baseClock: '4.0 GHz',
          tdp: '58W',
        },
        {
          name: 'AMD Athlon 3000G',
          cores: 2,
          threads: 4,
          baseClock: '3.5 GHz',
          tdp: '35W',
        },
      ],
    }
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

<style scoped>
.contentsWrapper {

}
.v-table__wrapper thead{
  background: #F6F9FA;
}

</style>