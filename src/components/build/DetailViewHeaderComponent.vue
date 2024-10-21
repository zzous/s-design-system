<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <div class="title-wrapper w-100">
        <div class="main-title titleText">
          {{ buildName }}
        </div>
        <div class="sub-title titleText">
          <span>
            `
            <strong>{{ projectName }}</strong>
          </span>
          <span class="ml-10">
            기본 브랜치
            <strong>{{ branchName }}</strong>
          </span>
        </div>
      </div>
      <div class="d-flex">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  buildName: {
    type: String,
    default: '',
  },
  projectName: {
    type: String,
    default: '',
  },
  branchName: {
    type: String,
    default: '',
  },
})
</script>

<style scoped lang="scss">
$sub-title-height: 20px;
$main-title-height: 36px;
$main-title-font-color: #306bb1;

.title-wrapper {
}
.main-title {
  font-weight: bold;
  color: $main-title-font-color;
  height: $main-title-height;
  line-height: $main-title-height;
  font-size: 17px;
}
.sub-title {
  font-size: 13px;
  height: $sub-title-height;
  line-height: $sub-title-height;
}
</style>
