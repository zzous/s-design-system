import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const alertAttrs = ref({
    dialog: true,
    titleName: 'message title',
    color: '#5406DE',
    timeout: 3000,
    isClose: true,
    uuid: null,
  })
  const alertItemStack = ref([])

  const showAlert = ref(false)

  function closeAlert(index) {
    alertItemStack.value.splice(index, 1)
    // showAlert.value = false
  }

  function deleteAlert(uuid) {
    const findIndex = alertItemStack.value.findIndex(item => item.uuid === uuid)
    // console.log(findIndex, uuid)
    if (findIndex > -1) {
      alertItemStack.value.splice(findIndex, 1)
      // console.log(alertItemStack.value)
    }
  }

  function openSuccessAlert(titleName) {
    const attrs = {
      titleName,
      type: 'success',
    }
    openAlert(attrs)
  }

  function openErrorAlert(titleName) {
    const attrs = {
      titleName,
      type: 'error',
    }
    openAlert(attrs)
  }

  function openWarnAlert(titleName) {
    const attrs = {
      titleName,
      type: 'warn',
    }
    openAlert(attrs)
  }

  function openDefaultAlert(titleName) {
    const attrs = {
      titleName,
      type: 'default',
    }
    openAlert(attrs)
  }

  function openAlert(attrs) {
    showAlert.value = false
    if (attrs) {
      if (attrs.type === 'warn') {
        attrs.color = '#FF8000'
      } else if (attrs.type === 'success') {
        attrs.color = '#29AA54'
      } else if (attrs.type === 'error') {
        attrs.color = '#DE0655'
      } else {
        attrs.color = '#036EB8'
      }
    }
    const uuid = Math.floor(Math.random() * 10 ** 8)
    const alertItem = { ...alertAttrs.value, ...attrs, uuid }
    alertItemStack.value.push(alertItem)
    setTimeout(() => {
      deleteAlert(uuid)
    }, alertItem.timeout)

    alertAttrs.value = {
      ...alertAttrs.value,
      attrs,
    }
  }

  return {
    alertAttrs,
    showAlert,
    openAlert,
    closeAlert,
    alertItemStack,
    openSuccessAlert,
    openErrorAlert,
    openWarnAlert,
    openDefaultAlert,
  }
})
