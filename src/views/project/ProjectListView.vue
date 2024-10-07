<template>
  <div class="view-wrapper">
    <s-sub-header :title="$t('프로젝트 목록')" :list-cnt="projects.length">
      <s-btn
        variant="outlined"
        color="red"
        :title="$t('삭제')"
        :disabled="selected.length === 0"
        @click="onClickDelete"
      />
      <s-btn variant="outlined" color="blue" :title="$t('신규 프로젝트 생성')" />
      <s-btn variant="outlined" color="blue" :title="$t('프로젝트 가져오기')" />
    </s-sub-header>
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
          hide-default-footer
          :options="{ pageCnt: pageCnt, showSelect: true }"
        >
          <template #[`item.projectType`]="{ item }">
            {{ item.projectCd }} - {{ item.buildCd }}
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
    <teleport to="#destination">
      <s-confirm
        v-model="confirm.show"
        :contents="confirm.contents"
        @click:confirm="onConfirm"
        @click:cancel="onCancel"
      />
    </teleport>
  </div>
</template>

<script setup>
import { computed, ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useProjectStore } from '@/stores/devops/project'
import { useI18n } from '@/_setting/i18n'
import { useAlertStore } from '@/stores/components/alert'

import SSubHeader from '@/components/_common/ListViewHeaderComponent.vue'
import SConfirm from '@/components/_common/modal/CustomConfirmComponent.vue'

import { headers } from './table-header'

const itemsPerPage = ref(10)
const page = ref(1)
const { t } = useI18n()

const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)
const alertStore = useAlertStore()

const search = ref('')
const selected = ref([])
const confirm = reactive({ show: false, contents: t('프로젝트를 삭제하시겠습니까?') })

const pageCnt = computed(() => Math.ceil(projects.value.length / itemsPerPage.value))

const setProjectId = (projectId) => {
  localStorage.setItem('projectId', projectId)
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
    // serviceGroupId: localStorage.getItem('serviceGroupId'),
  })
}

const onRefresh = () => {
  getProjects()
}

const onClickDelete = () => {
  confirm.show = true
}

const onConfirm = async () => {
  try {
    await projectStore.fetchDeleteProject({
      projectId: selected.value.at(0)
    })
    confirm.show = false
    alertStore.openAlert({
      titleName: t('삭제되었습니다.'),
      type: 'success',
    })
    onRefresh()
  } catch (e) {
    console.log(e)
    alertStore.openAlert({
      titleName: t('삭제하지 못했습니다.'),
      type: 'error',
    })
  }
}

const onCancel = () => {
  confirm.show = false
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
