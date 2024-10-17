<template>
  <project-modal
    v-model="modal.show"
    v-bind="modal.props"
    :mode="modal.mode"
    @refresh="onRefresh"
    @update:mode="updateMode"
  />
  <div class="view-wrapper">
    <s-sub-header :title="$t('프로젝트 목록')" :list-cnt="projects.length">
      <s-btn
        variant="outlined"
        color="red"
        :title="$t('삭제')"
        :disabled="selected.length === 0"
        @click="onClickDelete"
      />
      <s-btn
        variant="outlined"
        :title="$t('신규 프로젝트 생성')"
        @click="onClickNewProject"
      />
      <s-btn
        variant="outlined"
        :title="$t('프로젝트 가져오기')"
        @click="onClickImportProject"
      />
    </s-sub-header>
    <div class="layout__list-contents">
      <div class="search">
        <v-text-field
          v-model="search"
          class="search__text-field"
          variant="outlined"
          density="comfortable"
          hide-details
          :placeholder="$t('프로젝트명으로 검색')"
          prepend-inner-icon="mdi-magnify"
        />
      </div>
      <div>
        <s-data-table
          v-model="selected"
          :headers="headers"
          :items="projects"
          :page="page"
          :search="search"
          select-strategy="single"
          item-value="projectId"
          show-select
          :options="{ pageCnt: pageCnt, showSelect: true }"
        >
          <template #[`item.projectType`]="{ item }">
            {{ item.projectCd }} - {{ item.buildCd }}
          </template>
          <template #[`item.projectName`]="{ item }">
            <span>{{ item.projectName }}</span>
            <v-icon
              class="ml-1"
              size="small"
              @click="onClickDetail(item)"
            >
              mdi-open-in-new
            </v-icon>
          </template>
          <template #[`item.buildCount`]="{ item }">
            <a :href="goto('build', item)" class="table-link">{{ item.buildCount }}</a>
          </template>
          <template #[`item.deployCount`]="{ item }">
            <a :href="goto('deploy', item)" class="table-link">{{ item.deployCount }}</a>
          </template>
          <template #[`item.userCount`]="{ item }">
            <a :href="goto('user', item)" class="table-link">{{ item.userCount }}</a>
          </template>
          <template #[`item.repo`]="{ item }">
            <a :href="goto('repo', item)" class="table-link">Repo</a>
          </template>
        </s-data-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useDevOpsServiceGroupStore } from '@/stores/devops/service-group'
import { useProjectStore } from '@/stores/devops/project'
import { useI18n } from '@/_setting/i18n'
import { LOCALSTORAGE_KEY } from '@/assets/consts/consts'
import { useConfirmStore } from '@/stores/components/confirm'

import ProjectModal from '@/components/project/ProjectModalLayout.vue'

import { headers } from './table-header'

const itemsPerPage = ref(10)
const page = ref(1)
const { tt } = useI18n()

const devSgStore = useDevOpsServiceGroupStore()
const { serviceGroupId } = storeToRefs(devSgStore)
const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)
const confirmStore = useConfirmStore()

const search = ref('')
const selected = ref([])

const pageCnt = computed(() => Math.ceil(projects.value.length / itemsPerPage.value))

const setProjectId = (projectId) => {
  localStorage.setItem(LOCALSTORAGE_KEY.project, projectId)
}

const goto = (type, item) => {
  setProjectId(item.projectId)
  if (type === 'build') {
    return '/console/projects/build/list'
  }
  if (type === 'deploy') {
    return '/console/projects/deploy/list'
  }
  if (type === 'user') {
    return '/console/projects/user/list'
  }
  if (type === 'repo') {
    return '/console/projects/repo/list'
  }
  return '/console/projects/build/list'
}


const getProjects = async () => {
  await projectStore.getProjects({
    serviceGroupId: serviceGroupId.value,
  })
}

const onRefresh = res => {
  if (res) getProjects()
}

const modal = reactive({
  mode: null,
  show: false,
  props: {
    projectId: null
  }
})
const onClickNewProject = () => {
  modal.show = true
  modal.mode = 'new'
}
const onClickImportProject = () => {
  modal.show = true
  modal.mode = 'import'
}

const onClickDetail = item => {
  modal.mode = 'detail'
  modal.props.projectId = item.projectId
  modal.show = true
}

const updateMode = value => {
  modal.mode = value
}

const onClickDelete = async () => {
  const confirmVal = await confirmStore.showConfirm(tt('프로젝트를 삭제하시겠습니까?'))

  if (confirmVal) {
    await projectStore.fetchDeleteProject(selected.value.at(0))
    getProjects()
  }
}

onMounted(() => {
  getProjects()
})

defineExpose({ onRefresh })
</script>

<style scoped lang="scss">
.table-link {
  color: $s-default--gray-9;
  text-decoration: none;
}

</style>
