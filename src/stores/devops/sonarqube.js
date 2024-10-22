import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '@/_setting/axios/request-devops'
import { SONARQUBE_RULE_LIST } from '@/assets/consts/api/devops/sonarqube'

export const useSonarqubeStore = defineStore('sonarqube', () => {
  const rules = ref([])

  const getSonarqubeRules = async (reqBody) => {
    const { data } = await axios.post(SONARQUBE_RULE_LIST, reqBody)
    rules.value = data?.data || []
    return rules.value
  }

  return {
    rules,
    getSonarqubeRules,
  }
})
