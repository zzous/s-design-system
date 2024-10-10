import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from '@/_setting/axios/request-devops'
import { PROJECT_LIST, PROJECT_$PROJECTID } from '@/assets/consts/api/devops/project'

export const useProjectStore = defineStore('project', () => {
    const projects = ref([])

    /**
     * 프로젝트 목록
     * @param {*} params
     * @returns
     */
    const getProjects = async params => {
        projects.value = []
        const { data } = await axios.get(PROJECT_LIST, { params })
        projects.value = data?.data || []
        return projects.value
    }

    const fetchDeleteProject = async ({ projectId }) => {
        await axios.delete(PROJECT_$PROJECTID.replace('{projectId}', projectId))
    }

    return { projects, getProjects, fetchDeleteProject }
})