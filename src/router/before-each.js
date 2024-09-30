import { useTokenStore } from '@/stores/portal/token'
import { useUserStore } from '@/stores/portal/user'
import { useMenuStore } from '@/stores/portal/menu'
import { useServiceGroupStore } from '@/stores/portal/service-group'
import { storeToRefs } from 'pinia'

export const beforeEach = (router) => {
    router.beforeEach((to, from, next) => {
        // to.query 를 구조분해
        const { token, ...restQuery } = to.query;

        //token 이 있을경우
        if(token) {
            try{
            //토큰 저장
            const tokenObj = JSON.parse(atob(token))
            useTokenStore().setToken(tokenObj)
            useUserStore().getUserDetail()
            useMenuStore().getAccessibleMenu()
            //TODO : 사용자 정보 요청
            //쿼리스트링에서 토큰 제거하고 원래 시도한 경로로 리다이렉트
            next({ path: to.path, query: restQuery, replace: true });
            }catch(e) {
            console.error(e)
            next()
            }
        } else{
            //진행
            next()
        }
    })
    return router
}

export const beforeResolve = (router) => {
    router.beforeResolve(async () => {
        const sgStore = useServiceGroupStore()
        const userStore = useUserStore()
        const { isLoggedIn } = storeToRefs(userStore)
        if (!isLoggedIn.value) {
          // 로그인 서버에 로그인이 되어있는데 사용자 정보는 없고 access 토큰은 있을 경우
          await userStore.getUserDetail()
        }
        if (isLoggedIn.value) {
          // 로그인 상태일 경우
          await sgStore.getServiceGroups({
            clientId: 'strato-devops',
          })
        }
      })
    return router
}
