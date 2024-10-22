<template>
  <store-confirm-component />
  <v-app>
    <header-component
      :is-logged-in="isLoggedIn"
      :user-info="userInfoTrans"
      :service-menus="serviceMenus"
      :user-menus="menuItems"
      :show-menu-btn="showMenuBtn"
      :show-menu="showMenu"
      @click:logo="goToMain"
      @click:menu-item="onClickMenuItem"
      @click:log-in="onClickLogin"
      @click:sign-up="onClickSignUp"
      @click:menu="onClickMenu"
      @click:service-item="onClickServiceItem"
    >
      <template #inner-append>
        <v-select
          flat
          class="s-global-select"
          hide-details
          :model-value="globalServiceGroup"
          :items="globalServiceGroupList"
          item-title="groupNameTitle"
          item-value="uuid"
          density="compact"
          color="white"
          variant="solo"
          bg-color="#1C2536"
          @update:model-value="onUpdateGlobalValue"
        />
      </template>
    </header-component>
    <div class="show-header">
      <navi-component
        :menu-paths="filteredMenu"
        :project-list="projectList"
        :selected-project="selectedProject"
        @change:project="onChangeProject"
      />
      <div class="base-layout">
        <div class="show-navi">
          <router-view v-slot="{ Component }">
            <component :is="Component" ref="viewRef" />
          </router-view>
        </div>
        <footer-component />
        <global-progress v-model="loading" />
      </div>
    </div>
    <teleport to="#destination">
      <template v-for="(alert, index) in alertItemStack" :key="alert.uuid">
        <alert
          v-bind="alert"
          :alert-style="{
            marginTop: `${30 * index}px`,
            opacity: 1 / (alertItemStack.length - index),
          }"
          @close-alert="closeAlert(index)"
        />
      </template>
    </teleport>
  </v-app>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useTokenStore } from '@/stores/portal/token'
import { useUserStore } from '@/stores/portal/user'
import { useServiceGroupStore } from '@/stores/portal/service-group'
import { useDevOpsServiceGroupStore } from '@/stores/devops/service-group'
import { useAlertStore } from '@/stores/components/alert'
import { useMenuStore } from '@/stores/portal/menu'
import { useLoadingStore } from '@/stores/components/loading'
import { useProjectStore } from '@/stores/devops/project'
import { LOCALSTORAGE_KEY } from '@/assets/consts/consts'

import HeaderComponent from '@/components/_common/RootHeaderComponent.vue'
import FooterComponent from '@/components/_common/FooterComponent.vue'
import NaviComponent from '@/components/_common/NaviComponent.vue'
import Alert from '@/components/_common/alert/CustomAlertComponent.vue'
import StoreConfirmComponent from '@/components/_common/modal/StoreConfirmComponent.vue'
import GlobalProgress from '../_common/progress/GlobalProgressComponent.vue'
import { useI18n } from '@/_setting/i18n'

const projectStore = useProjectStore()
const { projects: projectList, selectedProject } = storeToRefs(projectStore)
const router = useRouter()
const tokenStore = useTokenStore()
const userStore = useUserStore()
const sgStore = useServiceGroupStore()
const devOpsSgStore = useDevOpsServiceGroupStore()
const menuStore = useMenuStore()

const loadingStore = useLoadingStore()
const { loading } = storeToRefs(loadingStore)
const { serviceMenus, menuPaths } = storeToRefs(menuStore)
const { t } = useI18n()

const { isLoggedIn, userInfo } = storeToRefs(userStore)
const menuItems = ref([
  { title: t('나의 정보'), value: 'user-detail', checkAuth: false },
  { title: t('기업 정보'), value: 'my-company', checkAuth: true },
  { title: t('로그아웃'), value: 'logout', checkAuth: false },
])
const { serviceGroupUuid: globalServiceGroup, serviceGroups: globalServiceGroupList } = storeToRefs(sgStore)

const alertStore = useAlertStore()
const { alertItemStack } = storeToRefs(alertStore)

const userInfoTrans = computed(() => {
  return {
    ...userInfo.value,
    name: userInfo.value?.usernameKr,
  }
})

const filteredMenu = computed(() =>
  menuPaths.value.find(({ clientId }) => {
    return clientId === 'strato-devops'
  }),
)

const onChangeProject = value => {
  selectedProject.value = value
  //프로젝트가 바뀔 때 로컬 스토리지에 저장
  localStorage.setItem(LOCALSTORAGE_KEY.PROJECT_ID, JSON.stringify(selectedProject.value))
}

const closeAlert = index => {
  alertStore.closeAlert(index)
}

const onClickLogin = () => {
  tokenStore.onLogIn()
}

const onLogOut = () => {
  console.log('on click log out')
  tokenStore.onLogOut()

  setTimeout(() => {
    userStore.userInit()
  }, 10000)
}

const onClickSignUp = () => {}

const showMenuBtn = ref(false)
const showMenu = ref(false)

const onClickMenu = value => {
  showMenu.value = value
}

const onClickMenuItem = value => {
  if (value === 'my-company') {
    router.push(`/company/detail/${userInfo.value.company.uuid}`)
  } else if (value === 'user-detail') {
    // router.push(`/user-account/my-info/${userInfo.value.uuid}`)
    router.push(`/user-account/auth/email/${userInfo.value.uuid}`)
  } else if (value === 'sign-up') {
    router.push('/signup')
  } else if (value === 'sign-up-request') {
    // router.push('/signup/request/email')
    router.push('/signup/request/sign-up-request')
  } else if (value === 'logout') {
    onLogOut()
  }
}

const onClickServiceItem = value => {
  if (value.menuUrl && value.accessible) {
    window.location.href = value.menuUrl
  }
}

const goToMain = () => {
  window.location.href = import.meta.env.VITE_STRATO_PORTAL
}

const viewRef = ref(null)
const onUpdateGlobalValue = async uuid => {
  sgStore.updateServiceGroup(uuid)
  await devOpsSgStore.getServiceGroupDetail(globalServiceGroup.value)

  if (viewRef.value) {
    viewRef.value?.onRefresh()
  }
}

watch(
  () => isLoggedIn.value,
  () => {
    if (!isLoggedIn.value) {
      showMenuBtn.value = false
    } else {
      showMenuBtn.value = true
    }
  },
)
</script>
