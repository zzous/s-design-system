import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from '@/_setting/axios/request-devops'
import { SMC_FLOWS, SMC_FLOW_STATES, SMC_FLOW_STATE } from '@/assets/consts/api/devops/smc'

export const useSmcStore = defineStore('smc', () => {
    const smcFlows = ref([])
    const smcFlowState = ref()
    const smcFlowStates = ref([])
    const buildFlows = computed(() => smcFlows.value.filter(item => item.flowName.includes('Build')))
    const deployFlows = computed(() => smcFlows.value.filter(item => item.flowName.includes('Deploy')))

    const getSmcFlows = async () => {
        smcFlows.value = []
        const { data } = await axios.get(SMC_FLOWS)
        smcFlows.value = data.data
    }

    const getPostSmcFlows = async (reqBody) => {
        const { data } = await axios.post(SMC_FLOWS, reqBody)
        smcFlows.value = data?.data || []
    }

    const getPostSmcFlowState = async (reqBody) => {
        const { data } = await axios.post(SMC_FLOW_STATE, reqBody)
        smcFlowState.value = data?.data || null

    }

    const getPostSmcFlowStates = async (reqBody) => {
        const { data } = await axios.post(SMC_FLOW_STATES, reqBody)
        smcFlowStates.value = data?.data || null
    }



    return {
        smcFlows,
        smcFlowState,
        smcFlowStates,
        buildFlows,
        deployFlows,
        getSmcFlows,
        getPostSmcFlows,
        getPostSmcFlowState,
        getPostSmcFlowStates
    }
})