<template>
  <!--  #1C2536 -->

  <v-app-bar
      :elevation="2"
      color="#1C2536"
      :height="68"
  >
    <template v-slot:prepend>
      <div class="logoArea">
        <img src="@/assets/logo.png" width="148" height="30" alt="logo"/>
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
    <div class="sideMenuBackGround">
      <div class="sideMenuWrapper">
        <v-list-item class="textAlignRight sideMenu">
          <v-icon icon="mdi-close" @click="closeMenu"/>
        </v-list-item>
        <v-list-item class="sideMenu" :title="item.title" :key="item.title" v-for="item in items" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: function () {
    return {
      showMenu: false,
      items: [
        {
          title: '사용자 관리',
          value: 'user manage',
        },
        {
          title: '예측 관리',
          value: 'expecting',
        }
      ],
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
.sideMenu {
  cursor: pointer;
  height: 50px;
  padding: 0;
}
.sideMenuWrapper {
  position: relative;
  top: 90px;
}
.sideMenuBackGround {
  width: 420px;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  background: #232B3B;
  color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
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