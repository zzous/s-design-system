<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'

</script>

<template>
<!--  <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="125" height="125" />-->
<!--  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>-->
  <v-app>
    <HeaderComponent />
    <RouterView class="routerView"/>
  </v-app>
</template>

<style scoped>

</style>
