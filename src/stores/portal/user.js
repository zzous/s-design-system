import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '@/_setting/axios/request-portal'
import cookieHelper from '@/_setting/cookie/cookie-helper'
import { LOGIN_USER, USER } from '@/assets/consts/api/portal/user.js'
import { COOKIE_KEY } from '@/assets/consts/consts'
import { useTokenStore } from './token'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    uuid: '',
    userId: '',
    email: '',
    usernameKr: '',
    contact: '',
    companyName: '',
    company: {
      uuid: '',
      companyNameKr: '',
      companyType: '',
    },
    userRoles: [],
    deptList: [],
  })

  const isLoggedIn = computed(() => !!userInfo.value.userId)

  async function getUserDetail() {
    const loginStore = useUserStore()
    try {
      const { data } = await loginStore.getLoginUser()
      if (data) {
        userInfo.value = data
        return Promise.resolve(data)
      }
      throw new Error('empty')
    } catch (e) {
      cookieHelper.deleteCookie(COOKIE_KEY.ACCESS)
      cookieHelper.deleteCookie(COOKIE_KEY.REFRESH)
      return Promise.reject(e)
    }
  }

  async function getLoginUser() {
    try {
      //access token 존재 여부 확인, 없으면 user refresh
      let userData = null
      const accessToken = cookieHelper.getCookie(COOKIE_KEY.ACCESS)
      const refreshToken = cookieHelper.getCookie(COOKIE_KEY.REFRESH)
      if (accessToken) {
        userData = await axios.get(LOGIN_USER)
      } else if (refreshToken) {
        await useTokenStore().postRefreshToken()
        userData = await axios.get(LOGIN_USER)
      } else {
        //로그인 페이지 이동
        useTokenStore().onLogIn()
      }
      return userData
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  function userInit() {
    userInfo.value = {
      uuid: '',
      userId: '',
      email: '',
      name: '',
      contact: '',
      company: {
        uuid: '',
        companyNameKr: '',
        companyType: '',
      },
      userRoles: [],
    }
  }

  // 나의 정보 수정
  async function editUser(params) {
    const { data } = await axios.put(USER, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    // console.log(data)
    return data
  }

  // async function postLogout() {
  //   const refreshToken = cookieHelper.getCookie(COOKIE_KEY.REFRESH)
  //   cookieHelper.removeCookie(COOKIE_KEY.ACCESS)
  //   cookieHelper.removeCookie(COOKIE_KEY.REFRESH)
  //   await axios.get(POST_LOGOUT, {
  //     params: {
  //       redirectUrl: window.location.origin,
  //       refreshToken,
  //     },
  //   })
  // }

  const isManagingComp = computed(() => userInfo.value.company.companyType === 'managing')

  const ownCompany = computed(() => userInfo.value.company)

  return {
    userInfo,
    isLoggedIn,
    getUserDetail,
    userInit,
    editUser,
    getLoginUser,
    // postLogout,

    isManagingComp,
    ownCompany,
  }
})
