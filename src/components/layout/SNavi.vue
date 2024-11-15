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
      <v-list v-model:opened="open" class="navi-menu" v-if="menuPaths && menuPaths.subMenus && menuPaths.subMenus.length">
        <v-list-group v-for="menu in menuPaths.subMenus" :key="menu.idx" :value="menu.idx">
          <template #activator="{ props: itemProps }">
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
                    : 'mdi-chevron-right'
              "
              @click="onClickMenuItem"
            />
          </template>

          <v-list-item
            v-for="(subMenu, i) in menu.subMenus"
            :key="i"
            class="s-navi-inner-menu"
            :class="{
              disabled: selectedProject.projectId <= 0 && subMenu.dependency === 'PROJECT',
              active: selectedProject.projectId > 0 || subMenu.dependency !== 'PROJECT',
            }"
            :value="subMenu.idx"
            active-class="menu-active"
            prepend-icon="mdi-circle-small"
          >
            <template #title>
              <RouterLink
                v-if="selectedProject.projectId > 0"
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
        </v-list-group>
      </v-list>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

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
    type: Array,
    default: () => [],
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
    if (props.menuPaths.length) {
      emits('click:service-name', { path: props.menuPaths.at(0)?.menuUrl || '/' })
    } else {
      emits('click:service-name', { path: '/' })
    }
  }
}

watch(
  () => props.routerPath,
  () => {
    const menus = props.menuPaths?.subMenus || []
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
#s-menu-title-wrapper {
  color: #ffffff;
  margin-top: 20px;
  padding-right: 10px;
  height: 52px;
  line-height: 50px;
}
#s-menu-title-wrapper a {
  text-decoration: none;
}

#s-menu-title {
  padding-left: 20px;
  background: $main-color;
  border-radius: 0 10px 10px 0;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
}

#s-menu-wrapper {
  width: 300px;
  padding-right: 30px;
  padding-left: 30px;

  :deep(.v-list) {
    padding: 0;
    .v-list-item-title {
      @include set-text(300, 18, $s-default--gray-9);
    }
    .v-list-group__items {
      .v-list-item-title {
        @include set-text(300, 16, $s-default--gray-9);
      }
    }

    .v-list-item {
      .v-list-item__overlay {
        opacity: 0;
      }
    }
    .v-list-item .v-list-item__prepend .v-list-item__spacer {
      width: 0;
    }

    .v-list-group {
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

      .v-list-group__items .v-list-item {
        --v-theme-overlay-multiplier: 0;
        padding-inline: 5px !important;
        margin: 0;
        min-height: 40px;
        font-weight: 300;

        &:hover .v-list-item__overlay {
          opacity: 0.1;
          border-radius: 100px !important;
          background-color: $s-btn--blue-1;
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
}

// Side 영역
#project_select:deep(.v-select__selection-text) {
  @include set-text(400, 14, null);
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

#s-navi {
  position: fixed;
  top: 68px;
  height: calc(100% - 68px);
  border-right: 1px solid $s-default--gray-5;
  background-color: white;
}

.s-navi-inner-menu {
  padding-inline: 15px !important;
}
.s-navi-inner-menu.disabled .s-navi-inner-menu-title {
  //pointer-events: none;
  color: grey;
  cursor: not-allowed;
}

.s-navi-inner-menu-title {
  font-weight: 300;
  text-decoration: none;
  color: black;
}
.s-navi-inner-menu.active:hover .s-navi-inner-menu-title {
  color: $active-font-color;
}
</style>
