import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '@/_setting/axios/request-portal'
import { GET_PORTAL_ROLE_GROUPS } from '@/assets/consts/api/portal/service-group'
import { LOCALSTORAGE_KEY } from '@/assets/consts/consts'

export const useServiceGroupStore = defineStore('service-group', () => {
    const serviceGroupUuid = ref('')
    const serviceGroupName = ref('')
    const serviceGroups = ref([])

    const setServiceGroup = data => {
        const localStorageSg = localStorage.getItem(LOCALSTORAGE_KEY.SERVICE_GROUP_UUID)
        const localStorageSgName = localStorage.getItem(
            LOCALSTORAGE_KEY.SERVICE_GROUP_NAME,
        )

        if (data.length && !localStorageSg) {
            // 서비스그룹 uuid 정보가 local storage에 저장되지 않은 경우
            // 목록에서 첫번째 아이템의 정보 매핑
            const topSg = data[0]
            localStorage.setItem(LOCALSTORAGE_KEY.SERVICE_GROUP_UUID, topSg.uuid)
            localStorage.setItem(LOCALSTORAGE_KEY.SERVICE_GROUP_NAME, topSg.groupName)
            serviceGroupUuid.value = topSg.uuid
            serviceGroupName.value = topSg.groupName
        } else if (data.length && localStorageSg) {
            // 서비스그룹 uuid 정보가 local storage, list에 있는 경우
            const findItem = data.find(item => item.uuid === localStorageSg)
            if (findItem) {
                serviceGroupUuid.value = localStorageSg
                serviceGroupName.value = findItem.groupName
                // 서비스그룹 uuid 정보가 local storage에 저장되지 않은 경우
                if (!localStorageSgName) {
                    localStorage.setItem(
                        LOCALSTORAGE_KEY.SERVICE_GROUP_NAME,
                        findItem.groupName,
                    )
                }
            } else {
                // 목록에서 첫번째 아이템의 정보 매핑
                const topSg = data[0]
                localStorage.setItem(LOCALSTORAGE_KEY.SERVICE_GROUP_UUID, topSg.uuid)
                localStorage.setItem(LOCALSTORAGE_KEY.SERVICE_GROUP_NAME, topSg.groupName)
                serviceGroupUuid.value = topSg.uuid
                serviceGroupName.value = topSg.groupName
            }
        }
        // 서비스 그룹 목록이 없는 경우 localStorage에서 삭제
        if (!data.length) {
            localStorage.removeItem(LOCALSTORAGE_KEY.SERVICE_GROUP_UUID)
            localStorage.removeItem(LOCALSTORAGE_KEY.SERVICE_GROUP_NAME)
            serviceGroupUuid.value = null
            serviceGroupName.value = null
        }
    }


    const getServiceGroups = async (params) => {
        const { data } = await axios.get(GET_PORTAL_ROLE_GROUPS, { params })
        serviceGroups.value = data
        setServiceGroup(data)
    }

    const updateServiceGroup = async (uuid) => {
       // 파라미터로 받은 uuid로 서비시그룹 목록에서 있는지 확인 후 값 업데이트
        const isContain = serviceGroups.value.find(sg => sg.uuid === uuid)
        if (!isContain) {
            console.error('serviceGroupList에 없는 uuid입니다')
            return
        }
        localStorage.setItem(LOCALSTORAGE_KEY.SERVICE_GROUP_UUID, isContain.uuid)
        localStorage.setItem(LOCALSTORAGE_KEY.SERVICE_GROUP_NAME, isContain.groupName)
        serviceGroupUuid.value = isContain.uuid
        serviceGroupName.value = isContain.groupName
    }

    return { serviceGroupUuid, serviceGroupName, serviceGroups, setServiceGroup, getServiceGroups, updateServiceGroup }
})