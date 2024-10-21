import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '@/_setting/axios/request-portal'
import { UserMenuItems } from '@/assets/data/paths'
// import { menuNameLang } from '@/_setting/i18n'
import * as _ from 'lodash-es'
import { TREEMENUS_ACCESSIBLE } from '@/assets/consts/api/portal/menu'
import { SESSIONSTORAGE_KEY } from '@/assets/consts/consts'

export const useMenuStore = defineStore('menu', () => {
  // flat menu(path 정보를 갖고 있음.)
  // 모든 프로젝트에 대한 (devops, msa 등등) 메뉴 트리구조 실제 사용시 해당 메뉴를 필터링 하여 사용
  const menuPaths = ref([])
  // 모든 프로젝트에 대한 (devops, msa 등등) 메뉴 목록
  const flatMenuPaths = ref([])
  // 햔제 화면의 메뉴
  const currentMenu = ref({})

  const serviceMenus = computed(() => {
    return menuPaths.value.map(menu => {
      return {
        menuName: menu.menuNameKr,
        menuCode: menu.menuCode,
        menuUrl: menu.menuUrl,
        accessible: menu.accessible,
        viewable: menu.viewable,
      }
    })
  })

  const setMenuPaths = newMenuPaths => {
    menuPaths.value = newMenuPaths
  }
  const setFlatMenuPaths = newFlatMenuPaths => {
    flatMenuPaths.value = newFlatMenuPaths
  }

  const setAccessibleMenu = data => {
    menuPaths.value = []
    //동일한 메뉴 코드를 가진 menuItem에 menu 권한(accessible)을 세팅한다.
    const setMenu = menuItem => {
      const findMenuItem = UserMenuItems.find(flatMenu => {
        if (flatMenu.menuCode === menuItem.menuCode) {
          return flatMenu
        }
        return false
      })

      if (menuItem.subMenus?.length) {
        if (!import.meta.env.DEV) {
          menuItem.subMenus = menuItem.subMenus
            .filter(subMenu => subMenu.viewable !== 'N')
            .map(subMenu => setMenu(subMenu))
        } else {
          menuItem.subMenus = menuItem.subMenus.map(subMenu => setMenu(subMenu))
        }
      }
      return {
        ...menuItem,
        menuUrl: findMenuItem?.menuUrl,
        alt: findMenuItem?.alt,
      }
    }

    if (data.length && UserMenuItems.length) {
      if (!import.meta.env.DEV) {
        menuPaths.value = data.filter(menu => menu.viewable !== 'N').map(menu => setMenu(menu))
      } else {
        menuPaths.value = data.map(menu => setMenu(menu))
      }
    }
  }

  // flat menu에 권한 세팅
  const setFlatMenuWithAccessible = data => {
    const findMenu = (menuList, findCode) => {
      let result = null
      if (menuList.length) {
        menuList.some(item => {
          if (item.menuCode === findCode) {
            result = item
            return item
          }
          if (item.menuCode !== findCode && item.subMenus.length) {
            const findSubMenu = findMenu(item.subMenus, findCode)
            if (findSubMenu) {
              result = findSubMenu
            }
          }
          return false
        })
      }
      return result
    }

    flatMenuPaths.value = UserMenuItems.map(menuItem => {
      if (menuItem.accessible !== undefined) {
        menuItem.viewable = 'Y'
        return menuItem
      }
      const findMenuItem = findMenu(data, menuItem.menuCode)
      return {
        ...menuItem,
        accessible: findMenuItem?.accessible,
        //menuName: findMenuItem?.[menuNameLang.value],
        clientId: findMenuItem?.clientId,
        viewable: findMenuItem?.viewable || 'Y',
      }
    })
  }

  // 권한 정보 및 tree 구조를 가진 메뉴 목록 호출
  const getAccessibleMenu = async () => {
    const { data } = await axios.get(TREEMENUS_ACCESSIBLE)
    const datas = _.cloneDeep([...data])
    setAccessibleMenu(data)
    setFlatMenuWithAccessible(datas)

    // Client 저장소에 저장
    sessionStorage.setItem(SESSIONSTORAGE_KEY.STRATO_PORTAL_MENU, JSON.stringify(menuPaths.value))
    sessionStorage.setItem(SESSIONSTORAGE_KEY.STRATO_PORTAL_MENU_FLAT, JSON.stringify(flatMenuPaths.value))
  }
  return {
    menuPaths,
    serviceMenus,
    flatMenuPaths,
    currentMenu,
    setMenuPaths,
    setFlatMenuPaths,
    setAccessibleMenu,
    getAccessibleMenu,
  }
})
