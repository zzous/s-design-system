<template>
  <div id="navi" class="float-left">
    <div id="menu_title_wrapper">
      <router-link to="/project/list">
        <div id="menu_title">
          데브옵스
        </div>
      </router-link>
    </div>
    <div id="project_select_wrapper">
      <div id="project_select" class="border-b-sm">
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
    <div v-if="filteredMenu && filteredMenu.subMenus && filteredMenu.subMenus.length" id="menu_wrapper">
      <v-list v-model:opened="open">
        <v-list-group v-for="menu in filteredMenu.subMenus" :key="menu.idx" :value="menu.idx">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              height="50px"
              active-class="menu-active"
              :title="menu.menuNameKr"
              :append-icon="open.includes(menu.idx) ? 'mdi-chevron-down' : 'mdi-chevron-right'"
              @click="onClickMenuItem"
            />
          </template>

          <v-list-item
            v-for="(subMenu, i) in menu.subMenus"
            :key="i"
            class="navi-inner-menu"
            active-class="menu-active"
            prepend-icon="mdi-circle-small"
          >
            <template #title>
              <RouterLink class="navi-inner-menu-title" :to="subMenu.menuUrl">
                {{ subMenu.menuNameKr }}
              </RouterLink>
            </template>
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
  </div>
</template>

<script setup>
//import { NAVI_MENU } from '@/assets/consts/consts'
import { useMenuStore } from '@/stores/portal/menu'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'

const onClickMenuItem = () => {
  open.value = !open.value.length ? open.value : open.value.splice(open.value.length - 1, 1)
}
const menuStore = useMenuStore()
const { menuPaths } = storeToRefs(menuStore)
const filteredMenu = computed(() => menuPaths.value.find(({ clientId }) => {
  return clientId === 'strato-devops'
}))
const open = ref([]) //활성화할 메뉴의 value

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
#navi {
  height: 100%;
  border-right: 1px solid #ddd;
}
#menu_title_wrapper {
  color: #ffffff;
  margin-top: 20px;
  padding-right: 10px;
  height: 50px;
  line-height: 50px;
}
#menu_title_wrapper a{
  text-decoration: none;
}

#menu_title {
  padding-left: 20px;
  background: $main-color;
  border-radius: 0 10px 10px 0;
  color: #fff;
}

#project_select_wrapper {
  padding: 15px 25px 5px 25px;
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
