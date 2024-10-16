<template>
  <project-build-new-modal-component v-model="showNewModal" />
  <project-build-detail-modal-component v-model="showDetailPopup" :build-id="selectedBuildId" />
  <div class="view-wrapper">
    <view-header-component :title="$t('빌드')">
      <s-btn
        variant="outlined"
        color="red"
        :title="$t('삭제')"
        :disabled="selected.length !== 1"
        @click="onClickDeleteBuild"
      />
      <s-btn
        variant="outlined"
        :title="$t('빌드')"
        :disabled="selected.length !== 1"
        @click="onClickExcuteBuild"
      />
      <s-btn
        variant="outlined"
        :title="$t('생성')"
        @click="onClickNewBuild"
      />
    </view-header-component>
    <div class="contentsWrapper">
      <div class="layout__list-contents">
        <div class="search">
          <v-text-field
            v-model="search"
            class="search__text-field"
            variant="outlined"
            density="comfortable"
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
          item-value="buildId"
          show-select
          :options="{ pageCnt: pageCnt, showSelect: true }"
        >
          <template #[`item.buildName`]="{ item }">
            <span>{{ item.buildName }}</span>
            <v-icon
              class="ml-1"
              size="small"
              @click="onClickDetail(item)"
            >
              mdi-open-in-new
            </v-icon>
          </template>
        </s-data-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import ViewHeaderComponent from '@/components/_common/ViewHeaderComponent.vue'
import ProjectBuildNewModalComponent from '@/components/build/new/ProjectBuildNewModalComponent.vue'
import ProjectBuildDetailModalComponent from '@/components/build/detail/ProjectBuildDetailModalComponent.vue'
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

const showNewModal = ref(false)
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


const onClickExcuteBuild = async () => {
  const buildId = selected.value.at(-1)
  if(!buildId) return alertStore.openAlert({
    titleName: tt('선택된 빌드가 없습니다'),
    type: 'error',
  })
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

//빌드 목록을 가져오고 빌드 목록이 있다면 주기적으로 요청 한다.
const getBuildList = async () => {
  const projectObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY.selectedProject))
  const tempBuilds = await buildStore.getBuildsWithHistory({ serviceGroupId: devOpsServiceGroupId.value, projectId: projectObj.projectId })
  if(tempBuilds?.length) {
    intervalGetBuildList()
  }
}

const onClickNewBuild = () => {
  showNewModal.value = true
}

const onClickDetail = (build) => {
  selectedBuildId.value = build.buildId
  showDetailPopup.value = true
}
const onClickDeleteBuild = async () => {
  const buildId = selected.value.at(-1)
  if(!buildId) return alertStore.openAlert({
    titleName: tt('선택된 빌드가 없습니다'),
    type: 'error',
  })
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
  intervalGetBuildList()
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
