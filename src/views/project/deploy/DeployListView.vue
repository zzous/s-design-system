<template>
  <div class="view-wrapper">
    <s-sub-header :title="$t('배포 목록')" :list-cnt="items.length">
      <s-btn title="새 배포" to="deploy/new" />
    </s-sub-header>
    <div class="layout__list-contents">
      <div class="search">
        <v-text-field
          v-model="search"
          class="search__text-field"
          variant="outlined"
          density="comfortable"
          hide-details
          :placeholder="$t('배포명으로 검색')"
          prepend-inner-icon="mdi-magnify"
        />
      </div>
      <div>
        <s-data-table
          v-model="selected"
          :custom-filter="filterOnlyCapsText"
          :headers="headers"
          :items="items"
          :page="page"
          :search="search"
          select-strategy="single"
          item-value="name"
          show-select
          :options="{ pageCnt, showSelect: true }"
        >
          <template #headers="{ columns }">
            <tr class="tableHeader">
              <th v-for="(header, idx) in columns" :key="idx" :style="{ textAlign: header.align }">
                {{ header.title }}
              </th>
            </tr>
          </template>
        </s-data-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '@/_setting/i18n'

const page = ref(1)
const search = ref('')

const { tt } = useI18n()

const headers = ref([
  {
    title: tt('배포명'),
    align: 'start',
    key: 'deployName'
  },
  {
    title: tt('빌드명'),
    align: 'center',
    key: 'buildName'
  },
  {
    title: tt('스테이지'),
    align: 'center',
    key: 'stage'
  },
  {
    title: tt('프로바이더'),
    align: 'center',
    key: 'provider'
  },
  {
    title: tt('마지막 배포 일시'),
    align: 'center',
    key: 'lastDeployDate'
  },
  {
    title: tt('마지막 배포 상태'),
    align: 'center',
    key: 'lastDeployState'
  },
])
const items = ref([
  {
    deployName: 'spring-boot-demo-build-stg',
    buildName: 'test build',
    stage: 'PROD',
    provider: 'SHELL',
    lastDeployDate: '2024-09-03 18:26:31',
    lastDeployState: 'SUCCESS'
  }
])

const pageCnt = computed(() => Math.ceil(items.value.length / items.value))

</script>

<style scoped lang="scss">
@import '@/assets/style/variables';
</style>
