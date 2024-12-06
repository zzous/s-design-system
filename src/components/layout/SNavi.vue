<template>
  <div id="s-navi">
    <div id="s-menu-title-wrapper">
      <a href.stop="#" @click="goFirstMenu">
        <div id="s-menu-title">
          {{ serviceName }}
        </div>
      </a>
    </div>
    <div v-if="projectList && projectList.length" id="project_select_wrapper">
      <div class="project_select">
        <v-select
          width="238px"
          :model-value="selectedProject"
          variant="outlined"
          density="comfortable"
          :items="totalProjectList"
          item-title="projectName"
          item-value="projectId"
          label="Select"
          hide-details
          persistent-hint
          return-object
          single-line
          @update:model-value="onChangeProject"
        />
      </div>
    </div>
    <div id="s-menu-wrapper">
      <v-list v-model:opened="open" class="navi-menu" v-if="menuPath && menuPath.subMenus && menuPath.subMenus.length">
        <v-list-group v-for="menu in menuPath.subMenus" :key="menu.idx" :value="menu.idx">
          <template #activator="{ props: itemProps }" v-if="menu.accessible">
            <v-list-item
              v-bind="itemProps"
              height="50px"
              active-class="menu-active"
              :title="menu.menuName || menu.menuNameKr"
              :append-icon="
                !menu.subMenus || menu.subMenus.length === 0
                  ? ''
                  : open.includes(menu.idx)
                    ? 'mdi-chevron-down'
                    : 'mdi-chevron-up'
              "
              >
              <template v-if="!menu.subMenus || menu.subMenus.length === 0" #title>
                <RouterLink class="navi-inner-menu-title" :to="menu.menuUrl">
                  {{ menu.menuName || menu.menuNameKr }}
                </RouterLink>
              </template>
            </v-list-item>
          </template>

          <template v-for="(subMenu, i) in menu.subMenus" :key="i">
            <v-list-item
              v-if="subMenu.accessible"
              class="s-navi-inner-menu"
              :class="{
                disabled: selectedProject?.projectId <= 0 && subMenu.dependency === 'PROJECT',
                active: selectedProject?.projectId > 0 || subMenu.dependency !== 'PROJECT',
              }"
              :value="subMenu.idx"
              active-class="menu-active"
              prepend-icon="mdi-circle-small"
            >
              <template #title>
                <RouterLink
                  v-if="selectedProject?.projectId > 0 || !useProject"
                  class="s-navi-inner-menu-title"
                  :to="subMenu.menuUrl"
                >
                  {{ subMenu.menuName || subMenu.menuNameKr }}
                </RouterLink>
                <template v-else>
                  <span class="s-navi-inner-menu-title">
                    {{ subMenu.menuName || subMenu.menuNameKr }}
                    <v-tooltip v-if="subMenu.dependency === 'PROJECT'" activator="parent" location="start">
                      {{ dependencyTooltipMessage }}
                    </v-tooltip>
                  </span>
                </template>
              </template>
            </v-list-item>
          </template>
        </v-list-group>
      </v-list>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const defaultProject = { projectName: '전체', projectId: 0 }

// 메뉴 클릭 시 다른 펼쳐진 메뉴를 닫도록 하는 함수 - 2024.12.03 (펼침을 유지하는 방안으로 변경됨)
// const onClickMenuItem = () => {
//   open.value = !open.value.length ? open.value : open.value.splice(open.value.length - 1, 1)
// }

const props = defineProps({
  useProject: {
    type: Boolean,
    default: false,
  },
  projectList: {
    type: Array,
    default: () => [],
  },
  selectedProject: {
    type: Object,
    default: () => {},
  },
  menuPath: {
    type: Object,
    default: () => {
      return {
        menuUrl: '',
        menuName: '',
        menuNameKr: '',
        subMenus: [],
      }
    },
  },
  serviceName: {
    type: String,
    default: 'Service',
  },
  dependencyTooltipMessage: {
    type: String,
    default: '프로젝트를 선택 해 주세요',
  },
  routerPath: {
    type: String,
    default: '',
  },
  firstMenuPath: {
    type: String,
    default: '',
    description: 'Service Name 클릭 시 이동할 메뉴의 path'
  }
})

const emits = defineEmits(['change:project', 'click:service-name'])

const open = ref([]) //활성화할 메뉴의 value

const totalProjectList = computed(() => [{ ...defaultProject }, ...props.projectList])

const onChangeProject = value => {
  //프로젝트가 바뀔 때 로컬 스토리지에 저장
  emits('change:project', value)
}

const goFirstMenu = () => {
  if (props.firstMenuPath) {
    emits('click:service-name', { path: props.firstMenuPath })
  } else {
    if (props.menuPath) {
      emits('click:service-name', { path: props.menuPath.menuUrl || '/' })
    } else {
      emits('click:service-name', { path: '/' })
    }
  }
}

watch(
  () => props.routerPath,
  () => {
    const menus = props.menuPath?.subMenus || []
    const nowPath = props.routerPath
    for (const idx in menus) {
      const pathIdx = nowPath.indexOf(menus[idx].menuUrl)
      if (pathIdx >= 0) {
        open.value = [menus[idx].idx]
        break
      }
    }
  },
  { immediate: true },
)
</script>

<style scoped lang="scss">
@import url(./SNavi.scss);
</style>
