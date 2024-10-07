/* DevOps는 자체적으로 API 요청 시 service group의 id 값을 사용하여 아래의
 * 상태 관리 코드가 사용 됩니다.
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '@/_setting/axios/request-devops'

import { GET_SERVICE_GROUP_DETAIL } from '@/assets/consts/api/devops/service-group'

export const useDevOpsServiceGroupStore = defineStore('devops-service-group', () => {
    const serviceGroupId = ref(0)

    const getServiceGroupDetail = async uuid => {
        serviceGroupId.value = 0
        const { data } = await axios.get(GET_SERVICE_GROUP_DETAIL, { params: {
            serviceGroupUuid: uuid
        } })
        serviceGroupId.value = data.data?.serviceGroupId || 0
    }

    return { serviceGroupId, getServiceGroupDetail }
})