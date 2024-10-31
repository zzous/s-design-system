<template>
  <div id="vuetifyWrapper">
    <v-app :theme="themeName">
      <v-main>
        <slot />
        <div id="destination" />
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  props: {
    themeName: String,
  },
};
</script>
<style>
.v-application__wrap {
  min-height: fit-content; /* or override 100vh by vuetify */
}
</style>
