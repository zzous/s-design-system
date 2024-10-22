import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '@/_setting/axios/request-devops'

import { COMMON_PROJECT_TEMPLATE_LIST, COMMON_GROUP_$COMMONGROUPCD } from '@/assets/consts/api/devops/common'

export const useDevOpsCommonStore = defineStore('devops-common', () => {
  const projectTemplates = ref([])

  const getProjectTemplates = async () => {
    projectTemplates.value = []
    const { data } = await axios.get(COMMON_PROJECT_TEMPLATE_LIST)

    projectTemplates.value = data?.data || []
  }

  const getCommonGroups = async commonGroupCd => {
    const { data } = await axios.get(COMMON_GROUP_$COMMONGROUPCD.replace('{commonGroupCd}', commonGroupCd))
    return data.data || []
  }

  return {
    projectTemplates,
    getProjectTemplates,
    getCommonGroups,
  }
})
