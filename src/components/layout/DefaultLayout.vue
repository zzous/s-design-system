<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/common/RootHeaderComponent.vue'
import NaviComponent from '@/components/common/NaviComponent.vue'


</script>
<template>
  <v-app>
    <HeaderComponent />
    <div class='show-header'>
      <NaviComponent />
      <RouterView id='router_view' class='show-navi' />
    </div>
  </v-app>
</template>

<style scoped>

</style>