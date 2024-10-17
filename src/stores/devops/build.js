import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from '@/_setting/axios/request-devops'
import { BUILD_LIST, BUILD_$BUILDID_HISTORY, BUILD_$BUILDID, BUILD_$BUILDID_RUN } from '@/assets/consts/api/devops/build'
import { resolvePathVariable } from '@/assets/consts/utils/string'

export const useBuildStore = defineStore('build', () => {
    const builds = ref([])
    const buildDetail = ref(null)
    const buildHistories = ref([])

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

    const getBuildDetail = async buildId => {
        buildDetail.value = null
        const reqUrl = resolvePathVariable(BUILD_$BUILDID, { buildId })
        const { data } = await axios.get(reqUrl)
        buildDetail.value = data?.data || null
        return buildDetail.value
    }

    const getBuildHistory = async buildId => {
        buildHistories.value = []
        const reqUrl = resolvePathVariable(BUILD_$BUILDID_HISTORY, { buildId })
        const { data } = await axios.get(reqUrl)
        buildHistories.value = data?.data || []
        return buildHistories.value

    }

    const deleteBuild = async buildId => {
        const reqUrl = resolvePathVariable(BUILD_$BUILDID, { buildId })
        const { data } = await axios.delete(reqUrl)
        return data?.data || null
    }

    const getBuildsWithHistory = async parmas => {
        await getBuilds(parmas)
        // if(builds.value && builds.value.length) {
        //     builds.value.forEach(async build => {
        //         const historyList = await getBuildHistory(build.buildId)
        //         const lastHistory = historyList?.[historyList.length - 1] ?? null
        //         build.historyList = historyList
        //         build.lastBuildDate = lastHistory?.buildDate ?? '-'
        //         build.lastBuildResult = lastHistory?.buildResult ?? '-'
        //     })
        // }
        return builds.value
    }

    const executeBuild = async (buildId, reqBody) => {
        const reqUrl = resolvePathVariable(BUILD_$BUILDID_RUN, { buildId })
        const { data } = await axios.post(reqUrl, reqBody)
        return data?.data || null
    }

    return { builds, getBuilds, getBuildHistory, getBuildsWithHistory, deleteBuild, getBuildDetail, buildDetail, buildHistories, executeBuild }
})