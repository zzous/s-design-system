<template>
  <div class="s-avatar">
    <v-menu :offset="[5, 0]">
      <template #activator="{ props: itemProps }">
        <div class="s-user-name" v-bind="itemProps">
          <div class="s-user-name__text" :class="{ fontWhite }">
            {{ user.name }}
          </div>
        </div>
      </template>
      <v-list class="s-avatar-menu__list">
        <template v-for="(item, index) in menuItems" :key="index">
          <v-list-item v-if="!item.visable" :value="item.value" @click="$emit('click:menu-item', item.value)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
    <slot name="badge" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    default: () => {},
    description: '회원정보',
  },
  menuItems: {
    type: Array,
    default: () => [],
    description: '회원정보 메뉴들',
  },
  className: {
    type: Object,
    default: () => {},
    description: 'custom class',
  },
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
    .s-user-name__text {
      text-align: right;
      color: #fff;
    }
  }
}
.s-avatar-menu__list {
  width: 100px;
  @include set-text(400, 12, null);
}
</style>
