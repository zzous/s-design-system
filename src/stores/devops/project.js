import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from '@/_setting/axios/request-devops'
import { GET_PROJECT_LIST } from '@/assets/consts/api/devops/project'

export const useProjectStore = defineStore('project', () => {
    const projects = ref([])

    /**
     * 프로젝트 목록
     * @param {*} params
     * @returns
     */
    const getProjects = async params => {
        projects.value = []
        const { data } = await axios.get(GET_PROJECT_LIST, { params })
        projects.value = data?.data || []
        return projects.value
    }

    return { projects, getProjects }
})