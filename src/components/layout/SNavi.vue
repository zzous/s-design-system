<template>
  <div id="s-navi">
    <div id="s-menu-title-wrapper">
      <a href.stop="#" @click="goFirstMenu">
        <div id="s-menu-title">
          {{ serviceNameText }}
        </div>
      </a>
    </div>
    <slot name="default">
      <div v-if="useProject" id="project_select_wrapper">
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
    </slot>
    <div id="s-menu-wrapper">
      <v-list v-model:opened="open" class="navi-menu" v-if="menuPath && menuPath.subMenus && menuPath.subMenus.length">
        <v-list-group v-for="menu in menuPath.subMenus" :key="menu.idx" :value="menu.idx">
          <template #activator="{ props: itemProps }" v-if="menu.accessible">
            <v-list-item
              v-bind="itemProps"
              height="50px"
              active-class="menu-active"
              :active="isMenuActive(menu.menuUrl)"
              :title="menuNameLang(menu)"
              :append-icon="
                !menu.subMenus || menu.subMenus.length === 0
                  ? ''
                  : open.includes(menu.idx)
                    ? 'mdi-chevron-up'
                    : 'mdi-chevron-down'
              "
              @click="handleMenuClick($event, menu)"
              >
              <template v-if="!menu.subMenus || menu.subMenus.length === 0" #title>
                <RouterLink class="navi-inner-menu-title" :to="menu.menuUrl">
                  {{ menuNameLang(menu) }}
                </RouterLink>
              </template>
            </v-list-item>
          </template>

          <template v-for="(subMenu, i) in menu.subMenus" :key="i">
            <v-list-item
              v-if="subMenu.accessible"
              class="s-navi-inner-menu"
              :class="{
                disabled: !clickableMenu(subMenu),
                active: selectedProject?.projectId > 0 || subMenu.dependency !== 'PROJECT'
              }"
              :value="subMenu.idx"
              active-class="menu-active"
              :active="isMenuActive(subMenu.menuUrl)"
              prepend-icon="mdi-circle-small"
              @click="handleMenuClick($event, subMenu)"
            >
              <template #title>
                <RouterLink
                  v-if="clickableMenu(subMenu)"
                  class="s-navi-inner-menu-title"
                  :to="subMenu.menuUrl"
                  ref="menuLink"
                >
                  {{ menuNameLang(subMenu) }}
                </RouterLink>
                <template v-else>
                  <span class="s-navi-inner-menu-title">
                    {{ menuNameLang(subMenu) }}
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
    default: '',
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
  },
  lang: {
    type: String,
    default: 'ko',
  },
})

const emits = defineEmits(['change:project', 'click:service-name'])

const open = ref([]) //활성화할 메뉴의 value

const totalProjectList = computed(() => [{ ...defaultProject }, ...props.projectList])

const clickableMenu = subMenu => {
  return !props.useProject || (props.useProject && (props.selectedProject?.projectId > 0 || subMenu.dependency !== 'PROJECT'))
}

const onChangeProject = value => {
  //프로젝트가 바뀔 때 로컬 스토리지에 저장
  emits('change:project', value)
}


const goFirstMenu = () => {
  if (props.firstMenuPath) {
    try {
      // 도메인이 포함된 경로인 경우
      const path = new URL(props.firstMenuPath)
      emits('click:service-name', { path: path.pathname })
    } catch (error) {
      // console.error('goFirstMenu error', error)
      // 도메인이 포함되지 않은 경로인 경우
      emits('click:service-name', { path: props.firstMenuPath })
    }
  } else {
    // if (props.menuPath) {
    //   emits('click:service-name', { path: props.menuPath.menuUrl || '/' })
    // } else {
      emits('click:service-name', { path: '/' })
    // }
  }
}

const menuNameLang = (menu) => {
  if (props.lang?.toLowerCase() === 'en') {
    return menu.menuNameEn || menu.menuName
  }
  return menu.menuNameKr || menu.menuName
}


const serviceNameText = computed(() => {
  return props.serviceName || menuNameLang(props.menuPath)
})

const isMenuPathMatched = (menuUrl, routerPath) => {
  // 기본 경로가 없는 경우 처리
  if (!menuUrl || !routerPath) return false;

  // 정확히 일치하는 경우
  if (menuUrl === routerPath) return true;

  // route parameter를 포함하는 경우 처리
  const menuParts = menuUrl.split('/').filter(Boolean);
  const routerParts = routerPath.split('/').filter(Boolean);

  // 경로 부분의 길이가 다르면 매칭되지 않음
  if (menuParts.length !== routerParts.length) return false;

  // 각 부분을 비교하면서 parameter 부분은 무시
  return menuParts.every((part, index) => {
    // parameter 부분(':' 으로 시작하는 경우)은 항상 true
    if (part.startsWith(':')) return true;
    return part === routerParts[index];
  });
};

watch(
  () => props.routerPath,
  () => {
    const menus = props.menuPath?.subMenus || [];
    const nowPath = props.routerPath;
    for (const idx in menus) {
      // route parameter를 고려한 경로 매칭 검사
      if (isMenuPathMatched(menus[idx].menuUrl, nowPath)) {
        open.value = [menus[idx].idx];
        break;
      }
      // 서브메뉴에 대해서도 검사
      if (menus[idx].subMenus) {
        const subMenuMatch = menus[idx].subMenus.some(subMenu =>
          isMenuPathMatched(subMenu.menuUrl, nowPath)
        );
        if (subMenuMatch) {
          open.value = [menus[idx].idx];
          break;
        }
      }
    }
  },
  { immediate: true }
);

// v-list-item의 active 상태를 결정하는 computed 속성 추가
const isMenuActive = (menuUrl) => {
  return isMenuPathMatched(menuUrl, props.routerPath);
};

const handleMenuClick = (event, subMenu) => {
  if (clickableMenu(subMenu)) {
    // RouterLink 요소 찾기
    const linkElement = event.currentTarget.querySelector('.s-navi-inner-menu-title')
    if (linkElement) {
      linkElement.click()
    }
  }
}
</script>

<style scoped lang="scss">
@import url(./SNavi.scss);
</style>
