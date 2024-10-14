<template>
  <div class="view-wrapper">
    <view-header-component title="빌드">
      <default-button-component title="새 빌드" to="new" />
    </view-header-component>
    <div class="contentsWrapper">
      <v-data-table
        :custom-filter="filterOnlyCapsText"
        :headers="headers"
        :items="builds"
        :search="search"
        item-value="name"
      >
        <template #headers="{ columns }">
          <tr class="tableHeader">
            <th v-for="(header, idx) in columns" :key="idx" :style="{ textAlign: header.align }">
              {{ header.title }}
            </th>
          </tr>
        </template>
        <template #[`item.action`]="{ item }">
          <default-button-component title="빌드" />
          <default-button-component title="상세" class="ml-1" :to="`detail/${item.buildId}`" />
          <default-button-component title="삭제" class="ml-1" @click="onClickDeleteBuild(item.buildId)" />
        </template>
        <template #top>
          <v-text-field
            v-model="search"
            variant="outlined"
            class="pa-2"
            placeholder="빌드명으로 검색"
            prepend-inner-icon="mdi-magnify"
          />
        </template>
        <template #bottom>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCnt" rounded />
          </div>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script setup>
import ViewHeaderComponent from '@/components/_common/ViewHeaderComponent.vue'
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
import { computed, ref } from 'vue'
import { LOCALSTORAGE_KEY } from '@/assets/consts/consts'
import { useDevOpsServiceGroupStore } from '@/stores/devops/service-group'
import { storeToRefs } from 'pinia'
import { useBuildStore } from '@/stores/devops/build'
import { useConfirmStore } from '@/stores/components/confirm'

const devOpsServiceGroupStore = useDevOpsServiceGroupStore()
const buildStore = useBuildStore()

const intervalGetBuildListTime = 60 * 1000
const page = ref(1)
const itemsPerPage = ref(5)
const search = ref('')
const pageCnt = computed(() => Math.ceil(builds.value.length / itemsPerPage.value))
const confirmStore = useConfirmStore()


const devOpsServiceGroupId = storeToRefs(devOpsServiceGroupStore).serviceGroupId
const builds = storeToRefs(buildStore).builds

//빌드 목록을 가져오고 빌드 목록이 있다면 주기적으로 요청 한다.
const getBuildList = async () => {
  const projectObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY.selectedProject))
  const tempBuilds = await buildStore.getBuildsWithHistory({ serviceGroupId: devOpsServiceGroupId.value, projectId: projectObj.projectId })
  if(tempBuilds?.length) {
    intervalGetBuildList()
  }
}
const filterOnlyCapsText = (value, query) => {
  return value != null && query != null && typeof value === 'string' && value.toString().toLocaleUpperCase().indexOf(query) !== -1
}

//const confirmStore = useConfirmStore()
const onClickDeleteBuild = async (buildId) => {

  //showConfirm
  const confirmVal = await confirmStore.showConfirm('빌드를 삭제하시겠습니까?')
  // confirm true 면
  if(confirmVal) {
    console.log('빌드 삭제 ',buildId)
  }

}
const intervalGetBuildList = () => {
  setTimeout(() => {
    getBuildList()
  }, intervalGetBuildListTime)
}

const init = () => {
  getBuildList()
  //intervalGetBuildList()
}
init()
const headers = ref([
  {
    title: '빌드명',
    align: 'start',
    key: 'buildName'
  },
  {
    title: '브랜치',
    align: 'center',
    key: 'branch'
  },
  {
    title: '빌드 수',
    align: 'center',
    key: 'buildCount'
  },
  {
    title: '마지막 빌드 시간',
    align: 'center',
    key: 'lastBuildDate'
  },
  {
    title: '마지막 빌드 상태',
    align: 'center',
    key: 'lastBuildResult'
  },
  {
    title: '액션',
    key: 'action',
    align: 'center'
  }
])
</script>

<style scoped lang="scss">
// @import '@/assets/style/variables';
.contentsWrapper {
}
.tableHeader {
  background: $data-table-header-color;
}
</style>
