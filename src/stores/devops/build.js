import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from '@/_setting/axios/request-devops'
import { BUILD_LIST, BUILD_$BUILDID_HISTORY } from '@/assets/consts/api/devops/build'
import { resolvePathVariable } from '@/assets/consts/utils/string'

export const useBuildStore = defineStore('build', () => {
    const builds = ref([])

    /**
     * 빌드 목록
     * @param {*} params
     * @returns
     */
    const getBuilds = async params => {
        //builds.value = []
        const { data } = await axios.post(BUILD_LIST, { params })
        builds.value = data?.data || []
        return builds.value
    }

    const getBuildHistory = async buildId => {
        const reqUrl = resolvePathVariable(BUILD_$BUILDID_HISTORY, { buildId })
        const { data } = await axios.get(reqUrl)
        return data?.data || []

    }

    const getBuildsWithHistory = async parmas => {
        await getBuilds(parmas)
        if(builds.value && builds.value.length) {
            builds.value.forEach(async build => {
                const historyList = await getBuildHistory(build.buildId)
                const lastHistory = historyList?.[historyList.length - 1] ?? null
                build.historyList = historyList
                build.lastBuildDate = lastHistory?.buildDate ?? '-'
                build.lastBuildResult = lastHistory?.buildResult ?? '-'
            })
        }
        return builds.value
    }

    return { builds, getBuilds, getBuildHistory, getBuildsWithHistory }
})