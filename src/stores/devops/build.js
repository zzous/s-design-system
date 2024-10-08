import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from '@/_setting/axios/request-devops'
import { BUILD_LIST, BUILD_HISTORY_LIST } from '@/assets/consts/api/devops/build'
import { resolvePathVariable } from '@/assets/consts/utils/string'

export const useBuildStore = defineStore('build', () => {
    const builds = ref([])

    /**
     * 빌드 목록
     * @param {*} params
     * @returns
     */
    const getBuilds = async params => {
        builds.value = []
        const { data } = await axios.post(BUILD_LIST, { params })
        builds.value = data?.data || []
        return builds.value
    }

    const getBuildHistory = async buildId => {
        const reqUrl = resolvePathVariable(BUILD_HISTORY_LIST, { buildId })
        // const { data } = await axios.get(reqUrl)
        // console.error(data)

    }

    const getBuildsWithHistory = async parmas => {
        await getBuilds(parmas)
        if(builds.value && builds.value.length) {
            builds.value.forEach(build => {
                getBuildHistory(build.buildId)
            })
        }
    }

    return { builds, getBuilds, getBuildHistory, getBuildsWithHistory }
})