import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '@/_setting/axios/request-devops'

import { COMMON_PROJECT_TEMPLATE_LIST, COMMON_GROUP_$COMMONGROUPCD } from '@/assets/consts/api/devops/common'

export const useDevOpsCommonStore = defineStore('devops-common', () => {
  const projectTemplates = ref([])
  const groupJdkVersions = ref([])

  const getProjectTemplates = async () => {
    projectTemplates.value = []
    const { data } = await axios.get(COMMON_PROJECT_TEMPLATE_LIST)

    projectTemplates.value = data?.data || []
  }

  const getGroupJdkVersions = async () => {
    groupJdkVersions.value = []
    const { data } = await axios.get(COMMON_GROUP_$COMMONGROUPCD.replace('{commonGroupCd}', 'jdkversion'))
    groupJdkVersions.value = data.data || []
  }

  return {
    projectTemplates,
    getProjectTemplates,
    groupJdkVersions,
    getGroupJdkVersions,
  }
})
