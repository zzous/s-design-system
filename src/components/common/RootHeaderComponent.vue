<template>
  <!--  #1C2536 -->

  <v-app-bar
      :elevation="2"
      color="#1C2536"
      :height="68"
  >
    <template #prepend>
      <div class="logoArea">
        <img src='@/assets/images/logo.png' width="148" height="30" alt="logo"/>
        <span class="logoText">DevOps</span>
      </div>
      <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class="headerTitleText">서비스</v-app-bar-title>
  </v-app-bar>
  <div class="menuBackGround" :class="{show:showMenu, hide: !showMenu}">
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
        <v-list-item class="textAlignRight sideMenu">
          <v-icon icon="mdi-close" @click="closeMenu"/>
        </v-list-item>
        <v-list-item class="sideMenu" :title="item.title" :key="item.title" v-for="item in items" />
      </div>
    </div>
  </div>
</template>

<script>
import { HEADER_MENU } from '@/assets/consts/consts'
export default {
  name: "RootHeaderComponent",
  data: function () {
    return {
      showMenu: false,
      items: HEADER_MENU
    }
  },
  methods: {
    toggleMenu: function () {
      this.showMenu = !this.showMenu
    },
    closeMenu: function () {
      this.showMenu = false
    }

  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/variables";
.sideMenu {
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
.logoArea {
  display: inline-block;
  width: 270px;
  margin-left: 30px;
  position: relative;
}
.logoText {
  position: absolute;
  top: 12px;
  left: 130px;
  font-size: 15px;
}
.headerTitleText {
  font-size: 15px;
}
.menuBackGround {
  position: absolute;
  width: 100%;
  z-index: 100;
  background: rgba(0,0,0,0.2);
}
.menuBackGround.hide {
  height: 0;
  transition: linear 0.5s;
}
.menuBackGround.show {
  height: 100%;
  transition: linear 0.5s;
}
</style>