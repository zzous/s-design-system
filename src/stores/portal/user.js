import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '@/_setting/axios/request-user'
import cookieHelper from '@/_setting/cookie/cookie-helper'
import { GET_LOGIN_USER_DETAIL, PUT_LOGIN_USER_DETAIL } from '@/assets/consts/api/portal/user.js'


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
      cookieHelper.removeCookie('access')
      cookieHelper.removeCookie('refresh')
      return Promise.reject(e)
    }
  }

  async function getLoginUser() {
    try {
      return await axios.get(GET_LOGIN_USER_DETAIL)
    } catch (e) {
      console.log(e)
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
    const { data } = await axios.put(PUT_LOGIN_USER_DETAIL, params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    // console.log(data)
    return data
  }

  // async function postLogout() {
  //   const refreshToken = cookieHelper.getCookie('refresh')
  //   cookieHelper.removeCookie('access')
  //   cookieHelper.removeCookie('refresh')
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
