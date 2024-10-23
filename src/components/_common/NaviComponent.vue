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
    <div v-if="menuPaths && menuPaths.subMenus && menuPaths.subMenus.length" id="menu_wrapper">
      <v-list v-model:opened="open" class="navi-menu">
        <v-list-group v-for="menu in menuPaths.subMenus" :key="menu.idx" :value="menu.idx">
          <template #activator="{ props: itemProps }">
            <v-list-item
              v-bind="itemProps"
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
import { ref, computed } from 'vue'
const defaultProject = { projectName: '전체', projectId: 0 }
const onClickMenuItem = () => {
  open.value = !open.value.length ? open.value : open.value.splice(open.value.length - 1, 1)
}

const props = defineProps({
  projectList: {
    type: Array,
    default: () => [],
  },
  selectedProject: {
    type: Object,
    default: () => {},
  },
  menuPaths: {
    type: Object,
    default: () => {},
  },
})

const emits = defineEmits(['change:project'])

const open = ref([]) //활성화할 메뉴의 value
//프로젝트가 있으면 가져오고 없으면 전체로
// const projectList = ref([
//   { name: '전체', value: 'total' },
//   { name: '프로젝트1', value: 'projcet-1' },
//   { name: '프로젝트2', value: 'projcet-2' },
//   { name: '프로젝트3', value: 'projcet-3' }
// ])
const totalProjectList = computed(() => [{ ...defaultProject }, ...props.projectList])

const onChangeProject = value => {
  //프로젝트가 바뀔 때 로컬 스토리지에 저장
  emits('change:project', value)
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
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}

#project_select_wrapper {
  width: 300px;
  height: 88px;

  .project_select {
    padding: 24px 31px;
  }
  &::after {
    content: '';
    display: block;
    width: 270px;
    height: 0;
    margin: 0 15px;
    border-top: 1px solid $s-default--gray-5;
    top: -1px;
    position: relative;
  }
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
  font-weight: 300;
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
          font-weight: 300;
          font-size: 18px;
        }
      }
    }

    ::v-deep(.v-list-group) .v-list-group__items .v-list-item {
      padding-inline: 5px !important;
      margin: 0;
      min-height: 40px;
      font-weight: 300;

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
