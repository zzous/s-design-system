<template>
  <v-btn :color='btnColor'>{{title}}</v-btn>
</template>

<script>
import { DEFAULT_BUTTON_COLOR } from '@/assets/consts/consts'

export default {
  name: 'DefaultButtonComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      btnColor: DEFAULT_BUTTON_COLOR
    }
  }
}
</script>

<style scoped>

</style>