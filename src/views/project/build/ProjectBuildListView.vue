<template>
  <project-build-detail-popup v-if="showDetailPopup" v-model:model-value="showDetailPopup" :build-id="selectedBuildId" />
  <div class="view-wrapper">
    <view-header-component :title="$t('빌드')">
      <default-button-component :title="$t('새 빌드')" to="new" />
    </view-header-component>
    <div class="contentsWrapper">
      <div class="layout__list-contents">
        <div class="search">
          <v-text-field
            v-model="search"
            class="search__text-field"
            variant="outlined"
            density="compact"
            hide-details
            :placeholder="$t('프로젝트 명으로 검색')"
            prepend-inner-icon="mdi-magnify"
          />
        </div>
        <s-data-table
          v-model="selected"
          class="rounded-0"
          :headers="headers"
          :items="builds"
          :page="page"
          :search="search"
          select-strategy="single"
          item-value="projectId"
          show-select
          :options="{ pageCnt: pageCnt, showSelect: true }"
        />
      </div>
      <!-- <v-data-table
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
          <default-button-component :title="$t('빌드')" @click="onClickExcuteBuild(item.buildId)" />
          <default-button-component :title="$t('상세')" class="ml-1" @click="onClickDetailBuild(item.buildId)" />
          <default-button-component :title="$t('삭제')" class="ml-1" @click="onClickDeleteBuild(item.buildId)" />
        </template>
        <template #top>
          <v-text-field
            v-model="search"
            variant="outlined"
            class="pa-2"
            :placeholder="$t('빌드명으로 검색')"
            prepend-inner-icon="mdi-magnify"
          />
        </template>
        <template #bottom>
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCnt" rounded />
          </div>
        </template>
      </v-data-table> -->
    </div>
  </div>
</template>

<script setup>
import ViewHeaderComponent from '@/components/_common/ViewHeaderComponent.vue'
import DefaultButtonComponent from '@/components/_common/button/DefaultButtonComponent.vue'
import ProjectBuildDetailPopup from '@/components/build/ProjectBuildDetailComponent.vue'
import { computed, onMounted, ref } from 'vue'
import { LOCALSTORAGE_KEY } from '@/assets/consts/consts'
import { useDevOpsServiceGroupStore } from '@/stores/devops/service-group'
import { storeToRefs } from 'pinia'
import { useBuildStore } from '@/stores/devops/build'
import { useConfirmStore } from '@/stores/components/confirm'
import { useUserStore } from '@/stores/portal/user'
import { useI18n } from '@/_setting/i18n'
import { useAlertStore } from '@/stores/components/alert'
//import build from '@/router/project/build'



//new table
const selected = ref([])


const devOpsServiceGroupStore = useDevOpsServiceGroupStore()
const buildStore = useBuildStore()
const { userInfo } = storeToRefs(useUserStore())
const showDetailPopup = ref(false)
const intervalGetBuildListTime = 60 * 1000
const page = ref(1)
const itemsPerPage = ref(5)
const search = ref('')
const pageCnt = computed(() => Math.ceil(builds.value.length / itemsPerPage.value))
const confirmStore = useConfirmStore()
const selectedBuildId = ref(null)
const alertStore = useAlertStore()
const { tt } = useI18n()
const devOpsServiceGroupId = storeToRefs(devOpsServiceGroupStore).serviceGroupId
const builds = storeToRefs(buildStore).builds

const onClickExcuteBuild = async buildId => {
  //showConfirm
  const confirmVal = await confirmStore.showConfirm(tt('빌드를 실행하시겠습니까?'))
  if(confirmVal) {
    //빌드 실행
    let reqBody = {
      buildDesc: '',
      buildUserId: userInfo.value.userId,
      buildUsername: userInfo.value.usernameKr
    }
    await buildStore.executeBuild(buildId, reqBody)
    alertStore.openAlert({
      titleName: tt('빌드를 실행하였습니다.')
    })
  }
}

const onClickDetailBuild = buildId => {
  showDetailPopup.value = true
  selectedBuildId.value = buildId
}

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
  const confirmVal = await confirmStore.showConfirm(tt('빌드를 삭제하시겠습니까?'))
  // confirm true 면
  if(confirmVal) {
    await buildStore.deleteBuild(buildId)
    await getBuildList()
  }

}
const intervalGetBuildList = () => {
  setTimeout(async () => {
    await getBuildList()
  }, intervalGetBuildListTime)
}


onMounted(() => {
  getBuildList()
  //intervalGetBuildList()
})
const headers = ref([
  {
    title: tt('빌드명'),
    align: 'center',
    key: 'buildName'
  },
  {
    title: tt('브랜치'),
    align: 'center',
    key: 'branch'
  },
  {
    title: tt('빌드 수'),
    align: 'center',
    key: 'buildCount'
  },
  {
    title: tt('마지막 빌드 시간'),
    align: 'center',
    key: 'lastBuildDate'
  },
  {
    title: tt('마지막 빌드 상태'),
    align: 'center',
    key: 'lastBuildResult'
  },
  {
    title: tt('액션'),
    align: 'center',
    key: 'action',
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
