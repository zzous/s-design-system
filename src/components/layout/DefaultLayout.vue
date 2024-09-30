<template>
  <v-app>
    <HeaderComponent
      :is-logged-in="isLoggedIn"
      :user-info="userInfoTrans"
      :menu-items="menuItems"
      @click:logo="goToMain"
      @click:menu-item="onClickMenuItem"
      @click:log-in="onClickLogin"
      @click:sign-up="onClickSignUp"
    >
      <template #inner-append>
        <v-select
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
    </HeaderComponent>
    <div class="show-header">
      <NaviComponent />
      <div class="base-layout">
        <RouterView id="router_view" class="show-navi" />
      </div>
    </div>
  </v-app>
</template>
<script setup>
import { ref, computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useTokenStore } from '@/stores/portal/token'
import { useUserStore } from '@/stores/portal/user'
import { useServiceGroupStore } from '@/stores/portal/service-group'

import HeaderComponent from '@/components/_common/RootHeaderComponent.vue'
import NaviComponent from '@/components/_common/NaviComponent.vue'
import { useI18n } from '@/_setting/i18n'

const router = useRouter()
const tokenStore = useTokenStore()
const userStore = useUserStore()
const sgStore = useServiceGroupStore()
const { t } = useI18n()

const { isLoggedIn, userInfo } = storeToRefs(userStore)
const menuItems = ref([
  { title: t('나의 정보'), value: 'user-detail', checkAuth: false },
  { title: t('기업 정보'), value: 'my-company', checkAuth: true },
  { title: t('로그아웃'), value: 'logout', checkAuth: false },
])
const { serviceGroupUuid: globalServiceGroup, serviceGroups: globalServiceGroupList } = storeToRefs(sgStore)

const userInfoTrans = computed(() => {
  return {
    ...userInfo.value,
    name: userInfo.value?.usernameKr
  }
})


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

const onClickSignUp = () => { }

const onClickMenuItem = (value) => {
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

const goToMain = () => {
  window.location.href = import.meta.env.VITE_STRATO_PORTAL
}

const onUpdateGlobalValue = uuid => {
  sgStore.updateServiceGroup(uuid)
}
</script>
<style scoped></style>
