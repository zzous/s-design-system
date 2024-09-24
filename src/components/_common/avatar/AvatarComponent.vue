<template>
  <div class="s-avatar">
    <sp-menu :offset="[5, 0]">
      <template #item="slotProps">
        <div class="s-user-name">
          <div v-bind="slotProps.item.props">
            <div class="s-user-name__text" :class="{ fontWhite }">
              {{ user.name }}
            </div>
          </div>
        </div>
      </template>
      <v-list class="s-avatar-menu__list">
        <template v-for="(item, index) in userMenu" :key="index">
          <v-list-item v-if="!item.visable" :value="item.value" @click="$emit('click:menu-item', item.value)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </sp-menu>
    <slot name="badge" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    default: () => {},
    description: '회원정보'
  },
  menuItems: {
    type: Array,
    default: () => [],
    description: '회원정보 메뉴들'
  }
})

defineEmits(['click:menu-item'])

const fontWhite = computed(() => props.className?.fontWhite)
</script>

<style lang="scss" scoped>
.s-avatar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  .s-user-name {
    margin-right: 11px;
    cursor: pointer;
    // font-weight: bold;
    .s-user-name__text {
      text-align: right;
      color: #fff;
    }
  }
}
.portal_layout .v-list-item--density-default.v-list-item--one-line {
  min-height: 20px;
  padding: 0;
}
.portal_layout .v-list-item-title {
  color: #333;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
}
.s-avatar-menu__list {
  width: 100px;
}
.portal_layout .v-list-item-title:hover {
  font-weight: 700;
  color: #1297f2;
}
</style>
