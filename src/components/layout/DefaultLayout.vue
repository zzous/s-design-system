<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/_common/RootHeaderComponent.vue'
import NaviComponent from '@/components/_common/NaviComponent.vue'
</script>
<template>
  <v-app>
    <HeaderComponent />
    <div class="show-header mb-10">
      <NaviComponent />
      <RouterView id="router_view" class="show-navi" />
    </div>
  </v-app>
</template>

<style scoped></style>
