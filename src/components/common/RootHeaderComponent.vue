<template>
  <!--  #1C2536 -->

  <v-app-bar
      :elevation="2"
      color="#1C2536"
      :height="68"
  >
    <template #prepend>
      <div class='logo-area'>
        <img src='@/assets/images/logo.png' width="148" height="30" alt="logo"/>
        <span class='logo-text'>DevOps</span>
      </div>
      <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class='header-title-text'>서비스</v-app-bar-title>
  </v-app-bar>
  <div class='menu-back-ground' :class="{show:showMenu, hide: !showMenu}">
<!--    <v-navigation-drawer
        v-model="showMenu"
        temporary
    >
      <v-list
          :items="items"
      ></v-list>
    </v-navigation-drawer>-->
    <div id='side_menu_background'>
      <div id='side_menu_wrapper'>
        <v-list-item class='text-align-right side-menu'>
          <v-icon icon="mdi-close" @click="closeMenu"/>
        </v-list-item>
        <v-list-item class='side-menu' :title="item.title" :key="item.title" v-for="item in items" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { HEADER_MENU } from '@/assets/consts/consts'
import { ref } from 'vue'
const showMenu = ref(false)
const items = ref(HEADER_MENU)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
const closeMenu = () => {
  showMenu.value = false
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/variables";
.side-menu {
  cursor: pointer;
  height: 50px;
  padding: 0;
}
#side_menu_wrapper {
  position: relative;
  top: 90px;
}
#side_menu_background {
  width: 420px;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  background: $main-color;
  color: #fff;
  padding-left: 30px;
  padding-right: 30px;
  overflow: hidden;
}
.logo-area {
  display: inline-block;
  width: 270px;
  margin-left: 30px;
  position: relative;
}
.logo-text {
  position: absolute;
  top: 12px;
  left: 130px;
  font-size: 15px;
}
.header-title-text {
  font-size: 15px;
}
.menu-back-ground {
  position: absolute;
  width: 100%;
  z-index: 100;
  background: rgba(0,0,0,0.2);
}
.menu-back-ground.hide {
  height: 0;
  transition: linear 0.5s;
}
.menu-back-ground.show {
  height: 100%;
  transition: linear 0.5s;
}
</style>