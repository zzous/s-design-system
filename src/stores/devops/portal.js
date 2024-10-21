import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '@/_setting/axios/request-devops'

import { PORTAL_SERVICEGROUP_$SERVICEGROUPID_USER_LIST } from '@/assets/consts/api/devops/portal'

export const useDevOpsPortalStore = defineStore('devops-portal', () => {
  const projectManagers = ref([])

  const getProjectManagers = async serviceGroupId => {
    projectManagers.value = []
    const { data } = await axios.get(
      PORTAL_SERVICEGROUP_$SERVICEGROUPID_USER_LIST.replace('{serviceGroupId}', serviceGroupId),
    )

    projectManagers.value = data?.data || []
  }

  return {
    projectManagers,
    getProjectManagers,
  }
})
