import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from '@/_setting/axios/request-devops'

import {
  DEPLOY_LIST,
  DEPLOY_$DEPLOYID,
  K8S_DEPLOY,
  K8S_DEPLOY_DEPLOY_NAME_DUPLICATE,
  CONFIG_K8S_LIST,
  CONFIG_K8S_$CLUSTERID_NAMESPACE_NAME,
  K8S_DEPLOY_YAML,
  K8S_DEPLOY_NAME_DUPLICATE,
} from '@/assets/consts/api/devops/deploy'

export const useDeployStore = defineStore('deploy', () => {
  const deploies = ref([])

  const getDeploys = async params => {
    const { data } = await axios.get(DEPLOY_LIST, { params })
    deploies.value = data.data || []
  }

  const getDeploy = async deployId => {
    const { data } = await axios.get(DEPLOY_$DEPLOYID.replace('{deployId}', deployId))
    return data.data
  }

  const fetchNewDeploy = async params => {
    const { data } = await axios.post(K8S_DEPLOY, params)
    return data
  }

  const fetchDeleteDeploy = async deployId => {
    const { data } = await axios.delete(DEPLOY_$DEPLOYID.replace('{deployId}', deployId))
    return data
  }

  const fetchDeployNameDuplicate = async deployName => {
    try {
      const { data } = await axios.get(K8S_DEPLOY_DEPLOY_NAME_DUPLICATE, {
        params: { name: deployName },
      })
      return data.data
    } catch (e) {
      throw new Error(e)
    }
  }

  const getConfigList = async params => {
    const { data } = await axios.get(CONFIG_K8S_LIST, { params })
    return data.data || []
  }

  const getNamespaces = async clusterId => {
    const { data } = await axios.get(CONFIG_K8S_$CLUSTERID_NAMESPACE_NAME.replace('{clusterId}', clusterId))
    return data.data || []
  }

  const getK8sDeployYaml = async deployId => {
    const { data } = await axios.get(K8S_DEPLOY_YAML.replace('{deployId}', deployId))
    return data.data
  }

  const fetchControllerNameDuplicate = async params => {
    try {
      const { data } = await axios.get(K8S_DEPLOY_NAME_DUPLICATE, { params })
      return data.data
    } catch (e) {
      throw new Error(e)
    }
  }

  return {
    deploies,
    getDeploys,
    getDeploy,
    fetchNewDeploy,
    fetchDeleteDeploy,
    fetchDeployNameDuplicate,
    getConfigList,
    getNamespaces,
    getK8sDeployYaml,
    fetchControllerNameDuplicate,
  }
})
