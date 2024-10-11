import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from '@/_setting/axios/request-devops'
import { PROJECT_LIST, PROJECT_$PROJECTID, PROJECT } from '@/assets/consts/api/devops/project'

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

    const fetchDeleteProject = async (projectId) => {
        await axios.delete(PROJECT_$PROJECTID.replace('{projectId}', projectId))
    }

    const fetchNewProject = async (params) => {
        try {
            const { data } = await axios.post(PROJECT, params, { headers: { 'Content-Type': 'multipart/form-data' } })
            if (data.code === 200) {
                return data.data
            }
            throw new Error(data.message)
        } catch(e) {
            throw new Error(e)
        }

    }
    const fetchEditProject = async (projectId, params) => {
        try {
            const { data } = await axios.put(PROJECT_$PROJECTID.replace('{projectId}', projectId), params)
            if (data.code === 200) {
                return data
            }
            throw new Error(data.message)
        } catch(e) {
            throw new Error(e)
        }

    }

    return { projects, getProjects, fetchDeleteProject, fetchNewProject, fetchEditProject }
})