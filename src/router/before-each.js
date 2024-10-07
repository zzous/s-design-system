import { useTokenStore } from '@/stores/portal/token'
import { useUserStore } from '@/stores/portal/user'
import { useMenuStore } from '@/stores/portal/menu'
import { useServiceGroupStore } from '@/stores/portal/service-group'
import { useDevOpsServiceGroupStore } from '@/stores/devops/service-group'
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/devops/project'

export const beforeEach = (router) => {
  router.beforeEach(async (to, from, next) => {
    // to.query 를 구조분해
    const { token, ...restQuery } = to.query

    //token 이 있을경우
    if(token) {
      try{
        //토큰 저장
        const tokenObj = JSON.parse(atob(token))
        useTokenStore().setToken(tokenObj)
        //사용자 정보 요청
        useUserStore().getUserDetail()
        //메뉴정보 요청
        useMenuStore().getAccessibleMenu()
        //쿼리스트링에서 토큰 제거하고 원래 시도한 경로로 리다이렉트
        next({ path: to.path, query: restQuery, replace: true })
      }catch(e) {
        console.error(e)
        next()
      }
    } else{
      //메뉴 정보 가져온 다음 메뉴 없으면 세션 스토리지에 메뉴 있는지 확인 하고 가져올것
      //const isThereMenu = useMenuStore().menuPaths.length
      //세션 스토리지에서 메뉴 가져오기
      const menuStr = sessionStorage.getItem('STRATO_PORTAL_MENU')
      const flatMenuStr = sessionStorage.getItem('STRATO_PORTAL_MENU_FLAT')
      //메뉴가 있다면 store 에 추가
      if(menuStr) useMenuStore().setMenuPaths(JSON.parse(menuStr))
      if(flatMenuStr) useMenuStore().setFlatMenuPaths(JSON.parse(flatMenuStr))
      //메뉴가 없다면 요청
      if(!menuStr || !flatMenuStr ) {
        useMenuStore().getAccessibleMenu()
      }

      //프로젝트 없을경우 프로젝트 가져오기
      if(!useProjectStore().projects || !useProjectStore().projects.length ) {
        await useProjectStore().getProjects()
      }

      //진행
      next()
    }
  })
  return router
}

export const beforeResolve = (router) => {
  router.beforeResolve(async () => {
    const sgStore = useServiceGroupStore()
    const devOpsSgStore = useDevOpsServiceGroupStore()
    const { serviceGroupUuid } = storeToRefs(sgStore)
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

      await devOpsSgStore.getServiceGroupDetail(serviceGroupUuid.value)
    }
  })
  return router
}
