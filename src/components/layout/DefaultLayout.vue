<template>
  <v-app>
    <HeaderComponent
      :is-logged-in="isLoggedIn"
      :user-info="userInfo"
      :menu-items="menuItems"
      @click:logo="goToMain"
      @click:menu-item="onClickMenuItem"
      @click:log-in="onClickLogin"
      @click:sign-up="onClickSignUp"
    >
      <template #inner-append>
        <v-select
          class="sp-global-select"
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
    <div class="show-header mb-10">
      <NaviComponent />
      <RouterView id="router_view" class="show-navi" />
    </div>
  </v-app>
</template>
<script setup>
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'

import { useTokenStore } from '@/stores/login-user/token'
import { useLoginUserStore } from '@/stores/login-user/user'

import HeaderComponent from '@/components/_common/RootHeaderComponent.vue'
import NaviComponent from '@/components/_common/NaviComponent.vue'

const router = useRouter()
const tokenStore = useTokenStore()
const loginUserStore = useLoginUserStore()

const isLoggedIn = ref(false)
const userInfo = ref({})
const menuItems = ref([])
const globalServiceGroup = ref(0)
const globalServiceGroupList = ref([
  { groupNameTitle: 'Global Service Group 1', uuid: 1 },
  { groupNameTitle: 'Global Service Group 2', uuid: 2 },
  { groupNameTitle: 'Global Service Group 3', uuid: 3 }
])

const onClickLogin = () => {
  tokenStore.onLogIn()
}

const onLogOut = () => {
  console.log('on click log out')
  tokenStore.onLogOut()

  setTimeout(() => {
    loginUserStore.userInit()
  }, 10000)
}

const onClickSignUp = () => {}

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

const onUpdateGlobalValue = () => {}
</script>
<style scoped></style>
