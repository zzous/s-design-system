<template>
  <v-col cols="auto">
    <v-row>
      <v-col>
        <div class="work-flow-el" :class="type">
          <div :class="type + '-el'" class="center-vertical text-align-center flow-el">
            <span :class="type + '-text'">{{ title }}</span>
          </div>
        </div>
        <div class="center-vertical work-flow-el edit-user text-align-center" :class="type">
          {{ userName }}<br />{{ updateDate }}
        </div>
      </v-col>
    </v-row>
  </v-col>
  <v-col v-if="showArrow" cols="auto">
    <v-row>
      <v-col>
        <div class="center-vertical direction top">
          <div class="arrow-head"></div>
        </div>
        <div class="center-vertical direction row"></div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <div class="center-vertical direction"></div>
        <div class="center-vertical direction"></div>
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'default title'
  },
  userName: {
    type: String,
    default: 'default user name'
  },
  updateDate: {
    type: String,
    default: 'yyyy-MM-dd hh:mm'
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    required: true,
    validator: (value) => {
      return ['circle', 'decision', 'dotCircle'].includes(value)
    }
  }
})
</script>

<style scoped lang="scss">
$work-flow-height: 100px;
$work-flow-width: 100px;
$work-flow-wrapper-height: 200px;
$work-flow-arrow-head-size: 15px;

.edit-user {
  font-size: 12px;
}

.direction {
  height: $work-flow-height / 2;
  width: $work-flow-width / 2;
}

.top {
  position: relative;
  border-bottom: 1px solid;
}

.row {
  border-top: 1px solid;
}

.arrow-head {
  left: $work-flow-width / 2 - $work-flow-arrow-head-size - 2;
  top: $work-flow-height / 2 - $work-flow-arrow-head-size / 2;
  rotate: 45deg;
  position: absolute;
  height: 15px;
  width: 15px;
  border-right: 2px solid;
  border-top: 2px solid;
}

.decision {
  width: $work-flow-width + 44 !important;
}

.decision-el {
  background: #d5c3fd;
  height: 100px;
  width: 100px;
  rotate: 45deg;
  left: 22px;
  position: relative;
}

.circle-el {
  background: #eff2f5;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  padding: 0 20px;
}

.dot-circle-el {
  background: #eff2f5;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  padding: 0 20px;
  border: 3px dashed;
}

.work-flow-el {
  height: $work-flow-height;
  width: $work-flow-width;
  white-space: normal;
}
.flow-el {
  padding: 0 10px;
}
.decision-text {
  rotate: -45deg;
}
</style>
