import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '@/_setting/axios/request-portal'
import cookieHelper from '@/_setting/cookie/cookie-helper'
import { LOGIN_USER, USER } from '@/assets/consts/api/portal/user.js'
import { COOKIE_KEY } from '@/assets/consts/consts'

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
      companyType: ''
    },
    userRoles: [],
    deptList: []
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
      cookieHelper.removeCookie(COOKIE_KEY.ACCESS)
      cookieHelper.removeCookie(COOKIE_KEY.REFRESH)
      return Promise.reject(e)
    }
  }

  async function getLoginUser() {
    try {
      return await axios.get(LOGIN_USER)
    } catch (e) {
      console.error('getLoginUser catch')
      console.error(e)
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
        companyType: ''
      },
      userRoles: []
    }
  }

  // 나의 정보 수정
  async function editUser(params) {
    const { data } = await axios.put(USER, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
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
    ownCompany
  }
})
