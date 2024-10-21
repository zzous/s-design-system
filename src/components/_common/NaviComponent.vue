<template>
  <div id="navi" class="float-left">
    <div id="menu_title_wrapper">
      <router-link to="/project/list">
        <div id="menu_title">
          {{ $t('데브옵스') }}
        </div>
      </router-link>
    </div>
    <div id="project_select_wrapper">
      <div id="project_select" class="border-b-sm">
        <v-select
          v-model="selectedProject"
          variant="outlined"
          density="comfortable"
          :items="totalProjectList"
          item-title="projectName"
          item-value="projectId"
          label="Select"
          persistent-hint
          return-object
          single-line
          @update:model-value="onChangeProject"
        />
      </div>
    </div>
    <div v-if="filteredMenu && filteredMenu.subMenus && filteredMenu.subMenus.length" id="menu_wrapper">
      <v-list v-model:opened="open" class="navi-menu">
        <v-list-group v-for="menu in filteredMenu.subMenus" :key="menu.idx" :value="menu.idx">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              height="50px"
              active-class="menu-active"
              :title="menu.menuNameKr"
              :append-icon="open.includes(menu.idx) ? 'mdi-chevron-down' : 'mdi-chevron-right'"
              @click="onClickMenuItem"
            />
          </template>

          <v-list-item
            v-for="(subMenu, i) in menu.subMenus"
            :key="i"
            class="navi-inner-menu"
            :class="{
              disabled: selectedProject.projectId <= 0,
              active: selectedProject.projectId > 0,
            }"
            active-class="menu-active"
            prepend-icon="mdi-circle-small"
          >
            <template #title>
              <RouterLink class="navi-inner-menu-title" :to="subMenu.menuUrl">
                {{ subMenu.menuNameKr }}
              </RouterLink>
            </template>
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
  </div>
</template>

<script setup>
//import { NAVI_MENU } from '@/assets/consts/consts'
import { useProjectStore } from '@/stores/devops/project'
import { useMenuStore } from '@/stores/portal/menu'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { LOCALSTORAGE_KEY } from '@/assets/consts/consts'
const defaultProject = { projectName: '전체', projectId: 0 }
const onClickMenuItem = () => {
  open.value = !open.value.length ? open.value : open.value.splice(open.value.length - 1, 1)
}
const menuStore = useMenuStore()
const projectStore = useProjectStore()
const { projects: projectList, selectedProject } = storeToRefs(projectStore)
const { menuPaths } = storeToRefs(menuStore)
const filteredMenu = computed(() =>
  menuPaths.value.find(({ clientId }) => {
    return clientId === 'strato-devops'
  }),
)
const open = ref([]) //활성화할 메뉴의 value
//프로젝트가 있으면 가져오고 없으면 전체로
// const projectList = ref([
//   { name: '전체', value: 'total' },
//   { name: '프로젝트1', value: 'projcet-1' },
//   { name: '프로젝트2', value: 'projcet-2' },
//   { name: '프로젝트3', value: 'projcet-3' }
// ])
const totalProjectList = computed(() => [{ ...defaultProject }, ...projectList.value])

const onChangeProject = () => {
  //프로젝트가 바뀔 때 로컬 스토리지에 저장
  localStorage.setItem(LOCALSTORAGE_KEY.PROJECT_ID, JSON.stringify(selectedProject.value))
}
</script>

<style scoped lang="scss">
//@import "@/assets/_variables.scss";
@import '@/assets/style/variables';
#navi {
  height: 100%;
  border-right: 1px solid $s-default--gray-5;
}
#menu_title_wrapper {
  color: #ffffff;
  margin-top: 20px;
  padding-right: 10px;
  height: 52px;
  line-height: 50px;
}
#menu_title_wrapper a {
  text-decoration: none;
}

#menu_title {
  padding-left: 20px;
  background: $main-color;
  border-radius: 0 10px 10px 0;
  color: #fff;
}

#project_select_wrapper {
  padding: 15px 25px 5px 25px;
}

.navi-inner-menu {
  padding-inline: 15px !important;
}
.navi-inner-menu.disabled .navi-inner-menu-title {
  pointer-events: none;
  color: grey;
  cursor: not-allowed;
}

.navi-inner-menu-title {
  text-decoration: none;
  color: black;
}
.navi-inner-menu-title.router-link-exact-active {
  color: $active-font-color;
}
.navi-inner-menu.active:hover .navi-inner-menu-title {
  color: $active-font-color;
}

.navi-menu {
  &.v-list {
    padding: 0;
    ::v-deep(.v-list-group) {
      margin-bottom: 10px;

      .v-list-item--density-default:not(.v-list-item--nav).v-list-group__header {
        --v-hover-opacity: 0;
        --v-activated-opacity: 0;
        --v-focus-opacity: 0;
        --v-theme-overlay-multiplier: 0;

        min-height: 64px;
        padding-inline: 0;
        padding-top: 24px;
        padding-bottom: 16px;
        margin: 0;

        .v-list-item__content .v-list-item-title {
          font-weight: 400;
          font-size: 18px;
        }
      }
    }

    ::v-deep(.v-list-group .v-list-group__items) .v-list-item {
      padding-inline: 5px !important;
      margin: 0;
      min-height: 40px;
      font-weight: 400;

      &:hover {
        border-radius: 100px !important;
        background-color: rgba($s-btn--blue-1, 0.1);
      }

      &:has(.router-link-active) {
        .router-link-active {
          color: $active-font-color;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
