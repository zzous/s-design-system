import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from '@/_setting/axios/request-devops'

import { JENKINS_PIPELINE_LIST } from '@/assets/consts/api/devops/jenkins'

export const useJenkinsStore = defineStore('jenkins', () => {

  const getJenkinsPipelineList = async () => {
    const { data } = await axios.post(JENKINS_PIPELINE_LIST)
    return data.data
  }

  return { getJenkinsPipelineList }
})