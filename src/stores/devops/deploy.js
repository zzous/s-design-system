import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from '@/_setting/axios/request-devops'

import { DEPLOY_LIST, DEPLOY_$DEPLOYID } from '@/assets/consts/api/devops/deploy'

export const useDeployStore = defineStore('deploy', () => {
  const deploies = ref([])

  const getDeployList = async (params) => {
    const { data } = await axios.get(DEPLOY_LIST, { params })
    deploies.value = data.data || []
  }

  const getDeploy = async (deployId) => {
    const { data } = await axios.get(DEPLOY_$DEPLOYID.replace('{deployId}', deployId))
    return data.data
  }

  return { deploies, getDeployList, getDeploy }
})