<template>
  <div class="mt-5 border-sm">
    <v-tabs
      v-model="selectedTab"
      bg-color="#F5F7FA"
      selected-class="selected-tab"
      hide-slider
      :color="activeFontColor"
      density="compact"
    >
      <v-tab v-for="tab in tabList" :key="tab" :value="tab">
        {{ tab }}
      </v-tab>
    </v-tabs>
    <v-tabs-window v-model="selectedTab">
      <v-tabs-window-item :value="selectedTab" class="tab-contents-wrapper pa-5">
        <v-data-table :headers="['1', '2']" />
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DEFAULT_BUTTON_COLOR } from '/src/assets/consts/consts.js'
const selectedTab = ref('')

const tabList = ref(['Open', 'Merged', 'Closed', 'All'])
const activeFontColor = ref(DEFAULT_BUTTON_COLOR)
</script>

<style lang="scss" scoped>
.selected-tab {
  background: #fff;
  border-left: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-right: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-bottom: none;
}

::v-deep .v-slide-group__content {
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
</style>
