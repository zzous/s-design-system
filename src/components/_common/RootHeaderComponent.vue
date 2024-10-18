<template>
  <v-app-bar class="s-header" color="#1C2536" :height="68">
    <template #prepend>
      <div class="s-logo">
        <a href="#" @click="$emit('click:logo')">
          <span class="d-none">main-logo</span>
          <img class="s-logo__img" src="/public/devops/assets/images/logo.svg" alt="">
        </a>
      </div>
      <v-app-bar-title
        density="compact"
        variant="flat"
        size="small"
        background-color="white"
      >
        <v-btn
          v-if="showMenuBtn"
          class="s-btn__menu"
          :text="$t('서비스')"
          @click="toggleMenu"
        >
          <template #prepend>
            <v-icon
              class="s-btn__menu__icon"
              variant="text"
              density="compact"
              icon="mdi-menu"
            />
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
      <div v-else class="s-item-group">
        <slot name="inner-append" />
        <s-user
          :user="userInfo"
          :menu-items="userMenus"
          :class-name="{ fontWhite: true }"
          @click:menu-item="onClickMenuItem"
        >
          <template #badge>
            <v-avatar size="35">
              <s-img
                v-if="userInfo.picture"
                lazy-src="user-avatar.png"
                :src-url="`data:image/${userInfo.picture.format};base64,${userInfo.picture.data}`"
                width="100"
              />
              <s-img
                v-else
                lazy-src="user-avatar.png"
                src="user-avatar.png"
                width="100"
              />
            </v-avatar>
          </template>
        </s-user>
      </div>
    </template>
  </v-app-bar>

  <!-- 서비스 메뉴 -->
  <div class="menu-back-ground" :class="{ show: showMenu, hide: !showMenu }">
    <div id="side_menu_background">
      <div class="text-align-right">
        <v-icon icon="mdi-close" @click="closeMenu" />
      </div>
      <div id="side_menu_wrapper">
        <template v-for="(item, index) in serviceMenus">
          <v-list-item
            v-if="item.accessible"
            :key="index"
            class="side-menu"
            :active="item.menuCode === 'DEVOPS'"
            :title="item.menuName"
            @click="onClickServiceItem(item)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
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
  serviceMenus: {
    type: Array,
    default: () => [],
    description: '서비스 메뉴의 items'
  },
  userMenus: {
    type: Array,
    default: () => [],
    description: '사용자 메뉴의 items (예: 나의 정보, 기업 정보, 로그아웃)'
  },
  showMenuBtn: {
    type: Boolean,
    default: false
  },
  showMenu: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['click:menu','click:log-in', 'click:sign-up', 'click:menu-item', 'click:logo', 'click:service-item'])

//const showMenu = ref(false)

const toggleMenu = () => {
  //showMenu.value = !showMenu.value
  emits('click:menu', !props.showMenu)
}
const closeMenu = () => {
  //showMenu.value = false
  emits('click:menu', false)
}

const onClickMenuItem = (value) => {
  emits('click:menu-item', value)
}

const onClickServiceItem = (value) => {
  emits('click:service-item', value)
}
</script>

<style lang="scss" scoped>
.s-header {
  box-shadow: 0px 4px 4px 0px #00000040;

  ::v-deep(.v-toolbar__prepend) {
    margin-inline: 0;

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
  }
}

.side-menu {
  cursor: pointer;
  height: 50px;
  padding: 0;
}
#side_menu_wrapper {
  --v-hover-opacity: 0;
  --v-activated-opacity: 0;
  --v-focus-opacity: 0;
  --v-theme-overlay-multiplier: 0;

  position: relative;
  height: calc(100vh - 150px);
  overflow-y: auto;
  @include scroll();

  &::v-deep(.v-list-item) {
    margin-top: 0 !important;
    font-weight: 300;

    .v-list-item-title {
      font-size: 18px;
      font-weight: 300;
    }

    &.v-list-item--active {
      color: $active-font-color;

      .v-list-item-title {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
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
  padding: 10px 30px 29px;
}

.s-logo {
  width: 288px;
  height: 68px;

  .s-logo__img {
    margin-top: 17px;
  }
}

.s-item-group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  gap: 10px;

  .s-sign__btn {
    display: inline-table;
    cursor: pointer;
    color: #fff;
    background: $s-btn__primary 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 6px 20px;
    text-align: center;
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
  position: fixed;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.2);
  margin-top: var(--global-nav-header-height);
}
.menu-back-ground.hide {
  height: 0;
  margin: 0;
  transition: linear 0.2s;
}
.menu-back-ground.show {
  height: calc(100% - var(--global-nav-header-height));
  transition: linear 0.2s;
}
</style>
