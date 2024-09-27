import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '@/_setting/axios/request-user'
import moment from 'moment'
import cookieHelper from '@/_setting/cookie/cookie-helper'

const USER_K8S_SERVICE = import.meta.env.VITE_USER_K8S_SERVICE ? `${import.meta.env.VITE_USER_K8S_SERVICE}` : ''
const POST_REFRESH_TOKEN = `${USER_K8S_SERVICE}/auth/refresh_token`

export const getAuthToken = () => {
  return {
    accessToken: cookieHelper.getCookie('access'),
    refreshToken: cookieHelper.getCookie('refresh')
  }
}

export const useTokenStore = defineStore('token', () => {
  const requestTime = ref(9999)
  const intervalId = ref(null)

  function setToken(token) {
    if (!token) return
    const tokenStore = useTokenStore()
    cookieHelper.setCookie('access', token.access_token, null, token.expires_at)
    cookieHelper.setCookie('refresh', token.refresh_token, null, token.refresh_expires_at)

    if (token) {
      const diffSecond = moment(token.expires_at * 1000).diff(moment(), 'second')
      requestTime.value = diffSecond - 10
      if (intervalId.value) {
        clearInterval(intervalId.value)
      }
      tokenStore.requestInterval()
    }
  }

  function removeToken() {
    cookieHelper.removeCookie('access')
    cookieHelper.removeCookie('refresh')
  }

  function removeStorage() {
    sessionStorage.removeItem('STRATO_PORTAL_MENU')
    sessionStorage.removeItem('STRATO_PORTAL_MENU_FLAT')
  }

  function onLogIn(toPath) {
    // 권한 메뉴가 남아있을 경우 정보 삭제
    removeStorage()
    let redirectUrl = encodeURIComponent(window.location.href)
    if (toPath) {
      redirectUrl = `${window.location.origin}${import.meta.env.VITE_BASE_PUBLIC_URL}${toPath}`
    }
    window.location.href = `${import.meta.env.VITE_USER_API}/auth/login?redirectUrl=${redirectUrl}`
  }

  async function onLogOut() {
    const { refreshToken } = getAuthToken()
    removeToken()
    removeStorage()

    // 권한 메뉴 정보 삭제
    const redirectUrl = `${window.location.origin}${import.meta.env.VITE_BASE_PUBLIC_URL}`
    window.location.href = `${import.meta.env.VITE_USER_API}/auth/logout?refreshToken=${refreshToken}&redirectUrl=${encodeURIComponent(
      redirectUrl
    )}`
  }

  // eslint-disable-next-line consistent-return
  async function postRefreshToken() {
    removeStorage()
    const { refreshToken } = getAuthToken()
    try {
      if (!refreshToken || refreshToken === 'undefined') {
        onLogIn()
        return Promise.reject(new Error('Refresh token is null or undefined'))
      }
      const { data } = await axios.post(POST_REFRESH_TOKEN, {
        refresh_token: refreshToken
      })
      if (Object.keys(data).length) {
        setToken(data)
      }
      return Promise.resolve(data)
    } catch (e) {
      removeToken()
      if (e?.response?.data.code === 12000) {
        onLogIn()
      }
      return Promise.reject(e)
    }
  }

  function requestInterval() {
    if (document.hasFocus()) {
      intervalId.value = setInterval(async () => {
        await postRefreshToken()
      }, requestTime.value * 1000)
    }
  }

  return {
    onLogIn,
    onLogOut,
    setToken,
    postRefreshToken,
    requestInterval,
    removeToken,
    removeStorage,
    requestTime,
    intervalId
  }
})
