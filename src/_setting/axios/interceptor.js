import { Mutex } from 'async-mutex'
import { useLoadingStore } from '@/stores/components/loading'
import { getAuthToken, useTokenStore } from '@/stores/portal/token'
import cookieHelper from '@/_setting/cookie/cookie-helper'
import { LOCALSTORAGE_KEY, COOKIE_KEY } from '@/assets/consts/consts'
// import i18n from '@/_setting/i18n'

const mutex = new Mutex()

const openLoading = () => {
  useLoadingStore().openLoading()
}
const closeLoading = () => {
  useLoadingStore().closeLoading()
}

const onRefreshToken = async () => {
  const tokenStore = useTokenStore()
  await tokenStore.postRefreshToken()
}

const initializeAccessToken = (config, accessToken) => {
  config.headers.Authorization = `${accessToken}`

  const tenantUuid = localStorage.getItem(LOCALSTORAGE_KEY.SERVICE_GROUP_UUID)
  const serviceGroupName = localStorage.getItem(LOCALSTORAGE_KEY.SERVICE_GROUP_NAME)
  if (tenantUuid) {
    config.headers['STRATO-TENANT-ID'] = encodeURIComponent(tenantUuid)
    config.headers['STRATO-TENANT-NM'] = encodeURIComponent(serviceGroupName.trim())
  }
}

export const handleAuthToken = async (config) => {
  const { accessToken, refreshToken } = getAuthToken()
  if (!accessToken && refreshToken) {
    console.log('!accessToken && refreshToken')
    try {
      await onRefreshToken() // 리프레시 토큰으로 액세스 토큰 재발급
      const newAccessToken = cookieHelper.getCookie(COOKIE_KEY.ACCESS)
      if (config) {
        initializeAccessToken(config, newAccessToken)
      }
    } catch (e) {
      console.log(e)
      useTokenStore().onLogOut() // refresh 토큰으로 액세스 토큰 갱신 실패 시 로그아웃 처리
      return Promise.reject(e)
    }
  } else if (accessToken) {
    if (config) {
      initializeAccessToken(config, accessToken)
    }
  } else {
    useTokenStore().onLogIn('') // 액세스 토큰도 없고 리프레시 토큰도 없는 경우 로그인 시키기
    return Promise.reject(new Error('Access token and refresh token are both missing'))
  }
  return config
}

function setInterceptor(service) {
  if (!service) return service
  let numberOfCallPending = 0

  service.interceptors.request.use(
    async (config) => {
      numberOfCallPending += 1
      openLoading()

      try {
        if (mutex.isLocked()) {
          await mutex.waitForUnlock()
        }

        // 토큰을 재발급하며, 동일 요청이 발생하지 않도록 lock
        mutex.acquire()
        await handleAuthToken(config, null)
      } catch (error) {
        return Promise.reject(error)
      } finally {
        // 요청 완료 후 unlock
        mutex.release()
      }

      //config.headers.locale = i18n.global.locale.value
      return config
    },
    (error) => {
      numberOfCallPending += 1
      closeLoading()
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    (response) => {
      numberOfCallPending -= 1

      if (numberOfCallPending === 0) {
        closeLoading()
      }
      return response
    },
    async (error) => {
      numberOfCallPending -= 1
      if (numberOfCallPending === 0) {
        closeLoading()
      }
      if (!error?.response) {
        // console.log(error.config)
        await handleAuthToken(error.config, null)
      }

      if (error?.response?.status === 401) {
        useTokenStore().removeToken()
      }
      if (error?.response?.status === 500 && error?.response?.data?.code === 10001) {
        alert(error?.response?.data?.message)
        useTokenStore().onLogOut()
      }

      return Promise.reject(error)
    }
  )

  return service
}

export default setInterceptor
