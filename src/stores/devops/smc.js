import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '@/_setting/axios/request-devops'
import { SMC_FLOWS } from '@/assets/consts/api/devops/smc'

export const useSmcStore = defineStore('smc', () => {
    const smcFlows = ref([])

    const buildFlows = computed(() => smcFlows.value.filter(item => item.flowName.includes('Build')))
    const deployFlows = computed(() => smcFlows.value.filter(item => item.flowName.includes('Deploy')))

    const getSmcFlows = async () => {
        smcFlows.value = []

        const { data } = await axios.get(SMC_FLOWS)
        smcFlows.value = data.data
    }

    return {
        smcFlows,
        buildFlows,
        deployFlows,
        getSmcFlows
    }
})