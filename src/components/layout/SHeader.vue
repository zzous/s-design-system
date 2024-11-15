<template>
  <v-app-bar class="s-header" color="#1C2536" :height="68">
    <template #prepend>
      <div class="s-logo">
        <a href.prevent.stop="#" @click="$emit('click:logo')">
          <span class="d-none">main-logo</span>
          <img v-if="logoSrc" class="s-logo__img" :src="logoSrc" alt="logo" />
          <Logo class="s-logo__img" v-else />
        </a>
      </div>
      <v-app-bar-title density="compact" variant="flat" size="small" background-color="white">
        <v-btn v-if="showMenuBtn" class="s-btn__menu" text="서비스" @click="toggleMenu">
          <template #prepend>
            <v-icon class="s-btn__menu__icon" variant="text" density="compact" icon="mdi-menu" />
          </template>
        </v-btn>
      </v-app-bar-title>
    </template>
    <template #append>
      <div v-if="!isLoggedIn" class="s-item-group">
        <a class="s-sign__btn" @keypress.ctrl.i="$emit('click:log-in')" @click.stop="$emit('click:log-in')">
          {{ loginText }}
        </a>
        <!-- 회원가입 start -->
        <a class="s-sign__btn" @keypress.ctrl.i="$emit('click:sign-up')" @click.stop="$emit('click:sign-up')">
          {{ joinText }}
        </a>
        <!-- 회원가입 end -->
      </div>
      <!-- 전역 테넌트 셀렉트박스 -->
      <div v-else class="s-item-group">
        <slot name="inner-append" />
        <s-avatar
          :user="userInfo"
          :menu-items="userMenus"
          :class-name="{ fontWhite: true }"
          @click:menu-item="onClickMenuItem"
        >
          <template #badge>
            <v-avatar>
              <div class="s-avater__border">
                <s-img
                  v-if="userInfo.picture"
                  lazy-src="profile.svg"
                  :src-url="`data:image/${userInfo.picture.format};base64,${userInfo.picture.data}`"
                />
                <s-img v-else lazy-src="profile.svg" src="profile.svg" />
              </div>
            </v-avatar>
          </template>
        </s-avatar>
      </div>
    </template>
  </v-app-bar>

  <!-- 서비스 메뉴 -->
  <!-- <teleport :to="`#${teleportId}`"> -->
    <div class="menu-back-ground" :class="{ show: lazyShowMenu, hide: !lazyShowMenu }">
      <div id="side_menu_background">
        <div class="text-right">
          <v-icon icon="mdi-close" @click="closeMenu" />
        </div>
        <div id="side_menu_wrapper">
          <template v-for="(item, index) in serviceMenus">
            <v-list-item
              v-if="item.accessible"
              :key="index"
              class="side-menu"
              :active="item.menuCode === activeMenuCode"
              :title="item.menuName"
              @click="onClickServiceItem(item)"
            />
          </template>
        </div>
      </div>
    </div>
  <!-- </teleport> -->
</template>

<script setup>
import {watch, ref} from 'vue'
import {SAvatar, SImg} from '@';
import Logo from "./Logo.vue";

const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  userInfo: {
    type: Object,
    default: () => {
      return {
        name: '-',
        picture: {
          format: 'png',
        },
      }
    },
  },
  logoSrc: {
    type: String,
    default: null,
    description: '서비스 로고 이미지 주소',
  },
  serviceMenus: {
    type: Array,
    default: () => [],
    description: '서비스 메뉴의 items',
  },
  userMenus: {
    type: Array,
    default: () => [],
    description: '사용자 메뉴의 items (예: 나의 정보, 기업 정보, 로그아웃)',
  },
  showMenuBtn: {
    type: Boolean,
    default: true,
  },
  showMenu: {
    type: Boolean,
    default: false,
  },
  loginText: {
    type: String,
    default: '로그인',
  },
  joinText: {
    type: String,
    default: '회원가입',
  },
  teleportId: {
    type: String,
    default: 'destination',
    description: 'Teleport Id'
  },
  activeMenuCode: {
    type: String,
    default: '',
    description: '선택된 메뉴코드'
  }
})

const emits = defineEmits([
  'click:menu',
  'click:log-in',
  'click:sign-up',
  'click:menu-item',
  'click:logo',
  'click:service-item',
])

const lazyShowMenu = ref(props.showMenu)

const toggleMenu = () => {
  //showMenu.value = !showMenu.value
  lazyShowMenu.value = !lazyShowMenu.value
  emits('click:menu', lazyShowMenu.value)
}
const closeMenu = () => {
  //showMenu.value = false
  lazyShowMenu.value = false
  emits('click:menu', false)
}

const onClickMenuItem = value => {
  emits('click:menu-item', value)
}

const onClickServiceItem = value => {
  emits('click:service-item', value)
}

watch(
  () => props.showMenu,
  (nv, ov) => {
    if (nv !== ov) {
      lazyShowMenu.value = nv
    }
  }
)

</script>

<style lang="scss" scoped>
@import url('./SHeader.scss');
</style>
