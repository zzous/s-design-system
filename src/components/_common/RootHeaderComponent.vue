<template>
  <v-app-bar :elevation="2" color="#1C2536" :height="68">
    <template #prepend>
      <div class="s-logo">
        <a href="#" @click="$emit('click:logo')">
          <span class="d-none">main-logo</span>
          <img class="s-logo__img" src="/devops/assets/images/logo.svg" alt="" />
        </a>
      </div>
      <v-app-bar-title density="compact" variant="flat" size="small" background-color="white">
        <v-btn class="s-btn__menu" text="서비스" @click="toggleMenu">
          <template #prepend>
            <v-icon class="s-btn__menu__icon" variant="text" density="compact" icon="mdi-menu"></v-icon>
          </template>
        </v-btn>
      </v-app-bar-title>
    </template>
    <template #append>
      <div v-if="!isLoggedIn" class="s-item-group">
        <a class="s-sign__btn" @keypress.ctrl.i="$emit('click:log-in')" @click.stop="$emit('click:log-in')">
          {{ $t('로그인') }}
        </a>
        <!-- 회원가입 start -->
        <a class="s-sign__btn" @keypress.ctrl.i="$emit('click:sign-up')" @click.stop="$emit('click:sign-up')">
          {{ $t('회원가입') }}
        </a>
        <!-- 회원가입 end -->
      </div>
      <!-- 전역 테넌트 셀렉트박스 -->
      <div v-else class="button-wrapper">
        <slot name="inner-append"></slot>
        <user-avatar
          class="sp-avater"
          :user="userInfo"
          :menu-items="menuItems"
          :class-name="{ fontWhite: true }"
          @click-item="onClickMenuItem"
        >
          <template #badge>
            <v-avatar size="35">
              <!-- <sp-image
                v-if="userInfo.picture"
                lazy-src="user-avatar.png"
                :src-url="`data:image/${userInfo.picture.format};base64,${userInfo.picture.data}`"
                width="100"
              />
              <sp-image v-else lazy-src="user-avatar.png" src="user-avatar.png" width="100" /> -->
            </v-avatar>
          </template>
        </user-avatar>
      </div>
    </template>
  </v-app-bar>
  <div class="menu-back-ground" :class="{ show: showMenu, hide: !showMenu }">
    <!--    <v-navigation-drawer
        v-model="showMenu"
        temporary
    >
      <v-list
          :items="items"
      ></v-list>
    </v-navigation-drawer>-->
    <div id="side_menu_background">
      <div id="side_menu_wrapper">
        <v-list-item class="text-align-right side-menu">
          <v-icon icon="mdi-close" @click="closeMenu" />
        </v-list-item>
        <v-list-item v-for="item in items" :key="item.title" class="side-menu" :title="item.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { HEADER_MENU } from '@/assets/consts/consts'

import { useI18n } from '@/_setting/i18n'

import UserAvatar from '@/components/_common/avatar/AvatarComponent.vue'

defineProps({
  isLoggedIn: {
    type: Boolean
  },
  userInfo: {
    type: Object,
    default: () => {
      return {
        name: '-',
        picture: {
          format: 'png'
        }
      }
    }
  },
  menuItems: {
    type: Array,
    default: () => []
  }
})

defineEmits(['click:log-in', 'click:sign-up', 'click:menu-item', 'click:logo'])

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
@import '@/assets/style/variables';
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

.s-logo {
  width: 300px;
  height: 68px;

  .s-logo__img {
    margin-top: 17px;
  }
}

.s-item-group {
  .s-sign__btn {
    display: inline-table;
    cursor: pointer;
    color: #fff;
    background: $s-btn__primary 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 6px 20px;
    text-align: center;
    margin-right: 10px;
    padding: 0;
    width: 110px;
    height: 36px;

    border-radius: 5px;
    border: solid 1px #fff;
    font-size: 14px;
    font-weight: 500;

    line-height: 36px;
  }
}

.header-title-text {
  font-size: 15px;
}
.menu-back-ground {
  position: absolute;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);
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
<style lang="scss">
.s-btn__menu {
  &:hover > .v-btn__overlay,
  &:focus-visible > .v-btn__overlay {
    opacity: 0;
  }

  > .v-ripple__container {
    display: none;
  }

  &:focus-visible::after {
    opacity: 0;
  }

  .s-btn__menu__icon {
    color: #000;
    background-color: #fff;
    border-radius: 50%;
    font-size: 1rem;
    width: 18px;
    height: 18px;
  }
}
</style>
