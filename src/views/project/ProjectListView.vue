<template>
  <div class="layout__list">
    <s-sub-header :title="$t('프로젝트 목록')" :list-cnt="projects.length">
      <s-btn color="blue" :title="$t('신규 프로젝트')" />
    </s-sub-header>
    <div class="layout__list-contents">
      <v-text-field
        v-model="search"
        class="search-box-text"
        variant="outlined"
        density="compact"
        hide-details
        :placeholder="$t('프로젝트 명으로 검색')"
        prepend-inner-icon="mdi-magnify"
      />
      <div>
        <v-data-table
          :headers="headers"
          :items="projects"
          :page="page"
          :search="search"
          :options="{ pageCnt: pageCnt }"
        >
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
          <template #[`item.setting`]="{ item }">
            <s-btn variant="outlined" color="blue" @click="onClickRow('detail', item)">
              {{ $t('상세') }}
            </s-btn>
            <s-btn variant="outlined" color="red" @click="onClickRow('detail', item)">
              {{ $t('삭제') }}
            </s-btn>
          </template>
        </v-data-table>
      </div>
    </div>
    <teleport to="#destination">
      <s-confirm
        :dialog="confirm.show"
        :contents="confirm.contents"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </teleport>
  </div>
</template>

<script setup>
import { computed, ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useProjectStore } from '@/stores/devops/project'
import { useI18n } from '@/_setting/i18n'

// import SCardTable from '@/components/_common/table/CustomCardTableComponent.vue'
import SSubHeader from '@/components/_common/ListViewHeaderComponent.vue'
import SConfirm from '@/components/_common/modal/CustomConfirmComponent.vue'

const itemsPerPage = ref(10)
const page = ref(1)
const { t, tt } = useI18n()

const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)

const search = ref('')
const confirm = reactive({ show: false, contents: t('프로젝트를 삭제하시겠습니까?') })

const headers = [
  {
    title: tt('프로젝트 명'),
    key: 'projectName',
    width: 150
  },
  {
    title: tt('설명'),
    key: 'projectAlias',
    width: 250
  },
  {
    title: tt('빌드'),
    key: 'buildCount',
    width: 80
  },
  {
    title: tt('배포'),
    key: 'deployCount',
    width: 80
  },
  {
    title: tt('회원'),
    key: 'userCount',
    width: 80
  },
  {
    title: tt('저장소'),
    key: 'repo',
    width: 80
  },
  {
    title: tt('생성 일시'),
    key: 'regDate',
    width: 120
  },
  {
    title: '',
    key: 'setting',
    width: 160
  },
]

const pageCnt = computed(() => Math.ceil(projects.value.length / itemsPerPage.value))

const setProjectId = (projectId) => {
  localStorage.setItem('projectId', projectId)
}

const goto = (type, item) => {
  setProjectId(item.projectId)
  if (type === 'build') {
    return '/project/build'
  }
  if (type === 'deploy') {
    return '/project/deploy'
  }
  if (type === 'user') {
    return '/project/user'
  }
  if (type === 'repo') {
    return '/project/repo'
  }
  return '/project/build'
}

const onClickRow = (type, item) => {
  if (type === 'detail') {
    // open detail modal
    return
  }
  if (type === 'delete') {
    onConfirm()
    return
  }
}

const getProjects = async () => {
  await projectStore.getProjects()
}

onMounted(() => {
  getProjects()
})
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.table-link {
  color: $s-text__gray-9;
  text-decoration: none;
}

</style>
