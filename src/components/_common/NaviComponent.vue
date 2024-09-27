<template>
  <div id="navi" class="float-left">
    <div id="menu_title_wrapper">
      <div id="menu_title">
        데브옵스
      </div>
    </div>
    <div id="project_select_wrapper">
      <div id="project_select">
        <v-select
          v-model="selectedProject"
          class="h-30"
          variant="outlined"
          density="compact"
          :items="projectList"
          item-title="name"
          item-value="value"
          label="Select"
          persistent-hint
          return-object
          single-line
        />
      </div>
    </div>
    <div id="menu_wrapper">
      <v-list v-model:opened="open">
        <v-list-group v-for="menu in naviMenu" :key="menu.value" :value="menu.value">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              height="50px"
              active-class="menu-active"
              :title="menu.title"
              :append-icon="open.includes(menu.value) ? 'mdi-chevron-down' : 'mdi-chevron-right'"
              @click="onClickMenuItem"
            />
          </template>

          <v-list-item
            v-for="(subMenu, i) in menu.subMenu"
            :key="i"
            class="navi-inner-menu"
            active-class="menu-active"
            prepend-icon="mdi-circle-small"
          >
            <template #title>
              <RouterLink class="navi-inner-menu-title" :to="subMenu.url">
                {{ subMenu.title }}
              </RouterLink>
            </template>
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
  </div>
</template>

<script setup>
import { NAVI_MENU } from '@/assets/consts/consts'
import { ref } from 'vue'

const onClickMenuItem = () => {
  open.value = !open.value.length ? open.value : open.value.splice(open.value.length - 1, 1)
}
const open = ref([]) //활성화할 메뉴의 value
const naviMenu = ref([...NAVI_MENU])
const selectedProject = ref({ name: '전체', value: 'total' })
//TODO pinia 처리
const projectList = ref([
  { name: '전체', value: 'total' },
  { name: '프로젝트1', value: 'projcet-1' },
  { name: '프로젝트2', value: 'projcet-2' },
  { name: '프로젝트3', value: 'projcet-3' }
])
</script>

<style scoped lang="scss">
//@import "@/assets/_variables.scss";
@import '@/assets/style/variables';

#menu_title_wrapper {
  color: #ffffff;
  margin-top: 20px;
  padding-right: 10px;
  height: 50px;
  line-height: 50px;
}

#menu_title {
  padding-left: 20px;
  background: $main-color;
  border-radius: 0 10px 10px 0;
}

#project_select_wrapper {
  padding: 15px 25px 5px 25px;
}

#project_select {
}

#menu_wrapper {
  padding-right: 20px;
  padding-left: 20px;
}
.navi-inner-menu {
  padding-inline: 15px !important;
}
.navi-inner-menu-title {
  text-decoration: none;
  color: black;
}
.navi-inner-menu-title.router-link-exact-active {
  color: $active-font-color;
}
.navi-inner-menu-title:hover {
  color: $active-font-color;
}
.navi-inner-menu:hover {
  color: $active-font-color;
}
.menu-active {
  color: $active-font-color;
}
</style>
