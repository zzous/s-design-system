<template>
  <div class="view-wrapper">
    <s-sub-header :title="$t('배포 목록')" :list-cnt="items.length">
      <s-btn variant="outlined" color="red" :title="$t('삭제')" :disabled="selected.length !== 1" />
      <s-btn variant="outlined" :title="$t('배포')" :disabled="selected.length !== 1" />
      <s-btn variant="outlined" :title="$t('생성')" />
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
          :headers="headers"
          :items="items"
          :page="page"
          :search="search"
          select-strategy="single"
          item-value="name"
          show-select
          :options="{ pageCnt, showSelect: true }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useI18n } from '@/_setting/i18n'
import { useDeployStore } from '@/stores/devops/deploy'
import { useProjectStore } from '@/stores/devops/project'

const intervalGetBuildListTime = 60 * 1000

const itemsPerPage = 5

const page = ref(1)
const search = ref('')
const selected = ref([])

const { tt } = useI18n()

const headers = ref([
  {
    title: tt('배포명'),
    align: 'center',
    key: 'deployName',
  },
  {
    title: tt('빌드명'),
    align: 'center',
    key: 'buildName',
  },
  {
    title: tt('스테이지'),
    align: 'center',
    key: 'stageName',
  },
  {
    title: tt('프로바이더'),
    align: 'center',
    key: 'deployCd',
  },
  {
    title: tt('마지막 배포 일시'),
    align: 'center',
    key: 'lastDeployDate',
  },
  {
    title: tt('마지막 배포 상태'),
    align: 'center',
    key: 'lastDeployStatus',
  },
])

const deployStore = useDeployStore()
const { deploies: items } = storeToRefs(deployStore)
const { selectedProject } = storeToRefs(useProjectStore())

const pageCnt = computed(() => Math.ceil(items.value.length / itemsPerPage))

const getDeployList = async () => {
  await deployStore.getDeployList({
    projectId: selectedProject.value.projectId,
  })
}
const intervalGetBuildList = () => {
  setTimeout(async () => {
    await getDeployList()
  }, intervalGetBuildListTime)
}

onMounted(() => {
  getDeployList()
  intervalGetBuildList()
})
</script>

<style scoped lang="scss"></style>
